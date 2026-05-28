import games from "../../../data/games.json";

export default async function Play({ params }) {
  const { slug } = await params;

  const game = games.find(g => g.slug === slug);

  if (!game) return <div>Game not found</div>;

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={game.path}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}