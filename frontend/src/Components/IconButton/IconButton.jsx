import React from 'react';
import PropTypes from 'prop-types';

function IconButton(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <i className={props.iconClassName} aria-hidden="true"></i>
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;



//Usage example:

// import React from 'react';
// import IconButton from './IconButton';

// function MyComponent() {
//   return (
//     <div>
//       <IconButton iconClassName="fa fa-heart" onClick={() => alert('Button clicked!')} />
//     </div>
//   );
// }

// export default MyComponent;