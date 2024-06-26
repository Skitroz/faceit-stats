"use client";

import React, { useState, useEffect } from 'react';
import Nav from '@/components/nav';
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Search, User } from "lucide-react";

export default function Accueil() {
  interface Stream {
    id: number;
    channel_logo: string;
    display_name: string;
    viewers: number;
    channel_url: string;
  }
  
  const [streams, setStreams] = useState<Stream[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStreams();
  }, []);

  async function fetchStreams() {
    try {
      const response = await fetch('/api/stream');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      setStreams(data);
    } catch (error) {
      console.error('Error fetching streams:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Nav />
      <div className='bg-muted/70 w-full'>
        <h1 className='text-center text-[5em] pt-[200px] font-medium'>
          Faceit-STATS <span className='text-4xl'>/LIVE</span>
        </h1>
        <div className="flex justify-center mx-auto w-full max-w-lg mt-10 mb-2">
          <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
            <Input
              type="text"
              className='flex-grow p-4 border-none focus:outline-none'
              placeholder="Rechercher un joueur..."
            />
            <Button
              type="submit"
              className='bg-white text-gray-500 px-4 py-2'>
              <Search className='h-6 w-6' />
            </Button>
          </div>
        </div>
        <p className='flex justify-center text-center text-sm'>Vous pouvez aussi copier et coller le lien de la salle de match<br/>pour analyser les stats de la partie</p>
        <div className='pb-10'>
          <h2 className='text-xl font-bold ml-[400px] pt-[100px]'>Meilleurs streams en cours</h2>
          {isLoading ? (
            <div className="flex justify-center mt-4 space-x-4">
              {Array(3).fill(0).map((_, index) => (
                <Skeleton key={index} className="bg-black w-[400px] h-[300px] rounded-lg" />
              ))}
            </div>
          ) : (
            <div className="flex justify-center mt-4 space-x-4">
              {streams.slice(0, 3).map((stream) => (
                <div key={stream.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <img className="w-full" src={stream.channel_logo} alt={stream.display_name} />
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="font-bold text-xl">{stream.display_name}</div>
                    <p className="text-gray-700 text-base flex items-center">
                      <User className='h-5' />{stream.viewers}
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <a href={stream.channel_url} target="_blank" className="bg-black text-white font-bold py-2 px-4 rounded-full">
                      Voir le stream
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
