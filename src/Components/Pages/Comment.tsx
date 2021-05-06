import React, {useEffect, useRef} from 'react';

const Comment: React.FC = () => {
	const Element = useRef(HTMLDivElement.prototype);
	useEffect(() => {
		const script = document.createElement("script");
		const anchor = document.getElementById("inject-comments-for-uterances");
		script.setAttribute("src", "https://utteranc.es/client.js");
		script.setAttribute("crossorigin", "anonymous");
		script.setAttribute("async", 'true');
		script.setAttribute("repo", "potatojoayo/blog_comment");
		script.setAttribute("issue-term", "url");
		script.setAttribute("theme", "boxy-light");
		anchor!.appendChild(script);
	}, [Element])
	return <div id="inject-comments-for-uterances" ref={Element}></div>
}

export default Comment;
