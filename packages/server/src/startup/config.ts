const requiredEnv = ['DATABASE_URL', 'JWT_SECRET', 'RESEND_API_KEY', 'EMAIL_NAME', 'EMAIL_USER'] as const;

const registerConfig = () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
};

export default registerConfig;
