import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} /> 
          {/* exact ya no es necesario con router 6.0 */}
          <Route exact path="/login" component={Login} />
          {/* path es la ruta */}
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path={"*"} component={NotFound} /> {/* cualquier ruta que no sea las anteriores */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
