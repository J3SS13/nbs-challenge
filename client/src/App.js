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
    social: [],
    benchmark_mean:[],
    artist: 'warpaint'
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

async fetchArtistData(artist){
  try {
    const resp = await axios(`${BASE_URL}?query=${artist}&limit=1&access_token=${process.env.REACT_APP_API_KEY}`)
    const benchmarks = Object.values(resp.data.artists[0].stage.benchmarks)
    const social =  Object.keys(benchmarks).map((key, index) => {
      return benchmarks[key].metric.full_name;
      })
    const benchmark_mean =[]
      for (let i = 0; i < benchmarks.length; i++) {
        benchmark_mean.push(benchmarks[i].mean)
      }
    this.setState({
      artistData:resp.data.artists[0],
      benchmarkData: benchmarks,
      social,
      benchmark_mean
    });
  }catch(e) {
    console.log(e);
    this.setState({
      artistData: null,
      benchmarkData: null,
      social: null,
      benchmark_mean: null
  })
}
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

        { this.state.artistData
          ?
          <Results artistName={this.state.artistData.name} mean={this.state.benchmark_mean}  />
          :
          <div className="no-results">
          <h1>No search results for "{this.state.artist}."</h1>
          <p>Please broaden your search by excluding spaces and special characters.</p>
          </div>
        }

      </div>
    );
  }
}

export default App;
