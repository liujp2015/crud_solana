import { useSolana } from '@/components/solana/use-solana'
import { WalletDropdown } from '@/components/wallet-dropdown'
import { AppHero } from '@/components/app-hero'
import { CrudUiButtonInitialize } from './ui/crud-ui-button-initialize'
import { CrudUiList } from './ui/crud-ui-list'
import { CrudUiProgramExplorerLink } from './ui/crud-ui-program-explorer-link'
import { CrudUiProgramGuard } from './ui/crud-ui-program-guard'

export default function CrudFeature() {
  const { account } = useSolana()

  return (
    <CrudUiProgramGuard>
      <AppHero
        title="Crud"
        subtitle={
          account
            ? "Initialize a new crud onchain by clicking the button. Use the program's methods (increment, decrement, set, and close) to change the state of the account."
            : 'Select a wallet to run the program.'
        }
      >
        <p className="mb-6">
          <CrudUiProgramExplorerLink />
        </p>
        {account ? (
          <CrudUiButtonInitialize account={account} />
        ) : (
          <div style={{ display: 'inline-block' }}>
            <WalletDropdown />
          </div>
        )}
      </AppHero>
      {account ? <CrudUiList account={account} /> : null}
    </CrudUiProgramGuard>
  )
}
