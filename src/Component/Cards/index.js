import React from "react";


const Cards = (props) => {

const {id,name,preview,description}=props

    return(
        
        <div className="card card-width" key={id}>
             <img src={preview} className="card-img-top" alt="alt" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href=" "  className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    );

}

export default Cards;