import React from 'react';
import './Item.css';

const ItemDisplay = (props) => {

    const handleClick = () => {
        props.back();
    }

    let backelem = null;
    if(props.showBack === 'true') {
        backelem = (
            <button type="button" className="btn btn-dark" onClick={handleClick}>Back</button>
        );
    }

    return (
        <div className="container info">
            <div className="row infodisp my-1">
                <div className="col-md-6 children">
                    <span className="back">
                        {backelem}
                    </span>
                    <div className="image">
                        <img src={props.obj.image} alt={props.obj.name} />
                    </div>
                    <div className="price">
                        <p>{props.obj.label}</p>
                        <p><b>{props.obj.price}$</b></p>
                    </div>
                </div>
                <div className="col-md-6 children">
                    <div className="name my-2">
                        <p><b>Category:</b> {props.obj.category}</p>
                        <p><b>Name:</b> {props.obj.name}</p>
                    </div>
                    <div className="description my-2">
                        <p>{props.obj.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDisplay;