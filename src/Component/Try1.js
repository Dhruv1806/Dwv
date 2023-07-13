import React, { useEffect, useRef,useState } from 'react';
import cornerstone from 'cornerstone-core';
import { CornerstoneViewport } from 'react-cornerstone-viewport';


export const Try1 = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const viewportElement = useRef(null);
    const handleFileSelect = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
      };
    useEffect(() => {
        cornerstone.enable(viewportElement.current);
        cornerstone.loadImage(selectedFiles).then((image) => {
          cornerstone.displayImage(viewportElement.current, image);
        });
    
        return () => {
          cornerstone.disable(viewportElement.current);
        };
      }, [selectedFiles]);
  return (
    <>
       <input type="file" multiple directory="" webkitdirectory="" onChange={handleFileSelect} />
     <div ref={viewportElement} style={{ width: '100%', height: '100%' }} />
    </>
  )
}
