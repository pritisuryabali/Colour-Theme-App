import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const CustomThemeContext = createContext({
    currentTheme: 'light',
    setTheme: null
});

export const useCustomTheme = () => useContext(CustomThemeContext);

export const CustomThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    const theme = createTheme({
        palette: {
            mode: themeName,
            primary: {
                main: themeName === 'light' ? '#1976d2' : '#dc004e',
            },
        },
    });

    const setTheme = (themeType) => {
        setThemeName(themeType);
        // Here you would call an API to save the theme preference
        fetch('/api/preferences/userId', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ color: themeType })
        });
    };

    return (
        <CustomThemeContext.Provider value={{ currentTheme: themeName, setTheme }}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </CustomThemeContext.Provider>
    );
};
