// pages/api/bfhl.js

export default function handler(req, res) {
  if (req.method === "GET") {
    // Handle GET request
    res.status(200).json({ operation_code: 1 });
  } else if (req.method === "POST") {
    // Handle POST request
    const data = req.body.data; 

    // For demonstration
    const user_id = "siddhartha_singh_05032002";
    const email = "siddhartha.singh2020@vitbhopal.ac.in";
    const roll_number = "20BEC10020";
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
