import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Working from './pages/Working';
import Exercise1 from './pages/Exercise1';
import Exercise2 from './pages/Exercise2';
import Exercise3 from './pages/Exercise3';
import Exercise4 from './pages/Exercise4';
import Exercise5 from './pages/Exercise5';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<main className='App'>
				<header>
					<Link to='/'>Home</Link>
					<Link to='/exercise1'>Exercise 1</Link>
					<Link to='/exercise2'>Exercise 2</Link>
					<Link to='/exercise3'>Exercise 3</Link>
					<Link to='/exercise4'>Exercise 4</Link>
					<Link to='/exercise5'>Exercise 5</Link>
				</header>
				<Switch>
					<Route exact path='/exercise1' component={Exercise1} />
					<Route exact path='/exercise2' component={Exercise2} />
					<Route exact path='/exercise3' component={Exercise3} />
					<Route exact path='/exercise4' component={Exercise4} />
					<Route exact path='/exercise5' component={Exercise5} />
					<Route exact path='/' component={Working} />
				</Switch>
			</main>
		</BrowserRouter>
	);
}

export default App;
