import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExerciseDetail from "./pages/ExerciseDetail";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home loading={loading} setLoading={setLoading} />}
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
