function Title({ numberSquare }) {
  if (numberSquare === 0) {
    return <h1 className="title">Initial State</h1>;
  }
  if (numberSquare === 1) {
    return <h1 className="title">After {numberSquare} Click</h1>;
  }
  return <h1 className="title">After {numberSquare} Clicks</h1>;
}

export default Title;
