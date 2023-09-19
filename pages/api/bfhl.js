// pages/api/bfhl.js

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    res.status(200).json({ operation_code: 1 });
  } else if (req.method === "POST") {
    // Handle POST request
    const data = req.body.data; // Assuming your POST request sends JSON data

    // Your logic for processing the POST data goes here
    // For demonstration, we'll just echo back the received data
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";
    const numbers = data.filter(
      (item) => typeof item === "number" || !isNaN(parseFloat(item))
    );
    const alphabets = data.filter(
      (item) => typeof item === "string" && /^[A-Za-z]$/.test(item)
    );
    const highest_alphabet = findHighestAlphabet(alphabets);

    res.status(200).json({
      is_success: true,
      user_id,
      email,
      roll_number,
      numbers,
      alphabets,
      highest_alphabet,
    });
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}

function findHighestAlphabet(alphabets) {
  if (!alphabets || alphabets.length === 0) return [];

  alphabets = alphabets.filter((char) => /[A-Za-z]/.test(char));

  if (alphabets.length === 0) return []; // No alphabets found

  return [
    String.fromCharCode(
      Math.max(...alphabets.map((char) => char.charCodeAt(0)))
    ),
  ];
}
