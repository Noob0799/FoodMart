import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import './Item.css';

class Item extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            foodItem: {}
        };
        
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        const tempid = this.props.match.params.id;
        if (tempid) {
            let obj = {};
            Axios.get("http://starlord.hackerearth.com/recipe")
                .then(res => {
                    const data = res.data;
                    console.log(data);
                    for(let i=0;i<data.length;i++) {
                        if(data[i].id.toString() === tempid) {
                            obj = data[i];
                            break;
                        }
                    }
                    console.log(obj);
                    this.setState({
                        foodItem: obj
                    });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {

        return (
            <Fragment>
                <Navbar/>
                <div className="container info">
                    <div className="row my-5">
                        <div className="col-md-6 children">
                            <span className="back">
                                <button type="button" className="btn btn-dark" onClick={this.handleClick}>Back</button>
                            </span>
                            <div className="image">
                                <img src={this.state.foodItem.image} alt={this.state.foodItem.name} />
                            </div>
                            <div className="price">
                                <p>{this.state.foodItem.label}</p>
                                <p><b>{this.state.foodItem.price}$</b></p>
                            </div>
                        </div>
                        <div className="col-md-6 children">
                            <div className="name my-2">
                                <p><b>Category:</b> {this.state.foodItem.category}</p>
                                <p><b>Name:</b> {this.state.foodItem.name}</p>
                            </div>
                            <div className="description my-2">
                                <p>{this.state.foodItem.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Item);