import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`;
YTSearch({ key: API_KEY, term: 'react js' }, (data) => {
  console.log(data);
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: []
    }
    YTSearch({ key: API_KEY, term: 'react js' }, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;