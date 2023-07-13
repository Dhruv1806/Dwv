import React from 'react'

export const Try1 = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
      const fileObject = [file, 1];
      console.log(fileObject); 
    };

   
  
  return (
    <input type="file" onChange={handleFileUpload} />
  )
}
