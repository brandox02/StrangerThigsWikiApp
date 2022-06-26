import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
// import Imaged from "./images";

// const Imaged = [
//   {
//     imageLink: require("../assets/images/portrait-image.jpg"),
//   },
// ];
// let f = require("../assets/images/portrait-image.jpg");

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"portrait">) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.portrait}
        source={require("../assets/images/portrait-image.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  portrait: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
