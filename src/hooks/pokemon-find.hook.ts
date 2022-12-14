import { useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonService from '../services/pokemon-service';

const usePokemonFind = (id: string) => {
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

	useEffect(() => {
		PokemonService.getPokemon(+id).then((pokemon) => setPokemon(pokemon));
	}, [id]);
	// removeing id inside [] will trigger the warning
	/**
	 * ./src/hooks/pokemon-find.hook.ts
  		Line 10:5:  React Hook useEffect has a missing dependency: 'id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
	 */
	// so the we need to add id in []
	return pokemon;
};

export default usePokemonFind;
