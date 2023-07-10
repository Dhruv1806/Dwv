import React, { useState } from "react";
// import "./DwvComponent.css";
import { App, getDwvVersion } from "dwv";
import { Carousel } from '@trendyol-js/react-carousel';

export const Dwv = () => {
    const [versions] = useState({
        dwv: getDwvVersion(),
        react: React.version
      });
      const [loadProgress, setLoadProgress] = useState([]);
      const [dwvApps, setDwvApps] = useState([]);
      const data=['apple','banana','cat','dog','elephant']
      
      const handleFileSelect = (event) => {
      const folder = event.target.files;
      const files = Object.values(folder);
        console.log(files);
        if (files && files.length > 0) {
          const newDwvApps = [];
          const newLoadProgress = [];
    
          for (let i = 0; i < files.length; i++) {
            const app = new App();
            app.init({
              dataViewConfigs: { "*": [{ divId: `layerGroup${i}` }] }
            });
            app.loadFiles([files[i]]);
            app.addEventListener("loadprogress", (event) => {
              newLoadProgress[i] = event.loaded;
              setLoadProgress([...newLoadProgress]);
            });
            newDwvApps[i] = app;
          }
          setDwvApps(newDwvApps);
        }
      };
  return (
    <>
    <div className="input">
      <label htmlFor="fileinput">Input:</label>
      <input
        type="file"
        id="fileinput"
        multiple
        onChange={handleFileSelect}
      />
      </div>
    <div style={{display: "flex"}}>
      <div id="dwv" style={{width: "59%", backgroundColor: "green", height: "557px"}}>
        {data.map((dwvApp, index) => (
          <div style={{height:"100%",width:"100%"}}
            key={index}
            id={`layerGroup${index}`}
            className="layerGroup"
          >
          </div>
         
        ))}
      </div>
    </div>
  </>
   
  )
}
