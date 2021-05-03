import React, {useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import darkCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque'
import lightCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/nord'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import footnotes from 'remark-footnotes'
import gfm from 'remark-gfm'
import {Container} from '../styled'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'
import toc from 'rehype-toc'
import slug from 'rehype-slug'

import '../Markdown/markdown_dark.css'
import '../Markdown/markdown.css'
import '../Markdown/markdown_preview.css'
import '../Markdown/markdown_preview_dark.css'

interface MarkdownProp {
	value: string;
	className?: string;
}


const MarkdownLinkRenderer = (props: any) => {
	return (
		(props.href + '').includes('http') ?
			<a href={props.href!}
				target='_blank'
				rel='noreferrer noopener'
			>{props.children}</a>
			: <a href={props.href}>{props.children}</a>
	);
}

const Markdown: React.FC<MarkdownProp> = ({value, className}) => {

	const isDark = useSelector((state: RootState) => state.themeState).isDark
	const isSideOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen


	const CodeBlock = (props: any) => {
		const language: string = props.node.properties.className + ''
		const lang = language.split('-')
		return (
			<SyntaxHighlighter language={lang[1]} style={isDark ? darkCodeTheme : lightCodeTheme}
			>
				{props.node.children[0].value}
			</SyntaxHighlighter>
		);
	};
	const MarkdownImage = (props: any) => {
		return (
			<img src={props.src} alt={props.alt} width='100%' />
		)
	}

	document.querySelector('.toc')?.classList.toggle('side-open', !isSideOpen)
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
					code: CodeBlock,
					pre: Container,
					img: MarkdownImage,
				}
			}
		/>
	)
}

export default Markdown;
