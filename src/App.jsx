import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Verification from "./pages/Verification";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Curosity from "./pages/Curosity";
import APOD from "./pages/APOD";
import KPOD from "./pages/KPOD";
import ISRO from "./pages/ISRO";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/curosity" element={<Curosity />} />
        <Route path="/apod" element={<APOD />} />
        <Route path="/k-pod" element={<KPOD />} />
        <Route path="/isro" element={<ISRO />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
