import React, { useState, useEffect } from "react";
import MovieList from "./constant/MovieList";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";

import Filtre from "./component/Filtre";
import MyCard from "./component/MyCard";
import MyList from "./component/MyList";
import TestComponentRoute from "./component/TestComponentRoute";
import Formulaire from "./component/Formulaire";
import MyDescriptionCard from "./component/MyDescriptionCard";

function App() {
  return (
    <div>
      

     
      <Switch>
        <Route exact path='/' component={MyList}/>
      <Route exact path="/:id" component={TestComponentRoute} />
      </Switch>
    

    </div>
  );
}

export default App;
