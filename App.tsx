import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SpeedToLead from './pages/SpeedToLead';
import NoShowReduction from './pages/NoShowReduction';
import PatientReactivation from './pages/PatientReactivation';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route index element={<Navigate to="/speed-to-lead" replace />} />
            <Route path="speed-to-lead" element={<SpeedToLead />} />
            <Route path="no-show-reduction" element={<NoShowReduction />} />
            <Route path="patient-reactivation" element={<PatientReactivation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
