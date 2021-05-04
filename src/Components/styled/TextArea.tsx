import styled, {CSSObject} from '@emotion/styled'

interface TextAreaProps {
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	margin?: CSSObject['margin'];
	padding?: CSSObject['padding'];

}

const TextArea = styled.textarea({
	width: '30vw',
	height: '40vh',
	border: 'none',
	outline: 'none',
	overflow: 'auto',
	margin: '20px 0 0 50px',
	fontSize: '30px',
	borderRadius: '10px',
	padding: '10px 20px',
}, (props: TextAreaProps) => ({
	width: props.width,
	height: props.height,
	margin: props.margin,
	padding: props.padding,
})
)

export default TextArea
