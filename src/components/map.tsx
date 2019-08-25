import React from 'react';
import ReactDOM from 'react-dom';
import ReactMapboxGl from 'react-mapbox-gl';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import ProviderType  from './map.interface';
import { providerMock } from './provider.mock';

const MapArea = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
});

export default function Map(): any {
  const providers: ProviderType[] = providerMock;
  // const providerLocation = providers.map(provider => {
  //   return <Provider/>
  // })
  return (
    <div>
      <MapArea
        style='mapbox://styles/mapbox/streets-v9' // eslint-disable-line
        containerStyle={{
          height: '600px',
          width: '100vw'
        }}
        center={[153.0251, -27.4698]}
      ></MapArea>
    </div>
  );
}

ReactDOM.render(<Map />, document.getElementById('root'));
