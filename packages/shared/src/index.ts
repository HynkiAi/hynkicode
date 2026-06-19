export interface Model {
  id: string;
  name: string;
}

export interface PlanResult {
  modelId: string;
  summary?: string;
  steps?: string[];
  files?: string[];
  risks?: string[];
  raw: string[];
}

export interface PlannerRequest {
  prompt: string;
  models: string[];
}

export interface Settings {
  openRouterKey: string;
}
