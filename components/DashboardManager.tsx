"use client";

import { useSearchParams } from "next/navigation";
import { dataOverview } from "@/app/constants";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { useEffect } from "react";

const DashboardManager = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const renderTab = () => {
    switch (tab) {
      case "general":
        return <h1>General</h1>;
      case "reportes":
        return <h1>Reportes</h1>;
      case "pagos":
        return <h1>Pagos</h1>;
      case "notificaciones":
        return <h1>Notificaciones</h1>;
      default:
        return <h1>General</h1>;
    }
  };

  return (
    <section className="w-full h-full">
      <div className="w-full h-full border border-white/15 rounded-md"></div>
    </section>
  );
};

export default DashboardManager;
