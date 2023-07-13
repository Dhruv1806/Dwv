import React, { useState } from 'react'
import { App, getDwvVersion } from "dwv";


export const Try1 = () => {
    const [dwv,setDwv]=useState()

    const [versions] = useState({
        dwv: getDwvVersion(),
        react: React.version
      });

      // Initialize the dwv application
    const app = new App();

    // Set the target DICOM container element
    app.init({
      dataViewConfigs: {divId: 'layerGroup0'}
    });

    const handleFileSelect = (event) => {
        const files =event.target.files
       setDwv(files)
      };
    console.log(dwv);
  return (
    <div>
        <input type="file" multiple directory="" onChange={handleFileSelect} />
    </div>
  )
}
