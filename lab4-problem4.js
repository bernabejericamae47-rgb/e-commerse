function getTopScorers(playerList) {

    const expanded = [...playerList];

    while (expanded.length < 10) {
        expanded.push({ name: "Guest", score: 0 });
    }

    return expanded
        .filter(player => player.score > 8)
        .map(player => player.name)
        .join(", ");
}