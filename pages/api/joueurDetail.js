export default async function handler(req, res) {
    if (req.method === "GET") {
      try {
        const response1 = await fetch(
          `https://www.faceit.com/api/users/v1/nicknames/${req.query.pseudo}`
        );
        if (!response1.ok) {
          throw new Error("Network response was not ok");
        }
        const data1 = await response1.json();
        const uid = data1.payload.id;
  
        const response2 = await fetch(
          `https://www.faceit.com/api/stats/v1/stats/users/${uid}/games/cs2`
        );
        if (!response2.ok) {
          throw new Error("Network response was not ok");
        }
        const data2 = await response2.json();
        res.status(200).json({ userData: data1, stats: data2 });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }  