import React from "react";
import { useEffect } from "react";

//54349747

const API_URL = 'http://www.omdbapi.com/?apikey=54349747'

const App = () =>{

    const searchMovies = async (tittle) =>{
        const response = await fetch(`${API_URL}&s=${tittle}`)
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Shrek')
    },[])

    return(
        <h1>App</h1>
    );


}

export default App;