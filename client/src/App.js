import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

import './App.css';
import Navbar from './containers/Navbar';
import Login from './containers/Login';
import Home from './containers/Home';
import GeneralRoutes from './PrivateRoutes/GeneralRoutes';
import Signup from './containers/Signup';
import Verification from './containers/Verification';
import Navbar2 from './containers/Navbar2';
import Dashboard from './containers/Candidate/Dashboard';
import PrivateRoutes, { CandidateRoutes, EmployerRoutes } from './PrivateRoutes/RestrictedRoutes';
import Packages from './containers/Employer/Packages';
import FreeTrial from './containers/Employer/FreeTrial';
import ComingSoon from './components/ComingSoon';
import Email from  './containers/Candidate/resetEmail';
import ResetPassword from './containers/Candidate/resetPassword';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {localStorage.getItem('accessToken') ? <Navbar2 /> : null}
          <Routes>
            <Route path='/' element={<GeneralRoutes />} >
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/candidate/email' element={<Email />} />
              <Route exact path='/candidate/reset-password' element={<ResetPassword />} />

            </Route>
            <Route path='/' element={<PrivateRoutes />} >
              <Route path='/' element={<CandidateRoutes />}>
                <Route path='/candidate/verification' element={<Verification />} />
                <Route path='/candidate/dashboard' element={<Dashboard />} />
              </Route>
              <Route path='/' element={<EmployerRoutes />}>
                <Route path='/employer/verification' element={<Verification />} />
                <Route path='/employer/dashboard' element={<Dashboard />} />
                <Route path='/employer/packages' element={<Packages />} />
                <Route path='/employer/packages/freetrial' element={<FreeTrial />} />
              </Route>

            </Route>
            <Route path = '*' element={<ComingSoon />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
