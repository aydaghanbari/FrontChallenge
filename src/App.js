import { Route, Routes } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import MainPage from './pages/MainPage';
import SignUp from './pages/MainPage/SignUp';
import Login from './pages/MainPage/Login';
import Layout from './Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Offers from './pages/Home/Offers';
import Services from './pages/Home/Services';
import PopularServices from './pages/Home/PopularServices';
import Notification from './pages/Home/Notifications';
import Profile from './pages/Profile';
import EditProfile from './pages/Profile/EditProfile';
import Inbox from './pages/Inbox';
import Calender from './pages/Calender';

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<MainPage />}
            />
            <Route
              path="sign-up"
              element={<SignUp />}
            />
            <Route
              path="login"
              element={<Login />}
            />
          </Route>
          <Route element={<Layout />}>
            <Route path="/home">
              <Route
                index
                element={<Home />}
              />
              <Route
                path="notification"
                element={<Notification />}
              />
              <Route
                path="offers"
                element={<Offers />}
              />
              <Route
                path="services"
                element={<Services />}
              />
              <Route
                path="popular-services"
                element={<PopularServices />}
              />
            </Route>
            <Route path="profile">
              <Route
                index
                element={<Profile />}
              />
              <Route
                path="profile-edit"
                element={<EditProfile />}
              />
            </Route>
            <Route path="/booking">
              <Route
                index
                element={<Booking />}
              />
            </Route>
            <Route path="/inbox">
              <Route
                index
                element={<Inbox />}
              />
            </Route>
            <Route path="/calender">
              <Route
                index
                element={<Calender />}
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
