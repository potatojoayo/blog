import React from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './CodeBloc'

interface MarkdownProp {
	value: string
}

const Markdown: React.FC<MarkdownProp> = ({value}) => {
	return (
		<ReactMarkdown
			renderers={
				{
					code: CodeBlock
				}
			}
			children={value}
		/>
	)
}

export default Markdown;
