import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faVolumeOff, faVolumeMute, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

function BrowserMedia() {

  const playPause = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    console.log("Sending Global Play/Pause")
    let response = await fetch(`/api/media_play_pause`, { method: "POST"});
    console.log("Finished Fetch")
    if (response.ok) {
      console.log("Success")
    } else {
      console.log("Fail")
    }
  };

  const prevTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/media_prev_track`, { method: "POST"});
  };

  const nextTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/media_next_track`, { method: "POST"});
  };

  const openSpotify = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/open_spotify`, { method: "POST"});
  };
  
  const volumeUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/volume_up`, { method: "POST"});
  };

  const volumeDown = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/volume_down`, { method: "POST"});
  };

  const volumeMute = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/volume_mute`, { method: "POST"});
  };

  const setSpeakers = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/audio_speakers`, { method: "POST"});
  };

  const setHeadset = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/audio_headphones`, { method: "POST"});
  };

  return (
    <>
      <div className="vertical-buttons">
        
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

        <button onClick={openSpotify}>
          Open Spotify
        </button>

        <br />

        <div className="side-by-side">
          <button className="sbs-button" onClick={volumeDown}>
            <FontAwesomeIcon icon={faVolumeOff} /> <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="sbs-button" onClick={volumeUp}>
            <FontAwesomeIcon icon={faVolumeOff} /> <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        <button onClick={volumeMute}>
          <FontAwesomeIcon icon={faVolumeMute} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={setSpeakers}>
            Speakers
          </button>
          <button className="sbs-button" onClick={setHeadset}>
            Headset
          </button>
        </div>

      </div>
    </>
  );
}

export default BrowserMedia;
