import React, { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { RoomStatus } from "./components/RoomStatus";
import { checkAuth } from "./utils/auth";
import { usePeople } from "./hooks/usePeople";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string>();
  const { people, loading, error, refreshPeople } = usePeople();

  const handleLogin = (username: string, password: string) => {
    if (checkAuth(username, password)) {
      setIsAuthenticated(true);
      setAuthError(undefined);
    } else {
      setAuthError("ユーザー名またはパスワードが間違っています");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} error={authError} />;
  }

  return (
    <RoomStatus
      people={people}
      loading={loading}
      error={error}
      onLogout={handleLogout}
      onRefresh={refreshPeople}
    />
  );
}

export default App;
