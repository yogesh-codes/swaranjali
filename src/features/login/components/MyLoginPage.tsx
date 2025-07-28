import Link from "next/link";

//shared
import MyPageSection from "@/shared/components/MyPageSection";
import MyPageContent from "@/shared/components/MyPageContent";

// import MyPageContent from "@/shared/components/MyPageContent";

//components
import LoginWithMagicLinkForm from "./LoginWithMagicLinkForm";
import { cookies } from "next/headers";
import { parseFlash } from "@/shared/components/flash/utils/flashUtils";

export default async function MyLoginPage() {
    //Check cookies for any flash message
    const cookieStore = await cookies();
    const raw = cookieStore.get("flash")?.value;

    const flash = parseFlash(raw);

    return (
        <MyPageSection>
            <MyPageContent
                className="pt-20  
                items-center 
                gap-y-5
                
            "
            >
                <h1 className="mb-4 text-puredark text-center">Login</h1>

                {/* Form Client Component*/}
                {/* <LoginWithMagicLinkForm handleOnAction={doLoginAction} /> */}
                {<LoginWithMagicLinkForm flashFromCookies={flash} />}

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
