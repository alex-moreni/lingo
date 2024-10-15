import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import { Sidebar } from "./sidebar"
import { Menu } from "lucide-react"

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="z-[100] p-0" side={"left"}>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}
