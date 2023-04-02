import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //
import EmailSend from "../containers/EmailSend";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import CreateAccount from "../containers/CreateAccount";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";
import EditAccount from "../containers/EditAccount";
import Main from "../components/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} /> 
          {/* exact ya no es necesario con router 6.0 */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/EmailSend" component={EmailSend} /> 
          <Route exact path="/CreateAccount" component={CreateAccount} /> 
          <Route exact path="/EditAccount" component={EditAccount} /> 
          {/* path es la ruta */}
          <Route exact path="/recovery-password" component={RecoveryPassword} />
          <Route path={"*"} component={NotFound} /> {/* cualquier ruta que no sea las anteriores */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
