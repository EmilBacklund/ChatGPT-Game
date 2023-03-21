import World from './World';

function initialization() {
  const world = new World({
    element: document.querySelector('.game-container'),
  });
  world.init();
}

export default initialization;
