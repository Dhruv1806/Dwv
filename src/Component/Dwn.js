import React, { useState } from 'react';
import { App, getDwvVersion } from 'dwv';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '@trendyol-js/react-carousel';

export const Dwn = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [loadProgresss, setloadProgresss] = useState([]);
  const [dwvApps, setDwvApps] = useState([]);

  const handleFolderSelect = (event) => {
    const folder = event.target.files;
    const files = Object.values(folder);
    if (files && files.length > 0) {
      const newDwvApps = [];
      const newloadProgresss = [];
      for (let i = 0; i < files.length; i++) {
        const app = new App();
        app.init({
          dataViewConfigs: { '*': [{ divId: `layerGroup${i}` }] },
        });
        app.loadFiles([files[i]]);
        app.addEventListener('loadProgresss', (event) => {
          newloadProgresss[i] = event.loaded;
          setloadProgresss([...newloadProgresss]);
        });
        newDwvApps[i] = app;
      }
      setDwvApps(newDwvApps);
    }
  };

  return (
    <>
      <div>
        <label htmlFor="folderInput">Select a Folder:</label>
        <input
          type="file"
          id="folderInput"
          directory=""
          webkitdirectory=""
          onChange={handleFolderSelect}
        />
      </div>

      <div
        id="dwv"
        style={{
          marginLeft: '35%',
          width: '59%',
          height: '580px',
          backgroundColor: 'green',
        }}
      >

          {dwvApps.map((dwvApp, index) => (
            <div
            style={{ height: '100%', width: '100%' }}
            key={index}
            id={`layerGroup${index}`}
            className="layerGroup"
            ></div>
            ))}
      </div>
    </>
  );
};
