import { StyleSheet, Image, ScrollView } from "react-native";
import { WebView } from "react-native-webview";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { List } from "react-native-paper";
import ConditionalRender from "../components/ConditionalRender";

interface IList {
  title: string;
  image?: any;
  description: string;
  youtubeVideoUri?: string;
}

const isNil = (value: any) =>
  value === undefined || value === null || value === NaN;

const Moment = ({ description, image, title, youtubeVideoUri }: IList) => {
  return (
    <List.Accordion
      title={title}
      left={(props) => <List.Icon {...props} icon="folder" />}
    >
      <ConditionalRender render={image}>
        <Image
          style={{ alignSelf: "center", width: 150, height: 150, margin: 30 }}
          source={image}
        />
      </ConditionalRender>

      <ConditionalRender render={!isNil(youtubeVideoUri)}>
        <View style={{ flex: 1 }}>
          <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            style={{ width: "100%", height: 300 }}
            onLoadProgress={() => console.log("finish")}
            onLoadStart={() => console.log("start")}
            source={{
              uri: `https://youtu.be/L78XliGeI6E`,
            }}
          />
        </View>
      </ConditionalRender>
      <Text style={{ marginLeft: -30, width: "100%", marginBottom: 20 }}>
        {description}
      </Text>
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
            title={"El dúo de “The Never Ending Story”"}
            youtubeVideoUri={"fdsfd"}
            description={
              "En el comienzo de la tercera temporada Justin presume de tener novia, de haberse enamorado y haber encontrado a la chica perfecta. Sin embargo, no logra hacer contacto con ella para que sus amigos le crean."
            }
          />

          <Moment
            title={"La batalla contra el Demogorgon"}
            image={require("../assets/images/moments/moment1.gif")}
            description={
              "En general hay dos batallas épicas contra el Demogorgon, la primera donde Steve Jonathan y Nancy se enfrentan a él, logran dañarlo y al mismo tiempo, nos indican que tal monstruo puede morir."
            }
          />
          <Moment
            title={"La muerte de Bob"}
            image={require("../assets/images/moments/moment2.gif")}
            description={`Bob se convirtió en uno de los personajes más adorados e inteligentes de la serie.

              No sólo descubre lo que hay detrás de los garabatos que dibuja Will, sino que también es el elegido para salvar a todos y restablecer la energía en el laboratorio luego de que varios personajes, entre ellos Hopper y Joyce, se encontrarán atrapados. `}
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
