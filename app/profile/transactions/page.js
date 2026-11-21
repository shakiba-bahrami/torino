"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import EmptyTours from "./EmptyTransactions";
import { toPersianDigits, toPersianPrice } from "@/core/utils/formatters";

function TransactionsPage() {
  const { data, isPending } = useGetUserTransactions();
  const transactionsList = data?.data;
  if (isPending) return <p>در حال دریافت لیست تراکنش ها</p>;
  if (transactionsList.length === 0) return <EmptyTours />;

  return (
    <div className="overflow-hidden mt-[20px] border-1 border-black/25 rounded-[10px] lg:flex-3 ">
      <table className="w-full text-center ">
        <thead className="text-[12px] fw-400 border-b border-black/25 bg-black/10 rounded-t-lg">
          <tr className=" h-[40px] ">
            <th>تاریخ و ساعت</th>
            <th>مبلغ تومان</th>
            <th>شماره سفارش</th>
          </tr>
        </thead>
        <tbody className="text-[13px] fw-300">
          {transactionsList.map((transaction) => (
            <tr key={transaction.id} className="h-[40px]">
              <td>{transaction.created_at}</td>
              <td>{toPersianPrice(transaction.amount)}</td>
              <td>{toPersianDigits(transaction.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsPage;
