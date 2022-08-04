import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button type="button" className="trigger-button">
          Company Info
        </button>
      }
    >
      {close => (
        <>
          <div>
            <p>Company: Geeksynergy Technologies Pvt Ltd</p>
            <p>Address: Sanjayanagar, Bengaluru-56</p>
            <p>Phone: XXXXXXXXX09</p>
            <p>Email: XXXXXX@gmail.com</p>
          </div>
          <button
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            Close
          </button>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp
