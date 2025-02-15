import React from "react";
import Dashboard from "./components/Dashboard";
import Quiz from "./pages/Quiz";
import { signInWithGoogle, logout } from "./firebase";

const App = () => {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      {user ? (
        <>
          <button onClick={logout}>Logout</button>
          <Dashboard />
          <Quiz user={user} />
        </>
      ) : (
        <button onClick={() => signInWithGoogle().then(setUser)}>Sign in with Google</button>
      )}
    </div>
  );
};

export default App;
