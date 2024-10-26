// api/proxy.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // Make a request to your PHP backend
    const response = await fetch('http://scandiweb12.000.pe/api/display', {
      method: req.method, // Use the same method as the original request
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    // Send the data back to your Vue app over HTTPS
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
}
