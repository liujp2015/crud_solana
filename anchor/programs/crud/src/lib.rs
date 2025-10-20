#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("Count3AcZucFDPSFBAeHkQ6AvttieKUkyJ8HiQGhQwe");

#[program]
pub mod crud {
    use super::*;

    pub fn create_journal_entity(ctx:Context<CreateEntity>) -> Result<()>{
        Ok(())
    }


}

#[derive(Accounts)]
pub struct CreateEntity<'info>{
    pub owner:Signer<'info>,
    pub system_program:Program<'info,System>
}

#[account]
#[derive(InitSpace)]
pub struct journalEntityState{
    pub owner:Pubkey,
    #[max_len(50)]
    pub title:String,
    #[max_len(1000)]
    pub message:String
}