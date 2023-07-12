import React, { useEffect, useRef } from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneTools from 'cornerstone-tools';
import dicomParser from 'dicom-parser';

export const DwvSlider = () => {
  const canvasRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const dicomData = reader.result;
        displayDicomImage(dicomData);
      };

      reader.readAsArrayBuffer(file);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    cornerstone.enable(canvas);

    const fileReader = new FileReader();
    fileReader.onload = function (e) {
      const dicomData = new Uint8Array(e.target.result);
      const dataSet = dicomParser.parseDicom(dicomData);
      const imagePixelModule = dataSet.dict['x00280103'];

      const image = {
        imageId: `dicom:${dicomFile.name}`,
        minPixelValue: imagePixelModule.value[0],
        maxPixelValue: imagePixelModule.value[1],
        slope: 1.0,
        intercept: 0,
        windowCenter: (imagePixelModule.value[0] + imagePixelModule.value[1]) / 2,
        windowWidth: imagePixelModule.value[1] - imagePixelModule.value[0],
        getPixelData: () => dicomData,
      };

      cornerstone.displayImage(canvas, image);
    };

    fileReader.readAsArrayBuffer(dicomFile);
    
    return () => {
      cornerstone.disable(canvas);
    };
  }, [dicomFile]);

  return 
  <>
  <input type="file" accept=".dcm" onChange={handleFileChange} />
  <canvas ref={canvasRef} />;
  </>
}
