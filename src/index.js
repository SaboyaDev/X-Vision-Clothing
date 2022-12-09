import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

// Legacy Redux
import { Provider } from 'react-redux'
import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
