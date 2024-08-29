import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export function Chat() {
  return (
    <div className="grid grid-cols-[400px_1fr] h-screen w-full max-w-[1200px] mx-auto bg-white dark:bg-gray-950 rounded-lg overflow-hidden">
      <div className="border-r border-gray-200 dark:border-gray-800 overflow-auto">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold">Chats</h3>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          <Link
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            href="#"
          >
            <Avatar>
              <AvatarImage alt="Olivia Davis" src="/placeholder-avatar.jpg" />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="flex-1 grid gap-1">
              <div className="font-medium">Olivia Davis</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                Hey, are we still on for lunch today?
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">2:30 PM</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage alt="Olivia Davis" src="/placeholder-avatar.jpg" />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="grid gap-0.5">
              <div className="font-medium">Olivia Davis</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <PhoneIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4 grid gap-1">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage alt="Olivia Davis" src="/placeholder-avatar.jpg" />
              <AvatarFallback>OD</AvatarFallback>
            </Avatar>
            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-[70%]">
              <p>Hey, are we still on for lunch today?</p>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">2:30 PM</div>
            </div>
          </div>
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-primary text-white p-3 rounded-lg max-w-[70%]">
              <p>Sounds good, I'll see you then.</p>
              <div className="text-xs text-gray-300 mt-1">2:31 PM</div>
            </div>
            <Avatar>
              <AvatarImage alt="Jared Palmer" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
          
        </div>


        <div className="border-t border-gray-200 dark:border-gray-800 p-4">
          <div className="flex items-center gap-3">
            <Input className="flex-1" placeholder="Type your message..." />
            <Button size="icon" variant="ghost">
              <PaperclipIcon className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <SmileIcon className="h-5 w-5" />
            </Button>
            <Button variant='secondary'>Send</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


// function VideoIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
//       <rect x="2" y="6" width="14" height="12" rx="2" />
//     </svg>
//   )
// }
