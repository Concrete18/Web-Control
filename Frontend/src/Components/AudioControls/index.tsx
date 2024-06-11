// import * as browserMedia from "../../Actions/browserMedia"

function BrowserMedia() {

  return (
    <>
      <div className="audio-controls">

        <div className="side-by-side">
            <button className="sbs-button">
              Volume -
              {/* volume_down */}
            </button>
            <button className="sbs-button">
              Volume +
              {/* volume_up */}
            </button>
          </div>

          <button  >
            Audio to Speakers
            {/* audio_speakers */}
          </button>

          <button  >
            Audio to Headphones
            {/* audio_headphones */}
          </button>
          
      </div>
    </>
  );
}

export default BrowserMedia;
