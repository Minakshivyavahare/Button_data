import { useEffect, useState } from 'react';

function MyComponent() {
  const [userData, setUserData] = useState({});

  // Merge multiple JSON objects using the spread operator
  useEffect(() => {
    const user = { name: 'John', age: 30 };
    const address = { city: 'New York', state: 'NY' };
    const contact = { email: 'john@example.com', phone: '123-456-7890' };
    const userData = { ...user, ...address, ...contact };
    setUserData(userData);
  }, []);

  return (
    <div>
      <h2>User Data:</h2>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>City: {userData.city}</p>
      <p>State: {userData.state}</p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.phone}</p>
    </div>
  );
}
export default MyComponent;