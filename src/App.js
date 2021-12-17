import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import Footer from './components/Footer'

import './styles/global.scss'

const App = () => {
	return (
		<div className='app'>
			<Router>
				<Header />
				<div className='container'>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/movie/:imdbID' component={MovieDetail} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
				<Footer />
			</Router>

			{/* <div className='container'>
				<h1>Webpack Starter files</h1>
			</div> */}
		</div>
	)
}

export default App
