import React, { useState, useEffect } from "react";
import { AppContainer } from "./components/Styles.js";

//COMPONENTS
import Card from "./components/Card.js";

//API
import axios from "axios";

//STYLES
import "./App.scss";

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
        `https://api.nasa.gov/planetary/apod?date=${date}&api_key=nsgoV8jb5FEeibHFBrKf2IpoDDWzanILaYUbaiCJ`
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
    <AppContainer>
      <h1>Photo of the Day!</h1>
      <Card
        image={image}
        date={date}
        title={title}
        exp={exp}
        dateChange={() => dateChange(document.getElementById("date").value)}
      />
    </AppContainer>
  );
}

export default App;
