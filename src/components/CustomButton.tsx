import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

interface Props {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  testID?: any
}
const CustomButton = ({ label = "Title", onPress, disabled, testID }: Props) => {
  return (
    <TouchableOpacity testID={testID} onPress={onPress} disabled={disabled} style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.txtTitle}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtTitle: {
    color: "white",
    fontSize: 16,
  },
});
export default CustomButton;
