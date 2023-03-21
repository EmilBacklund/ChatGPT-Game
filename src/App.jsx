import GameCanvas from './components/GameCanvas/GameCanvas';
import GameContainer from './components/GameContainer/GameContainer';
import init from './JavaScript/init';

function App() {
  init();

  return (
    <>
      <GameContainer>
        <GameCanvas></GameCanvas>
      </GameContainer>
    </>
  );
}

export default App;
