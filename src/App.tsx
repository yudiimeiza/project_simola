import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BottomNav } from './components/BottomNav';
import { Header } from './components/Header';
import { UserProfile } from './types';

// Page Imports
import LoginPage from './pages/LoginPage';
import StudentDashboard from './pages/StudentDashboard';
import JournalForm from './pages/JournalForm';
import AttendancePage from './pages/AttendancePage';
import ReportRecap from './pages/ReportRecap';
import ProfilePage from './pages/ProfilePage';
import SupervisorDashboard from './pages/SupervisorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ManageData from './pages/ManageData';

function App() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('simola_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated auth check
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const handleLogin = (u: UserProfile) => {
    setUser(u);
    localStorage.setItem('simola_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('simola_user');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface">
        <Routes>
          <Route 
            path="/login" 
            element={user ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} 
          />
          
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
          
          <Route 
            path="/*" 
            element={
              user ? (
                <div className="flex flex-col min-h-screen">
                  <Header userAvatar={user.avatar_url} />
                  <main className="flex-grow pt-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
                    <Routes>
                      <Route path="/dashboard" element={<DashboardSwitcher user={user} />} />
                      <Route path="/journal" element={<JournalForm user={user} />} />
                      <Route path="/attendance" element={<AttendancePage user={user} />} />
                      <Route path="/reports" element={<ReportRecap user={user} />} />
                      <Route path="/profile" element={<ProfilePage user={user} onUpdate={handleLogin} />} />
                      <Route path="/students" element={<ManageData />} />
                      <Route path="/manage-data" element={<ManageData />} />
                      <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                  </main>
                  <BottomNav role={user.role} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            } 
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const DashboardSwitcher = ({ user }: { user: UserProfile }) => {
  if (user.role === 'student') return <StudentDashboard user={user} />;
  if (user.role === 'supervisor') return <SupervisorDashboard user={user} />;
  return <AdminDashboard user={user} />;
};

import { motion } from 'motion/react';
export default App;
