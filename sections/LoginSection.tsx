import LoginFormContainer from "@/components/LoginFormContainer";
import LoginStatusContainer from "@/components/LoginStatusContainer";
import PageContent from "@/components/PageContent";

const LoginSection = () => {
    return (
        <section className="pt-20 md:pt-24">
            <PageContent className="">
                <div className="pb-10">
                    <h1>Login</h1>
                    <p>Welcome! Please enter your login details.</p>
                </div>

                {/* <LoginFormContainer callbackOnSubmit={handleSubmit}/> */}

                <LoginStatusContainer />
            </PageContent>
        </section>
    );
};

export default LoginSection;
