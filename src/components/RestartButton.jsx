const RestartButton = ({ restart }) => {
  return (
    <button id="restart" value="colors" onClick={restart}>
      Restart?
    </button>
  );
};

export default RestartButton;
