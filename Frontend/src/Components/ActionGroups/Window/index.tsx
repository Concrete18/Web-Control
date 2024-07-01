import {createButtonHandler} from "../../../utils"

function Window() {
  
  // window
  const WINDOW_ROUTE = "/api/window"
  const prevWindow = createButtonHandler(`${WINDOW_ROUTE}/prev`);
  const nextWindow = createButtonHandler(`${WINDOW_ROUTE}/next`);
  const refocus = createButtonHandler(`${WINDOW_ROUTE}/refocus`);
  const minimize = createButtonHandler(`${WINDOW_ROUTE}/minimize`);
  const maximize = createButtonHandler(`${WINDOW_ROUTE}/maximize`);

  // display
  const DISPLAY_ROUTE = "/api/display"
  const internal = createButtonHandler(`${DISPLAY_ROUTE}/internal`);
  const extend = createButtonHandler(`${DISPLAY_ROUTE}/extend`);
  const external = createButtonHandler(`${DISPLAY_ROUTE}/external`);
  const duplicate = createButtonHandler(`${DISPLAY_ROUTE}/duplicate`);
  
  return (
    <>
      <div className="vertical-buttons">

        <h3>Window</h3>

        <button onClick={minimize}>Minimize</button>

        <button onClick={maximize}>Maximize</button>

        <div className="side-by-side">
          <button className="sbs-button" onClick={prevWindow}>Prev</button>
          <button className="sbs-button" onClick={nextWindow}>Next</button>
        </div>

        <button onClick={refocus}>Refocus</button>

        <h3>Display</h3>

        <button onClick={internal}>PC Screen Only</button>

        <button onClick={external}>Second Screen Only</button>

        <button onClick={extend}>Extend</button>

        <button onClick={duplicate}>Duplicate</button>

      </div>
    </>
  );
}

export default Window;
