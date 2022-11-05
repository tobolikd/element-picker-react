import React from 'react'
import ReactDOM from 'react-dom/client'

import Content from './Content'

const fontLink = document.createElement('link')
fontLink.type = 'text/css'
fontLink.rel = 'stylesheet'
fontLink.href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=latin-ext&display=swap'

document.head.appendChild(fontLink)

const rootElement = document.createElement('div')

if (rootElement === null) {
	throw TypeError('RootElement is null.')
}

document.documentElement.prepend(rootElement)

const root = ReactDOM.createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Content />
	</React.StrictMode>,
)
