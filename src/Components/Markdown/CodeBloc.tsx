import React from 'react'
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

interface CodeBlockProps {
	language: string;
	value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({language, value}) => {
	return (
		<SyntaxHighlighter language={language} style={prism}>
			{value}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
