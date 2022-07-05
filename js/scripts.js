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
  document.write (pokemonList[i].name + " - " + pokemonList[i].height + "<p>");
  }
}

function div (dividend, divisor);
if (val2===0){
  return "You're trying to divide by zero";}
    else {
      let result = dividend / divisor;
      return result;
    }
  }
