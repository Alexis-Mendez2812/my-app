const initialState={
    games:[],
    gamed:{},
    allGames:[],
    Genres:[],
}


export default function rootReducer(state = initialState,action){

switch(action.type){
    case "GET_GAMES":
        return {
            ...state,
            games:action.payload,
            allGames:action.payload
        }
    case "VACIAR":
        return {
            ...state,
            gamed:{}
        }
    case "CREATE_GAME":
        return {
            ...state,
            gamed:action.payload
        }
    case "GET_NAME_GAMES":
        console.log(action.payload)
        return {
            ...state,
            games:action.payload

        }
    case "GET_ID_NAME":
        console.log(action.payload)
        return {
            ...state,
            game:action.payload

        }
    case "GET_GENRES":
        return {
            ...state,
            Genres:action.payload
        }
    case "FILTER_BY_GENRE":
        console.log(state.allGames)
        console.log(action)
        let filter = ""
        if(action.payload=== "api"||action.payload=== "db"){
             filter = action.payload === "api" ? state.allGames.filter(e=>typeof(e.id )=== "number" ) : 
            state.allGames.filter(e=>typeof(e.id )!== "number" )
        }else{

            filter = action.payload === "All" ? state.allGames : 
            state.allGames.filter ((e)=>
            isInclude(e.Genres,action.payload)
            )
            console.log("filter")
            console.log(filter)
        }
    
    return {
            ...state,
            games: filter
        }

    case "FILTER_BY_ORDER":
        console.log(state.allGames)
        console.log(action)
        /* 
asc
des
high
low */
let order= ""
switch (action.payload) {
    
    case "asc":order= state.games.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});break;
    case "des":order= state.games.sort(function (a, b) {
  if (a.name < b.name) {
    return 1;
  }
  if (a.name > b.name) {
    return -1;
  }
  return 0;
});break;
    case "high":order= state.games.sort(function (a, b) {
  if (Number(a.rating) < Number(b.rating)) {
    return 1;
  }
  if (Number(a.rating) > Number(b.rating)) {
    return -1;
  }
  return 0;
});break;
    case "low":order= state.games.sort(function (a, b) {
  if (Number(a.rating) > Number(b.rating)) {
    return 1;
  }
  if (Number(a.rating) < Number(b.rating)) {
    return -1;
  }
  return 0;
});break;

    default:order=state.games ;
}
    
    return {
            ...state,
            games: order
        }
    default: return {state}
}


}

function isInclude(arr,genre){
  let esta= false
  for(let i=0;i<arr.length;i++){
    if(arr[i].name.includes(genre)){esta=true}
  }
  return esta 
}