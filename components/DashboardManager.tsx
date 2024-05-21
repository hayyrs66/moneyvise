"use client";
import { useSearchParams } from "next/navigation";
import General from "./dashboard/General";
import Reportes from "./dashboard/Reportes";
import Pagos from "./dashboard/Pagos";
import Notificaciones from "./dashboard/Notificaciones";

const DashboardManager = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const tabComponents: { [key: string]: JSX.Element } = {
    general: <General />,
    reportes: <Reportes />,
    pagos: <Pagos />,
    notificaciones: <Notificaciones />,
  };

  return tabComponents[tab ?? "general"] || null;
};

export default DashboardManager;
