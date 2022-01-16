import { useQuery } from 'react-query'
import axios from 'axios'

const { REACT_APP_NFT_WALLET_ADDRESS } = process.env
const baseUrl = 'https://api.opensea.io/api/v1/assets'

async function fetchNFTs() {
  const response = await axios.get(
    `${baseUrl}?owner=${REACT_APP_NFT_WALLET_ADDRESS}`,
  )

  return response.data?.assets ?? []
}

export function useNFTs() {
  return useQuery(['nfts'], fetchNFTs, { staleTime: Infinity })
}
