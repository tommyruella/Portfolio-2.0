import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PageTransition from "./components/PageTransition";
import routes from "tempo-routes";
import CustomCursor from "./components/CustomCursor";

// Lazy load pages for better performance
const FeaturedProjectsPage = lazy(() => import("./pages/FeaturedProjectsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <CustomCursor color="#6366f1" />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<FeaturedProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </PageTransition>
    </Suspense>
  );
}

export default App;
