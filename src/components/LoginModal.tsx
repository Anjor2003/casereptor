import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
      <Dialog onOpenChange={setIsOpen} open={isOpen} modal>
        <DialogContent className="maw-w-fit absolute z-[999999] mt-[600px] sm:mt-[500px] md:mt-[450px] lg:mt-[100px]">
          <DialogHeader>
            <div className="relative mx-auto size-24 mb-2">
              <Image
                src="/reptor-1.png"
                alt="logo img"
                className="object-contain"
                fill
              />
            </div>
            <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
              Inicia sesión para continuar
            </DialogTitle>
            <DialogDescription className="text-center text-base py-2">
              <span className="font-medium text-zinc-900">
                Su configuración fue guardada!
              </span>{" "}
              Inicie sesión o regístrese para seguir con la compra
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
            <LoginLink className={buttonVariants({ variant: "outline" })}>
              Inicia sesión
            </LoginLink>
            <RegisterLink className={buttonVariants({ variant: "default" })}>
              Regístrate
            </RegisterLink>
          </div>
        </DialogContent>
      </Dialog>
  );
};

export default LoginModal;
