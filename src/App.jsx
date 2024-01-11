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
  const [selectedProfile, setSelectedProfile] = useState(null);

  const changeUser = (user) => {
    setLoggedUser(user);
  };

  const changeProfile = (user) => {
    setSelectedProfile(user);
  };

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main loggedUser={loggedUser} />
        </Route>
        <Route path="/login" exact>
          <Login loggedUser={loggedUser} changeUser={changeUser} />
        </Route>
        <Route path="/welcome" exact>
          <Welcome loggedUser={loggedUser} changeProfile={changeProfile} />
        </Route>
        <Route path="/browse" exact>
          <Browse selectedProfile={selectedProfile} />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
