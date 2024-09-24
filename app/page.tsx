import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { isAuthenticated } =  getKindeServerSession();
  const isAuth = await isAuthenticated();
  return (
    <div>
      <h1>Hawkgriffin</h1>
      <Button>Click me</Button>
      {isAuth ? (
        <LogoutLink>Logout</LogoutLink>
      ) : (
        <>
          <LoginLink>Login</LoginLink> <RegisterLink>Register</RegisterLink>
        </>
      )}
      <ModeToggle />
    </div>
  );
}