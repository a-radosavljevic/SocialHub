import React from "react";

import NavBar from "./components/navbar/navbar";
import Login from "./pages/login/login";
import HomePage from "./pages/homepage/homepage";
import GlobalStyle from "./global.styles";
import ProtectedRoute from "./common/protected-route";
import UserContext from "./contexts/user/user.context";

import { ToastContainer } from "react-toastify";
import { Switch, Route, Redirect } from "react-router-dom";
import Users from "./api/users";

function App() {
  let user = Users.User;

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <ToastContainer hideProgressBar newestOnTop></ToastContainer>
      <UserContext.Provider value={{ user }}>
        {user && <NavBar username={user.username}></NavBar>}
        <main className="container">
          <Switch>
            <Route
              path="/login"
              render={() => (user ? <Redirect to="/" /> : <Login />)}
            ></Route>
            <ProtectedRoute
              exact={true}
              path="/"
              component={HomePage}
              isUserLogged={user != null}
            ></ProtectedRoute>
          </Switch>
        </main>
      </UserContext.Provider>
    </React.Fragment>
  );
}

export default App;
