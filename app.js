// clean up UI for both endpoints 
import * as api from './api.js';

const _print = (elixirs) => {
    console.log('-------------------------');
    elixirs.forEach(elixir => {
        console.log(`ID: ${elixir.id}`);
        console.log(`Name: ${elixir.name}`);
        console.log(`Ingredients:`);
        elixir.ingredients.forEach((ingredient, index) => {
            console.log(` ${index + 1}.${ingredient.name}`);
        });
        console.log('-------------------------');
    });
}

export const get_elixir = async () => {
    try {
        const elixirs = await api.build_elixirs('Fergus Fungal Budge');
        _print(elixirs);
    } catch (error) {
        console.error('Error fetching elixirs:', error);
    }
}

export const get_elixir_id = async () => {
    try{
        const elixirs = await api.elixir_id('Fergus Fungal Budge');
        _print(elixirs)
    } catch(error) {
        console.error(error)
    }
}
