import React, { useState, useEffect, useRef } from 'react';

function Popup(props) {
  // const { officers, onRemove } = props;
  const [buttonPopup, setButtonPopup] = useState(false);
  const popupRef = useRef();

  // const handleRemove = () => {
  //   setButtonPopup(false);
  // };

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

  // const handleRemoveOfficer = (id) => {
  //   onRemove(id);
  //   setButtonPopup(false);
  
  // };

  return props.trigger ? (
    <div className="popup" ref={popupRef}>
      <div className="popup-inner">
        <input type="text" placeholder="ID" id="officerId" name="id" />
        <h3>Are you sure you want to remove?</h3>
        <div className='yesNo'>
          <button className="popupbutton" onClick={(e) => {
            e.preventDefault();
            const officerId = document.getElementById('officerId').value;
            if(!officerId) return alert('Please enter the id.');
            fetch(`https://simonpradhan.pythonanywhere.com/deleteofficer/${officerId}/`
            , {
              method: "POST",
              headers: {
              "Content-Type": "application/json",
              }
            }).then((res) => {
                setButtonPopup(res.ok);
                window.location.reload();

            }).catch((err) => {
              console.log('Error while deleting: ' + err);
            })
            
          }}>

            Yes
          </button>
          <button className="popupbutton" onClick={() => setButtonPopup(false)}>
            No
          </button>
        </div>
       
        {props.children}
      </div>
    </div>
    
   
  ) : (
    ''
  );
}

export default Popup;
