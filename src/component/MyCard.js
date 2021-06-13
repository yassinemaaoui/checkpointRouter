import React, {useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import MovieList from '../constant/MovieList';
import MyList from './MyList';
import TestComponentRoute from './TestComponentRoute';



function MyCard({titre,description,note,affiche,id}){

 
    return(
        <div style={{borderColor:"black",border:1,borderStyle:"solid",width:230,height:374,margin:15}}>

        <div style={{width:230,height:300,borderColor:"black",borderStyle:"solid",border:2}}>
          <img style={{width:230,height:300}} src={affiche}/>
        </div>
        <div  style={{display :"flex",justifyContent:"space-between",alignItems:"baseline",width:230}}>
        <h4 style={{marginTop:0,marginBottom:0,paddingLeft:10}}>{titre}</h4> 
        <h6 style={{marginTop:0,marginBottom:0}}>note : {note}</h6>
        
        </div>
        <p style={{marginTop:0,marginBottom:0,paddingLeft:10}}>Description : {description}</p>
        <Link to={`/${id}`} ><button >Details</button></Link>

        </div>
    )
}
export default MyCard;