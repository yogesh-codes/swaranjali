import MyPageSection from "@/components/primitive/MyPageSection";
import LoginWithOTPSection from "@/app/(auth-group)/login/_sections/LoginWithOTPSection";
import { doLogin } from "./_actions/doLogin";
import MyPageContent from "@/components/primitive/MyPageContent";

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
