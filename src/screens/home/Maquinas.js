import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ListMaquinas from "../../components/Listmaquinas";
import { useEffect, useState } from "react";
import maquinaService from "../../services/MaquinaService";

export default function MaquinasScreen(props) {
  const [maquinas, setMaquinas] = useState([]);

  useEffect(() => {
    maquinaService
      .listarMaquina()
      .then((response) => {
        setMaquinas(response.data);
      })
      .catch((error) => {
        Alert.alert("Você não está mais logado.3");
        props.navigation.navigate("Login");
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          name="keyboard-backspace"
          size={25}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginEnd: 170}}>
          Máquinas
        </Text>
        <TouchableOpacity>
            <View style={styles.iconContainer}>
              <MaterialIcons
                onPress={() => {
                  props.navigation.navigate("CadastroMaquinas");
                }}
                name="add"
                color="white"
                size={30}
              />
            </View>
          </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          style={styles.list}
          data={maquinas}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <ListMaquinas data={item} />}
        />

       
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  footer: {
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: "blue",
    // elevation: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginTop: 5,
    marginStart: 14,
    marginEnd: 14,
  },
});
