//shared
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

//components
import LoginWithOTPSection from "./LoginWithMagicLinkSection";
import { FlashMessage, FlashMessageProps } from "./FlashMessage";

//Server Actions
import { doLogin } from "../actions/doLoginWithMagicLink";

export type LoginPageProps = {
    flash?: FlashMessageProps;
};

export default async function MyLoginPage({ flash }: LoginPageProps) {
    return (
        <MyPageSection>
            {/* </div> */}
            {flash && <FlashMessage {...flash!} />}
            <LoginWithOTPSection handleOnAction={doLogin} />
        </MyPageSection>
    );
}
