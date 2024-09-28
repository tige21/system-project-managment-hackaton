import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProjectPage: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleCreateProject = () => {
    // Логика создания проекта
    navigate('/dashboard');  // После создания проекта переходим на доску задач
  };

  return (
    <div>
      <h1>Create Project</h1>
      <input 
        type="text" 
        value={projectName} 
        onChange={(e) => setProjectName(e.target.value)} 
        placeholder="Project Name" 
      />
      <button onClick={handleCreateProject}>Create Project</button>
    </div>
  );
};

export default CreateProjectPage;
