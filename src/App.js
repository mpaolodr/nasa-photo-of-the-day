import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [imageArr, setImageArr] = useState([]);
  const [image, setImage] = useState("");

  return (
    <div className="App">
      <h1>Photo of the Day!</h1>
    </div>
  );
}

export default App;
