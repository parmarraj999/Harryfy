import axios from 'axios';
import React, { useEffect } from 'react'

function App() {

  const getData = async() => {
    const response = await fetch("https://api.spotify.com/v1/albums/f5c193cd77ec4b80983881a119bbe2a2");
    const data = await response.json()
    console.log(data)
  }
  getData();
  return (
    <div>
      spotify clone
    </div>
  )
}

export default App