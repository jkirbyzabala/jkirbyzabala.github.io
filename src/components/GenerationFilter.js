import React from 'react';

const GenerationFilter = ({ generations, selectedGenerations, setSelectedGenerations }) => {
  const handleGenerationChange = (e) => {
    const generation = e.target.value;
    setSelectedGenerations(prev => 
      prev.includes(generation) ? prev.filter(g => g !== generation) : [...prev, generation]
    );
  };

  return (
    <div>
      <h3>Filter by Generation</h3>
      {generations.map(generation => (
        <label key={generation.name}>
          <input
            type="checkbox"
            value={generation.name}
            checked={selectedGenerations.includes(generation.name)}
            onChange={handleGenerationChange}
          />
          {generation.name}
        </label>
      ))}
    </div>
  );
};

export default GenerationFilter;
