import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { useSelector } from "react-redux";

const MapViewScreen = ({ navigation }: any) => {
  const [listItems, setListItems] = useState([]);
  const locationList = useSelector(state => state.locationList);

  useEffect(() => {
    (async () => {
      const unsubscribe = navigation.addListener('focus', () => {
        console.log('locationList', locationList)
      });

      // Return the function to unsubscribe from the event so it gets removed on unmount
      return unsubscribe;
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