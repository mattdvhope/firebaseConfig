exports.handler = async (event, context) => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,        // Considered non-sensitive for public use
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(firebaseConfig),
  };
};
