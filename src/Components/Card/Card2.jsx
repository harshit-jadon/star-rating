/* eslint-disable react/prop-types */

import { useState } from "react";
import FilledStar from "../../assets/filled-star.svg";
import EmptyStar from "../../assets/star.svg";
// import Popup from "../Popup/Popup";

const Card2 = ({data}) => {

    const [openRating, setOpenRating] = useState(false);

    console.log(openRating)
    return (
        <>
            <div className="card-container">
                {
                    data.map(elem => (
                        <div key={elem?.imdbID} className="movie-cart">
                            <img src={elem?.Poster} alt={elem?.Poster} className="img-cont"></img>
                            <div className="rating-container">
                                <div className="rating-box">
                                    <img className="star-img" src={FilledStar} alt={"FilledStar"}></img>
                                    <p className="title">{"6.7"}</p>
                                </div>
                                <img className="star-img" style={{cursor:"pointer"}} src={EmptyStar} alt={"EmptyStar"} onClick={()=>setOpenRating(true)}></img>
                            </div>
                                <p className="title">{elem?.Title}</p>
                            <p className="title">{elem?.Year}</p>
                           <button className="button-cont" style={{color:"#3688FF"}}>Showtimes</button>
                           <button className="button-cont">Trailer</button>
                        </div>
                    ))
                }
                {
                    openRating && (
                        <div id="popup1" className="overlay">
                           <div className="popup">
                                <h2>ssjdhjdh</h2>
                                <a className="close" href="#">&times;</a>
                                <div className="content">
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            
        </>
    )
}

export default Card2;