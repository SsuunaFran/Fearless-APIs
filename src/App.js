import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Univeristies from "./Pages/Universities";
import Layout from "./layouts/Layout";
import Trends from "./Pages/Trends";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/universities" element={<Univeristies />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
