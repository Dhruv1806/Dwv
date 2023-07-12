import React, { useState } from 'react';
import { App, getDwvVersion } from 'dwv';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from '@trendyol-js/react-carousel';
import './Dwn.css'
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
      setImageFiles(files)
    }
  };


  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
     setCurrent(current === imageFiles.length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
     setCurrent(current === 0 ? imageFiles.length - 1 : current - 1);
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
      className="slider"
        id="dwv"
        style={{
          marginLeft: '35%',
          width: '59%',
          height: '580px',
          backgroundColor: 'green',
        }}
      >


{/* <button className="left-arrow" onClick={(prevSlide,handleFolderSelect)} >left</button>
         <button className="right-arrow" onClick={(nextSlide,handleFolderSelect)} >right</button> */}
          {dwvApps.map((dwvApp, index) => (
            <div
            style={{ height: '100%', width: '100%' }}
            key={index}
            id={`layerGroup${index}`}
            className="layerGroup"
            ></div>
            ))}
{imageFiles.map((dwvApp, index) => (
              // current === index ? (
              //  <div key={index} className="slide">
                   <div
            style={{ height: '100%', width: '100%' }}
            key={index}
            id={`layerGroup${index}`}
            ></div>
              //  </div>
// ):null
         ))} 
      </div>

     

            
    </>
  );
};
