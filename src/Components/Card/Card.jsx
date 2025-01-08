/* eslint-disable react/prop-types */

import FilledStar from "../../assets/filled-star.svg";
import EmptyStar from "../../assets/star.svg"

const Card = ({data}) => {
    return (
        <>
            <div className="card-container">
                {
                    data.map(elem => (
                        <div key={elem?.imdbID} className="movie-cart">
                            <img src={elem?.Poster} alt={elem?.Poster} className="img-cont"></img>
                            <div style={{ display: "flex",alignItems: "center", gap: "10px", padding: "0px 10px"}}>
                                <p className="title">{elem?.Title}</p><img className="star-img" src={FilledStar} alt={"FilledStar"}></img>
                            </div>
                            <p className="title">{elem?.Year}</p> 
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default Card;