import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Changelog from "./pages/Changelog";
import Layout from "./components/Layout";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/changelog" element={<Changelog />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
