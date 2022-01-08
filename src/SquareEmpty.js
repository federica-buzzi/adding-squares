import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SquareEmpty() {
  return (
    <button className="squareEmpty">
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
}

export default SquareEmpty;
