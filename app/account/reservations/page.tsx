import ReservationPage from "@/app/components/account/reservations/ReservationPage";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Reservations",
    description: "View and manage your reservations",
}

export default function page() {
  return (
    <ReservationPage />
  )
}
