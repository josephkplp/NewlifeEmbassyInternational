import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Give from "./pages/Give";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/give" element={<Give />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
