import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Chart from './components/Chart';

const BASE_URL = 'https://api.nextbigsound.com/search/v1/artists/';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
    artistData: [],
    artistName: '',
    artist: 'warpaint'
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

async fetchArtistData(artist){
  const resp = await axios(`${BASE_URL}?query=${artist}&limit=1&access_token=${process.env.REACT_APP_API_KEY}`)
  this.setState({
    artistData:resp.data.artists[0],
  });
}

async componentDidMount(){
  this.fetchArtistData(this.state.artist);
}

handleChange(e){
  const { name, value } = e.target
  this.setState({
    [name]: value
  });
}

// getBenchmarks(){
//   const keys = [11, 28, 44, 410, 412] // This will need to be scalable, get keys from object, with corresponding name instead
//   const benchmarks = keys.map(n => this.state.artistData.stage.benchmarks[n]);
//   console.log(benchmarks)
//  }


async handleSubmit(e){
  e.preventDefault();
  const resp = await this.fetchArtistData(this.state.artist);
  console.log(resp)
}

// write ternary in teh return based on state to show "no results" when user enters name that cannot be found
  render() {
    return (
      <div className="App">
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>


      <Results artistName={this.state.artistData.name}  />
      <Chart  stage="[12,34,52, 25, 23]"/>
      </div>
    );
  }
}

export default App;
