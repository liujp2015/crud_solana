// Here we export some useful types and functions for interacting with the Anchor program.
import { Account, getBase58Decoder, SolanaClient } from 'gill'
import { getProgramAccountsDecoded } from './helpers/get-program-accounts-decoded'
import { Crud, CRUD_DISCRIMINATOR, CRUD_PROGRAM_ADDRESS, getCrudDecoder } from './client/js'
import CrudIDL from '../target/idl/crud.json'

export type CrudAccount = Account<Crud, string>

// Re-export the generated IDL and type
export { CrudIDL }

export * from './client/js'

export function getCrudProgramAccounts(rpc: SolanaClient['rpc']) {
  return getProgramAccountsDecoded(rpc, {
    decoder: getCrudDecoder(),
    filter: getBase58Decoder().decode(CRUD_DISCRIMINATOR),
    programAddress: CRUD_PROGRAM_ADDRESS,
  })
}
