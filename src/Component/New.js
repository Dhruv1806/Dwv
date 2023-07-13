import React, { useState } from 'react';
import { App } from "dwv";

export const New = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [splited, setSplited] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [display, setDisplay] = useState([]);
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  // Update the splited state when selectedFiles changes
  React.useEffect(() => {
    const subfolders = {};
    selectedFiles.forEach((file) => {
      const subfolder = file.webkitRelativePath.split('/')[
        file.webkitRelativePath.split('/').length - 2
      ];
      if (subfolder in subfolders) {
        subfolders[subfolder].push(file);
      } else {
        subfolders[subfolder] = [file];
      }
    });
    setSplited(Object.values(subfolders));
  }, [selectedFiles]);

  const toggleCollapse = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const app = new App();
  const handleDisplay=(file)=>{
    app.init({
      dataViewConfigs: { "*": [{ divId: 'layerGroup' }] }
    });
    app.loadFiles([file,1]);
    console.log(file);
    // app.clear()
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:"sticky",top:"0"}}>  
        <div className="container-fluid">
          <div className="navbar-brand">
            <form>
              <label htmlFor="Select">Choose</label>
              <select id="Select" value={selectedOption} onChange={handleOptionChange}>
                <option value="Folder">Folder</option>
                <option value="File">File</option>
              </select>
            </form>
          </div>
          <div>
            {selectedOption === 'File' ? (
              <input type="file" multiple directory="" onChange={handleFileSelect} />
            ) : (
              <input type="file" multiple directory="" webkitdirectory="" onChange={handleFileSelect} />
            )}
          </div>
        </div>
      </nav>
      <div className="d-flex">
        <div style={{ height: '100%', width: '13%' }}>
          {selectedFiles.length > 0 && (
            <div>
              {splited.map((subfolderFiles, index) => (
                <div key={index}>
                  <div onClick={() => toggleCollapse(index)}>
                    {expandedIndex === index ? 'total files : '+subfolderFiles.length :  'total files : '+subfolderFiles.length}
                  </div>
                  {expandedIndex === index && (
                    <>
                      {subfolderFiles.map((file, fileIndex) => (
                        <div style={{backgroundColor:"grey"}} key={fileIndex} onClick={() => handleDisplay(file)}>
                          {file.name}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div id='layerGroup' />
      </div>
    </div>
  );
};
