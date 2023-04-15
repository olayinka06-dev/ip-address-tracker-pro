// import React, { useState, useEffect } from 'react';
// import { Fade } from 'react-reveal';

// const ProgressBar = ({ value, maxValue }) => {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     setWidth(value / maxValue * 100);
//   }, [value, maxValue]);

//   return (
//     <div className="progress-bar">
//       <div className="progress-bar__label">{Math.round(width)}%</div>
//       <Fade left>
//         <div className="progress-bar__fill" style={{ width: `${width}%` }}></div>
//       </Fade>
//     </div>
//   );
// }

// export default ProgressBar;
// .progress-bar {
//     width: 100%;
//     height: 10px;
//     background-color: #ddd;
//     border-radius: 5px;
//   }
  
//   .progress-bar__label {
//     font-size: 12px;
//     font-weight: bold;
//     margin-right: 10px;
//     color: #333;
//   }
  
//   .progress-bar__fill {
//     height: 100%;
//     background-color: #007aff;
//     border-radius: 5px;
//   }
  