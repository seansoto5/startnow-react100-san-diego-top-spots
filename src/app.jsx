import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';
import topspot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots:[]
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App' style={{backgroundColor:'blue'}}>
        <div className='container' style={{margin:'auto'}}>
          <div className='row' style={{marginBottom:'30px'}}>
            <div className='column'>
              <header name='title-section' style={{border:'1px solid black', backgroundColor:'white'}}>
                <h1 style={{margin: '30px 30px 10px 30px'}}>San Diego Top Spots</h1>
                <h5 style={{margin:'10px 30px 30px 30px'}}>A list of the top 30 places to see in San Diego, CA</h5>
              </header>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              {/* <pre>{JSON.stringify(this.state.topspots, null, 2)}</pre> */}
              {this.state.topspots.map(topspots => (
                <TopSpot
                  key={topspots.id}
                  name={topspots.name}
                  description={topspots.description}
                  location={topspots.location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
