import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Cards.css';

const useStyles = makeStyles({
  media: {
    height: 290,
    width: "100%"
  },
  style: {
    cursor: "pointer",
    height: 500
  },
  odd: {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px"
    
  },
  even: {
    backgroundColor: "white",
    color: "black",
    fontSize: "20px"
  }
});


const CardComponent = (props) => {
  const classes = useStyles();
  
  const handleClick = (obj) => {
    props.click(obj);
  }

  const handleModal = (obj) => {
    props.modal(obj);
  }
  

  let element = (
    <CardContent className={classes.even}>
      <label>{props.object.label}</label><br/>
        <label>{props.object.name}</label><br/>
        <label><b>{props.object.price}</b></label><br/>
      <button type="button" className="btn btn-dark btn-sm" onClick={() => handleModal(props.object)}>Show</button>
    </CardContent>
  );

  console.log(props.index);
  if(props.index%2 !== 0) {
    element = (
      <CardContent className={classes.odd}>
        <label>{props.object.label}</label><br/>
        <label>{props.object.name}</label><br/>
        <label><b>{props.object.price}</b></label><br/>
        <button type="button" className="btn btn-light btn-sm" onClick={() => handleModal(props.object)}>Show</button>
      </CardContent>
    );
  }

  return (
    <Card className={classes.style}>
      <CardMedia
          className={classes.media}
          image={props.object.image}
          title="Food Items"
          onClick={() => handleClick(props.object)}
        />
        {element}
    </Card>
  );
}

export default CardComponent;