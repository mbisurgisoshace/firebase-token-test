import { Route, Routes } from "react-router-dom";

import App from "./App";
import { LoginForm } from "./auth/LoginForm";
import { useAuth } from "./auth/AuthProvider";
import SecondPage from "./SecondPage";

export default function Router() {
  const { isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}
