import { useEffect, useState } from 'react'
import { useNFTs } from '../hooks/useNFTs'

const NFTs = () => {
  const [nft, setNft] = useState(null)
  const nftsQuery = useNFTs()

  useEffect(() => {
    if (!nftsQuery.data?.length) return

    let nftIndex = 1
    setNft(nftsQuery.data[0])

    const interval = setInterval(() => {
      setNft(nftsQuery.data[nftIndex])
      if (nftIndex === nftsQuery.data.length - 1) nftIndex = 0
      else nftIndex++
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [nftsQuery.data])

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
      {nftsQuery.isError || !nft ? (
        <div
          style={{
            alignItems: 'center',
            background: nftsQuery.isError ? 'pink' : 'lightgrey',
            display: 'flex',
            fontSize: '2rem',
            height: '100%',
            justifyContent: 'center',
          }}
        >
          {nftsQuery.isError ? 'Error loading NFTs' : 'Loading NFTs...'}
        </div>
      ) : (
        <img alt={nft.description ?? 'nft'} src={nft.image_url} width="100%" />
      )}
    </div>
  )
}

export default NFTs
