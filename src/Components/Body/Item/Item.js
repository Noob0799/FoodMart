import React, { Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Navbar from '../../Layout/Navbar';
import ItemDisplay from './ItemDisplay';

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

    goBack = () => {
        this.props.history.push('/Noob0799');
    }

    render() {

        return (
            <Fragment>
                <Navbar/>
                <ItemDisplay obj={this.state.foodItem} showBack='true' back={this.goBack}/>
            </Fragment>
        );
    }
}

export default withRouter(Item);