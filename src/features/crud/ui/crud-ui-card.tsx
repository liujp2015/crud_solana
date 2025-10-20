import { CrudAccount } from '@project/anchor'
import { ellipsify, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { CrudUiButtonClose } from './crud-ui-button-close'
import { CrudUiButtonDecrement } from './crud-ui-button-decrement'
import { CrudUiButtonIncrement } from './crud-ui-button-increment'
import { CrudUiButtonSet } from './crud-ui-button-set'

export function CrudUiCard({ account, crud }: { account: UiWalletAccount; crud: CrudAccount }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crud: {crud.data.count}</CardTitle>
        <CardDescription>
          Account: <AppExplorerLink address={crud.address} label={ellipsify(crud.address)} />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 justify-evenly">
          <CrudUiButtonIncrement account={account} crud={crud} />
          <CrudUiButtonSet account={account} crud={crud} />
          <CrudUiButtonDecrement account={account} crud={crud} />
          <CrudUiButtonClose account={account} crud={crud} />
        </div>
      </CardContent>
    </Card>
  )
}
