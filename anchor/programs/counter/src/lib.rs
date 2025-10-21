#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("Count3AcZucFDPSFBAeHkQ6AvttieKUkyJ8HiQGhQwe");

#[program]
pub mod crud {
    use super::*;

    pub fn create_journal_entity(ctx:Context<CreateEntity>,title:String,message:String) -> Result<()>{
        let journal_entity = &mut ctx.accounts.journal_entity; 
        journal_entity.owner = *ctx.accounts.owner.key;
        journal_entity.message = message;
        journal_entity.title = title;

        Ok(())
    }

    pub fn update_journal_entity(ctx:Context<UpdataEntity>,_title:String,message:String) -> Result<()>{
        let journal_entity = &mut ctx.accounts.journal_entity; 
        journal_entity.message = message;
       

        Ok(())
    }

    pub fn delete_journal_entity(_ctx:Context<UpdataEntity>,_title:String) -> Result<()>{
        Ok(())
    }

}

#[derive(Accounts)]
#[instruction(title:String)]
pub struct CreateEntity<'info>{

    #[account(
    init,
    seeds = [title.as_bytes(),owner.key().as_ref()],
    bump,
    space = 8+JournalEntityState::INIT_SPACE,
    payer = owner,
    )]
    pub journal_entity:Account<'info,JournalEntityState>,
    #[account(mut)]
    pub owner:Signer<'info>,
    pub system_program:Program<'info,System>,
}

#[derive(Accounts)]
#[instruction(title:String)]
pub  struct UpdataEntity<'info>{
    #[account(
        mut,
        seeds = [title.as_bytes(),owner.key().as_ref()],
        bump,
        realloc =  8+JournalEntityState::INIT_SPACE,
        realloc::zero = true,
        realloc::payer = owner,
    )]
    pub journal_entity:Account<'info,JournalEntityState>,
    #[account(mut)]
    pub owner:Signer<'info>,
    pub system_program:Program<'info,System>,
}
#[derive(Accounts)]
#[instruction(title:String)]
pub  struct DeleteEntity<'info>{
    #[account(
        mut,
        seeds = [title.as_bytes(),owner.key().as_ref()],
        bump,
       close=owner
    )]
    pub journal_entity:Account<'info,JournalEntityState>,
    #[account(mut)]
    pub owner:Signer<'info>,
    pub system_program:Program<'info,System>,
}

#[account]
#[derive(InitSpace)]
pub struct JournalEntityState{
    pub owner:Pubkey,
    #[max_len(50)]
    pub title:String,
    #[max_len(1000)]
    pub message:String
}