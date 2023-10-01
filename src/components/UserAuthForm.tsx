"use client"


import { FC, useState } from 'react';
import { Button } from './ui/Button';
import { signIn } from 'next-auth/react';
import { Icons } from './Icons';


const UserAuthForm: FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithGoogle = async () => {
        setIsLoading(true);

        try {
            await signIn('googel')
        } catch (error) {
            //send notification to user
        }finally{
            setIsLoading(false)
        }
    }

    return <div className='flex justify-center'>
        <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className='w-full'>{isLoading ? null : <Icons.google className='w-4 h-4 mr-2' /> }Google</Button>
    </div>
}

export default UserAuthForm