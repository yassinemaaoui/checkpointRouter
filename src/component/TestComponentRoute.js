import react,{useState} from 'react';
import { useParams } from 'react-router';
import MyCard from "./MyCard"
import MyList from './MyList';
import MovieList from "../constant/MovieList"
import MyDescriptionCard from './MyDescriptionCard';
const TestComponentRoute = (id) =>{
//  const [list,setList]=useState(MovieList)
    
    const film = MovieList.find( movie => movie.id == id.match.params.id )
    
    
    console.log("id.match.params.id",id.match.params.id)
    return(
      
     <div style={{ display: "flex", justifyContent: "center",flexDirection:"column" }}>
       
          <MyDescriptionCard
            titre={film.titre}
            description={film.description}
            note={film.note}
            affiche={film.affiche}
            synopsis={film.synopsis}
            id={film.id}
          />
          
        
    
     </div>   
    )};
      
    
export default TestComponentRoute;