import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarRoutes from "./_components/sidebar-routes";
import Logo from "./_components/logo";

/**
 * Every dashboard page is per-user and database-backed, so none of them may be
 * prerendered. Next would otherwise run their Prisma queries at build time,
 * baking one user's data into static HTML, and failing the build outright when
 * DATABASE_URL is absent from the build environment (as it is on Vercel).
 *
 * Real Clerk marks these routes dynamic implicitly because its `auth()` reads
 * headers(). The local auth stub returns a fixed object without touching any
 * request API, so that signal disappears and this has to be explicit.
 */
export const dynamic = "force-dynamic";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <SidebarProvider>
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <AppSidebar />
          {/* Main Content */}
          <SidebarInset className="flex flex-1 flex-col overflow-hidden bg-tertiaryColor-soft">
            <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b border-secondaryColor/10 bg-white/85 px-4 backdrop-blur-xl">
              <div className="flex w-full items-center gap-2">
                <SidebarTrigger className="h-8 w-8 text-muted-foreground hover:text-secondaryColor" />
                <Separator orientation="vertical" className="mr-1 h-4" />
                <Logo />
                <SidebarRoutes />
              </div>
            </header>

            {/* Main Content Area */}
            <div className="h-full max-w-full overflow-auto">{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
