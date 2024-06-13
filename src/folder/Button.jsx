// import React, { useState } from 'react';
// import axios from 'axios';

// const FetchButton = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.get('https://run.mocky.io/v3/44471727-bd53-4c7a-8314-a68cfd6dabc4?Maximus=Brakus');
//       setData(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {loading && <div>Loading...</div>}
//       {error && <div>Error: {error.message}</div>}
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchButton;