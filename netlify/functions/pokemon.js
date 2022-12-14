const axios = require("axios");

exports.handler = async function (event, context) {
  const POKE_API = "https://pokeapi.co/api/v2/pokemon/ditto";

  const response = await axios.get(POKE_API);

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
}
