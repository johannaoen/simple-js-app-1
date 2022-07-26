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
    if (typeof pokemon === "Object" && "name" in pokemon) {
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
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
    }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
    });
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
