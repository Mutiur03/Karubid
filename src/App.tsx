import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect } from "react"
import HomePage from "./pages/HomePage"
import InteriorPage from "./pages/InteriorPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!window.history.state?.usr) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interior" element={<InteriorPage />} />

        {/* <Route path="/chat/:sessionId" element={<Chat />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
