import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import COLORS from "./Colors";
export default function Latest({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 14, color: "grey", fontWeight: "bold" }}>
        {data.data_hr}
      </Text>

      <View style={styles.content}>
        <Text style={{ fontSize: 14, color: COLORS.blue, fontWeight: "bold" }}>
          {data.nome}
        </Text>
        <Text style={styles.statusTwo}>Aguardando Manutenção</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.blue,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 2,
  },
  statusOne: {
    fontSize: 14,
    color: "#25e6b1",
    fontWeight: "bold",
  },
  statusTwo: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});
