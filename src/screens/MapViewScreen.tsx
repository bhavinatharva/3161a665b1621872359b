import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { useSelector } from "react-redux";

const MapViewScreen = () => {
  const [listItems, setListItems] = useState([]);
  const locationList = useSelector(state => state.app.locationList);

  useEffect(() => {
    (async () => {
      console.log('locationList', locationList)
    })();
  }, [locationList]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default MapViewScreen