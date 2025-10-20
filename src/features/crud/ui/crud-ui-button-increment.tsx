import { CrudAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'
import { useCrudIncrementMutation } from '../data-access/use-crud-increment-mutation'

export function CrudUiButtonIncrement({ account, crud }: { account: UiWalletAccount; crud: CrudAccount }) {
  const incrementMutation = useCrudIncrementMutation({ account, crud })

  return (
    <Button variant="outline" onClick={() => incrementMutation.mutateAsync()} disabled={incrementMutation.isPending}>
      Increment
    </Button>
  )
}
