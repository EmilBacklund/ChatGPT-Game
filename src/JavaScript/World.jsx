import React from 'react';

class World extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    console.log('hello', canvas, ctx, this);
  }

  init() {
    console.log('hello', this);
  }
}

export default World;
