import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {RootState} from '../../store'
import {toggleNotifier} from '../../store/notifier/action'
import {openSnackbar, closeSnackbar} from '../../store/snackbar/action'
import Notify from '../styled/Notify'
import Container from '../styled/Container'
import {CSSObject} from '@emotion/serialize'
import Text from '../styled/Text'
import {FontWeight} from '../../utill/Font'
import Button from '../styled/Button'
import Colors from '../../utill/Colors'


interface NotiferProps {
	width?: CSSObject['width'];
	height?: CSSObject['height'];
	borderRadius?: CSSObject['borderRadius'];
	boxShadow?: CSSObject['boxShadow'];
	title?: string;
	fontFamily?: CSSObject['fontFamily'];
	content?: string;
	enableCopyContent?: boolean;
}

const Notifier: React.FC<NotiferProps> = ({width = '250px',
	height = '130px',
	borderRadius = '15px',
	boxShadow = '5px 5px 5px rgba(0,0,0,0.4)',
	title,
	fontFamily = 'PT Sans',
	content,
	enableCopyContent = false
}) => {
	const themeState = useSelector((state: RootState) => state.themeState)
	const notifierState = useSelector((state: RootState) => state.notifierState)
	const currentTheme = themeState.theme
	const dispatch = useDispatch()
	const [delayedIsOpen, setDelayedIsOpen] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setDelayedIsOpen(notifierState.isOpen)
		}, 350)
	}, [notifierState.isOpen])

	return <Notify
		width={width}
		backgroundColor={themeState.isDark ? currentTheme.text : currentTheme.background}
		height={height}
		borderRadius={borderRadius}
		transition='opacity ease-in-out .25s'
		onClick={
			(e) => {
				e.stopPropagation()
			}
		}
		boxShadow={boxShadow}
		opacity={
			notifierState.isOpen ? 1 : 0
		}
		visibility={
			notifierState?.isOpen ? 'visible' : delayedIsOpen ? 'visible' : 'hidden'
		}
	>
		<Container
			width='90%'
		>
			<Text
				fontFamily={fontFamily}
				fontWeight={FontWeight.bold}
				fontSize={23}
				cursor='default'
			>
				{title}
			</Text>
		</Container>
		<Button
			width='90%'
		>
			<Text
				textAlign='start'
				fontFamily={fontFamily}
				fontSize={22}
				cursor='pointer'
				bottomLineColor={Colors.NAVY}
				onClick={
					async (e) => {
						e.preventDefault()
						if (enableCopyContent) {
							const e1 = document.createElement('textarea');
							e1.value = content!;
							document.body.appendChild(e1)
							e1.select()
							document.execCommand('copy')
							document.body.removeChild(e1)
							dispatch(openSnackbar('Copied!'))
							setTimeout(() => {
								dispatch(closeSnackbar())
							}, 2500)
						}
					}
				}
			>
				{content}
			</Text>
		</Button>
		<Button
			alignSelf='flex-end'
		>
			<Text
				fontFamily={fontFamily}
				fontSize={20}
				margin='0 3px 0 0'
				color='rgba(0,0,0,0.4)'
				cursor='pointer'
				fontWeight={FontWeight.bold}
				onClick={
					(e) => {
						e.preventDefault()
						dispatch(toggleNotifier())
					}
				}
			>
				close
			</Text>
		</Button>
	</Notify>
}

export default Notifier;
