import React, { useState, useEffect } from "react";

//COMPONENTS
import Card from "./components/Card.js";

//API
import axios from "axios";

//STYLES
import "./App.css";

function App() {
  const [image, setImage] = useState([]);
  const [date, setDate] = useState([]);
  const [exp, setExp] = useState([]);
  const [title, setTitle] = useState([]);

  //Handler to be attached to an input field
  const dateChange = newDate => {
    setDate(newDate);
  };

  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=nsgoV8jb5FEeibHFBrKf2IpoDDWzanILaYUbaiCJ`
      )
      .then(res => {
        setImage(res.data.url);
        setExp(res.data.explanation);
        setTitle(res.data.title);
        setDate(res.data.date);
      })
      .catch(err => console.log(err));
  }, [date]);

  return (
    <div className="App">
      <h1>Photo of the Day!</h1>
      <Card image={image} date={date} title={title} exp={exp} />
    </div>
  );
}

export default App;

{
  /* <div className="cardContainer">
          <div className="imageContainer">
            <img src="" alt=""/>
          </div>
          <div className="descContainer">
            <p>Desc</p>
            <p>Desc</p>
            <p>Desc</p>
          </div>
        </div> */
}
