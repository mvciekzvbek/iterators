const URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

function fetchData () {
  return fetch(URL)
    .then(response => response.json())
    .catch((error) => error)
}

function *main () {
  try {
    var data = yield fetchData();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

var it = main();

var p = it.next().value;

p.then((result) => {
  it.next(result)
}, (error) => {
  it.throw(err)
})