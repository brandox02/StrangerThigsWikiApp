import { StyleSheet, Image, ScrollView, Linking } from "react-native";
import { WebView } from "react-native-webview";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Divider, List } from "react-native-paper";
import ConditionalRender from "../components/ConditionalRender";

export default function TabContactScreen({
  navigation,
}: RootTabScreenProps<"moments">) {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 10, fontWeight: "bold", fontSize: 15 }}>
        Quien Soy?
      </Text>
      <Text style={{ margin: 15 }}>
        Mi nombre es Brandon Fernandez Mejia mejor conocido como brandox02 en
        Github, soy un joven Dominicano estudiante de ITLA, apasionado por el
        mundo del desarrollo de software en general, amante a los retos, cosas
        interesantes y oportunidades para mejorar el mundo.
      </Text>
      <Text style={{ margin: 10, marginTop: -5 }}>
        Soy un Fullstack Deveveloper en Javascript, he desarrollado varias
        aplicaciones y trabajado en varios proyectos de produccion con la
        tecnologia anteriormente mencionada.
      </Text>

      <Text style={{ marginLeft: 15 }}>
        Para saber mas de mi, mis habilidades, experiencia, proyectos, contacto.
        <Text
          style={{ color: "#6495ED" }}
          onPress={() =>
            Linking.openURL("https://brandox-portfolio.netlify.app/")
          }
        >
        {' '}Click aqui para dirigirte a mi portafolio web.
        </Text>
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
