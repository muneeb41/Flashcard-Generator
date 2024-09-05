import React, { useEffect } from "react";
import Logo from "./components/common/Logo";
import NavBar from "./components/common/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./appRoutes/AppRoutes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <>
      {/* Provide Redux store to the app */}
      <Provider store={store}>
        {/* Enable routing in the app */}
        <Router>
          {/* Render the Logo, NavBar, and route components */}
          <Logo />
          <NavBar />
          <AppRoutes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
