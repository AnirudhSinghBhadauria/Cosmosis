import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SuspenseFallBack from "./components/SuspenseFallBack";
import Layout from "./layout/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Curosity = lazy(() => import("./pages/Curosity"));
const APOD = lazy(() => import("./pages/APOD"));
const KPOD = lazy(() => import("./pages/KPOD"));
const ISRO = lazy(() => import("./pages/ISRO"));

function App() {
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
