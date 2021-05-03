import darkCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/pojoaque'
import lightCodeTheme from 'react-syntax-highlighter/dist/esm/styles/prism/nord'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'



const CodeBlock = (isDark: boolean) => (props: any) => {
	const language: string = props.node.properties.className + ''
	const lang = language.split('-')
	return (
		<SyntaxHighlighter language={lang[1]} style={isDark ? darkCodeTheme : lightCodeTheme}
		>
			{props.node.children[0].value}
		</SyntaxHighlighter>
	);
};


export default CodeBlock;
