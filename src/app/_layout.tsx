import "../global.css";
import { Slot, SplashScreen } from "expo-router";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import Loading from "@/components/loading";
import { Fragment } from "react";

export default function Layout() {
  


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return <Loading/>
    
  }


  return (


      <Slot />

  )
   
  
}
