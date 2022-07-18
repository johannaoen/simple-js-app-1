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
  if (typeof pokemon === "Object") {
  pokemonList.push(pokemon);
} else {
document.write("Pokemon is not valid");
}
}

function getAll() {
  return pokemonList;
}
return {
  add: add,
  getAll: getAll
};
})();

pokemonRepository.getAll().forEach(function(pokemonList){
if (pokemonList.height < 8 && pokemonList.height > 5) {
      document.write (pokemonList.name + " is " + pokemonList.height + " inches tall." + "It is a small body!" + "<p>");
    }
    else if (pokemonList.height < 11) {
      document.write(pokemonList.name + " is " + pokemonList.height + " inches tall." + "It is a normal body!" + "<p>");
    } else {
  document.write(pokemonList.name + " is " + pokemonList.height + " inches tall." + "WOW it is a large body!" + "<p>");
}
});
();
