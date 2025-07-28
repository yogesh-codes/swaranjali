"use client";
//import

//Assets
import { FaCircleUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavbarButton } from "../ui/resizable-navbar";

//shared
import { useSession } from "@/shared/utils/supabase/useSession";
//components

//supabase

export const UserProfileMenu = ({
    extendedClassName,
}: {
    extendedClassName?: string;
}) => {
    const { session, error } = useSession();

    if (error) {
        return (
            <NavbarButton as="div" variant="primary" className="">
                X
            </NavbarButton>
        );
    }
    //here=>no error, either logged in or out
    else
        return (
            <NavbarButton
                as="a"
                variant={"primary"}
                href={session ? "/logout" : "/login"}
                className={`${extendedClassName}`}
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

                            <div>Sign In</div>
                        </>
                    )}
                </div>
            </NavbarButton>
        );
};
