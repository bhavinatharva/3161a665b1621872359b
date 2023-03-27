import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Card from "./Card";
import React from "react";

interface Props {
  item: any;
  index: number;
  onDelete: (index: number) => void;
}

const ItemView = ({ item, index, onDelete }: Props) => {
  return (
    <Card style={styles.container} >
      <View style={styles.viewFlex} >
        <Text testID={`list-previous-name-${index}`} style={[styles.item, { marginBottom: 10 }]} numberOfLines={1}>{item.location_name}</Text>
        <Text testID={`list-previous-time-${index}`} style={[styles.item, { fontSize: 15, color: 'grey' }]}>{item.time}</Text>
      </View>

      <TouchableOpacity
        testID={`iist-previous-remove-${index}`}
        onPress={() => {
          onDelete(index);
        }}
      >
        <View style={styles.viewRemove}>
          <Text style={styles.txtRemove}>Remove</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  viewFlex: { flex: 1 },
  item: {
    fontSize: 18,
  },
  checkbox: {
    margin: 8,
  },
  viewRemove: {
    backgroundColor: "#d2d2d2",
  },
  txtRemove: {
    fontSize: 14,
    color: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default ItemView;
