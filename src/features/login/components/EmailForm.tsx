// "use client";

// import { useState } from "react";

// export default function EmailForm() {
//     const [formData, setFormData] = useState({
//         to: "",
//         subject: "",
//         message: "",
//     });
//     const [status, setStatus] = useState<
//         "idle" | "sending" | "success" | "error"
//     >("idle");
//     const [responseMessage, setResponseMessage] = useState("");

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//         setStatus("sending");

//         try {
//             const response = await fetch("/api/send-email", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setStatus("success");
//                 setResponseMessage("Email sent successfully!");
//                 setFormData({ to: "", subject: "", message: "" });
//             } else {
//                 setStatus("error");
//                 setResponseMessage(data.error || "Failed to send email");
//             }
//         } catch (error) {
//             setStatus("error");
//             console.error({ error });
//             setResponseMessage("Network error occurred");
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-nlight rounded-lg shadow-md">
//             <h2 className="text-2xl font-bold mb-4">Send Email</h2>

//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label
//                         htmlFor="to"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         To Email
//                     </label>
//                     <input
//                         type="email"
//                         id="to"
//                         value={formData.to}
//                         onChange={(e) =>
//                             setFormData({ ...formData, to: e.target.value })
//                         }
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         placeholder="abc@gmail.com"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label
//                         htmlFor="subject"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Subject
//                     </label>
//                     <input
//                         type="text"
//                         id="subject"
//                         value={formData.subject}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 subject: e.target.value,
//                             })
//                         }
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     />
//                 </div>

//                 <div>
//                     <label
//                         htmlFor="message"
//                         className="block text-sm font-medium text-gray-700"
//                     >
//                         Message
//                     </label>
//                     <textarea
//                         id="message"
//                         rows={4}
//                         value={formData.message}
//                         onChange={(e) =>
//                             setFormData({
//                                 ...formData,
//                                 message: e.target.value,
//                             })
//                         }
//                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//                         required
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={status === "sending"}
//                     className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
//                         status === "sending"
//                             ? "bg-gray-400 cursor-not-allowed"
//                             : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     }`}
//                 >
//                     {status === "sending" ? "Sending..." : "Send Email"}
//                 </button>
//             </form>

//             {responseMessage && (
//                 <div
//                     className={`mt-4 p-3 rounded-md ${
//                         status === "success"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-red-100 text-red-700"
//                     }`}
//                 >
//                     {responseMessage}
//                 </div>
//             )}
//         </div>
//     );
// }
