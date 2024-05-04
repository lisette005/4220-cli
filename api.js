import axios from 'axios';

const base = 'https://wizard-world-api.herokuapp.com';

export const build_elixirs = async (Name) => {
    try {
        const elixir_url = `${base}/Elixirs?Name=${Name}`;
        const response = await axios.get(elixir_url);
        return response.data;
    } catch (error) {
        console.error('Error fetching elixirs:', error);
        return error;
    }
}

export const elixir_id = async (id) => {
    try {
        const elixir_url = `${base}/Elixirs/${id}`;
        const response = await axios.get(elixir_url);
        return response.data;
    } catch (error) {
        console.error('Error fetching elixir:', error);
        return error;
    }
}



