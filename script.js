class PokeDex {

    constructor() {
        this.input = document.getElementById("pokeInput");
        this.button = document.getElementById("submit");
        this.stats = document.querySelector(".stats-container");

        this.addListeners();
    }

    addListeners() {
        this.button.addEventListener("click", () => {
            if(this.input.value !== "") {
                const name = this.input.value;
                this.fetchPokemon(name);
                this.input.value = "";
            }
        })
    }

    renderStats(name, img) {

    }


    async fetchPokemon(name) {

        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Pokemon ${name} does not exist`);
            }
            const pokemon = await response.json();
            console.log(pokemon.sprites.front_default);
            this.renderStats(name, pokemon.sprites.front_default);

        } catch (err) {
            console.log(err);
        }

    }
}

const app = new PokeDex();
