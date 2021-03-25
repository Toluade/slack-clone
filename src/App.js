import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path="/">
                {/* Chat */}
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
