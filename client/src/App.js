
import React from 'react';

import { CustomThemeProvider } from './ThemeProvider';
import Header from './Header';

function App() {
  return (
    <CustomThemeProvider>
      <Header />
      {/* Other components */}
    </CustomThemeProvider>
  );
}

export default App;
