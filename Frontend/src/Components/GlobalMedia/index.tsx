import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faHeadphones, faVolumeUp, faVolumeDown } from '@fortawesome/free-solid-svg-icons';

function BrowserMedia() {

  const playPause = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/media_play_pause`, { method: "POST"});
  };

  const prevTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/media_prev_track`, { method: "POST"});
  };

  const nextTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/media_next_track`, { method: "POST"});
  };

  return (
    <>
      <div className="global-media">
        
        <button onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} /> / <FontAwesomeIcon icon={faPause} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevTrack}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
      
          <button className="sbs-button" onClick={nextTrack}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>

        <div className="side-by-side">
          <button className="sbs-button" onClick={nextTrack}>
            <FontAwesomeIcon icon={faVolumeDown} />
            {/* volume_down */}
          </button>
          <button className="sbs-button" onClick={nextTrack}>
            <FontAwesomeIcon icon={faVolumeUp} />
            {/* volume_up */}
          </button>
        </div>

        <div className="side-by-side">

          <button className="sbs-button" onClick={nextTrack}>
            {/* audio_speakers */}
            Speakers
          </button>

          <button className="sbs-button" onClick={nextTrack}>
            Headset
            {/* audio_headphones */}
          </button>

        </div>

      </div>
    </>
  );
}

export default BrowserMedia;
