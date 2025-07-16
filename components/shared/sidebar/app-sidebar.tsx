'use client';
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

import SideLogo from './logo';
import { NavMain } from './nav-main';
import { ROUTES } from './navigation';

interface Props extends React.ComponentProps<typeof Sidebar> {
  currentPath?: string;
}
export function AppSidebar({ currentPath, ...props }: Props) {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SideLogo />
      </SidebarHeader>
      <SidebarContent>
        {ROUTES.map((route, idx) => {
          return (
            <NavMain
              key={idx}
              title={route.title}
              items={route.menu}
              currentPath={currentPath}
            />
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
