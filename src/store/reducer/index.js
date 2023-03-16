import {GET_BREEDS, SORT, GET_TEMPERAMENTS, FILTER_TEMPERAMENT, FILTER_DB_OR_API_BREED, SEARCH_BREED_NAME, POST_NEW_BREED, CURRENT_PAGE_FUNCTION} from "../actions";


const initialState = {
    breeds: [],
    temperaments: [],
    noModificationBreeds: [],
    currentPage: 1,
    order: "",
    filterBreed: "",
    filterTemperament: ""
}

export default function reducer(state=initialState, action){ 
    switch(action.type){

        case GET_BREEDS: 
            return{
                ...state,
                breeds: action.payload,
                noModificationBreeds: action.payload
            }

        case SEARCH_BREED_NAME:
            return{
                ...state,
                breeds: action.payload    
            }
            
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload
            }

        case POST_NEW_BREED:
            return{
                ...state    
            }

        case CURRENT_PAGE_FUNCTION:
            return{
                ...state,
                currentPage: action.payload
            }

        case FILTER_TEMPERAMENT: //payload: "Stubborn" 
            let {noModificationBreeds, order, filterBreed, /* filterTemperament */} = state;
            let filteredBreedsTemperament = action.payload === "" ? noModificationBreeds : noModificationBreeds.filter(breed => breed.temperament.includes(action.payload)); 
            if(filterBreed){
                filteredBreedsTemperament = filterBreed === "Api" 
                ? filteredBreedsTemperament.filter(e => typeof e.id === "number") 
                : filteredBreedsTemperament.filter(e => typeof e.id === "string");
            }
            if(order){
                filteredBreedsTemperament = filteredBreedsTemperament.sort((a, b) => {
                    if(order === "ascendente" || order === "descendente"){
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return order === "ascendente" ? 1 : -1; 
                        }
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return order === "ascendente" ? -1 : 1;
                        }
                    }
                    if(order === "minWeight"){
                        if(a.min_weight > b.min_weight){
                            return 1; 
                        }
                        if(a.min_weight < b.min_weight){
                            return -1;
                        }
                    }
                    if(order === "maxWeight"){
                        if(a.max_weight > b.max_weight){
                            return -1; 
                        }
                        if(a.max_weight < b.max_weight){
                            return 1;
                        }
                    }
                    return 0
                })
            }
            return{
                ...state,
                filterTemperament: action.payload,
                breeds: filteredBreedsTemperament.length > 0 ? filteredBreedsTemperament : ["No created breeds yet"]
            };

        case FILTER_DB_OR_API_BREED: // payload: "" - "Api" - "Db"
            let noModificationBreeds2 = state.noModificationBreeds;
            let order2 = state.order;
            // let filterBreed2 = state.filterBreed;
            let filterTemperament2 = state.filterTemperament;
            let filteredBreedsDbApi = action.payload === "" ? noModificationBreeds2 : action.payload === "Api" ? noModificationBreeds2.filter(e => typeof e.id === "number") : noModificationBreeds2.filter(e => typeof e.id === "string");
            if(filterTemperament2){
                filteredBreedsDbApi = filteredBreedsDbApi.filter(breed => breed.temperament.includes(filterTemperament2))
            }
            if(order2){
                filteredBreedsDbApi = filteredBreedsDbApi.sort((a, b) => {
                    if(order2 === "ascendente" || order2 === "descendente"){
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return order2 === "ascendente" ? 1 : -1; 
                        }
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return order2 === "ascendente" ? -1 : 1;
                        }
                    }
                    if(order2 === "minWeight"){
                        if(a.min_weight > b.min_weight){
                            return 1; 
                        }
                        if(a.min_weight < b.min_weight){
                            return -1;
                        }
                    }
                    if(order2 === "maxWeight"){
                        if(a.max_weight > b.max_weight){
                            return -1; 
                        }
                        if(a.max_weight < b.max_weight){
                            return 1;
                        }
                    }
                    return 0
                })
            }
            return{
                ...state,
                filterBreed: action.payload,
                breeds: filteredBreedsDbApi.length > 0 ? filteredBreedsDbApi : ["No created breeds yet"]
            }

        case SORT:  //payload: "ascendente" - "descendente" - "minWeight" - "maxWeight"
            let orderedBreeds = [...state.breeds];
            orderedBreeds = orderedBreeds.sort((a, b) => {
                if(action.payload === "ascendente" || action.payload === "descendente"){
                    if(a.name.toLowerCase() > b.name.toLowerCase()){
                        return action.payload === "ascendente" ? 1 : -1; 
                    }
                    if(a.name.toLowerCase() < b.name.toLowerCase()){
                        return action.payload === "ascendente" ? -1 : 1;
                    }
                }
                if(action.payload === "minWeight"){
                    if(a.min_weight > b.min_weight){
                        return 1; 
                    }
                    if(a.min_weight < b.min_weight){
                        return -1;
                    }
                }
                if(action.payload === "maxWeight"){
                    if(a.max_weight > b.max_weight){
                        return -1; 
                    }
                    if(a.max_weight < b.max_weight){
                        return 1;
                    }
                }
                return 0;
            })
            return{
                ...state,
                order: action.payload,
                breeds: orderedBreeds.length > 0 ? orderedBreeds : ["No created breeds yet"]
            }
        default: 
            return state
    }
};


