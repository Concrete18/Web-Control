import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faBackward, faForward, faVolumeOff, faVolumeMute, faPlus, faMinus, faExpand } from '@fortawesome/free-solid-svg-icons';
import {createButtonHandler} from "../../../utils"

function BrowserControl() {

  // media
  const MEDIA_ROUTE = "/api/browser/media"
  const playPause = createButtonHandler(`${MEDIA_ROUTE}/play_pause`);
  const nextVideo = createButtonHandler(`${MEDIA_ROUTE}/next`);
  const prevVideo = createButtonHandler(`${MEDIA_ROUTE}/prev`);
  const skipForward = createButtonHandler(`${MEDIA_ROUTE}/skip_forwards`);
  const skipBack = createButtonHandler(`${MEDIA_ROUTE}/skip_backwards`);
  const nextChapter = createButtonHandler(`${MEDIA_ROUTE}/next_chapter`);
  const prevChapter = createButtonHandler(`${MEDIA_ROUTE}/prev_chapter`);

  // navigation
  const NAV_ROUTE = "/api/browser/nav"
  const fullscreen = createButtonHandler(`${NAV_ROUTE}/fullscreen`);
  const prevTab = createButtonHandler(`${NAV_ROUTE}/prev_tab`);
  const nextTab = createButtonHandler(`${NAV_ROUTE}/next_tab`);

  // audio

  const AUDIO_ROUTE = "/api/browser/audio"
  const volumeUp = createButtonHandler(`${AUDIO_ROUTE}/volume_up`);
  const volumeDown = createButtonHandler(`${AUDIO_ROUTE}/volume_down`);
  const volumeMute = createButtonHandler(`${AUDIO_ROUTE}/volume_mute`);

  return (
    <>
      <div className="vertical-buttons">

        <h3>Video Player</h3>

        <button onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} /> / <FontAwesomeIcon icon={faPause} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button"onClick={skipBack}><FontAwesomeIcon icon={faBackward} /></button>
          <button className="sbs-button"onClick={skipForward}><FontAwesomeIcon icon={faForward} /></button>
        </div>
        
        <div className="side-by-side">
          <button className="sbs-button"onClick={prevChapter}>Prev Chap</button>
          <button className="sbs-button"onClick={nextChapter}>Next Chap</button>
        </div>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevVideo}><FontAwesomeIcon icon={faStepBackward} /></button>
          <button className="sbs-button" onClick={nextVideo}><FontAwesomeIcon icon={faStepForward} /></button>
        </div>

        <h3>Navigation</h3>

        <button onClick={fullscreen}><FontAwesomeIcon icon={faExpand} /></button>
    
        <div className="side-by-side">
          <button className="sbs-button" onClick={prevTab}>Prev Tab</button>
          <button className="sbs-button" onClick={nextTab}>Next Tab</button>
        </div>

        <h3>Video Audio</h3>

        <div className="side-by-side">
          <button className="sbs-button" onClick={volumeDown}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}<FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="sbs-button" onClick={volumeUp}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}<FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <button onClick={volumeMute}><FontAwesomeIcon icon={faVolumeMute} /></button>

      </div>
    </>
  );
}

export default BrowserControl;
