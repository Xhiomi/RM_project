const apiURL = 'https://rickandmortyapi.com/api/character/';
const cardsSection = document.querySelector('.cards-section');
const allButton = document.querySelector('.all-button');
const deadButton = document.querySelector('.dead-button');
const aliveButton = document.querySelector('.alive-button');
const unknownButton = document.querySelector('.unknown-button');



// document.querySelector(".class").classList.add("hidden");

allButton.addEventListener('click', function printAllCards(event) {
  function apiRequest(url) {
    fetch(url)
    .then(function (respuesta) {
      // console.log(respuesta);
      return respuesta.json();
    })
    .then(function(respJson) {
      // console.log(respJson);
      printData(respJson.results);
      // console.log('respJson: ' + respJson);
      // console.log('respJson.info.next: ' + respJson.info.next);
      const pageNext = respJson.info.next
      // console.log('pageNext: ' + pageNext)
      requestNextPage(pageNext);
      function requestNextPage(pageNext) {
        if(pageNext == '') {
          // console.log('No hay next.')
        } else {
          // console.log('info.next: ' + pageNext);
          apiRequest(pageNext);
        }
      }
    })
    .catch(function(error) {
      // console.log(error);
    })
  }

  cardsSection.innerHTML = '';
  function printData(characters) {
    for(let character of characters) {
      if (character.status == 'Alive') {
        cardsSection.innerHTML += `
        <div class="card alive">
        <img class="cards-images" src="${character.image}" alt="">
        <div class="card-text">
        <h1 class="text">${character.name}</h1>
        <h1 class="text">${character.status}</h1>
        </div>
        </div>
        `
      } else if (character.status == 'Dead') {
        cardsSection.innerHTML += `
        <div class="card dead">
        <img class="cards-images" src="${character.image}" alt="">
        <div class="card-text">
        <h1 class="text">${character.name}</h1>
        <h1 class="text">${character.status}</h1>
        </div>
        </div>
        `
      } else {
        cardsSection.innerHTML += `
        <div class="card unknown">
        <img class="cards-images" src="${character.image}" alt="">
        <div class="card-text">
        <h1 class="text">${character.name}</h1>
        <h1 class="text">${character.status}</h1>
        </div>
        </div>
        `
      }
    }
  }
  apiRequest(apiURL);
});
deadButton.addEventListener('click', function printDeadCards(event) {

  function apiDeadRequest(url) {
  fetch(url)
    .then(function (respuesta) {
      // console.log(respuesta);
        return respuesta.json();
    })
    .then(function(respJson) {
      // console.log(respJson);
      printDeadData(respJson.results);
      // console.log('respJson: ' + respJson);
      // console.log('respJson.info.next: ' + respJson.info.next);
      const pageNext = respJson.info.next
      // console.log('pageNext: ' + pageNext)
      requestNextPage(pageNext);
      function requestNextPage(pageNext) {
        if(pageNext == '') {
          // console.log('No hay next.')
        } else {
          // console.log('info.next: ' + pageNext);
          apiDeadRequest(pageNext);
        }
      }
    })
    .catch(function(error) {
      // console.log(error);
    })
  }

  cardsSection.innerHTML = '';
    function printDeadData(characters) {
      for(let character of characters) {
        if (character.status == 'Dead') {
        cardsSection.innerHTML += `
        <div class="card dead">
          <img class="cards-images" src="${character.image}" alt="">
          <div class="card-text">
            <h1 class="text">${character.name}</h1>
            <h1 class="text">${character.status}</h1>
          </div>
        </div>
        `
      }
    }
  }

  apiDeadRequest(apiURL)

  // document.getElementsByClassName(".alive").classList.add(".hidden");
  // document.getElementsByClassName(".unknown").classList.add(".hidden");
  // apiRequest(apiURL).filter(status => status == '');
  // console.log(apiRequest(apiURL).filter(status => status == 'Alive'));
});
aliveButton.addEventListener('click', function printAliveCards(event) {

  function apiAliveRequest(url) {
  fetch(url)
    .then(function (respuesta) {
      // console.log(respuesta);
        return respuesta.json();
    })
    .then(function(respJson) {
      // console.log(respJson);
      printAliveData(respJson.results);
      // console.log('respJson: ' + respJson);
      // console.log('respJson.info.next: ' + respJson.info.next);
      const pageNext = respJson.info.next
      // console.log('pageNext: ' + pageNext)
      requestNextPage(pageNext);
      function requestNextPage(pageNext) {
        if(pageNext == '') {
          // console.log('No hay next.')
        } else {
          // console.log('info.next: ' + pageNext);
          apiAliveRequest(pageNext);
        }
      }
    })
    .catch(function(error) {
      // console.log(error);
    })
  }

  cardsSection.innerHTML = '';
    function printAliveData(characters) {
      for(let character of characters) {
        if (character.status == 'Alive') {
        cardsSection.innerHTML += `
        <div class="card alive">
          <img class="cards-images" src="${character.image}" alt="">
          <div class="card-text">
            <h1 class="text">${character.name}</h1>
            <h1 class="text">${character.status}</h1>
          </div>
        </div>
        `
      }
    }
  }

  apiAliveRequest(apiURL)

  // for (i=0 ; i < x.lenght ; i++)
  // document.getElementsByClassName(".dead").classList.add(".hidden");
  // document.getElementsByClassName(".unknown").classList.add(".hidden");
  // apiRequest(apiURL).filter(status => status == '');
  // console.log(apiRequest(apiURL).filter(status => status == 'Alive'));
});
unknownButton.addEventListener('click', function printUnknownCards(event) {

  function apiUnknownRequest(url) {
  fetch(url)
    .then(function (respuesta) {
      // console.log(respuesta);
        return respuesta.json();
    })
    .then(function(respJson) {
      // console.log(respJson);
      printUnknownData(respJson.results);
      // console.log('respJson: ' + respJson);
      // console.log('respJson.info.next: ' + respJson.info.next);
      const pageNext = respJson.info.next
      // console.log('pageNext: ' + pageNext)
      requestNextPage(pageNext);
      function requestNextPage(pageNext) {
        if(pageNext == '') {
          // console.log('No hay next.')
        } else {
          // console.log('info.next: ' + pageNext);
          apiUnknownRequest(pageNext);
        }
      }
    })
    .catch(function(error) {
      // console.log(error);
    })
  }

  cardsSection.innerHTML = '';
    function printUnknownData(characters) {
      for(let character of characters) {
        if (character.status == 'unknown') {
        cardsSection.innerHTML += `
        <div class="card unknown">
          <img class="cards-images" src="${character.image}" alt="">
          <div class="card-text">
            <h1 class="text">${character.name}</h1>
            <h1 class="text">${character.status}</h1>
          </div>
        </div>
        `
      }
    }
  }

  apiUnknownRequest(apiURL)

  // for (i=0 ; i < x.lenght ; i++)
  // document.getElementsByClassName(".alive").classList.add(".hidden");
  // document.getElementsByClassName(".dead").classList.add(".hidden");
  // apiRequest(apiURL).filter(status => status == '');
  // console.log(apiRequest(apiURL).filter(status => status == 'Alive'));
});
