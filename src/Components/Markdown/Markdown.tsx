import React, {useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import footnotes from 'remark-footnotes'
import gfm from 'remark-gfm'
import {Container} from '../styled'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import toc from 'rehype-toc'
import slug from 'rehype-slug'
import MarkdownImage from './MarkdownImage'
import CodeBlock from './CodeBloc'

import '../Markdown/markdown_dark.css'
import '../Markdown/markdown.css'
import '../Markdown/markdown_preview.css'
import '../Markdown/markdown_preview_dark.css'
import MarkdownLinkRenderer from './MarkdownLinkRenderer'

interface MarkdownProp {
	value: string;
	className?: string;
}

const Markdown: React.FC<MarkdownProp> = ({value, className}) => {

	const isDark = useSelector((state: RootState) => state.themeState).isDark
	const isSideOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen

	const pageLayout = document.querySelector('.page-layout')
	const tableOfContent = document.querySelector('.toc')
	tableOfContent?.classList.toggle('side-open', !isSideOpen)
	useEffect(() => {
		setTimeout(() => {
			tableOfContent?.classList.remove('hide')
			if (pageLayout?.clientWidth! < 1430) {
				tableOfContent?.classList.add('hide')
			}
		}, 200)
	}, [isSideOpen, pageLayout?.clientWidth, tableOfContent])

	useEffect(() => {
		const tocItems = document.querySelectorAll('.toc-item a')
		let headers: HTMLHeadElement[] = [];

		for (let i = 0; i < tocItems.length; i++) {
			const item = tocItems.item(i) as HTMLAnchorElement
			const href = item.href.split('#')
			const id = href[href.length - 1]
			headers.push(document.getElementById(id) as HTMLHeadElement)
		}

		tocItems.item(0)?.classList.add('on')

		const scrollHandler = () => {
			headers.forEach((header, index) => {
				if (header?.offsetTop - window.scrollY <= 0) {
					for (let i = 0; i < tocItems.length; i++) {
						tocItems.item(i).classList.remove('on')
					}
					tocItems.item(index).classList.add('on')
				}
			})
		}
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
	}, [])

	return (
		<ReactMarkdown
			className={className ? className : isDark ? 'markdown-body-dark' : 'markdown-body'}
			children={value}
			remarkPlugins={[gfm, footnotes,]}
			rehypePlugins={[slug, toc]}
			components={
				{
					a: MarkdownLinkRenderer,
					code: CodeBlock(isDark),
					pre: Container,
					img: MarkdownImage,
				}
			}
		/>
	)
}

export default Markdown;
