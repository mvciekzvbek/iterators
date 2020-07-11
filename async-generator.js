const URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

function fetchData () {
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      it.next(data)
    })
    .catch((error) => {
      it.throw(error)
    })
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

it.next()