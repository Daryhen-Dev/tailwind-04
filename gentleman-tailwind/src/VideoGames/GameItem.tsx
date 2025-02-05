import { VideoGame } from "../models/videoGame";

export const GameItem = (game: Omit<VideoGame, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={game.image}
          alt={game.title}
          className="object-cover object-center w-full h-full"
        />
        <div className="card-overlay">
            <p className="card-icon">🎮</p>
        </div>
      </div>
      <div className="p-6">
      <h3 className="mb-2 font-bold text-white">{game.title}</h3>
      <h4 className="mb-3 text-lg text-gray-400">{game.subtitle}</h4>
      <p className="text-sm text-gray-400">{game.description}</p>
      </div>
    </div>
  );
};
