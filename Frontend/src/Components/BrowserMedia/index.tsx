
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

  // TODO switch to icons from font awesome

  return (
    <>
      <div className="browser-media">

        <button onClick={playPause}>
          Video Play/Pause
        </button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevVideo}>
            Prev Video
          </button>

          <button className="sbs-button" onClick={nextVideo}>
            Next Video
          </button>
        </div>

        <div className="side-by-side">
            <button className="sbs-button"onClick={prevChapter}>
              Prev Chap
            </button>

            <button className="sbs-button"onClick={nextChapter}>
              Next Chap
            </button>
        </div>

        <div className="side-by-side">
            <button className="sbs-button"onClick={skipBack}>
              Skip Back
            </button>
          
            <button className="sbs-button"onClick={skipForward}>
              Skip Forward
            </button>
        </div>
        
      </div>
    </>
  );
}

export default BrowserMedia;
