import { ReactNode } from 'react'

import { AppAlert } from '@/components/app-alert'
import { useSolana } from '@/components/solana/use-solana'
import { useCrudProgram } from '@/features/crud/data-access/use-crud-program'

export function CrudUiProgramGuard({ children }: { children: ReactNode }) {
  const { cluster } = useSolana()
  const programAccountQuery = useCrudProgram()

  if (programAccountQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!programAccountQuery.data?.value) {
    return (
      <AppAlert>Program account not found on {cluster.label}. Be sure to deploy your program and try again.</AppAlert>
    )
  }

  return children
}
