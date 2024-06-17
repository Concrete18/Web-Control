function Miscellaneous() {

  // power

  const sleep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/power/sleep`, { method: "POST"});
  };

  const shutdown = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/power/shutdown`, { method: "POST"});
  };

  // window

  const minimize = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/window/minimize`, { method: "POST"});
  };
  
  const refocus1 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/window/refocus1`, { method: "POST"});
  };
  
  const refocus2 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/window/refocus2`, { method: "POST"});
  };

  // display

  const external = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/display/external`, { method: "POST"});
  };

  const internal = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/display/internal`, { method: "POST"});
  };

  const extend = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/display/extend`, { method: "POST"});
  };

  const duplicate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/display/duplicate`, { method: "POST"});
  };
  
  return (
    <>
      <div className="vertical-buttons">

        <h3>Power</h3>

        <button onClick={sleep}>
          Sleep PC
        </button>
      
        <button onClick={shutdown}>
          Shutdown PC
        </button>

        <h3>Window</h3>

        <button onClick={minimize}>
          Minimize Window
        </button>

        <button onClick={refocus1}>
          Refocus Window 1
        </button>

        <button onClick={refocus2}>
          Refocus Window 2
        </button>

        <h3>Display</h3>

        <button onClick={internal}>
          PC Screen Only
        </button>

        <button onClick={external}>
          Second Screen Only
        </button>

        <button onClick={extend}>
          Extend
        </button>

        <button onClick={duplicate}>
          Duplicate
        </button>

      </div>
    </>
  );
}

export default Miscellaneous;
