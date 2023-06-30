import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/login" Component={LoginScreen} />
          <Route path="/register" Component={RegisterScreen} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
