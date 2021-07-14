let input = document.getElementById('films-characters');
let charactersHeader = document.getElementById('header-characters');
let charactersContainer = document.getElementById('characters-info-container');
let planetsContainer = document.getElementById('planets-container');
let planetsList = document.getElementById('planets-list');


document.getElementById('form-characters').addEventListener('submit', function (e) {
    e.preventDefault();

    console.log("Фільм " + input.value + "-й, персонажі:"); 

    document.getElementById('form-characters').reset();
})


document.querySelector('#submit-characters').addEventListener("click", () => getCharactersInformation());
document.querySelector('#get-planets').addEventListener("click", () => getPlanetsList());


function getCharactersInformation() {

    charactersHeader.innerHTML = null;
    charactersContainer.innerHTML = null;
  
    charactersHeader.insertAdjacentHTML('afterbegin', `Фільм ${input.value}-й, персонажі:`);

    fetch(`https://swapi.dev/api/films/${input.value}/`)

    .then((response) => {
        return response.json();
    })

    .then((data) => {

        for (i = 0; i < data.characters.length; i++) {

            characterID = data.characters[i].replace(`https://swapi.dev/api/people/`, ``);
            characterID = characterID.replace('/', '');
            
            fetch(`https://swapi.dev/api/people/${characterID}/`)

            .then((response) => {
                return response.json();
            })

            .then((data) => {

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

                console.log(character);
                console.log("Докладніше про персонажа: " + moreInfo);
                console.log('');

                charactersContainer.insertAdjacentHTML('afterbegin', `<li class="character-info"> 
                                                                Ім'я: ${character.name} <br> 
                                                                Рік народження: ${character["birth year"]} <br> 
                                                                Стать: ${character.gender} <br> 
                                                                <a href="${moreInfo}" target="_blank">  
                                                                    <button> Докладніше про персонажа </button>  
                                                                </a> 
                                                            </li>`);

                switch (character.name) {
                    case "Darth Vader": 
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2ef1/80b3/f63a/2c5f/aa50/darth-vadar.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Luke Skywalker":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e94/d282/3e74/f6c7/085f/luke.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Han Solo":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2f34/2a34/9f73/ad74/956e/han-solo.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Leia Organa":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e3d/dcb2/f0dd/405d/ed83/leia-sw.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Chewbacca":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2e02/6de1/11c1/0d00/5e61/chewwy.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Boba Fett":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2db5/d282/3e95/f0c7/084e/boba-fett.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "R2-D2":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/empire-images/features/560ebc7b50e6c513721c309f/R2-D2.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                    
                    case "Yoda":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/empire-images/features/560ebc7b50e6c513721c309f/Yoda.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;

                    case "Obi-Wan Kenobi":
                        charactersContainer.insertAdjacentHTML('afterbegin', 
                            `<img src="https://cdn.onebauer.media/one/media/6091/2d68/6de1/11a2/4a00/5e56/obi-wan.jpg?format=jpg&quality=80&width=850&ratio=1-1&resize=aspectfit">`);
                        break;
                }
            });
        }
    });
}






function getPlanetsList() {

    planetsList.innerHTML = null;

    fetch (`https://swapi.dev/api/planets/`)

    .then((response) => {
        return response.json();
    })

    .then((data) => {


        for (i = 0; i < data.results.length; i++) {
            console.log(data.results[i].name);

            planetsList.insertAdjacentHTML('afterbegin', `<li>${data.results[i].name}</li>`);
        }
    });

}

