import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Home from './routes/home/home.component'
import Shop from './routes/shop/shop.component'
import Authentication from './routes/authentication/authentication.component'
import './App.css'

const App = () => {
	return (
		<div>
			<div>
				{/* <Navbar /> */}
				<Routes>
					<Route
						path='/'
						element={<Navbar />}
					>
						<Route
							index
							element={<Home />}
						/>
						<Route
							path='shop'
							element={<Shop />}
						/>
						<Route
							path='auth'
							element={<Authentication />}
						/>
					</Route>
				</Routes>
			</div>
		</div>
	)
}
export default App
