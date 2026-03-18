const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const SHEETS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTPQZM5GpOq8orc8hUc-4j3qyovp_RUiNJ4m2sUbG-rCCMs2aGD_cMx_dyHpaN8DXZPEl_J9KYgsB5q/pub?gid=0&single=true&output=csv";
  
  try {
    const response = await fetch(SHEETS_URL);
    const csv = await response.text();
    
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "text/plain"
      },
      body: csv
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
