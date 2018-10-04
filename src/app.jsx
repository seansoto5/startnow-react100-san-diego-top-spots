import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

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
      <div className='App'>
        <div className='container' style={{marginTop:'60px'}}>
          <div className='row' style={{marginBottom:'30px'}}>
            <div className='column'>
              <div name='title section' style={{border:'1px solid black'}}>
                <h1 style={{margin:'30px 30px 10px 30px'}}>San Diego Top Spots</h1>
                <h5 style={{margin:'10px 30px 30px 30px'}}>A list of the top 30 places to see in San Diego, CA</h5>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='column'>
              <div className='data-section'>
                {/* {
                  this.state.topspots.map(topspots => (
                    <TopSpot
                      key={topspot.id}
                      name={topspot.name}
                      description={topspot.description}
                      location={topspot.location}/>
                  ))
                } */}
                <pre>{JSON.stringify(this.state.topspots, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
