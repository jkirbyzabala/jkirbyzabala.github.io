import React from 'react';

function GenerationFilter({ generations, selectedGenerations, setSelectedGenerations }) {
  const handleCheckboxChange = (generationName) => {
    if (selectedGenerations.includes(generationName)) {
      setSelectedGenerations(selectedGenerations.filter(g => g !== generationName));
    } else {
      setSelectedGenerations([...selectedGenerations, generationName]);
    }
  };

  return (
    <div>
      <h2>Filter by Generation</h2>
      <div>
        {generations.map((generation, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={selectedGenerations.includes(generation.name)}
              onChange={() => handleCheckboxChange(generation.name)}
            />
            {generation.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default GenerationFilter;
