// Importing necessary modules
import * as api from './api.js';
import * as db from './db.js'; // Added: Importing the mock database module

// Function to print elixirs to the console
const _print = (elixirs) => {
    console.log('-------------------------');
    elixirs.forEach(elixir => {
        console.log(`Name: ${elixir.name}`);
        console.log(`ID: ${elixir.id}`);
        console.log(`Ingredients:`);
        elixir.ingredients.forEach((ingredient, index) => {
            console.log(` ${index + 1}.${ingredient.name}`);
        });
        console.log('-------------------------');
    });
}

// Function to handle searching by keyword
export const searchByKeyword = async (keyword) => {
    try {
        // Search the selected API by keyword
        const searchResults = await api.searchByKeyword(keyword);
        
        // Save search data in the mock database
        await db.saveSearchHistoryToDatabase({ keyword, timestamp: new Date() });

        // Prompt the user to select an item from the search results
        // (You may implement a prompt function here or handle it in the CLI)

        return searchResults;
    } catch (error) {
        throw new Error(`Error searching by keyword: ${error.message}`);
    }
};

// Original function modified to save search history to mock database
export const get_elixir = async (Name) => {
    try {
        const elixirs = await api.build_elixirs(Name);
        _print(elixirs);

        // Added this to save search history to mock database
        const entry = { type: 'search', query: Name, timestamp: new Date() };
        await db.saveSearchHistoryToDatabase(entry); // Added: Saving search history
    } catch (error) {
        console.error('Error fetching elixirs:', error);
    }
}

// Original function modified to save search history to mock database
export const get_elixir_id = async (id) => {
    try{
        const elixirs = await api.elixir_id(id);
        _print([elixirs]);
        
        // Added this to save search history to mock database
        const entry = { type: 'id', query: id, timestamp: new Date() };
        await db.saveSearchHistoryToDatabase(entry); // Added: Saving search history
    } catch(error) {
        console.error(error);
    }
}
