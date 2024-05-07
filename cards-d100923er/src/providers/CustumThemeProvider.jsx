import { teal } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useCallback, useContext, useState } from "react";


const ThemeContext = createContext()

export default function CustumeThemeProvider({children}){
    const [isDark,setIsDark]=useState(false)

    const toggleDarkMode =useCallback(()=>{
        setIsDark((prev)=>!prev)
    },[])

    const theme = createTheme({
        palette:{
            primary: teal,
            secondary:{
                main:"#c1e5e2"},
            mode: isDark ? "dark" : "light"  
        },
    })


    return (
    <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{toggleDarkMode,isDark}}>
         {children}
        </ThemeContext.Provider>
    </ThemeProvider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a NameProvider");
    return context;
  };