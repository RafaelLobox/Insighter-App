import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "./Colors";
import { useNavigation } from "@react-navigation/native";


export default function LatestMachines({ data }) {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => {
        return (
          <TouchableOpacity style={styles.actionButton}  
            onPress={() => {
            navigation.navigate("DashMaquinas", { id: data.id });
          }}>
            <View style={styles.areaButton}>
              <Icon name="robot-industrial" size={26} color={COLORS.white} />
            </View>
            <Text style={styles.labelButton}>{data[index].nome_maquina}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  actionButton: {
    alignItems: "center",
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: COLORS.blue,
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  labelButton: {
    marginTop: 4,
    textAlign: "center",
    fontWeight: "bold",
  },
});
