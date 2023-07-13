import React, { useEffect, useRef, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useApi } from "../context/ApiContext";

const UserOrders = () => {
  const { UserData, Orders } = useApi();
  const [ShowOrderProducts, setShowOrderProducts] = useState(false);
  const ref = useRef()

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOrderProducts(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleShowOrders = (id) => {
    setShowOrderProducts(id);
  }

  return (
    <section className="w-full flex justify-center items-center mb-20">
      <div class="overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table class="w-full text-sm text-left text-gray-500 ">
          <thead class="text-xs text-gray-700 bg-gray-50">
            <tr>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Shipping Address (State, City, Zip Code)
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Total Amount
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Due Amount
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Order Date
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Delivery Date
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Delivery Status
              </th>
              <th scope="col" class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((item) => {
              return (
                <tr class="bg-white border-b hover:bg-gray-50 ">
                  <th
                    scope="row"
                    class="px-1 sm:px-3 md:px-6 py-1 md:py-3 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {item.shipping.state}, {item.shipping.city},{" "}
                    {item.shipping.zip}
                  </th>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {item.total_amount}
                  </td>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {item.due_amount}
                  </td>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {item.order_date}
                  </td>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {item.delivery_date}
                  </td>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {item.delivery_status === "PENDING"
                      ? "Pending"
                      : item.delivery_status === "PROCESSING"
                      ? "Processing"
                      : "Completed"}
                  </td>
                  <td class="px-1 sm:px-3 md:px-6 py-1 md:py-3">
                    {" "}
                    <AiFillEye onClick={()=>handleShowOrders(item.id)} className="text-xl cursor-pointer hover:scale-125 transition-all duration-300" />{" "}
                    { ShowOrderProducts === item.id ? <div className="fixed w-full h-full top-0 left-0 z-20 bg-black bg-opacity-50 flex justify-center items-center">
                      <div ref={ref} className="w-full md:w-2/3 xl:w-1/3 h-fit rounded-lg bg-gray-200 mx-2">
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                          <table class="w-full text-sm text-left text-gray-500 ">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                              <tr>
                                <th scope="col" class="px-2 md:px-6 py-1 md:py-3">
                                  Product name
                                </th>
                                <th scope="col" class="px-2 md:px-6 py-1 md:py-3">
                                  Quantity
                                </th>
                                <th scope="col" class="px-2 md:px-6 py-1 md:py-3">
                                  Price
                                </th>
                                <th scope="col" class="px-2 md:px-6 py-1 md:py-3">
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.order_items.map((elem) => {
                                return (
                                  <tr class="bg-white border-b hover:bg-gray-50">
                                    <td class="px-6 py-4">{elem.item_product.name}</td>
                                    <td class="px-6 py-4"> {elem.qty} </td>
                                    <td class="px-6 py-4">¥ { Math.round(elem.price)} </td>
                                    <td class="px-6 py-4">{ elem.status == 1 ? "Available" : elem.status == 0 ? "Not Available" : ""} </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div> : ""}
                  </td>
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
