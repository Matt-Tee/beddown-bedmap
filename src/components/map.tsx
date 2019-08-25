import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import  ProviderType  from './map.interface';
import { providerMock } from './provider.mock';
import styled from 'styled-components';
import Booking from './Booking';

const MapArea = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

const StyledPopup = styled.div`
  background: white;
  color: #3f618c;
  font-weight: 400;
  padding: 5px;
  border-radius: 2px;
`;

const StyledButton =  styled.button`
border-radius: 4px;
border: 1px solid #458B00;
background-color: #458B00;
color: white;

&:active {
  background-color: white;
  color: #458B00;
}
`

export default class Map extends React.Component {
  //plug call here

  public state: any = {
    center: [153.0251, -27.4698],
    providers: providerMock,
    providerSelected: undefined,
    showComponent: false,
  };

  private markerClick = (provider: ProviderType): any => {
    this.setState({
      center: provider.geoLocation,
      providerSelected: provider
    });
  };

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  render() {
    const { providers, providerSelected } = this.state;

    return (
      <div>
        <MapArea
          style='mapbox://styles/mapbox/streets-v9' // eslint-disable-line
          containerStyle={{
            height: '600px',
            width: '100vw'
          }}
          center={this.state.center}
        >
          <Layer
            type='symbol'
            id='marker'
            layout={{ 'icon-image': 'harbor-15' }}
          >
            {providers.map((provider: ProviderType) => {
              return (
                <Feature
                  key={provider.id}
                  coordinates={provider.geoLocation}
                  onClick={this.markerClick.bind(this, provider)}
                />
              );
            })}
          </Layer>
          { providerSelected && <Popup coordinates={providerSelected.geoLocation}>
            <StyledPopup>
              <div>
                <p>{providerSelected.beds.male.available} Beds available</p>
                <p>{providerSelected.beds.male.max} Bed Total </p>
              </div>
              <StyledButton onClick={this._onButtonClick.bind(this)}>Book a bed</StyledButton>
              {this.state.showComponent ? <Booking props={providerSelected}/> : null}
            </StyledPopup>
          </Popup>
        }
        </MapArea>
      </div>
    );
  }
}

ReactDOM.render(<Map />, document.getElementById('root'));
