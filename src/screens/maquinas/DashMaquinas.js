import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  VirtualizedList,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../components/Colors";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import Modal from "../../components/modal";
import Open from "../../components/modal";
import { useNavigation } from "@react-navigation/native";

export default function DashMaquinas({ route }, props) {
  const { id } = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <Icon
          onPress={() => {
            navigation.navigate("Home");
          }}
          name="keyboard-backspace"
          size={25}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 12 }}>
          Dash Máquinas
        </Text>
        <TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon
              onPress={() => {
                navigation.navigate("EditMaquinas", { id: id });
              }}
              name="pen"
              color="white"
              size={24}
            />
          </View>
        </TouchableOpacity>
        <Open id={id} />
      </View>
      <ScrollView>
      <View>
      <Text style={styles.title}>Temperatura:</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: COLORS.green,
              backgroundGradientTo: COLORS.blue,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: COLORS.green
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              justifyContent: "center",
            }}
          />
        </View>
        <View>
      <Text style={styles.title}>Vibração:</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: COLORS.green,
              backgroundGradientTo: COLORS.blue,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: COLORS.green
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              justifyContent: "center",
            }}
          />
        </View>
        <View>
      <Text style={styles.title}>Ruído:</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: COLORS.green,
              backgroundGradientTo: COLORS.blue,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: COLORS.green
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              justifyContent: "center",
            }}
          />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  footer: {
    justifyContent: "flex-end",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginTop: 6,
    padding: 10,
    marginLeft: 60,
    backgroundColor: "blue",
    // elevation: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    elevation: 60,
  },
  boxChart: {
    backgroundColor: COLORS.white,
    // marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 25,
  },
});
