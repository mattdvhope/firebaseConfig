exports.handler = async (event, context) => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
  };

  // Encode the config as a Base64 string
  const encodedConfig = Buffer.from(JSON.stringify(firebaseConfig)).toString("base64");

  return {
    statusCode: 200,
    body: JSON.stringify({ data: encodedConfig }),  // Wrap the encoded data in a JSON object
  };
};
