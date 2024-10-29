import React from 'react';
import { ProjectDetails } from '../types';

interface SidebarProps {
  projectDetails: ProjectDetails;
  onUpdateDetails: (field: keyof ProjectDetails, value: string | number) => void;
}

export function Sidebar({ projectDetails, onUpdateDetails }: SidebarProps) {
  return (
    <div className="w-80 bg-white p-6 shadow-lg h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-6">Project Information</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            value={projectDetails.projectType}
            onChange={(e) => onUpdateDetails('projectType', e.target.value)}
            className="w-full border rounded-md p-2"
          >
            {["Driveway", "Walkway", "Patio", "Other"].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Length (feet)
          </label>
          <input
            type="number"
            value={projectDetails.length}
            onChange={(e) => onUpdateDetails('length', Number(e.target.value))}
            min="0"
            step="1"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Width (feet)
          </label>
          <input
            type="number"
            value={projectDetails.width}
            onChange={(e) => onUpdateDetails('width', Number(e.target.value))}
            min="0"
            step="1"
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Material
          </label>
          <select
            value={projectDetails.material}
            onChange={(e) => onUpdateDetails('material', e.target.value)}
            className="w-full border rounded-md p-2"
          >
            {["Standard Cement", "Stamped Cement", "Exposed Aggregate"].map((material) => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">Customer Information</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={projectDetails.customerName}
            onChange={(e) => onUpdateDetails('customerName', e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={projectDetails.customerEmail}
            onChange={(e) => onUpdateDetails('customerEmail', e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={projectDetails.customerPhone}
            onChange={(e) => onUpdateDetails('customerPhone', e.target.value)}
            className="w-full border rounded-md p-2"
          />
        </div>
      </div>
    </div>
  );
}
