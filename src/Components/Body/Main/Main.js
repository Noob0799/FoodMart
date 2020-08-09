import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from "react-router-dom";
import Axios from 'axios';
import Card from '../Cards/Card';
import Navbar from '../../Layout/Navbar';
import Modal from '../Modal/ModalComponent'
import './searchbox.css';
import './Main.css';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foodData: [],
            suggestions: [],
            suggested: 'All'
        };
        
    }

    componentDidMount() {
        console.log("Component mounted!!");
        Axios.get("http://starlord.hackerearth.com/recipe")
            .then(res => {
                console.log(res.data);
                this.setState({
                    foodData: res.data
                });
                this.displaydata();
            })
            .catch(err => {
                console.log(err);
            })
    }

    displaydata = () => {
        const n = this.state.foodData.length;
        let count = 0;
        const rowElem = document.createElement('div');
        rowElem.setAttribute('class', 'row my-1');
        for(let i=0;i<n ;i++){
            const colElem = document.createElement('div');
            colElem.setAttribute('class', 'col-3 my-1');
            colElem.setAttribute('id', 'prod'+count);
            count++;
            rowElem.appendChild(colElem);
            document.getElementById('container').appendChild(rowElem);
            if(count === n) break;
        }
        for(let i=0;i<n;i++) {
            ReactDOM.render(<Card object={this.state.foodData[i]} click={this.handleClick} index={i} modal={this.handleModal}/>, document.getElementById('prod'+i));
        }
    }

    displayfiltereddata(data) {
        document.getElementById('container').innerHTML = '';
        const n = data.length;
        let count = 0;
        const rowElem = document.createElement('div');
        rowElem.setAttribute('class', 'row my-1');
        for(let i=0;i<n ;i++){
            const colElem = document.createElement('div');
            colElem.setAttribute('class', 'col-3 my-1');
            colElem.setAttribute('id', 'filtprod'+count);
            count++;
            rowElem.appendChild(colElem);
            document.getElementById('container').appendChild(rowElem);
            if(count === n) break;
        }
        for(let i=0;i<n;i++) {
            ReactDOM.render(<Card object={data[i]} click={this.handleClick} index={i} modal={this.handleModal}/>, document.getElementById('filtprod'+i));
        }
    }

    handleModal = (obj) => {
        console.log(obj.name);
        ReactDOM.render(<Modal object={obj}/>,document.getElementById('modaldisp'));
        document.getElementById('mymodalbtn').click();
    }
    
    handleClick = (obj) => {
        console.log(obj);
        this.props.history.push({
            pathname: '/food/' + obj.id,
            data: obj
        });
    }

    handleChange = (e) => {
        const tempfood = [...this.state.foodData];
        console.log(e.keyCode,e.target.value);
        const inputval = e.target.value;
        if(e.target.value.length === 0) {
            this.setState({
                suggestions: [],
                suggested: 'All'
            });
            document.getElementById('container').innerHTML = '';
            this.displaydata();
            return;
        }
        let suggestedvalues = [];
        let key,value;
        for(let i=0;i<tempfood.length;i++) {
            for(key in tempfood[i]) {
                if(key === 'image' || key === 'id') continue;
                if(suggestedvalues.length <=5) {
                    value = tempfood[i][key];
                    console.log(value, value.toString().indexOf(inputval));
                    if(value.toString().toLowerCase().indexOf(inputval) > -1) {
                        suggestedvalues.push(value);
                    }
                }
            } 
        }
        this.setState({
            suggestions: [...suggestedvalues]
        });
        console.log(suggestedvalues);
    }

    search = (name) => {
        console.log(name);
        const templist = [];
        this.state.foodData.forEach(obj => {
            // console.log(obj.name,obj.category);
            if(obj.name.includes(name)) {
                templist.push(obj);
            } else if(obj.category.includes(name)){
                templist.push(obj);
            }
        });
        console.log(templist);
        this.setState({
            suggestions: [],
            suggested: name
        });
        this.displayfiltereddata(templist);
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            const valtosearch = this.state.suggestions[0];
            this.search(valtosearch);
        }
    }

    render() {
        return (
            <Fragment>
                <Navbar/>
                <div className="search my-2">
                    <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
                </div>
                <ul className="searchcontainer">
                {
                    this.state.suggestions.map(elem => {
                        return (
                            <li key={{elem}+Math.random()} >
                                <button type="button" className="searchsuggest"
                                onClick={() => {
                                    this.search(elem);
                                }}>{elem}</button>
                            </li>
                        )
                    })
                }
                </ul>
                <div className="searchdisp px-1" id="searchdisp">
                    <p><b>Category: </b>{this.state.suggested}</p>
                </div>
                <div className="parent" id="parent">
                    <div className="child p-5 m-1">
                        <span id="container"></span>
                    </div>
                </div>
                <span id="modaldisp"></span>
            </Fragment>
        );
    }
}

export default withRouter(Main);