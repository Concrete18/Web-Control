function Miscellaneous() {

  const sleep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/sleep`, { method: "POST"});
  };

  const shutdown = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/shutdown`, { method: "POST"});
  };

  const minimize = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/minimize`, { method: "POST"});
  };

  const refocus1 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/refocus1`, { method: "POST"});
  };

  const refocus2 = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();
    await fetch(`/api/refocus2`, { method: "POST"});
  };

  return (
    <>
      <div className="vertical-buttons">

        <button onClick={sleep}>
          Sleep PC
        </button>
      
        <button onClick={shutdown}>
          Shutdown PC
        </button>

        <br />

        <button onClick={minimize}>
          Minimize Window
        </button>

        <button onClick={refocus1}>
          Refocus Window 1
        </button>

        <button onClick={refocus2}>
          Refocus Window 2
        </button>

      </div>
    </>
  );
}

export default Miscellaneous;
