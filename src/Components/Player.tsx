import player from "./img/player.png";

const Player = () => {
  return (
    <div>
      <div>Player 1</div>
      <img className="player-img" src={player} alt=""></img>
      <div className="token-block">hello</div>
    </div>
  );
};

export default Player;
