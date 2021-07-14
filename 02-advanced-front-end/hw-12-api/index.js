let input = document.getElementById('input-number');
let charactersHeader = document.getElementById('header-characters');
let charactersContainer = document.getElementById('characters-info-container');
let planetsContainer = document.getElementById('planets-container');
let planetsList = document.getElementById('planets-list');
let previousButton = document.getElementById('previous');
let nextButton = document.getElementById('next');

let wookiee = "";


document.getElementById('form-characters').addEventListener('submit', function (e) {
    e.preventDefault();

    document.getElementById('form-characters').reset();
});

document.querySelector('#submit-characters').addEventListener("click", () => {
    wookiee = "";
    getCharactersInformation();
});

document.getElementById('wookiee').addEventListener('click', () => {
    wookiee = "?format=wookiee";
    getCharactersInformation();
});

document.querySelector('#get-planets').addEventListener("click", () => getPlanetsList());


function getCharactersInformation() {

    charactersHeader.innerHTML = null;
    charactersContainer.innerHTML = null;
  
    charactersHeader.insertAdjacentHTML('afterbegin', `Film ${input.value}, characters:`);

    fetch(`https://swapi.dev/api/films/${input.value}/`)

    .then((response) => {
        return response.json();
    })

    .then((data) => {

        for (i = data.characters.length - 1; i > -1; i--) {

            characterID = data.characters[i].replace(`https://swapi.dev/api/people/`, ``);
            characterID = characterID.replace('/', '');
            
            fetch(`https://swapi.dev/api/people/${characterID}` + wookiee)

            .then((response) => {
                return response.json();
            })

            .then((data) => {

                let character;

                if (wookiee === "") {

                    character = {
                        "name": data.name,
                        "birth year": data.birth_year,
                        "gender": data.gender,
                    };

                    switch (character.gender) {
                        case "male": character.gender = "♂"; 
                            break;
    
                        case "female": character.gender = "♀"
                            break;
                    }

                    moreInfo = `https://www.google.com/search?q=${character.name.split(' ').join('+')}`;

                    charactersContainer.insertAdjacentHTML('afterbegin', `<li class="character-info"> 
                                                                                Name: ${character.name} <br> 
                                                                                Birth year: ${character["birth year"]} <br> 
                                                                                Gender: ${character.gender} <br> 
                                                                                <a href="${moreInfo}" target="_blank">  
                                                                                    <button class="more-info"> More information </button>  
                                                                                </a> 
                                                                            </li>`);

                }  

                if (wookiee === "?format=wookiee") {

                    character = {
                        "name": data.whrascwo,
                        "birth year": data.rhahrcaoac_roworarc,
                        "gender": data.rrwowhwaworc,
                    };

                    charactersContainer.insertAdjacentHTML('afterbegin', `<li class="character-info"> 
                                                                                Whrascwo: ${character.name} <br> 
                                                                                Rhahrcaoac roworarc: ${character["birth year"]} <br> 
                                                                                Rrwowhwaworc: ${character.gender} <br> 
                                                                            </li>`);

                }

                switch (character.name) {
                    case "Darth Vader": 
                    case "Drarcaoac Vrawaworc":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2ef1/80b3/f63a/2c5f/aa50/darth-vadar.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Luke Skywalker":
                    case "Lhuorwo Sorroohraanorworc":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e94/d282/3e74/f6c7/085f/luke.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Han Solo":
                    case "Hrawh Sooanoo":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2f34/2a34/9f73/ad74/956e/han-solo.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Leia Organa":
                    case "Lwoahra Orcrrrawhra":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e3d/dcb2/f0dd/405d/ed83/leia-sw.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Chewbacca":
                    case "Cacwoohrhraoaoara":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e02/6de1/11c1/0d00/5e61/chewwy.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Boba Fett":
                    case "Boorhra Fwoaoao":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2db5/d282/3e95/f0c7/084e/boba-fett.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "R2-D2":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/empire-images/features/560ebc7b50e6c513721c309f/R2-D2.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Yoda":
                    case "Yoowara":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/empire-images/features/560ebc7b50e6c513721c309f/Yoda.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Obi-Wan Kenobi":
                    case "Orhah-Wrawh Kwowhoorhah":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2d68/6de1/11a2/4a00/5e56/obi-wan.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                }
            });
        }
    });
}


let page = 1;

document.querySelector('#previous').addEventListener('click', () => {

    page -= 1;

    if (page < 1) page = 1;
    getPlanetsList();
})

document.querySelector('#next').addEventListener('click', () => {

    page += 1;

    if (page > 6) page = 6;
    getPlanetsList();
})



function getPlanetsList() {

    planetsList.innerHTML = null;

    fetch (`https://swapi.dev/api/planets/?page=${page}`)

    .then((response) => {
        return response.json();
    })

    .then((data) => {

        for (i = data.results.length - 1; i > -1; i--) {

            planetsList.insertAdjacentHTML('afterbegin', `<li>${data.results[i].name}</li>`);
        }
    });
}