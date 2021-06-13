import React from 'react';


const MyDescriptionCard =({titre,description,note,affiche,synopsis,id}) =>{

    return(
        <div style={{width:1000,height:300,border:1,borderColor:"red",borderStyle:"solid",display:"flex",margin:15}}>
            <img style={{width:230,height:300}} src={affiche}/>
            <div> 
                <h1>Titre :{titre}</h1>
                <h3>Note :{note}</h3>
                <h3> Description :{description}</h3>
                <p>Synopsis:{synopsis} </p>
            </div> 

        </div>
    )
}
export default MyDescriptionCard;