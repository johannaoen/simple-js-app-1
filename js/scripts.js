let pokemonRepository = (function() {
  let pokemonList = [{
      name: "Bulbasaur",
      height: 0.7,
      types: ['grass', 'poison', 'fighting', 'steel']
    },
    {
      name: "Charizard",
      height: 11,
      types: ["fire", "flying"]
    },
    {
      name: "Squirtle",
      height: 5,
      types: ["water"]
    }
  ];

  function add(pokemon) {
    if (typeof pokemon === "Object") {
      pokemonList.push(pokemon);
    } else {
      document.write("Pokemon is not valid");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let listofpokemon = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add("button-class");
    button.innerText = pokemonList.name;
    listItem.appendChild(button);
    listofpokemon.appendChild(listItem);
    button.addEventListener('click', function(pokemon) {
      showDetails(pokemon);
    });
    }

  function showDetails(pokemon) {
    document.write(pokemon);
  }
  return {
    add: add,
    getAll: getAll
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});




//*if (pokemonList.height < 10 && pokemonList.height > 2) {
//      document.write (pokemonList.name + " is " + pokemonList.height + " inches tall." + " It is a small pokemon." + "<p>");
//    }
//    else if (pokemonList.height < 2) {
//      document.write(pokemonList.name + " is " + pokemonList.height + " inches tall." + " It is a normal-sized pokemon." + "<p>");
//    } else {
//  document.write(pokemonList.name + " is " + pokemonList.height + " inches tall." + " WOW it is a large pokemon!" + "<p>");
//};
