import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import logoImage from "../app/public/logo2.png"
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';

const header = () => {
  return (
    <header className='container mx-auto'>

      <nav className='py-6 px-4 flex justify-between items-center'>
        <Link href={"/"}>
          <Image src={logoImage} alt='avera' width={200} height={56} className='h-10 w-auto object-contain' />
        </Link>
        <div>
          <Link href={"/project/create"}>
            <Button variant="destructive" className="cursor-pointer flex items-center">
              <PenBox size={18}/>
              <span>Create Project</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default header