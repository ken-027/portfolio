export const sendEmail = async () => {
  const response = await fetch(
    "https://inventory-service-nine.vercel.app/api/v1/users"
  );

  const users = await response.json();

  console.log(users);
};
