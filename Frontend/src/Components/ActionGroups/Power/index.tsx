import {createButtonHandler} from "../../../utils"

function Miscellaneous() {
  
  // power
  const POWER_ROUTE = "/api/power"
  const sleep = createButtonHandler(`${POWER_ROUTE}/sleep`);
  const shutdown = createButtonHandler(`${POWER_ROUTE}/shutdown`);
  
  return (
    <>
      <div className="vertical-buttons">

        {/* <h3>Power</h3> */}

        <button onClick={sleep}>Sleep PC</button>
      
        <button onClick={shutdown}>Shutdown PC</button>

      </div>
    </>
  );
}

export default Miscellaneous;
