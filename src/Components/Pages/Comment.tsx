import React from 'react';

const Comment: React.FC = () => {
	return <section ref={(element) => {
		if (!element) {
			return;
		}
		const scriptElem = document.createElement("script");
		scriptElem.src = "https://utteranc.es/client.js";
		scriptElem.async = true;
		scriptElem.crossOrigin = "anonymous";
		scriptElem.setAttribute("repo", "potatojoayo/blog_comment");
		scriptElem.setAttribute("issue-term", "url");
		scriptElem.setAttribute("label", "blog-comment");
		scriptElem.setAttribute("theme", "boxy-light");
		element.appendChild(scriptElem);
	}}></section>

}

export default Comment;
