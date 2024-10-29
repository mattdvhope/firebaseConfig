// Load environment variables from .env in local development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

exports.handler = async (event, context) => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.API_ID,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(firebaseConfig),
  };
};
