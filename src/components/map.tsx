import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl, { Layer, Feature, Popup } from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { ProviderType } from './map.interface';
import { providerMock } from './provider.mock';
import styled from 'styled-components';

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

export default class Map extends React.Component {
  //plug call here
  public state: any = {
    center: [153.0251, -27.4698],
    providers: providerMock,
    provider: undefined
  };

  private markerClick = (provider: ProviderType): any => {
    this.setState({
      center: provider.geoLocation,
      provider: provider
    });
  };


  render() {
    const { providers } = this.state;
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
                  key={provider.key}
                  coordinates={provider.geoLocation}
                  onClick={this.markerClick.bind(this, provider)}
                />
              );
            })}
          </Layer>
          { this.state.provider && <Popup coordinates={this.state.provider.geoLocation}>
            <StyledPopup>
              <div>
                <p>{this.state.provider.bedsAmount} Beds available</p>
                <p>{this.state.provider.bedsAvailable} Bed Total </p>
              </div>
            </StyledPopup>
          </Popup>
        }
        </MapArea>
      </div>
    );
  }
}

ReactDOM.render(<Map />, document.getElementById('root'));
