// import * as browserMedia from "../../Actions/browserMedia"

function BrowserMedia() {

  return (
    <>
      <div className="browser-controls">
        <button  >
          Fullscreen
          {/* fullscreen */}
        </button>
    
        <div className="side-by-side">
          <button className="sbs-button">
            Prev Tab
            {/* prev_tab */}
          </button>

          <button className="sbs-button">
            Next Tab
            {/* next_tab */}
          </button>
        </div>
      </div>
    </>
  );
}

export default BrowserMedia;
