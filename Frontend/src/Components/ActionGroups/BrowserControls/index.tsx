import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faBackward, faForward, faExpand } from '@fortawesome/free-solid-svg-icons';

function BrowserControl() {

  // media

  const playPause = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/play_pause`, { method: "POST"});
  };

  const nextVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/next`, { method: "POST"});
  };

  const prevVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/prev`, { method: "POST"});
  };

  const skipForward = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/skip_forwards`, { method: "POST"});
  };
  
  const skipBack = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/skip_backwards`, { method: "POST"});
  };
  
  const nextChapter = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/next_chapter`, { method: "POST"});
  };
  
  const prevChapter = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/media/prev_chapter`, { method: "POST"});
  };

  // navigation

  const fullscreen = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/nav/fullscreen`, { method: "POST"});
  };

  const prevTab = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/nav/prev_tab`, { method: "POST"});
  };

  const nextTab = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/browser/nav/next_tab`, { method: "POST"});
  };

  return (
    <>
      <div className="vertical-buttons">

        <h3>Media</h3>

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

        <h3>Navigation</h3>

        <button onClick={fullscreen}>
          <FontAwesomeIcon icon={faExpand} />
        </button>
    
        <div className="side-by-side">
          <button className="sbs-button" onClick={prevTab}>
            Prev Tab
          </button>
          <button className="sbs-button" onClick={nextTab}>
            Next Tab
          </button>
        </div>

      </div>
    </>
  );
}

export default BrowserControl;
