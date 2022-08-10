let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

  function add(newItem) {
    if(
      typeof newItem ==="object" &&
      "name" in newItem &&
      "detailsUrl" in newItem
    ) {
    pokemonList.push(newItem);
  } else {
    console.log("Pokemon is not correct");
  }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
        pokemonList.classList.add('group-list-item');
      //  pokemonList.classList.add("col-sm-4", "col-md-6", "col-lg-12");
    let button = document.createElement('button');
    button.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    button.classList.add('name-button', 'btn', 'btn-primary', 'btn-lg', 'text-md-center', 'btn-block' );
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#pokemon-modal");
//button.classList.add('button-class btn-block btn m1');


    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.weight = details.weight;
      item.height = details.height;
      item.type = details.type;

    }).catch(function (e) {
      console.error(e);
    });
  }

function showModal (pokemon) {
  let modalBody = $(".modal-body");
let modalTitle = $(".modal-title");
modalTitle.empty();
modalBody.empty();

let nameElement = $('<h1>' + pokemon.name + '</h1>');
let imageElement = $('<img class = "pokemon-img">')
imageElement.attr("src", pokemon.imageUrl);
let heightElement = $('<p>' + 'Height : ' + pokemon.height + '</p>');
let weightElement = $('<p>' + 'Weight : ' + pokemon.weight + '</p>');
let typeElement = $('<p>' + 'Types : ' + pokemon.type + '</p>');
let abilitiesElement = $('<p>' + 'Abilities : ' + pokemon.abilities + '</p>');

modalTitle.append(nameElement);
modalBody.append(imageElement);
modalBody.append(heightElement);
modalBody.append(weightElement);
modalBody.append(typeElement);
}


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    showDetails: showDetails,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
