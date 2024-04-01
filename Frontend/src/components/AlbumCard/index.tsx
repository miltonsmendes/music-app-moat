interface CardAlbumsProps {
  artistName: string
  albumName: string
  year: string
}

interface AlbumCardProps {
  album: CardAlbumsProps
  onDelete: () => void
}

export function AlbumCard({ album, onDelete }: AlbumCardProps) {
  // Should verify if user has Administrator permissions
  const isUserAdmin = true

  return (
    <div className="flex justify-center">
      <div className="flex justify-between gap-x-6 py-5 border-solid border-2 border-indigo-600 rounded-lg m-1 p-2 w-96">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-lg font-semibold leading-6 text-gray-900">
              Artist
            </p>
            <p className="mt-1 truncate text-sm leading-5 text-gray-900">
              {album.artistName}
            </p>
            <p className="text-lg font-semibold leading-6 text-gray-900">
              Album name
            </p>
            <p className="mt-1 truncate text-sm leading-5 text-gray-900">
              {album.albumName}
            </p>
            <p className="text-lg font-semibold leading-6 text-gray-900">
              Year
            </p>
            <p className="mt-1 truncate text-sm leading-5 text-gray-900">
              {album.year}
            </p>
          </div>
        </div>
        <div>
          {isUserAdmin ? (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onDelete}
            >
              Delete
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
