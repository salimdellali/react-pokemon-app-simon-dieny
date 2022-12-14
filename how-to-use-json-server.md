Installer globalement json-server:

`npm install -g json-server`

Ouvrir le terminal et executer:

`json-server --watch src/models/db.json --port=3001 --delay=500`

- `--delay 500` : veux dire que les requetes prendront 500ms pour retourner une réponse.

Ou bien ajouter un script dans package.json et ajouter :

```
"scripts": {
		"start": "react-scripts start",
	-->	"start:api": "json-server --watch src/models/db.json --port=3001 --delay=500", <--
		"build": "react-scripts build"
	},
```

et de l'executer dans la console avec

`npm run start:api`

json-server crée automatiquement les points de terminaison suivantes:

- `GET /pokemons` // renvoie tous les pokémons
- `GET /pokemons/1` // renvoie le pokémon avec l'indentifiant 1
- `POST /pokemons` // ajoute un nouveau pokémon dans notre application
- `PUT /pokemons/1` // modifie le pokémon avec l'identifiant 1

La requete suivante retourne les pokémons dont au moins une propriété match la search query "term"

`GET api/pokemons?q=term` // "term est terme de recherche
