import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);
const ThemeUpdateContext = createContext(null);

function ThemeProvider({children}) {
 
    const [theme,setTheme] = useState("");

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={setTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

export function useThemeMode() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export default ThemeProvider
