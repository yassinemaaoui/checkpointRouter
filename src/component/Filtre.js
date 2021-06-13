import React,{useState} from 'react';
import MovieList from '../constant/MovieList';

const Filtre = () =>{
  const  [movies,setMovies]=useState(MovieList);
  const [search,setSearch]=useState("");

const handelChange = (event) =>{
event.preventDefault();
setSearch(event.target.value)
console.log("Search",search)
}

return(
<div style={{marginLeft:"74%",marginTop:20}}>

<input placeholder="Search" value={search} onChange={handelChange}/>


</div>
)
};
export default Filtre;