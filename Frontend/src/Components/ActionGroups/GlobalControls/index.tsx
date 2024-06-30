import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faStepBackward,
  faStepForward,
  faVolumeOff,
  faVolumeMute,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import {createButtonHandler} from "../../../utils"

function BrowserControls() {

  const MEDIA_ROUTE = "/api/global/media"
  const playPause = createButtonHandler(`${MEDIA_ROUTE}/play_pause`);
  const prevTrack = createButtonHandler(`${MEDIA_ROUTE}/prev_track`);
  const nextTrack = createButtonHandler(`${MEDIA_ROUTE}/next_track`);
  const openBrowser = createButtonHandler(`${MEDIA_ROUTE}/open_browser`);
  const openMusic = createButtonHandler(`${MEDIA_ROUTE}/open_music`);

  const AUDIO_ROUTE = "/api/global/audio"

  // TODO add backend routes
  const volumeUp = createButtonHandler(`${AUDIO_ROUTE}/volume_up`);
  const volumeDown = createButtonHandler(`${AUDIO_ROUTE}/volume_down`);
  const volumeMute = createButtonHandler(`${AUDIO_ROUTE}/volume_mute`);
  const setSpeakers = createButtonHandler(`${AUDIO_ROUTE}/audio_speakers`);
  const setHeadset = createButtonHandler(`${AUDIO_ROUTE}/audio_headphones`);

  return (
    <>
      <div className="vertical-buttons">

        <h3>Media</h3>

        <button onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} />{" / "}<FontAwesomeIcon icon={faPause} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevTrack}><FontAwesomeIcon icon={faStepBackward} /></button>
          <button className="sbs-button" onClick={nextTrack}><FontAwesomeIcon icon={faStepForward} /></button>
        </div>

        <button onClick={openBrowser}>Open Browser</button>

        <button onClick={openMusic}>Open Music</button>

        <h3>Audio</h3>

        <div className="side-by-side">
          <button className="sbs-button" onClick={volumeDown}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}<FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="sbs-button" onClick={volumeUp}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}<FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <button onClick={volumeMute}>
          <FontAwesomeIcon icon={faVolumeMute} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={setSpeakers}>Speakers</button>
          <button className="sbs-button" onClick={setHeadset}>Headset</button>
        </div>

      </div>
    </>
  );
}

export default BrowserControls;
