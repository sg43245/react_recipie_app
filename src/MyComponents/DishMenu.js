import React from 'react'
import Modal from './Modal';

export default function DishMenu(props) {
    return (
        <>
        <div className="box" id="box1">
                <div className="image-container"><img src={props.imageLink} alt=""></img></div>
                <div className="label">{props.label}</div>
                <button className="ing btn-modal" onClick={()=>{props.modalShow(props.ind)}}>Ingredients</button>
        </div>
        <Modal key={props.ind} ind={props.ind} imageLink={props.imageLink} deleteShow={props.deleteShow} label={props.label} calorie={props.calorie} ingredients={props.ingredients}></Modal>
        </>
    )
}
