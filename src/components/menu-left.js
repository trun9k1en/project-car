import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
export default function MenuLeft() {
  const menus = [
    {
      href: "/admin/dashboard",
      icons: DashboardIcon,
      name: "Bảng điều khiển",
    },
    {
      href: "/admin/stores",
      icons: StoreIcon,
      name: "Kho",
    },
    {
      href: "/admin/profile",
      icons: PersonIcon,
      name: "Trang cá nhân",
    },
    {
      href: "/admin/setting",
      icons: SettingsApplicationsIcon,
      name: "Cài đặt",
    },
  ];

  return (
    <div className="border-r-2 pr-2 w-[300px]">
      <img src="/logo.jpg" className="w-[250px] h-[70px]" />
        <br/>
      {menus.map((m) => (
        <div className="flex flex-row rounded px-4 py-2 border  mb-2">
          <m.icons />
          <div>{m.name}</div>
        </div>
      ))}
    </div>
  );
}
