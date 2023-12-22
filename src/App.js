import { useState } from "react";
import "./App.css";
import Navbar from "./componant/Navbar";
import Textutils from "./componant/Textutils";

function App() {
  const [mode, setMode] = useState("light");
  const [dtaxt, setdtext] = useState("Enable DarkMode");
  const [darktext, setdarktext] = useState({
    color: "dark",
  });

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setdarktext({
        color: "white",
      });
      setdtext("Enable LightMode");
      document.body.style.backgroundColor = "#444443";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setdarktext({
        color: "black",
      });
      setdtext("Enable DarMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        darktext={darktext}
        dtaxt={dtaxt}
        toggleMode={toggleMode}
      />
      <Textutils />
    </>
  );
}

export default App;
