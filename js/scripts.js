let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=493';

    function add(pokemon) {
        if (
            typeof pokemon === "object" &&
            "name" in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon is not correct");
        }
    }

    function getAll() {
        return pokemonList;
    }

    function addListItem(pokemon) {
        let pokemonListElement = document.querySelector(".pokemon-list");
        let listItem = document.createElement("li");

        // Create div for the Pokémon
        let pokemonDiv = document.createElement("div");
        pokemonDiv.classList.add("pokemon-item");

        // Load details and add the image
        loadDetails(pokemon).then(function () {
            // Add Pokémon image
            let pokemonImage = document.createElement("img");
            pokemonImage.src = pokemon.imageUrl; // Set the Pokémon's image URL
            pokemonImage.alt = pokemon.name + " image";
            pokemonDiv.appendChild(pokemonImage);

            // Add button for the Pokémon
            let button = document.createElement("button");
            button.innerText = pokemon.name;
            button.classList.add("button-class");
            pokemonDiv.appendChild(button);

            // Add event listener for the button
            button.addEventListener("click", function (event) {
                showDetails(pokemon);
            });
        });

        // Append the Pokémon div to the list item
        listItem.appendChild(pokemonDiv);

        // Append the list item to the list
        pokemonListElement.appendChild(listItem);
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
                //   console.log(pokemon);
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
            item.height = details.height;
            item.weight = details.weight;
            item.types = details.types
            
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
            // Select modal elements
            let modal = document.getElementById('pokemonModal');
            let modalTitle = document.getElementById('modalTitle');
            let modalImage = document.getElementById('modalImage');
            let modalHeight = document.getElementById('modalHeight');
            let modalWeight = document.getElementById('modalWeight');
            let modalTypes = document.getElementById('modalTypes');

            // Insert Pokémon details into the modal
            modalTitle.textContent = item.name;
            modalImage.src = item.imageUrl;
            let adjustedHeight = item.height / 10;
            let adjustedWeight = item.weight / 10;
            modalHeight.textContent = 'Height: ' + adjustedHeight + 'm';
            modalWeight.textContent = 'Weight: ' + adjustedWeight + 'kg';
            modalTypes.textContent = 'Types: ' + item.types.map(type => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ');

            // Open modal
            let pokemonModal = document.getElementById('pokemonModal');
            pokemonModal.classList.add('is-visible');

            // If the close-symbol is clicked, modal will be closed
            let closeButtonElement = document.querySelector('.modal-close');
            closeButtonElement.addEventListener('click', hideModal);

            // If the escape-key is clicked 
            window.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && pokemonModal.classList.contains('is-visible')) {
                    hideModal();
                }
            });

            // If the overlay is clicked
            pokemonModal.addEventListener('click', (e) => {
                let target = e.target;
                if (target === pokemonModal) {
                    hideModal();
                }
            });

            // Function for close-button, esc and overlay
            function hideModal() {
                pokemonModal.classList.remove('is-visible');
            }

        });
    }

    // Function to search for Pokémon
    function searchPokemon(query) {
        let filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
        let pokemonListElement = document.querySelector(".pokemon-list");
        pokemonListElement.innerHTML = ''; // Clear the current list
        filteredPokemon.forEach(pokemon => addListItem(pokemon)); // Add the filtered Pokémon
    }

    // Add event listener to search input
    let searchInput = document.querySelector('.headerSearch');
    searchInput.addEventListener('input', function() {
        searchPokemon(searchInput.value);
    });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
})();


pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
