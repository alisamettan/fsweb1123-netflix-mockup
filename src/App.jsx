import "./App.css";
import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  const changeUser = (user) => {
    setLoggedUser(user);
  };

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/welcome" exact>
          <Welcome changeUser={changeUser} />
        </Route>
        <Route path="/browse" exact>
          <Browse loggedUser={loggedUser} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
