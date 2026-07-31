import { AppSidebar } from "@/components/ui/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarRoutes from "./_components/sidebar-routes";
import Logo from "./_components/logo";

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
