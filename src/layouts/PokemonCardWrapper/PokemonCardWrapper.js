import PokemonCard from "../../components/PokemonCard/PokemonCard";
import "./PokemonCardWrapper.css";
function PokemonCardWrapper(props) {
    return (
        <section className="pokemonCardWrapper">
            <PokemonCard
                pokemonName="Wooper"
                pokemonType={["Water", "Ground"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Charmeleon"
                pokemonType={["Fire"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                pokemonHP="58"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Gastly"
                pokemonType={["Ghost", "Poison"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
                pokemonHP="30"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Sudowoodo"
                pokemonType={["Rock"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png"
                pokemonHP="100"
                updateCounter={props.updateCounter}
            />

        </section>
    )
}

export default PokemonCardWrapper;