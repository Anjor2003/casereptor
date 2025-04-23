import Link from "next/link";
import MaxWithWrapper from "./MaxWithWrapper";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession, LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { cn } from "@/lib/utils";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWithWrapper>
        <div className="h-14 flex items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            Case<span className="text-green-600">Reptor</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <LogoutLink
                  className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sing Out, {user.given_name}
                </LogoutLink>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard ✨
                  </Link>
                ) : null}
                <Link
                  href="/configure/upload"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "hidden md:flex items-center gap-1",
                  )}>
                  Create case
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            ) : (
              <>
                <RegisterLink
                  className={buttonVariants({ size: "sm", variant: "ghost" })}>
                  Sing up
                </RegisterLink>
                <Button size="sm" variant="ghost">
                  <LoginLink>Login</LoginLink>
                </Button>
                <div className="h-8 w-px bg-zinc-200 sm:block" />
                <Link
                  href="/configure/upload"
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "hidden md:flex items-center gap-1",
                  )}>
                  Create case
                  <ArrowRight className="ml-1.5 size-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWithWrapper>
    </nav>
  );
};

export default Navbar;
