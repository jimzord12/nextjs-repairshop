import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="max-w-lg w-full p-6 space-y-6 rounded-lg shadow-2xl bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-center">Login</h1>
        <p className="text-center">
          Welcome to the Kinde Auth Next.js example!
          <br />
          Click the button below to log in.
        </p>
        <Button asChild variant="ghost" size="lg">
          <LoginLink>Log in</LoginLink>
        </Button>
      </main>
    </div>
  );
}
