import Camera from "../../assets/icons/camera"
import Chevron from "../../assets/icons/chevron"
import GridOutline from "../../assets/icons/grid-outline"
import Hand from "../../assets/icons/hand"
import Microphone from "../../assets/icons/microphone"
import Record from "../../assets/icons/record"
import Screen from "../../assets/icons/screen"
import Smile from "../../assets/icons/smile"
import './transmission-controllers.scss'

const TransmissionControllers = () => {
  return (
    <div className="transmission-controllers">
      <ul className="controls-group">
        <li className="control-container">
          <button className="control-button">
            <Microphone />
            <span className="chevron">
              <Chevron />
            </span>
          </button>
        </li>
        <li className="control-container">
          <button className="control-button">
            <Camera />
            <span className="chevron">
              <Chevron />
            </span>
          </button>
        </li>
        <li className="control-container">
          <button className="control-button">
            <Screen />
            <span className="chevron">
              <Chevron />
            </span>
          </button>
        </li>
        <li className="control-container">
          <button className="control-button active">
            <Record />
            <span className="chevron">
              <Chevron color="white" />
            </span>
          </button>
        </li>
        <li className="control-container">
          <button className="control-button">
            <GridOutline />
          </button>
        </li>
        </ul>
        <hr className="divider" />
        <ul className="controls-group">
        <li className="control-container">
          <button className="control-button">
            <Hand />
            <span className="chevron">
              <Chevron />
            </span>
          </button>
        </li>
        <li className="control-container">
          <button className="control-button">
            <Smile />
            <span className="chevron">
              <Chevron />
            </span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default TransmissionControllers
