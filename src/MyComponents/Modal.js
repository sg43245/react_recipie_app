import React from 'react'

export default function Modal(props) {
    const {label,ingredients,calorie,ind,deleteShow,imageLink}=props;
    return (
        <>
        <div className="modal" id={ind}>
    <div className="modal-content">
        <button id="cross" onClick={()=>{deleteShow(ind)}}><i className="fas fa-times fa-2x" id="fa"></i></button>
        <div className="content">
            <div className="flex-modal">
            <div className="image-div">
                <img src={imageLink} alt="" ></img>
            </div>
            <div className="head-calorie">
                <h3>{label}</h3>
                <h4>(Calorie : {calorie})</h4>
            </div>
        </div>
        <h2>Ingredients</h2>
        <ul className="modal-ing">
            {ingredients.map((ingredient,i)=>(<li key={i}>{ingredient.text}</li>))}
        </ul>
    </div>
    </div>
</div>
        </>
    )
}
