console.log("Script is running");

const pokemons = ["Pikachu", "Mewtwo", "Charizard", "Weetle", "Bulbasaur"];

// loop over and log out each pokemon

/* for (let i = 0; i < pokemons.length; i++) {
  console.log(pokemons[i]);
}
let count = 0;
while (count < pokemons.length) {
  console.log(pokemons[i]);
  count++; // same as "count +=1" or "count = count +1"
} */

pokemons.forEach((pokemon) => {
  // Write here!
  const pokemonContainer = document.querySelector("#pokemon-container");
  pokemonContainer.innerHTML += `
  <div class="card" style="width: 18rem;">
  <img src="https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest?cb=20140520015336" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
});
// do something with the container for each pokemon

const example = document.querySelector("#example");
example.innerHTML = `
<h1>Example</h1> 
<p>example text</p>`;
