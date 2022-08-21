


// action types
export const ADD_MOVIES='ADD_MOVIES';
export const ADD_FAVOURITES='ADD_FAVOURITES';
//action creaters
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies:movies
    }
}
export function addFavourite(movie){
    return {
        type:ADD_FAVOURITES,
        movie:movie
    }
}