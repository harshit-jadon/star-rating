

import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import Card2 from '../Card/Card2';

const LandingPage = () => {
    const [movies2024, setMovies2024] = useState([]);
    const [search, setSearch] = useState("");
    const [emptyState, setEmptyState] = useState("");
    const [step2, setStep2] = useState(false);
    const api_key = "4a41b347";

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    }

    const fetchSearch = async(search)=>{
        await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${api_key}`)
        .then(function (response) {
            console.log("3 <>", response)
            if(response.data.Response === "False"){
                setMovies2024([]);
                setEmptyState(`No Results for ${search}`);
                setStep2(false)
            }else{
                setStep2(true);
                setMovies2024(response?.data?.Search)
            }
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const handleSearchBtn = () => {
        if(!search.length){
            fetchMovieApi();
        }else{
            fetchSearch(search);
        }
       
    }

    const fetchMovieApi = () => {
        axios.get(`https://www.omdbapi.com/?s=time&y=2024&apikey=${api_key}`)
        .then(function (response) {
            setMovies2024(response?.data?.Search)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    useEffect(()=>{
        fetchMovieApi();
    },[])

    console.log("1",movies2024)

    return(
        <div className='landing-page'>
            <div className='searchbar-cont'>
                <input
                    type='text'
                    placeholder='Search movie'
                    onChange={handleSearch}
                    value={search}
                    className='input-cont'
                />
                <button onClick={handleSearchBtn} className='button-cont' style={{backgroundColor:"#3688FF"}}>Search</button>
            </div>
            <div>
                {
                    (step2 && movies2024.length)
                        ? (<Card2 data={movies2024}/>)
                        : (movies2024.length 
                            ? (<Card data={movies2024}/>)
                            : (<h3>{emptyState}</h3>))
                }
            </div>
            
        </div>
    )
}

export default LandingPage;