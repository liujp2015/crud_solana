import { useQueryClient } from '@tanstack/react-query'
import { useCrudAccountsQueryKey } from './use-crud-accounts-query-key'

export function useCrudAccountsInvalidate() {
  const queryClient = useQueryClient()
  const queryKey = useCrudAccountsQueryKey()

  return () => queryClient.invalidateQueries({ queryKey })
}
