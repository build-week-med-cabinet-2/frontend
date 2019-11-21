import React from "react";
import Routes from "./routes/Routes";
import "./App.css";
import { useDispatch } from "react-redux";
import getStrains from "../";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
