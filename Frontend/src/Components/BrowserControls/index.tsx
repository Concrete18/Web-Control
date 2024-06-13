function BrowserMedia() {

  const fullscreen = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/fullscreen`, { method: "POST"});
  };

  const prevTab = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/prev_tab`, { method: "POST"});
  };

  const nextTab = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/next_tab`, { method: "POST"});
  };

  return (
    <>
      <div className="browser-controls">
        
        <button onClick={fullscreen}>
          Fullscreen
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

export default BrowserMedia;
