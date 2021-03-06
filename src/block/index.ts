import { SHA256 } from 'crypto-js'
// import hmacSHA512 from 'crypto-js/hmac-sha512'
// import Base64 from 'crypto-js/enc-base64'

// import DIFFICULTY from '../constants/difficulty'
interface Block {
  Index: number
  Timestamp: number
  Content: string
  Hash: string
  PreHash: string
  Difficulty: number
  Nonce: string
}

export function CalculateHash(block: Block): string {
  const { Index, Timestamp, Content, Hash, PreHash, Difficulty, Nonce } = block
  return SHA256(
    `${Index}${Timestamp}${Content}${Hash}${PreHash}${Difficulty}${Nonce}`
  ).toString()
}
