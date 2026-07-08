import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useAuth } from "./context/AuthContext";

import LandingPage from "./pages/LandingPage";
import Membership from "./components/Membership";

import AuthModal from "./components/auth/AuthModal";

export default function App() {
  const { user, loading } = useAuth();
  const [authOpen, setAuthOpen] = useState(false);

  if (loading) {
    return (
      <div className="bg-red-500 text-white text-6xl p-10">
          Loading...
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              onJoin={() => setAuthOpen(true)}
            />
          }
        />

        <Route
          path="/membership"
          element={<Membership />}
        />
      </Routes>

      {authOpen && !user && (
        <AuthModal onClose={() => setAuthOpen(false)} />
      )}
    </>
  );
}