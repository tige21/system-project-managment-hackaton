import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './modules/Auth/screens/LoginPage/LoginScreen';
import RegisterPage from './modules/Auth/screens/RegisterScreen/RegisterScreen';
import CreateProjectPage from './modules/Projects/screens/ProjectsPage';
import DashboardPage from './modules/Dashboard/screens/DashboardPage';
import ProjectsPage from './modules/Projects/screens/ProjectsPage';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Незащищённые маршруты */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Защищённые маршруты */}
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> {/* Добавляем маршрут */}
        
        {/* По умолчанию перенаправляем на логин, если не авторизованы */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
