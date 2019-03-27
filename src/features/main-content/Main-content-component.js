import React, {Component} from 'react';
import styles from './Main-content.module.css';
import SchoolList from './scool-list/school-list-component';
import Search from './Search';
import constants from '../../core/constants';
import axios from '../../core/axios';
// import axios from 'axios';

const studies = constants.studies;

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies,
      limit: 15,
      searchValue: ''
    }
  }

  showMore = (title) => {
    this.setState({
        studies: this.state.studies.map(c => {
            return c.title === title
                ? { ...c, isShowLess: !c.isShowLess }
                : c;
        }),
    });
  };

  handleLikeDislike = (title, prop) => {
    this.setState({
        studies: this.state.studies.map(c => {

            if(c.title === title){
              c[prop] = c[prop] + 1;
            }
            return c;

        }),
    });
  };

  // getWeather = (event) =>{
  //   console.log('Get weather');
  //   event.preventDefault();

  //   let link = `https://api.openweathermap.org/data/2.5/weather?q=`;
  //   let city = 'Calgary';
  //   let api = 'APPID=7a9285deea31c55e823544c36192c8f8';

  //   axios.get(`${link}${city}&${api}&units=metric`, {
  //   })
  //   .then(data=> {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })

  // };

  handeSearch = (event) =>{
    this.setState({searchValue: event.target.value});

    let request = event.target.value;

    if(request.length >= 3){
      this.setState({searchValue: request});

      // axios.create({
      //     baseURL: 'http://api.openweathermap.org/data/2.5/',
      // });

      const weatherData = {
        params: {
          q: request,
          APPID: '7a9285deea31c55e823544c36192c8f8'
        }
      };

      axios.get('http://api.openweathermap.org/data/2.5/weather?', weatherData)
        .then(function (response) {
          console.log(response.data.weather[0]);
        })
        .catch(function(error) {
          console.log('error ' + error);
        });
    }
  };

  displayWeather =() => {

  }

  getMovies = (event) => {

    event.preventDefault();
    console.log('getMovies');

    const moviesData = {
      params: {
        limit: this.state.limit,
        api_key: '86aed7ccb863a80a0def7b9e6a00a283'
      }
    };


    axios.get('/discover/movie', moviesData)
      .then(function (response) {
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
        <div>
          <h4 className="get-weather">getMovies</h4>
          <button className='btn' onClick={this.getMovies}>Get movies</button>
        </div>
          <h1>{ this.props.title }</h1>
          <Search
            handeSearch={ this.handeSearch }
            value={ this.state.searchValue }
          />
          <SchoolList
            studies={ this.state.studies }
            title='School List'
            class={styles.newClass}
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
