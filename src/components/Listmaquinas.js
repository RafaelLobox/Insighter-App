import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "./Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function ListMaquinas({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("DashMaquinas", {id: data.id});
      }}
    >
  <Icon
            style={styles.icon}
            name="robot-industrial"
            size={32}
            color={COLORS.blue}
          />

        <View style={styles.content}>
          
        <Text style={{ fontSize: 18, color: "black", fontWeight: "bold" }}>
          {data.nome_maquina}
        </Text>
        <Text style={{ fontSize: 11, color: COLORS.blue, fontWeight: "bold" }}>
          {data.nome_setor}
        </Text>
      </View>
      <Icon name="arrow-right" size={25} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    elevation: 0.5,
    marginBottom: 5,
    // borderBottomWidth: 0.5,
    // borderBottomColor: COLORS.blue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {},
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 2,
    marginRight: 140,
  },
  
});
