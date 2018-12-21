import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Results from './components/Results';


const BASE_URL = 'https://api.nextbigsound.com/search/v1/artists/';

class App extends Component {
 constructor(props){
   super(props);
   this.state = {
    artistData: [],
    benchmarkData: [],
    social: [],
    benchmarkMean:[],
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
    const benchmarkMean =[]
      for (let i = 0; i < benchmarks.length; i++) {
        benchmarkMean.push(benchmarks[i].mean)
      }
    this.setState({
      artistData:resp.data.artists[0],
      benchmarkData: benchmarks,
      social,
      benchmarkMean
    });
  }catch(e) {
    console.log(e);
    this.setState({
      artistData: null,
      benchmarkData: null,
      social: null,
      benchmarkMean: null
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
}


  render() {
    return (
      <div className="App">

        <Header handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

        { this.state.artistData
          ?
          <Results artistName={this.state.artistData.name} benchmarkMean={this.state.benchmarkMean} social={this.state.social}/>
          :
          <div className="no-results">
          <h1>No search results for "{this.state.artist}."</h1>
          <p>If your search terms have special characters, you must type the special character or end your search term before the character, i.e. "Beyoncé"  or "Beyonc" </p>
          </div>
        }

      </div>
    );
  }
}

export default App;
