import { StatusBar } from "expo-status-bar";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}>
        <View style={styles.circle}></View>
      </View>
      <View style={styles.view3}>
        <Text style={styles.h1}>Grow</Text>
        <Text style={styles.h1}>Your Business</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text}>abcbcbababababaaaaaaaaaaaaaaaaaaaaaa</Text>
        <View style={styles.button_view}>
          <Button style={{width:200}} title="Login" color="black"></Button>
          <Button title="Sign Up" color="black"></Button>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "linear-gradient(to bottom, #ff0000, #0000ff)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  h1: {
    fontSize: 30,
    fontWeight: 20,
    alignSelf: "center",
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 3,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 10,
    borderColor: "black",
  },
  view4: {
    flex: 3,
    justifyContent: "space-evenly",
  },
  view3: {
    flex: 2,
  },
  button_view: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
});
