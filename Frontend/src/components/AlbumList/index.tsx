'use client'
import { useState } from 'react'
import { AlbumCard } from '../AlbumCard'

export function AlbumList() {
  const [albums, setAlbums] = useState([
    {
      id: 0,
      artistName: 'Raimundos',
      albumName: 'This is Raimundos',
      year: '2009',
    },
    {
      id: 1,
      artistName: 'The Beatles',
      albumName: 'This is Beatles',
      year: '2010',
    },
    {
      id: 2,
      artistName: 'The Black Keys',
      albumName: 'This is The Black Keys',
      year: '2011',
    },
  ])

  function handleDeleteAlbum(index: number) {
    // Should do an API call to delete from user album Table
    setAlbums((prev) => prev.filter((album) => album.id !== index))
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((album, index) => (
        <AlbumCard
          key={album.id}
          album={album}
          onDelete={() => handleDeleteAlbum(index)}
        />
      ))}
    </div>
  )
}
