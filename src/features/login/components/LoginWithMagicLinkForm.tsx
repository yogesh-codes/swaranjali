"use client";
import React, { useActionState } from "react";

//shared
import Button from "@/shared/components/Button";
import { FlashComponent } from "@/shared/components/flash/components/FlashMessage";
import { type FlashType } from "@/shared/components/flash/utils/flashUtils";

//self
import { doLoginAction, ReturnMsg } from "../actions/doLoginWithMagicLink";

const LoginWithMagicLinkForm = ({
    flashFromCookies,
}: {
    flashFromCookies?: FlashType | null;
}) => {
    const [state, formAction, isPending] = useActionState<ReturnMsg, FormData>(
        doLoginAction,
        null
    );

    return (
        <>
            {flashFromCookies && (
                <FlashComponent
                    msgType={flashFromCookies.msgType}
                    msg={flashFromCookies.msg}
                />
            )}
            {state && (
                <FlashComponent msgType={state.msgType} msg={state.msg} />
            )}
            <form
                action={formAction}
                className="s:min-w-screen sm:min-w-80 md:min-w-140"
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
                    className="w-full border rounded-b-md disabled:opacity-50"
                    disabled={isPending}
                >
                    {isPending ? "Submitting..." : "Submit"}
                </Button>
            </form>
        </>
    );
};

export default LoginWithMagicLinkForm;
