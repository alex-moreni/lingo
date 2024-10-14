import { Button } from "@/components/ui/button"
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[988px] flex-1 flex-col items-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[240px] w-[240px] lg:mb-0 lg:h-[424px] lg:w-[424px]">
        <Image src={"/hero.svg"} fill alt="logo" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold text-neutral-600 lg:text-3xl">
          Aprenda, pratique e domine novos idiomas com o Lingo.
        </h1>
        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton mode="modal" fallbackRedirectUrl="/learn">
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Começar
                </Button>
              </SignUpButton>

              <SignInButton mode="modal" fallbackRedirectUrl="/learn">
                <Button
                  size={"lg"}
                  variant={"primaryOutline"}
                  className="w-full"
                >
                  Já tenho uma conta
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button
                size={"lg"}
                variant={"secondary"}
                className="w-full"
                asChild
              >
                <Link href={"/learn"}>Continuar aprendendo</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
