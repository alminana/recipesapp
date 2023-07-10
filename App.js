import 'react-native-gesture-handler';
import { Pressable, StyleSheet, Image } from 'react-native';
import Splash from './src/screens/Splash';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import React,  {useState, useEffect} from 'react'
import { getRecipesList } from "../recipes-app/src/http/index";
import RecipeDetails from './src/screens/RecipeDetails';
const Stack = createStackNavigator();

    export const RecipesContext = React.createContext();
    export const HealthyRecipesContext = React.createContext();

const BackButton = (props) => {


  return(
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./assets/back.png')}/>
    </Pressable>
  )
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};


export default function App() {

  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, sethealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const rec = await handleRecipesFetch(null, '15')
      setRecipes(rec)
      const healthyRec = await handleRecipesFetch('healthy', '5')
      sethealthyRecipes(healthyRec)
    })()
  }, [ ])

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size)
      return (recipes.data.results);
    }catch (e) {
      console.log('err fetching recipes :>>', e);
    }
  }
 

  return (
    <HealthyRecipesContext.Provider value={{ healthyRecipes, sethealthyRecipes }}>
      <RecipesContext.Provider value={{ recipes, setRecipes}}>
        <NavigationContainer  theme={theme}>
            <Stack.Navigator screenOptions={{headerTitleAlign:'center', headerShadowVisible: false}}>
            <Stack.Screen name="Splash"  component={Splash} options={{ headerShown: false  }}  />
            <Stack.Screen name="Home" component={Home} options={{headerLeft:null,  gestureEnabled: false}} />
            <Stack.Screen name="Search" component={Search} options={{headerLeft:(props) => <BackButton {...props}/>}}/>
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{ headerLeft: (props) => <BackButton {...props} />, title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
      </RecipesContext.Provider>
  </HealthyRecipesContext.Provider>
  
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
