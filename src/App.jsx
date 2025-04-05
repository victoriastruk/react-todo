import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/themeContext";
import CONSTANTS from "./constansts";
import MainPage from "./pages/MainPage";

function App() {
  const { LIGHT } = CONSTANTS.THEME;
  const [theme, setTheme] = useState(LIGHT);
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <MainPage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
