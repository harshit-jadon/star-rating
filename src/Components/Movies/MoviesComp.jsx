
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const MoviesComp = ()=> {
    const [movies2024, setMovies2024] = useState([]);

    useEffect(()=>{
        axios.get('https://www.omdbapi.com/?s=time&y=2024&apikey=4a41b347')
        .then(function (response) {
            setMovies2024(response?.data?.Search)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])

    // console.log("1",movies2024)

    return(
        <>
            <div style={{background:"black"}}>
                <Card data={movies2024}/>
            </div>
            
        </>
    )
}

export default MoviesComp;