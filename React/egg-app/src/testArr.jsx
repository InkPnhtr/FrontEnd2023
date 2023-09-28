import React, { useState } from 'react';

function App() {
    
  // Initialize the state variable with an empty array
  const [objectArray, setObjectArray] = useState([]);

  // Function to add objects to the array
  function addObject() {
    // Create a new object to add
    const newObject = { name: 'New Object', value: 0 };

    // Use the spread operator to add the new object to the array
    setObjectArray([...objectArray, newObject]);
  }

  return (
    <div>
      <button onClick={addObject}>Add Object</button>
      {/* Render the objects in the array */}
      <ul>
        {objectArray.map((obj, index) => (
          <li key={index}>{obj.name}: {obj.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
