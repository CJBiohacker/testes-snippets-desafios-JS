function generatePassword() {
  const length = 10;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let password = "";

  while (password.length < length) {
    const char = charset[Math.floor(Math.random() * charset.length)];

    if (!password.match(/[A-Z]/) && /[A-Z]/.test(char)) {
      password += char;
    } else if (!password.match(/[0-9]/) && /[0-9]/.test(char)) {
      password += char;
    } else if (
      !password.match(/[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/) &&
      /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(char)
    ) {
      password += char;
    } else if (password.length < length && charset.includes(char)) {
      password += char;
    }
  }
  console.log(
    "password ==> ",
    password
  );
  return password;
}

generatePassword();
