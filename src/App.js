import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useState, useRef } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const exerciseRef = useRef(null);

  return (
    <>
      <Navbar exerciseRef={exerciseRef} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              loading={loading}
              setLoading={setLoading}
              exerciseRef={exerciseRef}
            />
          }
        />
        <Route
          path="/exercise/:id"
          element={<ExerciseDetail loading={loading} setLoading={setLoading} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
