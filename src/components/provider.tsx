import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Layer, Feature } from 'react-mapbox-gl';
import { ProviderType } from './map.interface';

export default function Provider(props: any) {
  const { geoLocation }: ProviderType = props;
  return (
      <Layer type='symbol' id='marker' layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={geoLocation} />
      </Layer>
  );
}

ReactDOM.render(<Provider />, document.getElementById('root'));
