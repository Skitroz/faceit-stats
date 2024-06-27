export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const response = await fetch(`https://www.faceit.com/api/users/v1/nicknames/${req.query.pseudo}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        res.status(200).json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  