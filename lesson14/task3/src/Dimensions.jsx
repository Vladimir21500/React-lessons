import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({ width: innerWidth, height: innerHeight });

    const onResize = event => {
      const { innerWidth, innerHeight } = event.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const { width, height } = demensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
/* class Dimensions extends Component {
  state = {
    widht: null,
    height: null,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
    const { innerWidth, innerHeight } = window;

    this.setDimensions(innerWidth, innerHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = event => {
    const { innerWidth, innerHeight } = event.target;

    this.setDimensions(innerWidth, innerHeight);
  };

  setDimensions = (width, height) => {
    this.setState({
      width,
      height,
    });
    document.title = `${innerWidth} x ${innerHeight}`;
  };

  render() {
    return <div className="dimensions">{`${this.state.width}px - ${this.state.height}px`}</div>;
  }
} */
