import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Changelog from "./pages/Changelog";
import Faq from "./pages/Faq";
import Layout from "./components/Layout";
import Architecture from "./pages/Architecture";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/changelog" element={<Changelog />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/architecture" element={<Architecture />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
