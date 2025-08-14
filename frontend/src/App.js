import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import "./App.css"; // Import CSS file

function App() {
  const [patients, setPatients] = useState([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/patients")
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        setResults(data); // default show all
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const fuse = new Fuse(patients, {
      keys: ["name", "disease", "contact"],
      threshold: 0.4,
    });

    if (value.trim() === "") {
      setResults(patients);
    } else {
      const matches = fuse.search(value).map(result => result.item);
      setResults(matches);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">🏥 Patient Records Search</h1>
      <input
        type="text"
        placeholder="🔍 Search patients..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="patient-list">
        {results.map(patient => (
          <div className="patient-card" key={patient.id}>
            <h3 className="patient-name">{patient.name}</h3>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Disease:</strong> {patient.disease}</p>
            <p><strong>Contact:</strong> {patient.contact}</p>
            <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
