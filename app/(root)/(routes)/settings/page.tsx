"use client"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"

const SettingsPage = async () => {
  const route = useRouter()
  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <Separator className="bg-primary/10" />

      <div className="text-muted-foreground text-sm">
        You are currently on a Pro plan.
      </div>
      <Button onClick={() => route.push("/")}>Manage Subscription</Button>
    </div>
  )
}

export default SettingsPage
