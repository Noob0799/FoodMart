import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import './Cards.css';

const useStyles = makeStyles({
  media: {
    height: 240,
    width: "100%"
  },
  style: {
    cursor: "pointer",
    height: 400
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
  

  let element = (
    <CardContent className={classes.even}>
      <p>{props.object.label}</p>
      <p>{props.object.name}</p>
      <p><b>{props.object.price}</b></p>
    </CardContent>
  );
  console.log(props.index);
  if(props.index%2 !== 0) {
    element = (
      <CardContent className={classes.odd}>
        <p>{props.object.label}</p>
        <p>{props.object.name}</p>
        <p><b>{props.object.price}</b></p>
      </CardContent>
    );
  }

  return (
    <Card className={classes.style} onClick={() => handleClick(props.object)}>
      <CardMedia
          className={classes.media}
          image={props.object.image}
          title="Food Items"
        />
        {element}
    </Card>
  );
}

export default CardComponent;