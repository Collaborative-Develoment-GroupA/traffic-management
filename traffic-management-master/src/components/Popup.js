import React, { useState, useEffect, useRef } from 'react';

function Popup(props) {
  const { officers, onRemove } = props;
  const [buttonPopup, setButtonPopup] = useState(false);
  const popupRef = useRef();

  const handleRemove = () => {
    setButtonPopup(false);
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setButtonPopup(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleRemoveOfficer = (id) => {
    onRemove(id);
    setButtonPopup(false);
  };

  return props.trigger ? (
    <div className="popup" ref={popupRef}>
      <div className="popup-inner">
        <input type="text" placeholder="ID" id="id" name="id" />
        <button className="close-btn" onClick={handleRemove}>
          Ok
        </button>
        {props.children}
      </div>
      {buttonPopup && (
        <div className="success-message">
          Officer has been successfully removed.
        </div>
      )}
    </div>
  ) : (
    ''
  );
}

export default Popup;
