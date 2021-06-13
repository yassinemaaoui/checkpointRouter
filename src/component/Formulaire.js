// import React,{useState} from 'react';
// import MovieList from "../constant/MovieList"
// import MyCard from "./MyCard"
// const Formulaire=() =>{
//     const  [valeur, setValeur] = useState
//     ({
//     titre: "",
//     description: "",
//     note: "",
//     affiche: "",
//   });  
//     const [movies, setMovies] = useState(MovieList);
//     const handleClick = () =>{
        
//         setMovies([...movies,{titre: valeur.titre , description : valeur.description , affiche:valeur.affiche , note:valeur.note}]) 
//         };
        
        
           
                
//             console.log(valeur)
//             console.log(MovieList)
//     return(
        
      
     
       
        
//         <div style={{ display: "flex", justifyContent: "center",marginTop:25}}>
          
//  <form>
//             <div >
//               <label > Titre</label>
              
//               <input value={valeur.titre} onChange={(event)=>setValeur({...valeur,titre:event.target.value})}  />
//             </div>
//             <div>
//               <label > Note </label>
//               <input value={valeur.note} onChange={(event)=>setValeur({...valeur,note:event.target.value})}  />
//             </div>
//             <div>
//               <label > Affiche </label>
//               <input value={valeur.affiche} onChange={(event)=>setValeur({...valeur,affiche:event.target.value})}  />
//             </div>
//             <div>
//               <label > Description </label>
//               <input value={valeur.description} onChange={(event)=>setValeur({...valeur,description:event.target.value})}  />
//             </div>
//             <button
//              type="button"
//               onClick={handleClick}
//               style={{ textAlign: "center" }}
//             >
                
//               Ajouter
//             </button>
//           </form>
//         </div>
//     );
// };

// export default Formulaire 