let pokemonRepository = (function () {
let pokemonList = []
*  {name:"Bulbasaur",
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
  if (typeof pokemon === 'object' && 'name' in pokemon) {
  pokemonList.push(pokemon);
} else {
document.write('Pokemon is not valid');
};

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

function myloopFunction(pokemonList){
  document.write(pokemonList.name + ' is ' + pokemonList.height + ' inches tall.'+ '<p>');
}
pokemonRepository.forEach(myloopFunction);

});
