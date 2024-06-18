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

function BrowserControls() {
  const playPause = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/media/play_pause`, { method: "POST" });
  };

  const prevTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/media/prev_track`, { method: "POST" });
  };

  const nextTrack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/media/next_track`, { method: "POST" });
  };

  const openBrowser = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/media/open_browser`, { method: "POST" });
  };

  const openMusic = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/media/open_music`, { method: "POST" });
  };

  const volumeUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/audio/volume_up`, { method: "POST" });
  };

  const volumeDown = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/audio/volume_down`, { method: "POST" });
  };

  const volumeMute = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/audio/volume_mute`, { method: "POST" });
  };

  const setSpeakers = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/audio/audio_speakers`, { method: "POST" });
  };

  const setHeadset = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/global/audio/audio_headphones`, { method: "POST" });
  };

  return (
    <>
      <div className="vertical-buttons">

        <h3>Media</h3>

        <button onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} />{" / "}
          <FontAwesomeIcon icon={faPause} />
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevTrack}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button className="sbs-button" onClick={nextTrack}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
        </div>

        <button onClick={openBrowser}>Open Browser</button>

        <button onClick={openMusic}>Open Music</button>

        <h3>Audio</h3>

        <div className="side-by-side">
          <button className="sbs-button" onClick={volumeDown}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <button className="sbs-button" onClick={volumeUp}>
            <FontAwesomeIcon icon={faVolumeOff} />{" "}
            <FontAwesomeIcon icon={faPlus} />
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

export default BrowserControls;
