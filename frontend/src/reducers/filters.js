/**
 *  Filter Data Reducers
 */
export default (state = {category: [],size:[],color: [], ratings:"",value: { min: 0, max: 15000 },search:"",sortOrder: ""}, action) => {
    if(action.type == "GET_CATEGORY_VALUE")
    {
        return {
            ...state,
            category: action.category
        };
    }
    else if(action.type == "GET_SIZE_VALUE")
    {
        return {
                    ...state,
                    sizes: action.size
                };
    }
    else if(action.type == "GET_COLOR_VALUE")
    {
     return {
                ...state,
                color: action.color
            };
    }
    else if(action.type == "GET_PRICE_VALUE")
    {
        return {
                    ...state,
                    value: {min: action.value.value.min, max: action.value.value.max }
                };
    }
    else if(action.type == "GET_SORT_BY_VALUE")
    {
        return {
                        ...state,
                        sortOrder: action.sort_by
                    };
    }
    else if(action.type == "GET_RATING_VALUE")
    {
        return {
                        ...state,
                        ratings: action.rating
                    };
    }
    else if(action.type == "RESULT_SEARCH_VALUE")
    {
        return{
                        ...state,
                        search:action.search
                    }
    }
    else
    {
        return state;
    }    
}