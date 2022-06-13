import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Box from "./app/components/Box";
import Layout from "./app/components/Layout";
import TextContent from "./app/components/TextContent";
import ImgCtrl from "./app/components/ImgCtrl";
import BtnCtrl from "./app/components/Counter";
import THCtrl from "./app/components/THCtrl";

const items = [
	{ id: "0", text: "Box", component: "Box" },
	{ id: "1", text: "Layout", component: "Layout" },
	{ id: "2", text: "Text", component: "TextContent" },
	{ id: "3", text: "Image", component: "ImgCtrl" },
	{ id: "4", text: "Details", component: "Details" },
	{ id: "5", text: "Button", component: "BtnCtrl" },
	{ id: "6", text: "TouchableHighlight", component: "TouchableHighlight" },
];

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			{/* <Text>Home Screen</Text>
      <Text
        style={{ color: "blue", fontSize: 18 }}
        onPress={() => navigation.navigate("Box")}
      >
        Go to Details
      </Text> */}
			{/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
			<FlatList
				style={styles.container}
				data={items}
				renderItem={({ item }) => (
					<Text style={styles.row} onPress={() => navigation.navigate(item.component)}>
						{item.text}
					</Text>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

function DetailsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Details Screen</Text>
			<Button title="Go to Details... again" onPress={() => navigation.push("Details")} />
			<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
			<Button title="Go back" onPress={() => navigation.goBack()} />
			<Button
				title="Go back to first screen in stack"
				onPress={() => navigation.popToTop()}
			/>
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
				<Stack.Screen name="Box" component={Box} />
				<Stack.Screen name="Layout" component={Layout} />
				<Stack.Screen name="TextContent" component={TextContent} />
				<Stack.Screen name="ImgCtrl" component={ImgCtrl} />
				<Stack.Screen name="TouchableHighlight" component={THCtrl} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
	row: {
		padding: 15,
		marginBottom: 5,
		backgroundColor: "skyblue",
	},
});

export default App;
