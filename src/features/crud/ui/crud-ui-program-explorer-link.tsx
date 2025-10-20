import { CRUD_PROGRAM_ADDRESS } from '@project/anchor'
import { AppExplorerLink } from '@/components/app-explorer-link'
import { ellipsify } from '@wallet-ui/react'

export function CrudUiProgramExplorerLink() {
  return <AppExplorerLink address={CRUD_PROGRAM_ADDRESS} label={ellipsify(CRUD_PROGRAM_ADDRESS)} />
}
