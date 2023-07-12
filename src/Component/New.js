import React, { useState } from 'react';

export const New = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(selectedOption);
    };
    const handleFileSelect = (event) => {
      const files = Array.from(event.target.files);
      setSelectedFiles(files);
    
      console.log(event.target.files);
    };
  return (
    <div>
     


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand" >
        <form onSubmit={handleSubmit}>
        <label htmlFor="Select">Choose</label>
        <select id="Select" value={selectedOption} onChange={handleOptionChange}>
          <option value="Folder">Folder</option>
          <option value="File">File</option>
        </select>
       
      </form></div>
      <div>
        {selectedOption==='File'? (
            <input
            type="file"
            multiple
            directory=""
            onChange={handleFileSelect}
          />
        ):(
            <input
            type="file"
            multiple
            directory=""
            webkitdirectory=""
            onChange={handleFileSelect}
          />
        )}
     </div>
  </div>
</nav>
{selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
