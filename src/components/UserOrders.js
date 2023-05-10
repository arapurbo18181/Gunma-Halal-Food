import React from "react";
import { useApi } from "../context/ApiContext";

const UserOrders = () => {
  const { UserData } = useApi();
  return (
    <section className="w-full flex justify-center items-center">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Shipping Address (State, City, Zip Code)
              </th>
              <th scope="col" class="px-6 py-3">
                Total Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Due Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Order Date
              </th>
              <th scope="col" class="px-6 py-3">
                Delivery Date
              </th>
              <th scope="col" class="px-6 py-3">
                Delivery Status
              </th>
            </tr>
          </thead>
          <tbody>
            {UserData.user_orders.map((item) => {
              return (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.shipping.state}, {item.shipping.city}, {item.shipping.zip}
                  </th>
                  <td class="px-6 py-4">{item.total_amount}</td>
                  <td class="px-6 py-4">{item.due_amount}</td>
                  <td class="px-6 py-4">{item.order_date}</td>
                  <td class="px-6 py-4">{item.delivery_date}</td>
                  <td class="px-6 py-4">{item.delivery_status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserOrders;
