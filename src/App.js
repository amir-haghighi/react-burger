import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Component, createRef, useRef, useState } from "react";
import Profile from "./containers/user/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignInUp from "./containers/user/signInUp/SignInUp";
import SingUp from "./containers/user/signInUp/SignUp";
import SignIn from "./containers/user/signInUp/SignIn";
import { useSelector } from "react-redux";
//import * as actionTypes from "./store/actions/actions";

function App(props) {
  const isSigned = useSelector((state) => state.isSigned);
  return (
    <Router>
      <div>
        <Layout>
          <Routes>
     <Route path="/burger-react-deploy" element={<BurgerBuilder />} />
            <Route path="/" element={<BurgerBuilder />} />
            {/* <Route
              path="users"
              element={
                signedState ? (
                  <Navigate to="profile" />
                ) : (
                  <Navigate to="signup" />
                )
              }
            /> */}
            {isSigned ? (
              <Route path="users/:userId" element={<Profile />} />
            ) : (
              <Route path="users/" element={<SignInUp />}>
                <Route index element={<SingUp />} />
                <Route path="signin" element={<SignIn />} />
              </Route>
            )}
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
