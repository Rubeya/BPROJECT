import React, { useState } from "react";

const ButtonClick = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);

    fetch('https://run.mocky.io/v3/44471727-bd53-4c7a-8314-a68cfd6dabc4?Maximus=Brakus')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched data:", data);
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Users</button>
      {loading && <div>Loading...</div>}
      {/* {error && <div>Error: {error.message}</div>} */}
      {users.length > 0 && (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ButtonClick;
