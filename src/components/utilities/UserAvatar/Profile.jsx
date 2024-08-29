import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import MyListing from '@/components/utilities/Listings/MyListing'
import Item from '@/components/utilities/Listings/CreatePost/Item';
import { useRouter } from "next/navigation"



const Profile = () => {
    const router = useRouter();
    const user = JSON.parse(localStorage.getItem('userInfo'))

    const logout = () => {
        localStorage.clear('userInfo')
        router.push("/")
    }
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex justify-center items-center gap-2" >
                        <span>{user.name}</span>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <Item/>
                    <MyListing />
                    <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>

    )
}
export default Profile
