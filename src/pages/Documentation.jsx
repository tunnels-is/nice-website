import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FadeLoader, GridLoader } from 'react-spinners';

import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { hljs } from '../hljs/highlight.js';
import STORE from '../store';


const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang, info) {
			const language = hljs.getLanguage(lang) ? lang : 'bash';
			return hljs.highlight(code, { language }).value;
		}
	})
);

marked.use({
	async: false,
	pedantic: false,
	gfm: true,
	breaks: true,
});


const Documentation = () => {
	const [content, setContent] = useState('')
	const [guide, setGuide] = useState(undefined)
	const [loading, setLoading] = useState(false)
	const { tag } = useParams("tag")
	const navigate = useNavigate()
	const [menu, setMenu] = useState(STORE.DocMenu)

	useEffect(() => {

		let loadIn = async function() {
			await loadMenu()
			if (tag === "" || !tag) {
				changePage("Introduction")
			} else {
				changePage(tag)
			}
		}
		loadIn()

	}, [tag])

	const loadMenu = async () => {
		if (STORE.DocMenu?.Menu?.length > 0) {
			return
		}

		const x = setTimeout(() => {
			setLoading(true)
		}, 150)
		try {

			const response = await axios.get(STORE.MenuURL);
			setMenu(response.data)
			STORE.DocMenu = response.data
		} catch (err) {
			console.dir(err)
		}
		clearTimeout(x)
		setLoading(false)
	};

	const changePage = async (tag) => {
		if (tag === "" || tag === undefined) {
			setContent(`# 404 - section not found`)
			return
		}

		setGuide(undefined)
		setContent("");

		let gg = undefined
		let list = STORE.DocMenu

		if (menu?.Menu?.length > 0) {
			list = menu
		}

		console.dir(menu)
		console.dir(list)
		list?.Menu.forEach((m, i) => {
			if (m.tag.toLowerCase() === tag.toLowerCase()) {
				gg = { ...m, index: i }
				return
			}
		})

		if (!gg) {
			setContent(`# 404 - section not found`)
			return
		}

		const x = setTimeout(() => {
			setLoading(true)
		}, 150)

		let url = ""
		if (menu.BaseURL !== "") {
			url = menu.BaseURL
		} else {
			url = STORE.DocMenu.BaseURL
		}

		try {
			const response = await axios.get(url + gg.file);
			setContent(response.data);
			setGuide({ ...gg })
		} catch (err) {
			setGuide({ ...gg })
			setContent(`# 404 - section not found`)
			console.dir(err)
		}

		setLoading(false)
		clearTimeout(x)
	}

	const navigatePage = (index) => {
		if (menu?.Menu[index].tag === "") {
			navigate("/docs/" + menu?.Menu[index + 1].tag)
		} else if (menu?.Menu[index]) {
			navigate("/docs/" + menu?.Menu[index].tag)
		}
		return
	}
	const getTag = (index) => {
		if (menu?.Menu[index] === undefined) {
			return ""
		} else if (menu?.Menu[index]?.tag === "") {
			return menu?.Menu[index + 1]?.tag
		} else {
			return menu?.Menu[index]?.tag
		}
	}

	let prevTag = undefined;
	let nextTag = undefined;
	if (guide) {
		prevTag = getTag(guide.index - 1)
		nextTag = getTag(guide.index + 1)
	}

	return (
		<div className="doc-page">
			<div className="doc-menu" >
				{menu?.Menu?.map(m => {

					let classes = "page "
					if (m.indent === 0) {
						classes += "section"
					}
					if (m.indent === 1) {
						classes += ""
					}
					if (m.indent === 2) {
						classes += "level2"
					}

					return (
						<div className={classes}
							key={m.tag}
							onClick={() => navigate("/docs/" + m.tag)}>
							{m.indent === 2 &&
								` `
							}
							{m.tag}
						</div>
					)
				})}
			</div>


			<div className="markdown-wrapper">
				<GridLoader
					speedMultiplier={2}
					className="doc-loader"
					loading={loading} />

				{guide &&
					<div className="button-wrapper">
						{prevTag &&
							<div
								onClick={() => navigatePage(guide.index - 1)}
								className="button prev"
							>
								{''} {getTag(guide.index - 1)}
							</div>
						}

						{nextTag &&
							<div
								onClick={() => navigatePage(guide.index + 1)}
								className="button next">
								{''} {getTag(guide.index + 1)}
							</div>
						}
					</div>
				}

				{content &&
					<div className="markdown-content" dangerouslySetInnerHTML={{ __html: marked.parse(content) }}>
					</div>
				}

			</div>
		</div>
	);
};

export default Documentation;
