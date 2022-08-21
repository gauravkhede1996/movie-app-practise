import {data} from '../data';
import React from 'react';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import {addMovies} from '../actions';
class App extends React.Component{
  componentDidMount(){
    //make API call
    //dispatch action
    const {store}=this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("STATE",this.props.store.getState());
  }
  isFavourite=(movie)=>{
    const {favourites }=this.props.store.getState();
    let index=favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;

  }
  render(){
  const {list}= this.props.store.getState(); //{list:[],favourites:[]}  
  console.log("Current state is : ",this.props.store.getState());
  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>
        <div className="list">
          {list.map((movie,index)=>{
            return <MovieCard movie={movie} key={`movies-${index}`} dispatch={this.props.store.dispatch} isFavourite={this.isFavourite(movie)}/>
          })}

        </div>
      </div>
    </div>
  );
        }
}

export default App;
