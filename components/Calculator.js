import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Calculator({ navigation }) {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [result, setResult] = useState("");

  const calculateSum = () => {
    const sum = parseFloat(numberOne) + parseFloat(numberTwo);
    setResult(sum);
  };
  const calculateSubtraction = () => {
    const subtraction = parseFloat(numberOne) - parseFloat(numberTwo);
    setResult(subtraction);
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setNumberOne(text)}
      />
      <TextInput
        style={{ width: 200, borderColor: "grey", borderWidth: 1 }}
        keyboardType="numeric"
        onChangeText={(text) => setNumberTwo(text)}
      />
      <StatusBar style="auto" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button onPress={calculateSum} title="+" />
        <Button onPress={calculateSubtraction} title="-" />
        <Button
          title="History"
          onPress={() => navigation.navigate("History")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
