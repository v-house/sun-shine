import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Tooltip } from "@nextui-org/react";

export default function BookAportalButton() {
  const [open, setOpen] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [selectedMode, setSelectedMode] = useState("offline");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [phoned, setPhoned] = useState("");
  const [counselorError, setCounselorError] = useState("");

  const sendWhat = () => {
    if (selectedCounselor) {
      if (!bookingDetails.date) {
        setDateError("Please select a date");
      } else {
        setDateError("");
      }
      if (!bookingDetails.time) {
        setTimeError("Please enter time");
      } else {
        setTimeError("");
      }

      if (bookingDetails.date && bookingDetails.time) {
        setDateError("");
        setTimeError("");
        var greeting = "madam";

        if (selectedCounselor == "phani.bhushan@admin.iith.ac.in") {
          greeting = "sir";
          setPhoned("918331036082");
        } else if (selectedCounselor == "maria.morris@admin.iith.ac.in") {
          setPhoned("918331036081");
        } else if (selectedCounselor == "yukti.rastogi@admin.iith.ac.in") {
          setPhoned("918331036080");
        }

        const { name, email, date, time } = bookingDetails;
        const message = `Dear ${greeting}, I was wondering if I could meet you for an ${selectedMode} session on ${date} at ${time}. Name: ${name} Email: ${email} Thank you`;

        // WhatsApp URL
        // const whatsappLink = `whatsapp://send?phone=${phoned}&text=${encodeURIComponent(
        //   message
        // )}`;
        const whatsappLink = `https://wa.me/${phoned}?text=${encodeURIComponent(
          message
        )}`;

        // Open WhatsApp in a new tab
        window.open(whatsappLink, "_blank");

        setBookingDetails({
          name: "",
          email: "",
          date: "",
          time: "",
        });
        setOpen(false);
        setCounselorError("");
      }
    } else {
      setCounselorError("Please select a counselor");
    }
  };

  // Function to send an email to the selected counselor
  const sendEmail = () => {
    if (selectedCounselor) {
      //cause time and date is required
      if (!bookingDetails.date) {
        setDateError("Please select a date");
      } else {
        setDateError("");
      }
      if (!bookingDetails.time) {
        setTimeError("Please enter time");
      } else {
        setTimeError("");
      }

      if (bookingDetails.date && bookingDetails.time) {
        setDateError("");
        setTimeError("");
        var greeting = "madam";

        if (selectedCounselor == "phani.bhushan@admin.iith.ac.in") {
          greeting = "sir";
        }

        const { name, email, date, time } = bookingDetails;
        // const subject = `Appointment Booking Request with ${selectedCounselor}`;
        const subject = "Regarding Slot for a Session"; //same as app
        const body = `Dear ${greeting}, I was wondering if I could meet you for an ${selectedMode} session on ${date} at ${time}. %0D%0AName: ${name} %0D%0AEmail: ${email} %0D%0AThank you`;
        // const body = `Dear ${selectedCounselor}, I would like to book an appointment with you on ${date} at ${time}.\nName: ${name} \nEmail: ${email} \nMode: ${selectedMode} \nThank you`;
        const emailLink = `mailto:${selectedCounselor}?subject=${subject}&body=${body}`;

        // Open the email link in a new tab
        window.open(emailLink, "_blank");

        setBookingDetails({
          name: "",
          email: "",
          date: "",
          time: "",
        });
        setOpen(false);
        setCounselorError("");
      }
    } else {
      setCounselorError("Please select a counselor");
    }
  };

  return (
    <>
      <div className="group relative inline-block">
        <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
        <div className="text-center w-24 tooltip-content opacity-0 group-hover:opacity-100 transform -translate-x-full bg-blue-500 text-white rounded-md absolute -left-2 top-0 p-1 mt-1 transition-all duration-500">
          {"Book a Slot"}
        </div>
      </div>

      {/* <Tooltip
        placement="left"
        showArrow={true}
        content="Book a Meeting"
        color="primary"
      >
        <button onClick={() => setOpen(true)} className="">
          <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
        </button>
      </Tooltip> */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            setOpen(false);
            setSelectedCounselor("");
            setSelectedMode("offline");
            setDateError("");
            setTimeError("");
            setCounselorError("");
            setBookingDetails({
              name: "",
              email: "",
              date: "",
              time: "",
            });
          }}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white dark:bg-gray-800 sm:dark:bg-gray-900 dark:text-gray-200 sm:dark:text-gray-900 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                      >
                        Book a Session with our Counselor
                      </Dialog.Title>
                      <Dialog.Description>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Select a Counselor:
                          </label>
                          <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) =>
                              setSelectedCounselor(e.target.value)
                            }
                          >
                            <option value="" disabled selected>
                              Choose a Counselor
                            </option>
                            <option value="maria.morris@admin.iith.ac.in">
                              Maria Morris
                            </option>
                            <option value="yukti.rastogi@admin.iith.ac.in">
                              Yukti Rastogi
                            </option>
                            <option value="phani.bhushan@admin.iith.ac.in">
                              D. Phani Bhushan
                            </option>
                          </select>
                          {counselorError && (
                            <p className="text-red-600 text-sm mt-2">
                              {counselorError}
                            </p>
                          )}
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Mode of Session:
                          </label>
                          <select
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) => setSelectedMode(e.target.value)}
                          >
                            <option value="" disabled selected>
                              Select mode of session
                            </option>
                            <option value="offline">Offline</option>
                            <option value="online">Online</option>
                          </select>
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Your Name:
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your Name"
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Your Email:
                          </label>
                          <input
                            type="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            placeholder="Your Email"
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Date:*
                          </label>
                          <input
                            type="date"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                date: e.target.value,
                              })
                            }
                          />
                          {dateError && (
                            <p className="text-red-600 text-sm mt-2">
                              {dateError}
                            </p>
                          )}
                        </div>
                        <div className="mt-2">
                          <label className="block text-sm text-gray-600 dark:text-gray-400">
                            Time:*
                          </label>
                          <input
                            type="time"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                time: e.target.value,
                              })
                            }
                          />
                          {timeError && (
                            <p className="text-red-600 text-sm mt-2">
                              {timeError}
                            </p>
                          )}
                        </div>
                      </Dialog.Description>
                    </div>
                  </div>
                </div>
                <Dialog.Overlay>
                  <div className="bg-gray-50 dark:bg-gray-900 sm:dark:bg-gray-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      onClick={sendWhat}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Book via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={sendEmail}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Book via Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Overlay>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
