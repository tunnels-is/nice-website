import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

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

	useEffect(() => {
		if (tag === "" || !tag) {
			changePage("Introduction")
		} else {
			changePage(tag)
		}
	}, [])

	const loadGuide = async (url) => {
		if (url === "" || url === undefined) {
			console.log("nothing!	")
			return
		}
		const x = setTimeout(() => {
			setLoading(true)
		}, 100)
		try {
			const response = await axios.get(base_url + url);
			setContent(response.data);
		} catch (err) {
			console.dir(err)
		}
		setLoading(false)
		clearTimeout(x)
	};

	const changePage = (tag) => {
		STORE.DocMenu.forEach((m, i) => {
			if (m.tag.toLowerCase() === tag.toLowerCase()) {
				setGuide({ ...m, index: i })
				loadGuide(m.file)
				return
			}
		})
	}

	const navigatePage = (index) => {
		if (STORE.DocMenu[index]) {
			setGuide({ ...STORE.DocMenu[index], index: index })
			loadGuide(STORE.DocMenu[index].file)
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
					return (
						<div className={`${m.indent < 2 ? "section" : "level2"}  page`}
							key={m.tag}
							onClick={() => changePage(m.tag)}>
							{m.indent === 2 &&
								`_ `
							}
							{m.tag}
						</div>
					)
				})}
			</div>

			<FadeLoader
				className="doc-loader"
				loading={loading} />

			<div className="markdown-wrapper">

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
