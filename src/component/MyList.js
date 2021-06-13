import React, { useState,useEffect} from "react";
import MovieList from "../constant/MovieList"
import { Link, Route, Switch } from "react-router-dom";

import MyCard from "./MyCard";
import TestComponentRoute from "./TestComponentRoute";
import MyDescriptionCard from "./MyDescriptionCard";

function MyList(props) {
  const  [valeur, setValeur] = useState
    ({
    titre: "",
    description: "",
    note: "",
    affiche: "",
  });
  const [movies, setMovies] = useState(MovieList);
    
  const handleClick = () =>{
  
  setMovies([...movies,{titre: valeur.titre , description : valeur.description , affiche:valeur.affiche , note:valeur.note}]) 
  };
  
  return (
    
    <div>
      <div style={{ display: "flex", justifyContent: "center",flexWrap:"wrap" }}>
        {movies.map((movie) => (
          <MyCard
            titre={movie.titre}
            description={movie.description}
            note={movie.note}
            affiche={movie.affiche}
            id={movie.id}
          />
          
        ))}
    
      </div>
      {/* <Link to="/details"><button>Details</button></Link>
      <Switch>
        <Route exact path='/' component={MyList}/>
      <Route exact path="/details" render={TestComponentRoute} />
      
      </Switch> */}
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          
          <form>
            <div>
              <label > Titre</label>
              <input value={valeur.titre} onChange={(event)=>setValeur({...valeur,titre:event.target.value})}  />
            </div>
            <div>
              <label > Note </label>
              <input value={valeur.note} onChange={(event)=>setValeur({...valeur,note:event.target.value})}  />
            </div>
            <div>
              <label > Affiche </label>
              <input value={valeur.affiche} onChange={(event)=>setValeur({...valeur,affiche:event.target.value})}  />
            </div>
            <div>
              <label > Description </label>
              <input value={valeur.description} onChange={(event)=>setValeur({...valeur,description:event.target.value})}  />
            </div>
            <button
             type="button"
              onClick={handleClick}
              style={{ textAlign: "center" }}
            >
              Ajouter
            </button>
          </form>
         
        </div>
      </div>
    </div>
  );
}
export default MyList;

