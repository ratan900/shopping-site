/* eslint-disable jsx-a11y/img-redundant-alt */
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import Shopping from "./ShoppingPage/ShoppingPage";
import Preference from "./PreferencePage/Preference";
import Modal from "./ShoppingPage/Modal";

function App() {
  return (
    <div>
      <Container
        className="d-flex mt-5 justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={LogIn} />
              <PrivateRoute path="/shopping" component={Shopping} />
              <PrivateRoute path="/preference" component={Preference} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/modal" component={Modal} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
    </div>
  );
}

export default App;
