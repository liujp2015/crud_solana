import { useSolana } from '@/components/solana/use-solana'
import { useQuery } from '@tanstack/react-query'
import { getCrudProgramAccounts } from '@project/anchor'
import { useCrudAccountsQueryKey } from './use-crud-accounts-query-key'

export function useCrudAccountsQuery() {
  const { client } = useSolana()

  return useQuery({
    queryKey: useCrudAccountsQueryKey(),
    queryFn: async () => await getCrudProgramAccounts(client.rpc),
  })
}
