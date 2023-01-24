import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import News from "./pages/News";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
