import player from "./img/player.png";
import token from "./img/token.jpg";

const Player = () => {
  return (
    <div>
      <div>Player 1</div>
      <img className="player-img" src={player} alt=""></img>
      <div className="token-block">
        <img className="token-piece" src={token} alt=""></img>
        <img className="token-piece" src={token} alt=""></img>
        <img className="token-piece" src={token} alt=""></img>
      </div>
    </div>
  );
};

export default Player;
