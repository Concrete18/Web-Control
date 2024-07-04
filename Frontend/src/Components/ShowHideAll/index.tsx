const ShowHideButtons = ({ setGlobalVisibility, globalVisibility }: any) => {

  return (
    <div className="side-by-side">
      <button
        className="sbs-button"
        onClick={() => setGlobalVisibility(true)}
        disabled={globalVisibility}
      >
        Show All
      </button>
      <button
        className="sbs-button"
        onClick={() => setGlobalVisibility(false)}
        disabled={!globalVisibility}
      >
        Hide All
      </button>
    </div>
  );
};

export default ShowHideButtons;
