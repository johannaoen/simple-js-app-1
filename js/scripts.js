let pokemonRepository = (function () {
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
function add (pokemon) {
  pokemonList.push(pokemon);
}
function getAll() {
  return pokemonList;
}
return {
  add: add,
  getAll: getAll
  }
})();

document.write (pokemonRepository.getAll());
pokemonRepository.add({name: 'Pokemon'});
document.write (pokemonRepository.getAll());


pokemonList.forEach(function(pokemonList) {
  document.write(pokemonList.name + ' is ' + pokemonList.height + ' inches tall.'+ '<p>');
});
