import { Route, Routes } from "react-router-dom";
import Bca from "./pages/Bca";
import Home from "./pages/Home";
import Csit from "./pages/Csit";
import Clubs from "./pages/Clubs";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bca" element={<Bca />} />
                <Route path="/bsc-csit" element={<Csit />} />
                <Route path="/clubs" element={<Clubs />} />
            </Routes>
        </>
    );
}

export default App;
