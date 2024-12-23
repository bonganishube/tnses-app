import { AppSidebar } from "@/components/ui/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SidebarRoutes from "./_components/sidebar-routes";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col">
      <SidebarProvider>
        <div className="flex flex-1">
          {/* Sidebar */}
          <AppSidebar />
          
          {/* Content */}
          <SidebarInset className="flex-1 overflow-hidden">
            <header className="flex h-12 shrink-0 items-center gap-2 w-full px-4 transition-all ease-linear">
              <div className="flex items-center gap-2 w-full">
                <SidebarTrigger className="w-4 h-4 ml-2" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                
                {/* Optional breadcrumb */}
                {/* <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                        Building Your Application
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb> */}
                
                <SidebarRoutes />
              </div>
            </header>

            {/* Main Content Area */}
            <div className="pt-0 h-full max-w-full overflow-x-hidden">
              {children}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Dashboard;
