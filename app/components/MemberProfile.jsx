import { UserButton } from '@clerk/nextjs'
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'
import { fetchOrGenerateTokens } from '../utils/action';

const MemberProfile = async () => {
    const user = await currentUser();
    // const {userId} = auth();

    // await fetchOrGenerateTokens(userId)

    return (
    <div className='px-4 flex items-center gap-2'>
        <UserButton afterSignOutUrl='/'/>
        <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  )
}

export default MemberProfile