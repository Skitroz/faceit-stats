import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import Nav from '@/components/nav';

interface JoueurData {
  id: string;
  activated_at: string;
  avatar: string;
  country: string;
  games: {
    cs2: {
      game_name: string;
      faceit_elo: number;
      skill_level_label: string;
    };
    csgo: {
      game_name: string;
      faceit_elo: number;
      skill_level_label: string;
    };
  };
  nickname: string;
  streaming: {
    twitch_id: string;
  };
  tags: string[];
  user_type: string;
  platforms: {
    steam: {
      id: string;
      nickname: string;
      id64: string;
    };
  };
}

interface PlayerStatsProps {
  pseudo: string;
}

const PlayerStats: React.FC<PlayerStatsProps> = () => {
  const router = useRouter();
  const { pseudo } = router.query;

  const [joueur, setJoueur] = useState<JoueurData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (typeof pseudo === 'string') {
      fetchJoueurData(pseudo);
    }
  }, [pseudo]);

  async function fetchJoueurData(pseudo: string) {
    try {
      const response = await fetch(`/api/joueur?pseudo=${encodeURIComponent(pseudo)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setJoueur(data.payload);
    } catch (error) {
      console.error('Error fetching joueur data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-20 h-20 rounded-full" />
        <Skeleton className="w-1/2 h-8 mt-4" />
        <Skeleton className="w-1/3 h-8 mt-2" />
        <Skeleton className="w-1/3 h-8 mt-2" />
        <Skeleton className="w-1/3 h-8 mt-2" />
      </div>
    );
  }

  if (!joueur) {
    return <div>Erreur lors du chargement des données du joueur.</div>;
  }

  return (
    <>
      <Nav />
      <div className='flex justify-center z-0'>
        <div>
          <h1 className='text-xl'>Stats pour le joueur {joueur.nickname}</h1>
          <img src={joueur.avatar} alt={joueur.nickname} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
          <p>Pays: {joueur.country}</p>
          <p>Plateforme Steam ID: {joueur.platforms.steam.id}</p>
          <p>Faceit ELO CS2: {joueur.games.cs2.faceit_elo}</p>
          <p>Faceit ELO CSGO: {joueur.games.csgo.faceit_elo}</p>
        </div>
      </div>
    </>
  );
};

export default PlayerStats;
