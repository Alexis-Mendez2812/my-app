import axios from "axios";

export function getGames(){
    return async function(dispatch){
        let json = await axios.get("/games");
        return dispatch({
            type: "GET_GAMES",
            payload:json.data
        })
    }
}
export function vaciar(){
    
       
        return {
            type: "VACIAR",
        }
    
}

export function getNameGame(name){
    return async function(dispatch){
     try{

         let json = await axios.get(`/games/search?name=${name}`);
         console.log(json)
         return dispatch({
             type: "GET_NAME_GAMES",
             payload:json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function getIdGame(id){
    return async function(dispatch){
     try{

         let json = await axios.get(`/games/${id}`);
         return dispatch({
             type: "GET_ID_NAME",
             payload:json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}
export function createGame(game){
    return async function(dispatch){
     try{

         let json = await axios.post(`/games/post`,game);
         console.log("el juego creado es")
         console.log(json.data)
         return dispatch({
             type: "CREATE_GAME",
             payload:json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getGenres(){
    return async function(dispatch){
    try{

        let json = await axios.get("/genres",{});
        return dispatch({
            type: "GET_GENRES",
            payload:json.data
        })
    }catch(error){
        console.log(error)
        }
    }
}

export function filterByGenre(genre){
         return {
            type: "FILTER_BY_GENRE",
            payload:genre
        }}

export function filterByOrder(order){
         return {
            type: "FILTER_BY_ORDER",
            payload:order
        }}