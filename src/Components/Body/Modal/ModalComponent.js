import React, { Fragment } from 'react';
import ItemDisplay from '../Item/ItemDisplay';
import './ModalComponent.css';
export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
    }

    handleClose = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    handleShow = () => {
        const modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    render(){
        console.log(this.props.object);
        return(
            <Fragment>
                    <button id="mymodalbtn" onClick={this.handleShow} hidden>Open Modal</button>
                    

                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <div className="closecontainer">
                                <div className="heading"><h3>Food Recipe</h3></div>
                                <div id="close" className="close" onClick={this.handleClose}>&times;</div>
                            </div>
                            <div className="recipe">
                                <ItemDisplay obj={this.props.object} showBack='false'/>
                            </div>
                        </div>
                    </div>
            </Fragment>
            
        );
    }
}