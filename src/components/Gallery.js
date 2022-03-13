import { useEffect, useState } from 'react'

import { useGallery } from '../hooks/useGallery'

const Gallery = () => {
  const [image, setImage] = useState(null)
  const galleryQuery = useGallery()

  useEffect(() => {
    if (!galleryQuery.data?.length) return

    let imageIndex = 1
    setImage(galleryQuery.data[0])

    const interval = setInterval(() => {
      setImage(galleryQuery.data[imageIndex])
      if (imageIndex === galleryQuery.data.length - 1) imageIndex = 0
      else imageIndex++
    }, 10000) // 10 seconds

    return () => {
      clearInterval(interval)
    }
  }, [galleryQuery.data])

  return (
    <div
      style={{
        bottom: '50%',
        left: 0,
        position: 'absolute',
        right: '71%',
        top: 0,
      }}
    >
      {galleryQuery.isError || !image ? (
        <div
          style={{
            alignItems: 'center',
            background: galleryQuery.isError ? 'pink' : 'lightgrey',
            display: 'flex',
            fontSize: '2rem',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          {galleryQuery.isError ? 'Error loading images' : 'Loading images...'}
        </div>
      ) : (
        <img alt="upload" src={image.secure_url} width="100%" />
      )}
    </div>
  )
}

export default Gallery
