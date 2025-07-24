//Components
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

//Sections
import LoginWithOTPSection from "../../../../features/login/components/LoginWithOTPSection";

//Server Actions
import { doLogin } from "../../../../features/login/actions/doLogin";

type LoginPageProps = {
    searchParams: Promise<{ error?: string | string[] }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const { error } = await searchParams;
    const errorParam =
        typeof error === "string"
            ? error
            : Array.isArray(error)
            ? error[0]
            : undefined;

    return (
        <MyPageSection>
            <div
                className="
            w-full 
            min-h-20 lg:min-h-30 
            flex flex-col items-center justify-end"
            >
                {errorParam && (
                    <MyPageContent className="bg-danger-100 py-1">
                        <p className="text-danger-800">Error: {errorParam}</p>
                    </MyPageContent>
                )}
            </div>

            <LoginWithOTPSection handleOnAction={doLogin} />
        </MyPageSection>
    );
}
