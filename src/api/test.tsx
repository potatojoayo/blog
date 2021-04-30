import {Post} from '../Model'
import {Category} from '../global'

export const test3: Post = {
	id: 3,
	title: '',
	subTitle: '',
	date: new Date(),
	repImage: 'https://source.unsplash.com/random',
	tags: [''],
	content: '',
	category: Category.frontEnd
}

export const test: Post = {
	id: 1,
	title: 'TEST',
	subTitle: 'hi',
	date: new Date(),
	repImage: 'https://images.unsplash.com/photo-1502502149488-5452babfc473?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
	tags: ['1', '2'],
	category: Category.frontEnd,
	content: `# Hello *world*!
---

## Table of Contents

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b
 
Here is a footnote reference,[^1]

## Images

![This is a alt text.](https://images.unsplash.com/photo-1618822996699-999c36c8b368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80 "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://unsplash.com)

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables
| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Headers
## Blocks of code

~~~ts

import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

//TODO: API
import {test, test2} from './api/test'

import './utill/app.css'
import {pushPosts} from './store/post/action'
import Container from './Components/styled/Container'
import NavBar from './Components/NavBar'
import {RootState} from './store'
import Pages from './Components/Pages'
import Notifier from './Components/Notifier'
import {toggleNotifier} from './store/notifier/action'
import Snackbar from './Components/Snackbar'
import SideMenu from './Components/SideMenu'
import {setWindowSize} from './store/windowSize/action'
import {breakpoints, DISPLAY_SIZE} from './utill/media_query';
import {toggleSideMenu} from './store/sideMenu/action';
import {Category} from './global';
import {CSSObject} from '@emotion/serialize';


const App: React.FC = () => {
	const notifierState = useSelector((state: RootState) => state.notifierState)
	const isSideMenuOpen = useSelector((state: RootState) => state.sideMenuState).isSideMenuOpen
	const theme = useSelector((state: RootState) => state.themeState).theme
	const isSnackbarClosed = useSelector((state: RootState) => state.snackbarState).isClosed
	const dispatch = useDispatch()
	const windowSize = useSelector((state: RootState) => state.windowSizeState).displaySize
	useEffect(() => {

		// *** TODO:
		dispatch(pushPosts([test, test2], Category.frontEnd))
		const wheelHandler: any = (e: WheelEvent) => {
			if ((window.scrollY <= 0 && e.deltaY < 0) || notifierState.isOpen || !isSnackbarClosed)
				e.preventDefault()
		}
		const windowSizeHandler = () => {
			const width = window.innerWidth;
			if (width < breakpoints[0]) {
				dispatch(setWindowSize(DISPLAY_SIZE.MOBILE))
			} else if (width < breakpoints[1]) {
				dispatch(setWindowSize(DISPLAY_SIZE.TABLET))
			} else {
				dispatch(setWindowSize(DISPLAY_SIZE.DESKTOP))
			}
		}
		windowSizeHandler()
		window.addEventListener('resize', windowSizeHandler);
		window.addEventListener('mousewheel', wheelHandler)
		return () => {
			window.removeEventListener('resize', windowSizeHandler)
			window.removeEventListener('mousewheel', wheelHandler)
		}
	}, [dispatch, notifierState.isOpen, isSnackbarClosed])
	const filter: CSSObject = {
		content: '""',
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0,0,0,0.3)',
		zIndex: 7,
	}


	return (
		<Router>
			<SideMenu></SideMenu>
			<NavBar />
			<Container
				display='flex'
				width='100vw'
				backgroundColor={theme.background}
				height='fit-content'
				before={
					notifierState.isOpen ?
						{...filter} : {}
				}
				mobile={{
					'&:before': isSideMenuOpen || notifierState.isOpen ? {...filter} : {}
				}
				}
				justifyContent='flex-end'
				transition='background-color ease-in-out .2s'
				position='relative'
				onClick={
					() => {
						if (notifierState.isOpen)
							dispatch(toggleNotifier())
						if (windowSize === DISPLAY_SIZE.MOBILE && isSideMenuOpen)
							dispatch(toggleSideMenu())
					}}
			>
				<Container
					margin='60px 0 0 0'
					position='relative'
					className='page-container'
					display='flex'
					transition='transform linear .2s, width linear .2s'
					flexDirection='column'
				>
					<Pages />
				</Container>
				<Notifier
					title='Email'
					content='potatojoayo@gmail.com'
					enableCopyContent={true}
					borderRadius='15px'
					boxShadow={'5px 10px 10px rgba(0,0,0,0.3)'}
				/>
				<Snackbar
				/>
			</Container>
		</Router >
	)
}
~~~
[^1]: Here is the footnote.
	`
}
export const test2: Post = {
	id: 2,
	title: "그런 개발자로 괜찮은가 - '멘토링' 편",
	subTitle: '이런저런 고생 끝에 원하는 회사에 취업을 해서 ‘주니어’라는 꼬리표를 달고 이제 막 회사 생활을 하다 보면 경험이 부족해서 실수를 하거나 기대했던 업무 퍼포먼스가 나오지 않는 경우가 종종 생긴다. ',
	date: new Date(2021, 3, 1),
	category: Category.frontEnd,
	repImage: 'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80',
	tags: ['mentoring', 'a-good-developer', 'archives-2021'],
	content: ''
}
