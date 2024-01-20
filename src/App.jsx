import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import AdminPage from "./pages/AdminPage/AdminPage";
import TimetablePage from "./pages/TimetablePage/TimetablePage";
import TrackingPage from "./pages/TrackingPage/TrackingPage";
import MealsPage from "./pages/MealsPage/MealsPage";
import Navbar from "./components/Navbar/Navbar";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn && <Navbar />}
      {/* <Header /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLoggedIn ? <Homepage /> : <Navigate replace to={"/login"} />
          }
        />
        {/* <Route path='/' exact element={<Homepage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            isLoggedIn ? <AdminPage /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/timetable"
          element={
            isLoggedIn ? <TimetablePage /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/tracking"
          element={
            isLoggedIn ? <TrackingPage /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/meals"
          element={
            isLoggedIn ? <MealsPage /> : <Navigate replace to={"/login"} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
