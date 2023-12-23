export const projectTypes = {
  backend: "backend",
  frontend: "frontend",
} as const;
export type ProjectType = keyof typeof projectTypes;
