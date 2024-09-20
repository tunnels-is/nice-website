import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { FadeLoader, GridLoader } from 'react-spinners';

import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { hljs } from '../hljs/highlight.js';
import STORE from '../store';

const base_url = STORE.base_url

const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang, info) {
			const language = hljs.getLanguage(lang) ? lang : 'bash';
			return hljs.highlight(code, { language }).value;
		}
	})
);


const Documentation = () => {
	const [content, setContent] = useState('')
	const [guide, setGuide] = useState(undefined)
	const [loading, setLoading] = useState(false)
	const { tag } = useParams("tag")
	const navigate = useNavigate()

	useEffect(() => {
		console.log("rerender")
		if (tag === "" || !tag) {
			changePage("Introduction")
		} else {
			changePage(tag)
		}
	}, [tag])

	const loadGuide = async (url) => {
		if (url === "" || url === undefined) {
			console.log("nothing!	")
			return
		}
		setContent("");
		const x = setTimeout(() => {
			setLoading(true)
		}, 100)
		try {
			const response = await axios.get(base_url + url);
			setContent(response.data);
		} catch (err) {
			setContent(`# 404 - section not found`)
			console.dir(err)
		}
		setLoading(false)
		clearTimeout(x)
	};

	const changePage = async (tag) => {
		if (tag === "" || tag === undefined) {
			setContent(`# 404 - section not found`)
			return
		}

		setGuide(undefined)
		setContent("");

		let gg = undefined
		STORE.DocMenu.forEach((m, i) => {
			if (m.tag.toLowerCase() === tag.toLowerCase()) {
				gg = { ...m, index: i }
				// setGuide({ ...m, index: i })
				// loadGuide(m.file)
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

		try {
			const response = await axios.get(base_url + gg.file);
			setContent(response.data);
			setGuide({ ...gg })
		} catch (err) {
			setContent(`# 404 - section not found`)
			console.dir(err)
		}

		setLoading(false)
		clearTimeout(x)
	}

	const navigatePage = (index) => {
		if (STORE.DocMenu[index]) {
			navigate("/docs/" + STORE.DocMenu[index].tag)
		}
		return
	}
	const getTag = (index) => {
		return STORE.DocMenu[index]?.tag
	}

	return (
		<div className="doc-page">
			<div className="doc-menu" >
				{STORE.DocMenu.map(m => {

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
						<div
							onClick={() => navigatePage(guide.index - 1)}
							className="button prev"
						>
							{''} {getTag(guide.index - 1)}
						</div>

						<div
							onClick={() => navigatePage(guide.index + 1)}
							className="button next">
							{''} {getTag(guide.index + 1)}
						</div>
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
