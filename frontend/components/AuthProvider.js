'use client'

import {SessionProvider} from 'next-auth/react'

const AuthProvider =({children, session}) => {
    return(
        <div>
            <SessionProvider session={session}>
                {childern}
            </SessionProvider>
        </div>
    )
}