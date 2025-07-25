"use client";

import Button from "@/shared/components/Button";
import MyPageContent from "@/shared/components/MyPageContent";
import MyPageSection from "@/shared/components/MyPageSection";
import Link from "next/link";
import React from "react";

type LoginWithOTPSectionProps = {
    handleOnAction: (e: FormData) => void;
};

const LoginWithOTPSection = ({ handleOnAction }: LoginWithOTPSectionProps) => {
    return (
        <MyPageContent
            className=" bg-accent-200/0 
                items-center 
                gap-y-5
                
                
            
            "
        >
            <h1 className="mb-4 text-puredark text-center">Login</h1>

            <form
                action={(e) => {
                    alert("Your response will be sent as post request now.");
                    handleOnAction(e);
                }}
                className="xs:min-w-screen sm:min-w-80 md:min-w-140"
            >
                <div
                    className="flex flex-col gap-0 items-center px-0 py-0 rounded-lg
                        
                        "
                >
                    <label
                        htmlFor="email"
                        className="font-medium text-primary-500"
                    >
                        <p className="text-pureblack">Email</p>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full py-3 text-puredark border border-n-100"
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <Button
                    type="submit"
                    variant="primary"
                    className="w-full border rounded-b-md "
                >
                    Submit
                </Button>
            </form>

            <div className="">
                <p className="">
                    New here?{" "}
                    <Link className="text-primary-600" href={"/signup"}>
                        Sign up
                    </Link>
                </p>
            </div>
        </MyPageContent>
    );
};

export default LoginWithOTPSection;
