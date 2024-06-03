import React from 'react';
import { AppBar, Toolbar, Typography, MenuItem, Select } from '@mui/material';
import { useCustomTheme } from './ThemeProvider';

export default function Header() {
    const { currentTheme, setTheme } = useCustomTheme();

    const handleChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Theme Switcher
                </Typography>
                <Select
                    value={currentTheme}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                </Select>
            </Toolbar>
        </AppBar>
    );
}
