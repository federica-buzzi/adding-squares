import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SquareEmpty({ setNumberSquare, numberSquare }) {
  function addSquareHandler() {
    setNumberSquare(numberSquare + 1);
  }
  return (
    <button
      className="square-empty"
      onClick={addSquareHandler}
      aria-label="Add square"
    >
      <FontAwesomeIcon icon={faPlus} className="plus-icon" aria-hidden="true" />
    </button>
  );
}

export default SquareEmpty;
