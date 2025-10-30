import Link from 'next/link';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { getWikis } from '@/lib/data';
import { 
  Contact, 
  Ticket, 
  BookOpen, 
  List, 
  LifeBuoy,
  Heart,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { GrifkubaLogo } from './grifkuba-logo';


export async function MainSidebar() {
  const wikis = await getWikis();

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2"
          // Tooltip for collapsed state
          >
            <GrifkubaLogo className="w-8 h-8 text-primary" />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-primary group-data-[collapsible=icon]:hidden">Grifkuba Hub</h1>
            </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="View Tickets">
                <Link href="/tickets">
                    <List />
                    <span>View Tickets</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Submit Ticket">
                <Link href="/tickets/new">
                    <Ticket />
                    <span>Submit Ticket</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Contact Us">
                <Link href="/contact">
                    <Contact />
                    <span>Contact Us</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarSeparator />
          {wikis.map((wiki) => (
            <SidebarMenuItem key={wiki.id}>
              <SidebarMenuButton asChild tooltip={wiki.name}>
                <Link href={`/wiki/${wiki.id}/Main_Page`}>
                    <BookOpen />
                    <span>{wiki.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <Collapsible>
            <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip="Support Us">
                    <Heart />
                    <span>Support Us</span>
                    <span className="ml-auto group-data-[collapsible=icon]:hidden">
                        <ChevronDown className="h-4 w-4" />
                    </span>
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu className="py-1 ml-4 border-l border-border group-data-[collapsible=icon]:hidden">
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="https://patreon.com" target="_blank" rel="noopener noreferrer">
                                <span>Patreon</span>
                                <ExternalLink className="ml-auto" />
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer">
                                <span>Ko-fi</span>
                                <ExternalLink className="ml-auto" />
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Join Discord">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                    <LifeBuoy />
                    <span>Join Discord</span>
                    <ExternalLink className="ml-auto group-data-[collapsible=icon]:hidden" />
                </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
