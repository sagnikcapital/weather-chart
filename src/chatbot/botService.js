import { useEffect } from 'react';

/**
 * Custom React Hook
 */
// const useTawkTo = (propertyId) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `https://embed.tawk.to/${propertyId}/default`;
//     script.charset = 'UTF-8';
//     script.setAttribute('crossorigin', '*');
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [propertyId]);
// };


const loadTawkTo = (propertyId) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://embed.tawk.to/${propertyId}/default`;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  document.body.appendChild(script);
};

export default loadTawkTo;