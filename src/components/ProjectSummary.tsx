import React from 'react';
import { ProjectDetails, MATERIAL_COSTS, LABOR_RATE_PER_SQFT } from '../types';
import { FileDown, Printer } from 'lucide-react';

interface ProjectSummaryProps {
  projectDetails: ProjectDetails;
}

export function ProjectSummary({ projectDetails }: ProjectSummaryProps) {
  const squareFootage = projectDetails.length * projectDetails.width;
  const materialCost = squareFootage * MATERIAL_COSTS[projectDetails.material];
  const laborCost = squareFootage * LABOR_RATE_PER_SQFT;
  const totalCost = materialCost + laborCost;

  const handleDownloadCSV = () => {
    const rows = [
      ['Item', 'Description'],
      ['Project Type', projectDetails.projectType],
      ['Dimensions', `${projectDetails.length} ft x ${projectDetails.width} ft`],
      ['Square Footage', `${squareFootage.toFixed(2)} sq ft`],
      ['Material', projectDetails.material],
      ['Material Cost', `$${materialCost.toFixed(2)}`],
      ['Labor Cost', `$${laborCost.toFixed(2)}`],
      ['Total Cost', `$${totalCost.toFixed(2)}`]
    ];

    const csvContent = rows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice_${projectDetails.customerName.replace(/\s+/g, '_').toLowerCase()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Project Summary</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-600">Project Type</h3>
              <p className="text-lg">{projectDetails.projectType}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Dimensions</h3>
              <p className="text-lg">{projectDetails.length} ft x {projectDetails.width} ft</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Square Footage</h3>
              <p className="text-lg">{squareFootage.toFixed(2)} sq ft</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Material</h3>
              <p className="text-lg">{projectDetails.material}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Cost Breakdown</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Material Cost</span>
              <span className="text-lg font-semibold">${materialCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-gray-600">Labor Cost</span>
              <span className="text-lg font-semibold">${laborCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-xl font-bold">Total Cost</span>
              <span className="text-2xl font-bold text-blue-600">${totalCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-600">Name</h3>
              <p className="text-lg">{projectDetails.customerName}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Email</h3>
              <p className="text-lg">{projectDetails.customerEmail}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-600">Phone</h3>
              <p className="text-lg">{projectDetails.customerPhone}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FileDown size={20} />
            Download Invoice
          </button>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Printer size={20} />
            Print Summary
          </button>
        </div>
      </div>
    </div>
  );
}
