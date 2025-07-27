"use client";
//import
import Link from "next/link";

//Assets
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavbarButton } from "./ui/resizable-navbar";

//shared
import { useSession } from "../utils/supabase/useSession";
//components

//supabase

export const UserProfileMenu = () => {
    const { session, error } = useSession();

    if (error) {
        return (
            <NavbarButton
                as="div"
                variant="primary"
                className="min-w-fit max-w-full"
            >
                X
            </NavbarButton>
        );
    }
    //here=>no error, either logged in or out
    else
        return (
            <NavbarButton
                as="a"
                variant={session ? "primary" : "transparent"}
                href={session ? "/logout" : "/login"}
                className="min-w-fit max-w-full"
            >
                <div className="flex items-center justify-center">
                    {session && (
                        <>
                            <FaCircleUser />
                            {/* <span>{session.user.email?.slice(0, 4)}-</span> */}
                            <span>Logout</span>
                        </>
                    )}
                    {!session && (
                        <>
                            <FaRegCircleUser />

                            <div>Sign in/Sign Up</div>
                        </>
                    )}
                </div>
            </NavbarButton>
        );
};
