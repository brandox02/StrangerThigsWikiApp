import { StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { List } from "react-native-paper";

interface IList {
  name: string;
  image: any;
  description: string;
}

const Moment = ({ description, image, name }: IList) => {
  return (
    <List.Accordion
      title={name}
      left={(props) => <List.Icon {...props} icon="folder" />}
    >
      <Image
        style={{ alignSelf: "center", width: 150, height: 150, margin: 30 }}
        source={image}
      />
      <Text style={{ marginLeft: -30, width: "100%" }}>{description}</Text>
    </List.Accordion>
  );
};

export default function TabMomentsScreen({
  navigation,
}: RootTabScreenProps<"moments">) {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        <List.Section style={{ width: "100%" }}>
          <Moment
            name={"Once"}
            image={require("../assets/images/Moments/once.jpg")}
            description={
              "Once nace en el pueblo de Hawkins, el 22 de agosto de 1971, siendo hija biológica de Terry Ives. Justo al momento de nacer, es arrebatada de su madre por parte del director del Laboratorio de Hawkins, Martin Brenner, siendo criada por él en ese laboratorio en conjunto de otros niños con poderes singulares por él. "
            }
          />
        </List.Section>
      </ScrollView>
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
