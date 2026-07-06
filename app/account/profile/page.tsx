import ProfilePage from "@/app/components/account/profile/ProfilePage";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Profile",
    description: "Update your profile information",
}

export default function Page() {
    return (
       <ProfilePage />
    );
}