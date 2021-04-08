
import React from 'react';
import './App.css';


function App() {
  return (
    
    <>
    <div className="App-header">
    render() {
    function changeFunc() {
      const x = document.getElementById("mySelect").value
      
      switch (x){
        case '1':
          return (
            <video  src='../bunny-ears.mp4' autoPlay loop muted />
          )
        case '2':
          return (
            <video  src='../outer-space.mp4' autoPlay loop muted />
          )
        case '3':
          return (
            <video  src='../superhero-yeti.mp4' autoPlay loop muted />
          )
        case '4':
          return (
            <img src='../toboggan.jpg' alt="4"/>
          )
        case '5':
          return (
            <img src='../yeti-village.jpg' alt="5"/>
          )
       default:
          return (
            <video  src='../bunny-ears.mp4' autoPlay loop muted />
          )
        }
      }
    }

      <select id = "mySelect select-bg" onchange="changeFunc();" name="select-bg" >
        <option value="1" > video--bunny-ears </option>
        <option value="2">video--outer-space</option>
        <option value="3">video--superhero-yeti</option>
        <option value="4">img--toboggan</option>
        <option value="5">img--yeti-village</option>
      </select>
      <video className="App-header" src='../outer-space.mp4' autoPlay loop muted />
    </div>
    </>
    
  );
}

export default App;
