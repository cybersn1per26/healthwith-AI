interface EnvConfig {
  openAiKey: string;
  healthApiKey: string;
  neuralApiKey: string;
  authSecret: string;
  authDomain: string;
  dbConnectionString: string;
  emailServiceKey: string;
  storageServiceKey: string;
}

export const env: EnvConfig = {
  openAiKey: import.meta.env.VITE_OPENAI_API_KEY,
  healthApiKey: import.meta.env.VITE_HEALTH_API_KEY,
  neuralApiKey: import.meta.env.VITE_NEURAL_API_KEY,
  authSecret: import.meta.env.VITE_AUTH_SECRET,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  dbConnectionString: import.meta.env.VITE_DB_CONNECTION_STRING,
  emailServiceKey: import.meta.env.VITE_EMAIL_SERVICE_API_KEY,
  storageServiceKey: import.meta.env.VITE_STORAGE_SERVICE_KEY,
};

// Validate required environment variables
const requiredEnvVars = [
  'VITE_OPENAI_API_KEY',
  'VITE_HEALTH_API_KEY',
  'VITE_NEURAL_API_KEY',
  'VITE_AUTH_SECRET',
  'VITE_AUTH_DOMAIN',
  'VITE_DB_CONNECTION_STRING',
  'VITE_EMAIL_SERVICE_API_KEY',
  'VITE_STORAGE_SERVICE_KEY',
] as const;

export function validateEnv(): void {
  const missingVars = requiredEnvVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }
}
