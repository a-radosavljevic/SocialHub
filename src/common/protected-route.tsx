import { Route, Redirect, RouteProps } from "react-router-dom";

type ProtectedRouteProperties = {
  isUserLogged: boolean;
} & RouteProps;

const ProtectedRoute = ({
  isUserLogged,
  ...rest
}: ProtectedRouteProperties) => {
  if (isUserLogged) {
    return <Route {...rest} />;
  } else {
    return <Redirect to={{ pathname: "login" }} />;
  }
};

export default ProtectedRoute;
