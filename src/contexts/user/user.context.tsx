import { createContext, useState, useEffect } from "react";
import User from "../../models/User";

const UserContext = createContext({
  user: null,
  setCurrentUser: (user: User) => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const setCurrentUser = (loggedUser: User) => setUser(loggedUser);

  useEffect(() => {
    setUser(user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
