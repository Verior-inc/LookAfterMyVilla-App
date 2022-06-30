import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';

const CheckContect = ({text,checker,onchange}) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checker}
          onChange={onchange}
          style={styles.checkbox}
        />
        <Text style={styles.label}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default CheckContect;