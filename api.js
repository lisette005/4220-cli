// import axios from 'axios';

// // https://wizard-world-api.herokuapp.com/Elixirs?Name=Baruffio%27s%20Brain%20Elixir

// const base = 'https://wizard-world-api.herokuapp.com';
// export const build_elixirs = async (Name) => {
//     try {
//         const build_elixirs = `${base}/Elixirs?Name=${Name}`
//         const response = await axios.get(elixir_url);
//         return response.data
//     }catch (error){
//         return error;
//     }
// }

// // https://wizard-world-api.herokuapp.com/Elixirs/afe48e27-d5de-4a14-9975-65a5b45aadaa
// export const elixir_id = async (id) => {
//     try{
//         const elixir_url = `${base}/Elixirs/${id}`;
//         const response = await axios.get(elixir_url);
//         return response.data;
//     }catch (error){
//         return error;
//     }
// }

// async function displayElixirsByName(name) {
//     try {
//         const elixirs = await build_elixirs(name);
//         console.log('Elixirs found:', elixirs);
//         return response.data
//     } catch (error) {
//         console.error('Error fetching elixirs:', error);
//     }
// }

// async function displayElixirById(id) {
//     try {
//         const elixir = await elixir_id(id);
//         console.log('Elixir found:', elixir);
//         return response.data
//     } catch (error) {
//         console.error('Error fetching elixir:', error);
//     }
// }

import axios from 'axios';

const base = 'https://wizard-world-api.herokuapp.com';

export const build_elixirs = async (Name) => {
    try {
        const elixir_url = `${base}/Elixirs?Name=${Name}`;
        const response = await axios.get(elixir_url);
        console.log('Elixirs found:', response.data);
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
        console.log('Elixir found:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching elixir:', error);
        return error;
    }
}



