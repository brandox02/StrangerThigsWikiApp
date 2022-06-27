import { StyleSheet, Image, ScrollView } from "react-native";
import { List } from "react-native-paper";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const BoldText = (props: any) => (
  <Text style={{ fontWeight: "bold" }}>{props.children}</Text>
);

const castActorsData = [
  "Winona Ryder como Joyce Byers, la madre de Will y Jonathan Byers y está divorciada de Lonnie Byers, el padre de sus dos hijos.",
  "David Harbour como Jim Hopper, el jefe del departamento de policía de Hawkins.",
  "Finn Wolfhard como Mike Wheeler, es hijo de Karen y Ted, hermano menor de Nancy y hermano mayor de Holly, y uno de los tres amigos de Will Byers.",
  "Millie Bobby Brown como Once / Jane Hopper, una joven con habilidades telepáticas y psicoquinéticas que creció en los laboratorios Hawkins.",
  "Gaten Matarazzo como Dustin Henderson, amigo de Mike, Will y Lucas, es un niño muy inteligente y estudioso cuya displasia cleidocraneal lo hace ceder.",
  "Caleb McLaughlin como Lucas Sinclair, es amigo de Mike, Will y Dustin, y hermano mayor de Erica.",
  "Natalia Dyer como Nancy Wheeler, es la hija de Karen y Ted, hermana mayor de Mike y Holly Wheeler, novia de Steve durante la primera temporada.",
  "Charlie Heaton como Jonathan Byers, un joven callado hermano de Will e hijo de Joyce.",
  "Cara Buono como Karen Wheeler (temporadas 1-3; recurrente temporada 4), la madre de Nancy, Mike y Holly, y esposa de Ted Wheeler.",
  "Matthew Modine como el Dr. Martin Brenner (temporadas 1, 4; invitado temporada 2), es el científico jefe del Laboratorio Hawkins y los experimentos realizados allí.",
  "Noah Schnapp como Will Byers (temporada 2-; recurrente temporada 1), hijo de Joyce y hermano de Jonathan, un niño callado y tímido.",
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"portrait">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Stranger Things</Text>
        <Text style={styles.paragraph}>
          Stranger Things es una serie de televisión estadounidense de género de
          ciencia ficción y terror, creada, dirigida y escrita por los Hermanos
          Duffer y distribuida mediante Netflix.
        </Text>
        <Text style={styles.title}>Argumento</Text>
        <Text style={styles.paragraph}>
          La historia inicia el 6 de noviembre de 1983, en la ciudad de Hawkins,
          Indiana. Will Byers, de 12 años de edad, tras pasar el día jugando con
          sus amigos a Calabozos y Dragones desaparece misteriosamente al
          regresar a casa. Su madre, Joyce, desesperada, comienza la búsqueda de
          Will, mientras el jefe de policía Hopper comienza a investigar por su
          cuenta. Poco después de la desaparición de Will, una misteriosa niña
          con extrañas habilidades aparece en una cafetería de la localidad.
        </Text>
        <Text style={styles.paragraph}>
          Pero en el desarrollo de la investigación descubrirán que no solo
          tendrán que enfrentarse a una misteriosa organización del gobierno,
          sino que tambien a fuerzas siniestras que planean devorarlos a todos.
        </Text>
        <Text style={styles.title}>Temporadas</Text>
        <Text style={styles.paragraph}>
          Stranger Things cuenta actualmente con 4 temporadas emitidas
        </Text>
        <Text style={styles.title}>Autores</Text>
        <Text style={styles.paragraph}>
          Stranger Things fue escrita y dirigida por los hermanos Matt y Ross
          Duffer, y producida ejecutivamente por Shawn Levy, se estrenó en la
          plataforma Netflix el 15 de julio de 2016.
        </Text>
        <List.Section style={{ margin: 5 }}>
          <List.Subheader>
            <Text style={styles.title}>Reparto</Text>
          </List.Subheader>
        </List.Section>
        {castActorsData.map((el) => (
          <List.Item
            title={() => <Text style={styles.paragraph}>{el}</Text>}
            left={() => <List.Icon icon="folder" />}
          />
        ))}
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 20,
  },
  paragraph: {
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
});
