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

const Character = ({ description, image, name }: IList) => {
  return (
    <List.Accordion
      title={name}
      left={(props) => <List.Icon {...props} icon="folder" />}
      // style={{padding: 30}}
    >
      <Image
        style={{ alignSelf: "center", width: 150, height: 150, margin: 30 }}
        source={image}
      />
      <Text style={{ marginLeft: -30, width: "100%" }}>{description}</Text>
    </List.Accordion>
  );
};

export default function TabCharactersScreen({
  navigation,
}: RootTabScreenProps<"characters">) {
  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
        <List.Section style={{ width: "100%" }}>
          <Character
            name={"Once"}
            image={require("../assets/images/characters/once.jpg")}
            description={
              "Once nace en el pueblo de Hawkins, el 22 de agosto de 1971, siendo hija biológica de Terry Ives. Justo al momento de nacer, es arrebatada de su madre por parte del director del Laboratorio de Hawkins, Martin Brenner, siendo criada por él en ese laboratorio en conjunto de otros niños con poderes singulares por él. "
            }
          />

          <Character
            name={"Steve Harrington"}
            image={require("../assets/images/characters/steve.webp")}
            description={
              "Steve era un estudiante en la Escuela Secundaria Hawkins y amigo de Tommy H. y Carol. Durante una conversación, Nancy implicó que él tenía relaciones sexuales superficiales con las chicas, incluyendo a Laurie, Amy y Becky."
            }
          />

          <Character
            name={"Will Byers"}
            image={require("../assets/images/characters/will.webp")}
            description={
              "Will es el hijo de Joyce Byers y Lonnie Byers y el hermano menor de Jonathan Byers. Will estaba más unido a su madre y a su hermano, pero no a su padre. "
            }
          />

          <Character
            name={"Max Mayfield"}
            image={require("../assets/images/characters/max.webp")}
            description={
              "Su nombre es Maxine Mayfield, pero prefiere que la llamen Max. Maxine Mayfield, conocida por todos como Max o Madmax, nació en California, "
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
