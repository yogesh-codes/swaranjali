"use client";

import Button from "@/shared/components/Button";
// import MyPageContent from "@/shared/components/MyPageContent";
// import Link from "next/link";
import React, { useActionState } from "react";
import { doLoginAction, ReturnMsg } from "../actions/doLoginWithMagicLink";
import { FlashMessage } from "@/shared/components/FlashMessage";

// type Props = {
//     handleOnAction: (e: FormData) => Promise<void>;
// };

const LoginWithMagicLinkForm = ({
    flashFromCookies,
}: {
    flashFromCookies?: { msg: string; msgType: string };
}) => {
    const [state, formAction, isPending] = useActionState<ReturnMsg, FormData>(
        doLoginAction,
        null
    );

    return (
        <>
            {flashFromCookies && (
                <FlashMessage
                    msgType={flashFromCookies.msgType}
                    msg={flashFromCookies.msg}
                />
            )}

            {state && <FlashMessage msgType={state.msgType} msg={state.msg} />}
            <form
                action={formAction}
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
