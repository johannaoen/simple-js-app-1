let pokemonList = [
  {name:"Bulbasaur",
  height: 0.7,
  types:['grass', 'poison', 'fighting', 'steel']
},
{name: "Charizard",
height: 1.7,
types: ["fire", "flying"]
},
{
  name: "Squirtle",
  height: 1,
  types: ["water"]
}
]
;
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height > 1){
  document.write (pokemonList[i].name + " - " + pokemonList[i].height + "  " + "~This is a BIG pokemon~" + "<p>");
} else {
  document.write (pokemonList[i].name + " - " + pokemonList[i].height + "<p>");
}
}
