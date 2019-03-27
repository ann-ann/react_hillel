import React, {Component} from 'react';
import styles from './Main-content.module.css';
import SchoolList from './scool-list/school-list-component';
import MovieList from './movie-list/movie-list-component';
import Search from './Search';
import constants from '../../core/constants';
import axios from '../../core/axios';

const studies = constants.studies;

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies,
      limit: 15,
      searchValue: '',
      weatherResponse: '',
      weatherImage: '',
      movies: []
    }
  }

  showMore = (title) => {
    this.setState({
      movies: this.state.movies.map(c => {
        return c.title === title
          ? { ...c, isShowLess: !c.isShowLess }
          : c;
        }),
    });
  };

  handleLikeDislike = (title, prop) => {
    this.setState({
      movies: this.state.movies.map(c => {
        if(c.title === title){
          c[prop] = c[prop] + 1;
        }
        return c;
        }),
    });
  };

  handeSearch = (event) =>{
    this.setState({searchValue: event.target.value});

    let request = event.target.value;
    let data = {};
    var self = this;

    if(request.length >= 3){
      const weatherData = {
        params: {
          q: request,
          APPID: '7a9285deea31c55e823544c36192c8f8',
          units: 'metric'
        }
      };

      axios.get('http://api.openweathermap.org/data/2.5/weather?', weatherData)
        .then(function (response) {
          data = response.data;
          self.setState({
            weatherResponse: data.weather[0]['main'] + ', ' + data.weather[0]['description'] + ', temp: ' + data.main['temp'] + 'C, wind: ' + data.wind['speed'] + 'M/S',
            weatherImage: <img src={ 'http://openweathermap.org/img/w/' + data.weather[0]['icon'] + '.png'} alt='logo' className='index-logo'/>
          })
          console.log(response.data);
        })
        .catch(function(error) {
          console.log('error ' + error);
        });
    }
  };



  getMovies = (event) => {
    event.preventDefault();
    var self = this;
    const moviesData = {
      params: {
        limit: this.state.limit,
        api_key: '86aed7ccb863a80a0def7b9e6a00a283'
      }
    };

    axios.get('/discover/movie', moviesData)
      .then(function (response) {
        let movies = response.data.results;
        movies.map(c => {
          c.likes = 0;
          c.dislikes = 0;
          c.isShowLess = true;
          return c;
        });

        self.setState({ movies: movies })
        console.log(response.data.results);
      })
      .catch(function(error) {
        console.log('error ' + error);
      });
  };


  render() {
    if (this.props.title) {
      return (
        <div className={styles.someClass + ' container'}>
          <Search
            handeSearch={ this.handeSearch }
            value={ this.state.searchValue }
            weatherResponse={this.state.weatherResponse }
            weatherImage={this.state.weatherImage}
          />
          <div>
            <h4 className="get-weather">getMovies</h4>
            <button className='btn' onClick={this.getMovies}>Get movies</button>
          </div>
          <MovieList
            title='Movies'
            class={styles.newClass}
            movies={this.state.movies}
            showMore={ this.showMore }
            handleLikeDislike={ this.handleLikeDislike }
          />
        </div>
      )
    } else {
      return null;
      }
  }

}

export default MainContent;
