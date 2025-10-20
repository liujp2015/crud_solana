import { useSolana } from '@/components/solana/use-solana'

export function useCrudAccountsQueryKey() {
  const { cluster } = useSolana()

  return ['crud', 'accounts', { cluster }]
}
