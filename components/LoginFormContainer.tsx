import UserInput from "./UserInputClient";
import Button from "./Button";

const LoginFormContainer = () => {
    return (
        <form className="flex flex-col gap-5 w-full h-fit ">
            <UserInput inputType="email" labelText="Email" />

            <UserInput inputType="password" labelText="Password" />

            <Button type="submit" variant="primary">
                Submit
            </Button>
        </form>
    );
};

export default LoginFormContainer;
