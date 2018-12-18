import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

const BASE_URL = 'https://api.nextbigsound.com/search/v1/artists/';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
    artistData: [],
    benchmarkData: [],
    artistName: '',
    artist: 'warpaint'
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

async fetchArtistData(artist){
  const resp = await axios(`${BASE_URL}?query=${artist}&limit=1&access_token=${process.env.REACT_APP_API_KEY}`)
  console.log(resp.data.artists);
  this.setState({
    artistData:resp.data.artists,
    benchmarkData: resp.data.artists[0].stage.benchmarks,
    artistName: resp.data.artists[0].name,
  })
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


async handleSubmit(e){
  e.preventDefault();
  const resp = await this.fetchArtistData(this.state.artist);
  console.log(resp)
}

  render() {
    return (
      <div className="App">
      <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <Results artistName={this.state.artistName}  />
      </div>
    );
  }
}

export default App;
