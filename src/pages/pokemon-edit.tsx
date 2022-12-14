import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Loader from '../components/loader';
import PokemonForm from '../components/pokemon-form';
import usePokemonFind from '../hooks/pokemon-find.hook';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({
	match,
}) => {
	const pokemon = usePokemonFind(match.params.id);

	return (
		<>
			{pokemon ? (
				<div className="row">
					<h2 className="header center">Editer {pokemon.name}</h2>
					<PokemonForm pokemon={pokemon} isEditForm={true} />
				</div>
			) : (
				<h4 className="center">
					<Loader />
				</h4>
			)}
		</>
	);
};

export default PokemonEdit;
