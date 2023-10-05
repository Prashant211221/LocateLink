import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { googleMapIsInstalled } from 'react-native-maps/lib/decorateMapComponent';

const App = () => {
const initialRegion = {
    latitude: 18.995694032812594,
    longitude: 73.13054101756909,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922,
  };

  const [region, setRegion] = useState(initialRegion);
  const [address, setAddress] = useState('');

  const geocodeLatLng = (latitude, longitude) => {
    const formattedAddress = `Sample Address: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
    setAddress(formattedAddress);
  };


  useEffect(() => {
    geocodeLatLng(18.995694032812594, 73.13054101756909);
    handleChangeCoordinates(18.995694032812594, 73.13054101756909);
  }, []);

  const handleChangeCoordinates = (newLatitude, newLongitude) => {
    const newRegion = {
      ...region,
      latitude: newLatitude,
      longitude: newLongitude,
    };
    setRegion(newRegion);
  };

  const handleZoomIn = () => {
    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * 0.5,
      longitudeDelta: region.longitudeDelta * 0.5,
    };
    setRegion(newRegion);
  };

  const handleZoomOut = () => {
    const newRegion = {
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    };
    setRegion(newRegion);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={region}>
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={{ position: 'absolute', bottom: 16, right: 16 }}>        
      <TouchableOpacity onPress={handleZoomIn} style={{ backgroundColor: 'white', padding: 5, borderRadius: 4 }}>
          <Text>Zoom In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleZoomOut} style={{ backgroundColor: 'white', padding: 5, borderRadius: 4, marginTop: 8 }}>
          <Text>Zoom Out</Text>
        </TouchableOpacity>
        <Text>{address}</Text>
      </View>
    </View>
  );
};

export default App;