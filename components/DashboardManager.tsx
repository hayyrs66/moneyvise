"use client";
import { useSearchParams } from "next/navigation";
import General from "./dashboard/General";
import Reportes from "./dashboard/Reportes";
import Settings from "./dashboard/Settings";

const DashboardManager = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const tabComponents: { [key: string]: JSX.Element } = {
    general: <General />,
    reportes: <Reportes />,
    configuracion: <Settings />,
  };

  return tabComponents[tab ?? "general"] || null;
};

export default DashboardManager;
