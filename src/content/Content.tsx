import styles from './Content.module.css'
import {readingElement} from "../picker/picker"

import { useEffect, useRef } from 'react'
import { isElement } from './utils'

const Content = () => {
	const get_element = () => {
		// get element under cursor
		var cont = document.getElementById('smartlook-element-info');
		if (cont) readingElement(cont, document, window);
	};
	
	const infoRef = useRef<HTMLParagraphElement | null>(null)
	useEffect(() => {
		const handleMouseMove = (mouseMoveEvent: MouseEvent) => {
			const target = mouseMoveEvent.target

			if (isElement(target)) {
				const elementAttributes = Array.from(target.attributes)
					.map((attribute) => `${attribute.name}=${attribute.value}`)
					.join(' ')
				const verySimpleElementInfo = `<${target.tagName} ${elementAttributes}/>`

				if (infoRef && infoRef.current) {
					// display current element info in modal.
					infoRef.current.innerText = `${verySimpleElementInfo}`
				}
			}
		}
		window.addEventListener('mousemove', handleMouseMove)
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
		}
	}, [])

	return (
		<div id={'smartlook-element-picker'} className={styles.content}>
			<h3>Current element:</h3>
			<p ref={infoRef}></p>
			<p id={'smartlook-element-info'}>No element hovered yet</p>
			<button id={'smartlook-pick-element'} onClick={get_element}>Pick element</button>
		</div>
	)
}

// make root component exported to meet `isReactRefreshBoundary`
// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/52cd3a7f2e594fce187d3f1e0c32d201da798376/lib/runtime/RefreshUtils.js#L185
export default Content
