import { useEffect, useState } from 'react'

import { useNFTs } from '../hooks/useNFTs'

const NFTs = () => {
  const [nft, setNft] = useState(null)
  const nftsQuery = useNFTs()

  useEffect(() => {
    if (!nftsQuery.data?.length) return

    // TODO: initialize if no nft
    let nftIndex = 0
    const interval = setInterval(() => {
      setNft(nftsQuery.data[nftIndex])
      if (nftIndex === nftsQuery.data.length - 1) nftIndex = 0
      else nftIndex++
    }, 10000)

    return () => {
      clearInterval(interval)
    }
  }, [nftsQuery.data])

  if (nftsQuery.isError || !nft) {
    return (
      <div
        style={{
          alignItems: 'center',
          background: nftsQuery.isError ? 'pink' : 'lightgrey',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {nftsQuery.isError ? 'Error loading NFTs' : 'Loading NFTs...'}
      </div>
    )
  }

  return <img alt={nft.description ?? 'nft'} src={nft.image_url} width="100%" />
}

export default NFTs
