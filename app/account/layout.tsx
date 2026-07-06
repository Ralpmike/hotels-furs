import { ReactNode } from "react";
import SideNavigation from "@/app/components/common/SideNavigation";

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] gap-12 h-full">
      <SideNavigation />
      <div className="">{children}</div>
    </div>
  );
}
