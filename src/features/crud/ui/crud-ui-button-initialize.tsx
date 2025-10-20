import { Button } from '@/components/ui/button'
import { UiWalletAccount } from '@wallet-ui/react'

import { useCrudInitializeMutation } from '@/features/crud/data-access/use-crud-initialize-mutation'

export function CrudUiButtonInitialize({ account }: { account: UiWalletAccount }) {
  const mutationInitialize = useCrudInitializeMutation({ account })

  return (
    <Button onClick={() => mutationInitialize.mutateAsync()} disabled={mutationInitialize.isPending}>
      Initialize Crud {mutationInitialize.isPending && '...'}
    </Button>
  )
}
