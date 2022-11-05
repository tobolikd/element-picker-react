import React from 'react'
import ReactDOM from 'react-dom/client'

import Popup from './Popup'

const rootElement = document.getElementById('root')

if (rootElement === null) {
	throw TypeError('RootElement is null')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Popup />
	</React.StrictMode>,
)
