import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseFallBack from "./components/SuspenseFallBack";
import Layout from "./layout/Layout";

// import Dashboard from "./pages/Dashboard";
// import NotFound from "./pages/NotFound";
// import Curosity from "./pages/Curosity";
// import APOD from "./pages/APOD";
// import KPOD from "./pages/KPOD";
// import ISRO from "./pages/ISRO";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Curosity = lazy(() => import("./pages/Curosity"));
const APOD = lazy(() => import("./pages/APOD"));
const KPOD = lazy(() => import("./pages/KPOD"));
const ISRO = lazy(() => import("./pages/ISRO"));

function App() {
  const preloader = document.querySelector("#preLoader");

  preloader &&
    setTimeout(() => {
      preloader.remove();
    }, 1000);

  return (
    <Layout>
      <Suspense fallback={<SuspenseFallBack />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/curosity" element={<Curosity />} />
          <Route path="/apod" element={<APOD />} />
          <Route path="/k-pod" element={<KPOD />} />
          <Route path="/isro" element={<ISRO />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
