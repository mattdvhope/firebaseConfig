// Load environment variables from .env in local development
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const admin = require("firebase-admin");

// Initialize Firebase Admin SDK (runs once per function instance)
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Uses default credentials in Netlify environment
  });
}

exports.handler = async (event, context) => {
  // Step 1: Retrieve x-api-key from headers
  const idToken = event.headers['x-api-key'];

  if (!idToken) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Forbidden: Missing ID token" }),
    };
  }

  try {
    // Step 2: Verify the ID token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    // Proceed only if the token is verified successfully
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
  } catch (error) {
    // Token verification failed
    console.error("Token verification failed:", error.message);
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Forbidden: Invalid token" }),
    };
  }
};
