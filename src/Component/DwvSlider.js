// import { useState } from 'react';
// import ReactSimplyCarousel from 'react-simply-carousel';
// import { App, getDwvVersion } from 'dwv';
// import {hello} from './images/tree-736885_1280.jpg'

// export const DwvSlider = () => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const [imageFiles, setImageFiles] = useState([]);
//   const [loadProgresss, setloadProgresss] = useState([]);
//   const [dwvApps, setDwvApps] = useState([]);
//   const data=['dhruv','sneh','zeel']

//   const handleFolderSelect = (event) => {
//     const folder = event.target.files;
//     const files = Object.values(folder);
//     if (files && files.length > 0) {
//       const newDwvApps = [];
//       const newloadProgresss = [];
//       for (let i = 0; i < files.length; i++) {
//         const app = new App();
//         app.init({
//           dataViewConfigs: { '*': [{ divId: `layerGroup${i}` }] },
//         });
//         app.loadFiles([files[i]]);
//         app.addEventListener('loadProgresss', (event) => {
//           newloadProgresss[i] = event.loaded;
//           setloadProgresss([...newloadProgresss]);
//         });
//         newDwvApps[i] = app;
//       }
//       setDwvApps(newDwvApps);
//     }
//   };
//   return (
//     <>
//     <div>
//         <label htmlFor="folderInput">Select a Folder:</label>
//         <input
//           type="file"
//           id="folderInput"
//           directory=""
//           webkitdirectory=""
//           onChange={handleFolderSelect}
//         />
//       </div>
//     <div>
//       <ReactSimplyCarousel
//         activeSlideIndex={activeSlideIndex}
//         onRequestChange={setActiveSlideIndex}
//         itemsToShow={1}
//         itemsToScroll={1}
//         forwardBtnProps={{
//           //here you can also pass className, or any other button element attributes
//           style: {
//             alignSelf: 'center',
//             background: 'white',
//             border: 'none',
//             borderRadius: '50%',
//             color: 'black',
//             cursor: 'pointer',
//             fontSize: '20px',
//             height: 30,
//             lineHeight: 1,
//             textAlign: 'center',
//             width: 30,
//           },
//           children: <span>{`>`}</span>,
//         }}
//         backwardBtnProps={{
//           //here you can also pass className, or any other button element attributes
//           style: {
//             alignSelf: 'center',
//             background: 'white',
//             border: 'none',
//             borderRadius: '50%',
//             color: 'black',
//             cursor: 'pointer',
//             fontSize: '20px',
//             height: 30,
//             lineHeight: 1,
//             textAlign: 'center',
//             width: 30,
//           },
//           children: <span>{`<`}</span>,
//         }}
//         responsiveProps={[
//           {
//             itemsToShow: 1,
//             itemsToScroll: 1,
//             // minWi  dth: 768,
//           },
//         ]}
//         speed={400}
//         easing="linear"
//       >
//             {dwvApps.map((dwvApp, index) => (
//               <div
//                 style={{ height: '100px', width: '100px' }}
//                 key={index}
//                 id={`layerGroup${index}`}
//                 className="layerGroup"
//               ></div>
//           ))}
      
//       </ReactSimplyCarousel>
//     </div>
//     </>

//   )
// }



import React from 'react'
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';

export const DwvSlider = () => {
  const data=['dhruv','zeel','sneh']
  return (
    <Carousel>
      {data.map((name,index)=>{
        return(
          <>
          {name}
          </>
        )
      })}
    </Carousel>
  )
}
