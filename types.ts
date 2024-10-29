export interface ProjectDetails {
  projectType: string;
  length: number;
  width: number;
  material: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
}

export interface MaterialCosts {
  [key: string]: number;
}

export const MATERIAL_COSTS: MaterialCosts = {
  "Standard Cement": 10.0,
  "Stamped Cement": 15.0,
  "Exposed Aggregate": 20.0,
};

export const LABOR_RATE_PER_SQFT = 8.0;
