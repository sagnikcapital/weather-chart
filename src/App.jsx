import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Header from "./layouts/header";
import loadTawkTo from "./chatbot/botService";

const App = () => {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;