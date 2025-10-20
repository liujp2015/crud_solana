import { CrudAccount } from '@project/anchor'
import { UiWalletAccount } from '@wallet-ui/react'
import { Button } from '@/components/ui/button'

import { useCrudCloseMutation } from '@/features/crud/data-access/use-crud-close-mutation'

export function CrudUiButtonClose({ account, crud }: { account: UiWalletAccount; crud: CrudAccount }) {
  const closeMutation = useCrudCloseMutation({ account, crud })

  return (
    <Button
      variant="destructive"
      onClick={() => {
        if (!window.confirm('Are you sure you want to close this account?')) {
          return
        }
        return closeMutation.mutateAsync()
      }}
      disabled={closeMutation.isPending}
    >
      Close
    </Button>
  )
}
