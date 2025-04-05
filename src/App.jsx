import { useContext } from "react";
import { ThemeContext } from "./contexts/themeContext";
import MainPage from "./pages/MainPage";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <MainPage />
    </div>
  );
}

export default App;
