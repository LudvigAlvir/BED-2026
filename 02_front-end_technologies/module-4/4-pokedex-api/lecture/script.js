// How to get data from an external resource, remember async and await
async function getData() {
  // ALMOST always the same
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  // ALMOST always the same
  createCards(data);
}

function createCards(data) {
  data.results.forEach((pokemon) => {
    const splitUrl = pokemon.url.split("/");
    const id = splitUrl[6];
    console.log(id);

    const pokemonContainer = document.querySelector("#pokemon-container");
    pokemonContainer.innerHTML += `
<div class="card" style="width: 18rem;">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${pokemon.name}</h5>
    <a href="${pokemon.url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`;
  });
}
getData();

async function exampleFetch() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
  const data = await response.json();
  console.log(data);
  console.log(data.sprites);
}
exampleFetch();

// lots of "silly examples" on how to add strings together

const url = "https://google.com";
const protocol = "https";
const domain = "google";
const tld = "com";
const newURL = `${protocol}://${domain}.${tld}`;
const otherExample = protocol + "://" + domain + "." + tld;
console.log(url);
console.log(newURL);
console.log(otherExample);

const link = `<a href="${url}" class="btn btn-primary">Go somewhere</a>`;
const link2 = '<a href="' + url + '" class="btn btn-primary">Go somewhere</a>';

const firstName = "Ludvig";
const welcomeString = "Welcome <name> !"; // change this to use the "name" variable
const welcomeString1 = "Welcome " + firstName + " !";
const welcomeString2 = `Welcome ${firstName} !`;
const example =
  "Welcome " + "Ludvig" + "!" + "enda mer" + "masse mer" + "tekst";

const backtics = `
  lang tekst her, 1+1 = ${1 + 1}.
  mitt navn er ${firstName}
  `;
alert(backtics);

let x = "hei";
let y = " på dere";
y += " alle sammen";
alert(x + y);
