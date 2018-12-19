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
    benchmarkData: [],
    social: [],
    benchmark_mean:[],
    artistName: '',
    artist: 'warpaint'
   }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

async fetchArtistData(artist){
  const resp = await axios(`${BASE_URL}?query=${artist}&limit=1&access_token=${process.env.REACT_APP_API_KEY}`)
  const benchmarks = Object.values(resp.data.artists[0].stage.benchmarks)

  // console.log(benchmarks[1].mean)
  //
  // // const values = benchmarks.map(b => Object.values(benchmarks[b]))
  // //
  //
  //
  const social =  Object.keys(benchmarks).map((key, index) => {
  return benchmarks[key].metric.full_name;
  })
  //

  // const mean_benchmark = Object.values(benchmarks).map((key, index) => {
  //  return benchmarks[key].mean;
  //  })

  const benchmark_mean =[]
  for (let i = 0; i < benchmarks.length; i++) {
    benchmark_mean.push(benchmarks[i].mean)
  }


  //

  //  console.log(mean_benchmark);

// const mean = benchmarks.map(obj => obj.mean )
// console.log(mean);

  this.setState({
    artistData:resp.data.artists[0],
    benchmarkData: benchmarks,
    social,
    benchmark_mean
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

getBenchmarkName(){
const names =  this.state.benchmarkData.map(i => i.metric.full_name );
  console.log(names)
 }


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

      { this.state.artistData
        ?
        <div>
        <Results artistName={this.state.artistData.name}  />
        <Chart  mean={this.state.benchmark_mean}/>
        </div>
        :
        <h1> No Search Results </h1>

      }



      </div>
    );
  }
}

export default App;
