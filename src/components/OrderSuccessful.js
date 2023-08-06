import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useApi } from "../context/ApiContext";

const OrderSuccessful = () => {
  const {
    isOpen,
    closeModal,
    openModal,
    UserData,
    FinalTotalWithCoupon,
      FinalTotal,
      PaymentMethod,
      OrderAmount
  } = useApi();

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-green-700 border-2 border-green-700 border-dotted p-3 w-full text-center"
                  >
                    Thank you. Your order has been received.
                  </Dialog.Title>
                  <div className="mt-2 space-y-2 flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center border-b py-2 w-full">
                      <h2 className="text-gray-400 font-semibold"> Order Number: </h2>
                      <h2 className="font-semibold"> 2331 </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center border-b py-2 w-full">
                      <h2 className="text-gray-400 font-semibold"> Date: </h2>
                      <h2 className="font-semibold"> {new Date().toISOString().substring(0, 10)} </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center border-b py-2 w-full">
                      <h2 className="text-gray-400 font-semibold"> Email: </h2>
                      <h2 className="font-semibold"> {UserData ? UserData.email : null} </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center border-b py-2 w-full">
                      <h2 className="text-gray-400 font-semibold"> Total: </h2>
                      <h2 className="font-semibold">
                        {OrderAmount}
                      </h2>
                    </div>
                    <div className="flex flex-col justify-center items-center border-b py-2 w-full">
                      <h2 className="text-gray-400 font-semibold"> Payment Method: </h2>
                      <h2 className="font-semibold">
                        {PaymentMethod === "cash_on_delivery"
                          ? "Cash On Delivery"
                          : "Stripe"}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default OrderSuccessful;
