import { useState, useEffect } from "react";
import App from "./App";
import BootScreen from "./BootScreen";
import LoginScreen from "./LoginScreen";

function Loading() {
  const [stage, setStage] = useState<"boot" | "login" | "desktop">("boot");

  useEffect(() => {
    if (stage === "boot") {
      const timer = setTimeout(() => setStage("login"), 4000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <>
      {stage === "boot" && <BootScreen />}
      {stage === "login" && <LoginScreen onLogin={() => setStage("desktop")} />}
      {stage === "desktop" && <App />}
    </>
  );
}

export default Loading;