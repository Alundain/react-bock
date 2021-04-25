import React from "react";
import Advertisement from "./component/Advertisement";
import Navegation from "./component/Navegation";
import Header from "./component/Header"
import Subcontent from "./component/Subcontent"
import Main from "./component/Main"

function App() {
  return (
    <div className= "app">
       <Header/>
       <Navegation/>      
       <Main/>
          <Subcontent/>
          <Subcontent/>
          <Subcontent/>
      <Advertisement/>
      <Main/>
    </div>
  );
}

export default App;
