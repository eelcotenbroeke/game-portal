import games from "../data/games.json";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>🎮 My Game Portal</h1>

      <ul>
        {games.map(game => (
          <li key={game.slug}>
            <Link href={`/play/${game.slug}`}>
              {game.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}