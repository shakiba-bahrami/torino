"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import EmptyTours from "./EmptyTransactions";
import {
  toPersianDateTime,
  toPersianDigits,
  toPersianPrice,
} from "@/core/utils/formatters";

function TransactionsPage() {
  const { data, isPending } = useGetUserTransactions();
  const transactionsList = data?.data;
  if (isPending) return <p>در حال دریافت لیست تراکنش ها</p>;
  if (transactionsList.length === 0) return <EmptyTours />;
  console.log(transactionsList[0].type);

  return (
    <div className="overflow-hidden my-[20px] border-1 border-black/25 rounded-[10px] lg:flex-3 ">
      <table className="w-full text-center ">
        <thead className=" fw-400 border-b border-black/25 bg-black/10 rounded-t-lg">
          <tr className=" h-[40px] ">
            <th className="text-secondary/80 text-[12px] lg:text-[16px] lg:text-black fw-400">
              تاریخ و ساعت
            </th>
            <th className="text-secondary/80 text-[12px] lg:text-[16px] lg:text-black fw-400">مبلغ تومان</th>
            <th className="hidden lg:block text-secondary/80 text-[12px] lg:text-[16px] lg:text-black fw-400 h-[40px] pt-[10px]">
              نوع تراکنش
            </th>
            <th className="text-secondary/80 text-[12px] lg:text-[16px] lg:text-black fw-400">
              شماره سفارش
            </th>
          </tr>
        </thead>
        <tbody className="text-[13px] lg:text-[14px] fw-300 text-black">
          {transactionsList.map((transaction) => (
            <tr key={transaction.id} className="h-[40px]">
              <td className="text-[9px] lg:text-[14px]">
                {toPersianDateTime(transaction.createdAt)}
              </td>
              <td>{toPersianPrice(transaction.amount*1000)}</td>
              <td>
                {transaction?.type === "Purchase"
                  ? "پرداخت شده"
                  : "در انتظار پرداخت"}
              </td>
              <td className="flex gap-2 justify-center items-center mt-[10px]">
                <p className="hidden lg:block">سفارش</p>
                {toPersianDigits(transaction.id.slice(0, 8))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
