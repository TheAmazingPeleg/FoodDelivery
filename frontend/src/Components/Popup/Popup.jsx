import React from 'react';

function Popup({ message, type }) {
  let popupClassName = "popup";

  if (type === 'error') {
    popupClassName += " error";
  } 
  else if (type === 'success') {
    popupClassName += " success";
  }

  return (
    <div className={popupClassName}>
      {message}
    </div>
  );
}

export default Popup;



//usage example:

// import React from 'react';
// import Popup from './Popup';

// function MyComponent() {
//   return (
//     <div>
//       <button onClick={() => alert('Generic popup!')}>
//         Show generic popup
//       </button>
//       <button onClick={() => <Popup message="Error!" type="error" />}>
//         Show error popup
//       </button>
//       <button onClick={() => <Popup message="Success!" type="success" />}>
//         Show success popup
//       </button>
//     </div>
//   );
// }

// export default MyComponent;