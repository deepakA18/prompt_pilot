"use client";

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from "next-auth/react"

 
const Nav = () => {
  const isUserLoggedIn = true
  const [providers,setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown]  = useState(false);
 
  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response)
    }

    setProviders();
  },[])
  return (
   <nav className="mb-16 w-full flex-between pt-3">
    <Link href="/" className="flex gap-2 flex-center">
      <Image src="/icons/logo.svg" alt="Promptpilot logo" width={70} height={70} className="object-contain" />
      <p className="logo_text">PromptPilot</p>
    </Link>

    {/*Desktop navigation */}
    <div className="sm:flex hidden">
  {isUserLoggedIn ? (
    <div className="flex gap-3 md:gap-5">
      <Link href="/create-prompt" className="black_btn">
        Create Prompt
      </Link>
      <button type="button" onClick={signOut} className="outline_btn">
        Sign Out
      </button>
      <Link href="/profile">
        <Image src="" alt="profile picture" height={37} width={37} className="rounded-full" />
      </Link>
    </div>
  ) : (
    <>
    {
      providers && Object.values(providers).map((provider) => (
        <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
          Sign In
        </button>
      ))
    } 
    </> 
  )}
</div>
{/* Mobile Navigation*/}
<div className="sm:hidden flex relative">
    {
      isUserLoggedIn ? (
        <div className="flex">
           <Image src="" alt="profile picture" height={37} width={37} className="rounded-full" onClick={(prev) => setToggleDropDown(!prev)}/>
           {toggleDropDown && (
            <div className="dropdown">
              <Link href="/profile" className="dropdown_link" onClick={setToggleDropDown(false)}>My Profile</Link>
              <Link href="/create-prompt" className="dropdown_link" onClick={setToggleDropDown(false)}>Create Prompt</Link>
              <button type="button" onClick={() => {toggleDropDown(false); signOut();}} className="mt-5 w-full black_btn">Sign Out</button>
            </div>
           )}
        </div>
      ): 
      (<>
     {
      providers && Object.values(providers).map((provider) => (
        <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
          Sign In
        </button>
      ))
    } 
      </>)
    } 
</div>
   </nav>
  )
}

export default Nav