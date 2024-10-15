"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { useExitModal } from "@/store/use-exit-modal"

export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, close } = useExitModal()

  useEffect(() => setIsClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src={"/mascot_sad.svg"}
              alt="Mascot"
              width={80}
              height={80}
            />
          </div>
          <DialogTitle className="text-center text-2xl font-bold">
            Espere, não vá!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Você está prestes a sair da aula. Tem certeza?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant={"primary"}
              className="w-full"
              size={"lg"}
              onClick={close}
            >
              Continuar aprendendo
            </Button>
            <Button
              variant={"dangerOutline"}
              className="w-full"
              size={"lg"}
              onClick={() => {
                close()
                router.push("/learn")
              }}
            >
              Encerrar aula
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
