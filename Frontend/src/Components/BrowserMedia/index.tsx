import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faBackward, faForward } from '@fortawesome/free-solid-svg-icons';

function BrowserMedia() {

  const playPause = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/space`, { method: "POST"});
  };

  const prevVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/yt_prev`, { method: "POST"});
  };

  const nextVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/prev_chapter`, { method: "POST"});
  };

  const prevChapter = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/prev_chapter`, { method: "POST"});
  };

  const nextChapter = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/next_chapter`, { method: "POST"});
  };

  const skipBack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/left_arrow`, { method: "POST"});
  };

  const skipForward = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/right_arrow`, { method: "POST"});
  };

  return (
    <>
      <div className="browser-media">

        <button onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} /> / <FontAwesomeIcon icon={faPause} />
        </button>

        <div className="side-by-side">
          
          <button className="sbs-button" onClick={prevVideo}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>

          <button className="sbs-button" onClick={nextVideo}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>

        </div>

        <div className="side-by-side">

          <button className="sbs-button"onClick={skipBack}>
            <FontAwesomeIcon icon={faBackward} />
          </button>
        
          <button className="sbs-button"onClick={skipForward}>
            <FontAwesomeIcon icon={faForward} />
          </button>

        </div>
        
        <div className="side-by-side">

          <button className="sbs-button"onClick={prevChapter}>
            Prev Chapter
          </button>

          <button className="sbs-button"onClick={nextChapter}>
            Next Chapter
          </button>

        </div>

      </div>
    </>
  );
}

export default BrowserMedia;
