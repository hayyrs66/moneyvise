import { MdAccountBalance } from "react-icons/md";
import { IconType } from "react-icons";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export const dataOverview = [
    {
        title: 'Saldo Total',
        total: 100000,
        icon: MdAccountBalance as IconType,
    },
    {
        title: 'Ingresos Mensuales',
        total: 252.0,
        icon: FaMoneyBillTrendUp as IconType,
    },
    {
        title: 'Gastos Mensuales',
        total: 425.88,
        icon: MdOutlineMoneyOffCsred as IconType,
    },
    {
        title: 'Balance Mensual',
        total: 425.88,
        icon: FaMoneyCheckDollar as IconType,
    }
]
