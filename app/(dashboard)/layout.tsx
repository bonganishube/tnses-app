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
          <SidebarInset className="flex-1 flex flex-col overflow-hidden">
            <header className="flex h-12 shrink-0 items-center gap-2 w-full px-4 transition-all ease-linear">
              <div className="flex items-center gap-2 w-full">
                <SidebarTrigger className="w-4 h-4 ml-2" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Logo />
                <SidebarRoutes />
              </div>
            </header>

            {/* Main Content Area */}
            <div className="pt-0 h-full overflow-auto max-w-full">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
