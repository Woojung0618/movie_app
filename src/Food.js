// React Practice 1 code
// originally App.js
/*
import React from "react";
import PropTypes from "prop-types"

function Food({name, picture, rating}){ 
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id:1,
    name: "kimchi",
    rating: 4.9,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Various_kimchi.jpg"
  },
  {
    id:2,
    name: "chicken",
    rating: 1.5,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Female_pair.jpg"
  },
  {
    id:3,
    name: "pizza",
    rating: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Female_pair.jpg"
  }

]

function renderFood(dish){
  console.log(dish);
  return <Food 
    key={dish.id} 
    name={dish.name} 
    rating={dish.rating} 
    picture={dish.image} 
  />
}

function App() {
  return (
    <div> 
    {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
*/