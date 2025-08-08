import { BrowserRouter, Route, Routes } from "react-router";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Give from "./pages/Give";
import HomePage from "./pages/HomePage";
import { CustomThemeProvider } from "./themes/ThemeProvider";

function App() {
  return (
    <>
      <CustomThemeProvider>
        {/* The CustomThemeProvider wraps the entire application to provide theme context */}
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/give" element={<Give />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </>
  );
}

export default App;
