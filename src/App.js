import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SpellListScreen from "./pages/SpellListPage";
import SpellDetailPage from "./pages/SpellDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SpellListScreen />} />
      <Route path="/spell/:index" element={<SpellDetailPage />} />
    </Routes>
  );
}

export default App;
