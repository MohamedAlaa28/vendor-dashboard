

import StarBorderIcon from "@mui/icons-material/StarBorder";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Header from "./Header";
import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import MobileSideBar from './MobileSideBar';
import DesktopSideBar from './DesktopSideBar';



export const navigation = [
  { id: 1, name: "Dashboard", to: "/", icon: DashboardOutlinedIcon, current: true },
  {
    id: 2,
    name: "Products",
    icon: Inventory2OutlinedIcon,
    current: false,
    children: [
      { id: 1, name: "Products", to: "/Products" },
      { id: 2, name: "Product Bulk Upload", to: "/ProductBulkUpload" },
      { id: 3, name: "Table", to: "/Table" },
    ],
  },
  { id: 3, name: "Orders", to: "/Orders", icon: ChecklistOutlinedIcon, current: false },
  {
    id: 4,
    name: "Product Reviews",
    to: "/ProductReviews",
    icon: StarBorderIcon,
    current: false,
  },
  {
    id: 5,
    name: "Commission History",
    to: "/CommissionHistory",
    icon: RestoreOutlinedIcon,
    current: false,
  },
  {
    id: 6,
    name: "Support",
    to: "/Support",
    icon: SupportAgentIcon,
    current: false,
  },
  { id: 7, name: "Help", to: "/Help", icon: ContactSupportOutlinedIcon, current: false },
];

export const userNavigation = [
  { id: 1, name: "Your Profile", to: "/" },
  { id: 2, name: "Settings", to: "/" },
  { id: 3, name: "Sign out", to: "/" },
];

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true);
  const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false);
  // const location = useLocation();

  const isMobile = useResponsive();
  function useResponsive() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
  }

  return (
    <>
      <div className="mx-auto flex md:px-8 xl:px-0 w-full">
        <div className="sticky top-0 z-10 flex-shrink-0 bg-[#F2F4F7] border-b border-gray-200 flex">
          {isMobile ?
            (
              <MobileSideBar sidebarMobileOpen={sidebarMobileOpen} setSidebarMobileOpen={setSidebarMobileOpen} />
            )
            :
            (
              <DesktopSideBar sidebarDesktopOpen={sidebarDesktopOpen} setSidebarDesktopOpen={setSidebarDesktopOpen} />
            )
          }
        </div>

        {/* <div className=""> */}
        <div className="mx-auto flex flex-col md:px-8 xl:px-0">

          <Header isMobile={isMobile} setSidebarMobileOpen={setSidebarMobileOpen} />
          <main className="flex-1 h-full">

            <div className="px-4 min-h-screen sm:px-6 md:px-0 bg-[#F2F4F7] pb-6 h-full">
              {children}
            </div>
          </main>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
