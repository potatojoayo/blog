import React from 'react'
import ReactMarkdown from 'react-markdown'
import darkCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque'
import lightCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/nord'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import footnotes from 'remark-footnotes'
import gfm from 'remark-gfm'
import toc from 'remark-toc'
import {Container} from '../styled'
import {useSelector} from 'react-redux'
import {RootState} from '../../store'

import '../Markdown/markdown_dark.css'
import '../Markdown/markdown.css'

interface MarkdownProp {
	value: string;
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

const flatten: any = (text: string, child: any) => {
	return typeof child === 'string'
		? text + child
		: React.Children.toArray(child.props.children).reduce(flatten, text);
};
const HeadingRenderer = (props: any) => {
	const children = React.Children.toArray(props.children);
	const text = children.reduce(flatten, '') + '';
	const slug = text.toLowerCase().replace(/\W/g, '-');
	return React.createElement('h' + props.level, {id: slug}, props.children);
};



const Markdown: React.FC<MarkdownProp> = ({value}) => {

	const isDark = useSelector((state: RootState) => state.themeState).isDark

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
			<Container
				display='flex'
				justifyContent='center'
				alignItems='center'
			>
				<img src={props.src} alt={props.alt} width='100%' />
			</Container>
		)
	}
	return (
		<ReactMarkdown
			className={isDark ? 'markdown-body-dark' : 'markdown-body'}
			children={value}
			remarkPlugins={[gfm, toc, footnotes]}
			components={
				{
					a: MarkdownLinkRenderer,
					code: CodeBlock,
					pre: Container,
					img: MarkdownImage,
					h1: HeadingRenderer,
					h2: HeadingRenderer,
					h3: HeadingRenderer,
					h4: HeadingRenderer,
					h5: HeadingRenderer,
					h6: HeadingRenderer,
				}
			}
		/>
	)
}

export default Markdown;
