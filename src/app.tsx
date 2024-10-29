import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectSummary } from './components/ProjectSummary';
import { ProjectDetails } from './types';

function App() {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>({
    projectType: 'Driveway',
    length: 0,
    width: 0,
    material: 'Standard Cement',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  const handleUpdateDetails = (field: keyof ProjectDetails, value: string | number) => {
    setProjectDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar 
        projectDetails={projectDetails}
        onUpdateDetails={handleUpdateDetails}
      />
      <ProjectSummary projectDetails={projectDetails} />
    </div>
  );
}

export default App;
