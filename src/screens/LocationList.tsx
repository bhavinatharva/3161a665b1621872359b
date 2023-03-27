import * as Location from "expo-location";

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import CurrentLocationView from "../components/CurrentLocationView";
import CustomButton from "../components/CustomButton";
import ItemView from "../components/ItemView";
import React from "react";
import { doGetCurrentLocation } from "../Utils";
import moment from "moment";
import { postService } from "../services/index";
import { setLocationList } from '../redux/index'

export default function LocationList() {
  const [listItems, setListItems] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({
    location_name: "",
    time: "",
  });
  const fetchMyAPI = async () => {
    let location = await Location.getCurrentPositionAsync({});

    doGetCurrentLocation(
      location.coords.latitude,
      location.coords.longitude
    ).then((json) => {
      setCurrentLocation({
        location_name: json,
        time: moment().format("DD/MM/YYYY HH:mm:ss a"),
      });
      if (json) {
        postService("https://httpstat.us/200", {
          location_name: json,
          time: moment().format("DD/MM/YYYY HH:mm:ss a"),
        }).then((res) => {
          if (listItems.length != 30) {
            setListItems((oldArray) => [
              ...oldArray,
              {
                location_name: json,
                time: moment().format("DD/MM/YYYY,HH:mm:ss a"),
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              },
            ]);
          }
          setLocationList(listItems)
        });
      }
    });
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      let intervalId: string | number | NodeJS.Timer = undefined
      if (status !== 'granted') {
        alert('Permission to access location was denied')
      } else {
        intervalId = setInterval(() => {
          fetchMyAPI();
        }, 1000 * 10); // in milliseconds   
      }


      return () => clearInterval(intervalId);
    })();
  }, []);

  const onDelete = (index: number) => {
    const newState = [...listItems];
    newState.splice(index, 1);
    setListItems(newState);
  };
  const doDeleteSelected = () => {
    setListItems([]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.viewLocationManager}>
          <Text style={styles.txtLocationManager}>Location Manager</Text>
        </View>
        <View style={styles.viewPreviousLocation}>
          <Text testID="list-current-label" style={styles.txtPreviousLocation}>Current Locations</Text>
        </View>
        <CurrentLocationView
          testId={"list-current-item"}
          location_name={currentLocation.location_name}
          time={currentLocation.time}
        />
        <View style={styles.viewPreviousLocation}>
          <Text style={styles.txtPreviousLocation}>Previous Locations</Text>
        </View>
        <FlatList
          data={listItems}
          renderItem={({ item, index }) => {
            return (
              <ItemView
                item={item}
                index={index}
                onDelete={(index) => onDelete(index)}
              />
            );
          }}
          keyExtractor={(item: any, index: number) => index.toString()}
        />
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CustomButton testID={"list-clear-all-button"} label="Clear All" onPress={() => doDeleteSelected()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewLocationManager: {
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  txtLocationManager: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
  },
  txtLocationManager: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  viewPreviousLocation: {
    paddingBottom: 15,
    marginHorizontal: 10,
    marginTop: 15,
  },
  txtPreviousLocation: {
    fontSize: 15,
    color: "black",
  },
});
