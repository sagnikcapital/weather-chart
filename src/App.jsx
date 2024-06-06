import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Header from "./layouts/header";
// import loadTawkTo from "./chatbot/botService";
import { ThemeProvider } from './context/ThemeContext';
import Footer from "./layouts/footer";
import About from "./pages/about/about";
import NotFound from "./error/notfound";
import SwaggerUIComponent from "./swagger/swagger";

const App = () => {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/api-docs" element={<SwaggerUIComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;