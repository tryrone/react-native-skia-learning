import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FillsAndStrokes from "./app/FillsAndStrokes";

export default function App() {
  return (
    <View style={styles.container}>
      <FillsAndStrokes />
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
