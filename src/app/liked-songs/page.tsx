'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const page = () => {
  const [tracks, setTracks]=useState([])
  const likeds=useSelector(state=>state.likeds)

  async function getTrack(trackId: string): Promise<any> {
    try {
      const response = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
        method: 'GET',
        headers: {
          'Authorization': `${localStorage.getItem("access_token")}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Trackni olishda xatolik yuz berdi:', response.status);
        return null;
      }
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      return null;
    }
  }
  for (let trackId of likeds){
    getTrack(trackId)
    .then((trackData) => {
      if (trackData) {
        setTracks(...tracks, trackData)
      } else {
        console.log('Trackni olishda xatolik yuz berdi.');
      }
    });
  }
    

  return (
    <div className='w-full playlist px-9 py-7'>
      <Header profil={true}/>
      <div className='flex gap-7'>
        <div className='w-full max-w-64'>
          <img className='w-full' src="/liked-songs-img.png" alt="Liked songs" />
        </div>
        <div className='w-full'>
          <h3 className="text-sm font-medium text-white mt-12">
            PUBLIC PLAYLIST
          </h3>
          <h2 className="text-[100px] font-[900] text-white">
            Liked Songs
          </h2>
          <p className="flex gap-2 items-center font-[450] text-[18px] text-[#b3b3b3]">
            <img src="/avatar.png" alt="#" />
            davedirect3 • {likeds.length} songs
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
