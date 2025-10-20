import { CrudAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCrudSetMutation } from '@/features/crud/data-access/use-crud-set-mutation'

export function CrudUiButtonSet({ account, crud }: { account: UiWalletAccount; crud: CrudAccount }) {
  const setMutation = useCrudSetMutation({ account, crud })

  return (
    <Button
      variant="outline"
      onClick={() => {
        const value = window.prompt('Set value to:', crud.data.count.toString() ?? '0')
        if (!value || parseInt(value) === crud.data.count || isNaN(parseInt(value))) {
          return
        }
        return setMutation.mutateAsync(parseInt(value))
      }}
      disabled={setMutation.isPending}
    >
      Set
    </Button>
  )
}
