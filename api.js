import axios from 'axios';

// https://wizard-world-api.herokuapp.com/Elixirs?Name=Baruffio%27s%20Brain%20Elixir

const base = 'https://wizard-world-api.herokuapp.com';
export const build_elixirs = async (Name) => {
    try {
        const elixir_url = `${base}/Elixirs?Name=${Name}`
        const response = await axios.get(elixir_url);
        return response.data
    }catch (error){
        return error;
    }
}

// https://wizard-world-api.herokuapp.com/Elixirs/afe48e27-d5de-4a14-9975-65a5b45aadaa
export const elixir_id = async (id) => {
    try{
        const elixir_url = `${base}/Elixirs/${id}`;
        const response = await axios.get(elixir_url);

        return response.data;
    }catch (error){
        return error;
    }
}

