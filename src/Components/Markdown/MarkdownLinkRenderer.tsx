const MarkdownLinkRenderer = (props: any) => {
	return (
		(props.href + '').includes('http') ?
			<a href={props.href!}
				target='_blank'
				rel='noreferrer noopener'
			> {props.children}</a>
			: <a href={props.href}>{props.children}</a>
	);
}

export default MarkdownLinkRenderer;
