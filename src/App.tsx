import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ToolBar from './components/ToolBar/ToolBar';
import LoginPage from './modules/Auth/screens/LoginPage';
import RegisterPage from './modules/Auth/screens/RegisterPage';
import CreateProjectPage from './modules/Projects/screens/ProjectsPage';
import DashboardPage from './modules/Dashboard/screens/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ToolBar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-project" element={<CreateProjectPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} /> {/* По умолчанию перенаправляем на логин */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
