import { CrudAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCrudDecrementMutation } from '../data-access/use-crud-decrement-mutation'

export function CrudUiButtonDecrement({ account, crud }: { account: UiWalletAccount; crud: CrudAccount }) {
  const decrementMutation = useCrudDecrementMutation({ account, crud })

  return (
    <Button variant="outline" onClick={() => decrementMutation.mutateAsync()} disabled={decrementMutation.isPending}>
      Decrement
    </Button>
  )
}
