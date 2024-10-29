exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello, Netlify!" }),
  };
};


process.env.SAM_GRANT_TYPE