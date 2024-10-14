import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/us.svg"
            alt="Bandeira Estados Unidos"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Inglês
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/es.svg"
            alt="Bandeira Espanha"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Espanhol
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/fr.svg"
            alt="Bandeira França"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Francês
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/fr.svg"
            alt="Bandeira Itália"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italiano
        </Button>
        <Button size={"lg"} variant={"ghost"} className="w-full">
          <Image
            src="/jp.svg"
            alt="Bandeira Japão"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japonês
        </Button>
      </div>
    </footer>
  )
}
