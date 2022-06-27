import { StyleSheet, Image, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { List } from "react-native-paper";
import ConditionalRender from "../components/ConditionalRender";

export default function TabMyLifeScreen({
  navigation,
}: RootTabScreenProps<"myLife">) {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>
        Stranger Things es importante en mi vida por que me ha proporcionado y
        proporciona momentos de entretenimiento. :)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
