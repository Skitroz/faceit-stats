export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const response1 = await fetch(
                `https://www.faceit.com/api/users/v1/nicknames/${req.query.pseudo}`
            );
            if (!response1.ok) {
                throw new Error("Failed to fetch user data");
            }
            const userData = await response1.json();
            const userId = userData.payload.id;

            const response2 = await fetch(
                `https://www.faceit.com/api/stats/v1/stats/time/users/${userId}/games/cs2?page=0&size=20`
            );
            if (!response2.ok) {
                throw new Error("Erreur lors de la récupération des statistiques de l'utilisateur");
            }
            const userStats = await response2.json();

            const matchIds = userStats.map((match) => match.matchId);

            let userTeam = null;
            let wins = 0;
            let losses = 0;
            const mapOccurrences = {};

            for (const matchId of matchIds) {
                const matchResponse = await fetch(
                    `https://www.faceit.com/api/match/v2/match/${matchId}`
                );
                if (!matchResponse.ok) {
                    throw new Error(`Erreur lors de la récupération des données pour le match ${matchId}`);
                }
                const matchData = await matchResponse.json();

                if (matchData && matchData.payload && matchData.payload.teams) {
                    for (const [factionKey, team] of Object.entries(matchData.payload.teams)) {
                        if (team.roster.some(player => player.nickname === req.query.pseudo)) {
                            userTeam = factionKey;
                            const winner = matchData.payload.results[0].winner;
                            if (winner && winner === userTeam) {
                                wins++;
                            } else {
                                losses++;
                            }
                            break;
                        }
                    }
                } else {
                    console.log(`Pas de données pour le match ${matchId}`);
                }
            }

            for (const matchData of userStats) {
                const matchId = matchData.matchId;

                const matchResponse = await fetch(
                    `https://www.faceit.com/api/stats/v1/stats/matches/${matchId}`
                );
                if (!matchResponse.ok) {
                    throw new Error(`Erreur lors de la récupération des données pour le match ${matchId}`);
                }
                const matchDetails = await matchResponse.json();

                if (matchDetails.length === 1) {
                    const match = matchDetails[0];
                    const map = match.i1;
                    // console.log(map);

                    if (map) {
                        if (mapOccurrences[map]) {
                            mapOccurrences[map]++;
                        } else {
                            mapOccurrences[map] = 1;
                        }
                    } else {
                        console.log(`Le champ i1 n'est pas défini pour le match ${matchId}`);
                    }
                } else {
                    console.log(`Les données pour le match ${matchId} sont vides ou incorrectes`);
                }
                // console.log(mapOccurrences)
            }

            res.status(200).json({ userData, userStats, userTeam, wins, losses, mapOccurrences });

        } catch (error) {
            console.error("Error:", error.message);
            res.status(500).json({ error: "Une erreur est survenue" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
}
