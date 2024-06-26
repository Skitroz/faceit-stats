// pages/api/streams.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('https://www.faceit.com/api/stream/v2/streamings?games=cs2,csgo');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      const importantData = data.results.map(stream => ({
        id: stream.profile.id,
        name: stream.profile.name,
        verified: stream.profile.verified,
        avatar: stream.profile.avatar,
        game: stream.game,
        region: stream.region,
        platform: stream.platform,
        channel_name: stream.stream.channel_name,
        channel_logo: stream.stream.channel_logo,
        channel_url: stream.stream.channel_url,
        display_name: stream.stream.display_name,
        viewers: stream.stream.viewers,
        title: stream.stream.title
      }));

      res.status(200).json(importantData);
    } catch (error) {
      console.error('Error fetching streams:', error.message);
      res.status(500).json({ error: 'Error fetching streams' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
