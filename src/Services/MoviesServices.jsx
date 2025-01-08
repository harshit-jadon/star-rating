import axios from 'axios';

export const getMoviesApi = async() => {
    await axios.get('https://www.omdbapi.com/?s=time&y=2024&apikey=4a41b347')
    .then(function (response) {
        return response
    })
    .catch(function (error) {
        console.log(error);
    })
    
}