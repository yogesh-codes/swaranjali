import Link from "next/link";

//shared
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

// import MyPageContent from "@/shared/components/MyPageContent";

//components
import LoginWithMagicLinkForm from "./LoginWithMagicLinkForm";
import {
    FlashMessage,
    FlashMessageProps,
} from "../../../shared/components/FlashMessage";

//Server Actions
import { doLoginAction } from "../actions/doLoginWithMagicLink";

export type LoginPageProps = {
    flash?: FlashMessageProps;
};

export default function MyLoginPage({ flash }: LoginPageProps) {
    return (
        <MyPageSection>
            <MyPageContent
                className=" bg-accent-200/0 
                items-center 
                gap-y-5
                
            "
            >
                <h1 className="mb-4 text-puredark text-center">Login</h1>

                {/* Flash messages*/}
                {flash && <FlashMessage {...flash} />}

                {/* Client */}
                <LoginWithMagicLinkForm handleOnAction={doLoginAction} />

                {/*Other Links*/}
                <div className="">
                    <p className="">
                        New here?{" "}
                        <Link className="text-primary-600" href={"/signup"}>
                            Sign up
                        </Link>
                    </p>
                </div>
            </MyPageContent>
        </MyPageSection>
    );
}
