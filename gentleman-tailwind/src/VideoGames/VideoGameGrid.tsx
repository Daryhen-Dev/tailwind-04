import { VideoGame } from "../models/videoGame"
import { GameItem } from "./GameItem";

interface Props{
    games: VideoGame[];
}

export const VideoGameGrid = ({games}: Props) => {
    return (
        <div className="min-h-screen px-4 py-12 bg-gray-900 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl ">
                <h1 className="font-bold text-white">Featured Games</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {games.map((game) => (
                        <GameItem key={game.id} {...game}/>
                    ))}
                </div>
            </div>
        </div>
    )
}