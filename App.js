import Home from "./Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shajrit from "./Pages/Shajrit";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen name="Shajrit"
          component={Shajrit}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#BB0D32",
            },
            headerShadowVisible:false,
            headerBackTitleVisible: false,
          }}
         />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

