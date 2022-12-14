import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {
	return (
		<>
			<Router>
				{/* La barre de navigation commun à toute les pages */}
				<nav>
					<div className="nav-wrapper teal">
						<Link to="/" className="brand-logo center">
							Pokédex
						</Link>
					</div>
				</nav>
				{/* Le système de gestion de routes de notre application */}
				<Switch>
					<PrivateRoute exact path="/" component={PokemonList} />
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/pokemons" component={PokemonList} />
					<PrivateRoute exact path="/pokemon/add" component={PokemonAdd} />
					<PrivateRoute
						exact
						path="/pokemons/edit/:id"
						component={PokemonEdit}
					/>
					<PrivateRoute exact path="/pokemons/:id" component={PokemonDetail} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</>
	);
};

export default App;

// const App: React.FC = () => { can be used at line 7
// FC means Function Component, component that can be written as a function
