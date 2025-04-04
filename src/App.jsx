import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/themeContext";
import MainPage from "./pages/MainPage";

function App() {
  const [theme, setTheme] = useState("light");
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
