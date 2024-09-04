export const fetchUsers = async () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
