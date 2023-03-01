// List of common email providers
const emailProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "outlook.com", "live.com"];

// Function to generate a random email name
const generateRandomEmailName = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomName = Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return randomName;
}

// Generate a random email name and email provider
const emailName = generateRandomEmailName();
const emailProvider = emailProviders[Math.floor(Math.random() * emailProviders.length)];
const generatedEmail = `${emailName}@${emailProvider}`;

export default generatedEmail;
