import Home from "./Pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Shajrit from "./Pages/Shajrit";
import PDF  from "./Pages/PDF"

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
         <Stack.Screen name = "PDF" component={PDF} ></Stack.Screen>
         
         <Stack.Screen name = "Minja" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }} component = {Minja}/>

  <Stack.Screen name = "Arbit" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }} component = {Arbit}/>
  <Stack.Screen name = "Noche Shabat" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }} component = {NocheShabat}/>

<Stack.Screen name = "Día Shabat" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {DiaShabat} />
  <Stack.Screen name = "Rosh Jodesh" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {RoshJodesh}/>
  <Stack.Screen name = "Shalosh Regalim" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {ShaloshRegalim}/>
  <Stack.Screen name = "Perashot" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {Perashot}/>
  <Stack.Screen name = "Otros" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {Otros}/>

<Stack.Screen name = "Januca" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {Januca}/>
  <Stack.Screen name = "Boda" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {Boda}/>
  <Stack.Screen name = "Brit Mila" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {BritMila}/>
  <Stack.Screen name = "Ayunos" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }}
  component = {Ayunos}/>
  <Stack.Screen name = "Izkor" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }} component = {Izkor}/>

<Stack.Screen name = "Shabatonim Diferentes" options={{
              title: "",
              headerStyle: {
                backgroundColor: "#BB0D32",
              },
              headerShadowVisible:false,
              headerBackTitleVisible: false,
            }} component = {ShabatonimDiferentes}/>

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );

}

