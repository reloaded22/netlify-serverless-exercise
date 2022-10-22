const axios = require("axios");

exports.handler = async function (event, context) {
  
  const {region} = JSON.parse(event.body);
  const POKE_API = `https://pokeapi.co/api/v2/pokedex/${region}/`;

  const response = await axios.get(POKE_API);

  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: response.data.pokemon_entries}),
  };
}
