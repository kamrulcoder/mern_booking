import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },
  
  {
    title: "Users ",
    href: "/dashboard/users",
    icon: "bi bi-people",
  },
  {
    title: "Product Manage",
    href: "/dashboard/products",
    icon: "bi bi-gem",
  },
  {
    title: "Order Manage",
    href: "/dashboard/order",
    icon: "bi bi-patch-check",
  },
  {
    title: "Catagory Manage",
    href: "/dashboard/catagory",
    icon: "bi bi-bookmark-plus",
  },
  {
    title: "Banner Manage",
    href: "/dashboard/banner",
    icon: "bi bi-sliders",
  },
  {
    title: "Brand",
    href: "/dashboard/brand",
    icon: "bi bi-columns",
  },
  {
    title: "Settings ",
    href: "/dashboard/settings",
    icon: "bi bi-gear",
  }
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center justify-content-between">
        <Logo />
        <div  className=" d-block d-md-none">
        <Button
          close
          size="sm"
          className=" ms-auto  "
          onClick={() => showMobilemenu()}
        ></Button>
        </div>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
