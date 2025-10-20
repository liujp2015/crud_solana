import { CrudUiCard } from './crud-ui-card'
import { useCrudAccountsQuery } from '@/features/crud/data-access/use-crud-accounts-query'
import { UiWalletAccount } from '@wallet-ui/react'

export function CrudUiList({ account }: { account: UiWalletAccount }) {
  const crudAccountsQuery = useCrudAccountsQuery()

  if (crudAccountsQuery.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (!crudAccountsQuery.data?.length) {
    return (
      <div className="text-center">
        <h2 className={'text-2xl'}>No accounts</h2>
        No accounts found. Initialize one to get started.
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {crudAccountsQuery.data?.map((crud) => (
        <CrudUiCard account={account} key={crud.address} crud={crud} />
      ))}
    </div>
  )
}
