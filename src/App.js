import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = `${process.env.REACT_APP_API_KEY_YT}`;
YTSearch({ key: API_KEY, term: 'react js' }, (data) => {
  console.log(data);
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      selected: null
    }
    this.videoSearch('react js');
  }
  videoSearch(term){
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selected: videos[0] });
    });
  }

  selectVideo = (selected) => {
    this.setState({selected})
  }

  handlerSearch = (term) => {
    this.videoSearch(term)
  }
  render() {
    return (
      <div className="App">
        <SearchBar handlerSearch={this.handlerSearch}/>
        <VideoDetail video={this.state.selected}/>
        <VideoList 
          videos={this.state.videos} 
          selectVideo={this.selectVideo}
        />
      </div>
    );
  }
}

export default App;