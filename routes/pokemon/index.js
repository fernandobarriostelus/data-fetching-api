"use strict";

var fetch = require("node-fetch");

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    // const res = await fetch("https://pokeapi.co/api/v2/berry");
    const data = await res.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return data.results;
  });
};
