import Pokemon from "https://deno.land/x/fortuna@v1.1.2/testdata/pokemon.json" assert {
  type: "json",
};

interface PokemonData {
    name: string,
    id: number,
    tier: string,
}

import { Nequeue } from "./queue.ts"

const b = new Nequeue<PokemonData>()
for(const pokemon of Pokemon.slice(0, 20)) {
    b.add(pokemon)
}

// console.log(b.shuffle())
console.log(b.at(-1))
console.log(b.array())