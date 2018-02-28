import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
import axios from 'axios';


const position = [51.0, -0.09]

export default class MapView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    axios.get(`https://data.nasa.gov/resource/gvk9-iz74.json`)
      .then(res => {
        const data = res.data;
        this.setState({locations: data})
        console.log(this.state.locations);
      })
  }

render() {
    return (
      <div>
        <Map
          style={{height: "100vh"}}
          center={position}
          zoom={3}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/nicknyr/cje7mtk2y6gf92snsydobiahf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoibmlja255ciIsImEiOiJjajduNGptZWQxZml2MndvNjk4eGtwbDRkIn0.L0aWwfHlFJVGa-WOj7EHaA"
            attribution="<attribution>" />
        </Map>
      </div>
    )
  }
}
