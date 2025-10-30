import type { ReactNode } from 'react';
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger, SidebarRail } from '@/components/ui/sidebar';
import { MainSidebar } from '@/components/layout/main-sidebar';

export default function AppTemplate({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" side="left" variant="sidebar">
        <MainSidebar />
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
          <SidebarTrigger />
        </header>
        <main className="flex-1">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
