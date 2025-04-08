// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Button } from "../../components/ui/button";
// import { z } from "zod"; // Import zod

// // Define validation schema using zod
// const schema = z.object({
//   fullname: z.string().min(1, "Full name is required"),
//   email: z.string().email("Invalid email address"),
//   phone: z
//     .string()
//     .regex(/^\d+$/, "Phone number must contain only digits")
//     .min(10, "Phone number must be at least 10 digits"),
//   message: z.string().min(1, "Message is required"),
// });

// const info = [
//   {
//     icon: <FaPhoneAlt />,
//     title: "Phone",
//     description: "+49 234 966 46 480",
//   },
//   {
//     icon: <FaEnvelope />,
//     title: "Email",
//     description: "info@sernitas.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     title: "Address",
//     description: (
//       <>
//         Sernitas GmbH <br />
//         BioMedizinZentrum Bochum <br />
//         Universitätsstraße 136, <br />
//         44799 Bochum
//       </>
//     ),
//   },
// ];

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data using zod
//     const result = schema.safeParse(formData);
//     if (!result.success) {
//       // Extract errors and set them in state
//       const fieldErrors = {};
//       result.error.errors.forEach((error) => {
//         fieldErrors[error.path[0]] = error.message;
//       });
//       setErrors(fieldErrors);
//       setSuccessMessage(""); // Clear success message if validation fails
//       return;
//     }

//     // Clear errors if validation passes
//     setErrors({});

//     try {
//       const response = await fetch("http://localhost:5000/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSuccessMessage("Message sent successfully!");
//         setFormData({ fullname: "", email: "", phone: "", message: "" }); // Reset form
//       } else {
//         const errorData = await response.json();
//         setSuccessMessage(`Failed to send message: ${errorData.error}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSuccessMessage("An error occurred while sending the message.");
//     }
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="py-24 bg-gray-700"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row gap-10">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="xl:w-[54%] order-2 xl:order-none"
//           >
//             <form
//               className="flex flex-col gap-6 p-10 bg-gray-800 rounded-xl"
//               onSubmit={handleSubmit}
//             >
//               <h3 className="text-4xl text-white/100">
//                 We&apos;re Here for You
//               </h3>
//               <p className="text-white/60 text-justify">
//                 Reach out to Sernitas Care for trusted, compassionate home
//                 nursing services. Let us help ensure the comfort dignity, and
//                 well-being of your loved ones.
//               </p>
//               <div className="grid gap-6">
//                 <Input
//                   type="text"
//                   name="fullname"
//                   placeholder="First & Last Name"
//                   value={formData.fullname}
//                   onChange={handleChange}
//                 />
//                 {errors.fullname && (
//                   <p className="text-red-500 text-sm">{errors.fullname}</p>
//                 )}
//                 <Input
//                   type="email"
//                   name="email"
//                   placeholder="E-mail Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm">{errors.email}</p>
//                 )}
//                 <Input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm">{errors.phone}</p>
//                 )}
//               </div>
//               <Textarea
//                 className="h-[200px]"
//                 name="message"
//                 placeholder="Type Your Message Here."
//                 value={formData.message}
//                 onChange={handleChange}
//               />
//               {errors.message && (
//                 <p className="text-red-500 text-sm">{errors.message}</p>
//               )}
//               {successMessage && (
//                 <p className="text-green-500 text-sm">{successMessage}</p>
//               )}
//               <Button
//                 size="md"
//                 className="max-w-[200px] bg-primary text-white hover:bg-secondary"
//                 type="submit"
//               >
//                 Send Message
//               </Button>
//             </form>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//             className="flex-1 flex items-center xl:justify-end order-1 xl:order-none"
//           >
//             <ul className="flex flex-col gap-10">
//               {info.map((item, index) => (
//                 <li key={index} className="flex items-center gap-6">
//                   <div className="w-[52px] h-[52px] xl:w-[72px] bg-slate-300 text-primary rounded-md flex justify-center items-center">
//                     <div className="text-[28px]">{item.icon}</div>
//                   </div>
//                   <div className="flex-1">
//                     <p className="text-white/60">{item.title}</p>
//                     <h3 className="text-xl text-white">{item.description}</h3>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { z } from "zod"; // Import zod

// Define validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(1, "Message is required"),
});

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+49 234 966 46 480",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "info@sernitas-care.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: (
      <>
        Sernitas GmbH <br />
        BioMedizinZentrum Bochum <br />
        Universitätsstraße 136, <br />
        44799 Bochum
      </>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true while sending
    setErrors({});
    setSuccessMessage("");

    try {
      // Validate form data using zod schema
      const validatedData = schema.parse(formData);

      // Send data to the server
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setErrors({ form: errorData.error || "Failed to send message." });
      }
    } catch (error) {
      if (error.errors) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors);
      } else {
        setErrors({ form: "An unexpected error occurred." });
      }
    } finally {
      setIsLoading(false); // Set loading to false after sending
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-24 pb-2 bg-gray-700"
    >
      <div className="container mx-auto">
        {/* Use grid for larger screens and flex-col-reverse for phone screens */}
        <div className="grid lg:grid-cols-2 gap-10">
          {" "}
          {/* Use grid for layout */}
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center xl:justify-end"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-slate-300 text-primary rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-10 rounded-xl"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-white/100">
                We&apos;re Here for You
              </h3>
              <p className="text-white/60 text-justify">
                Reach out to Sernitas Care for trusted, compassionate home
                nursing services. Let us help ensure the comfort, dignity, and
                well-being of your loved ones.
              </p>
              <div className="grid gap-6">
                <Input
                  type="text"
                  name="fullname"
                  placeholder="First & Last Name"
                  value={formData.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm">{errors.fullname}</p>
                )}
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type Your Message Here."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm">{successMessage}</p>
              )}
              {errors.form && (
                <p className="text-red-500 text-sm">{errors.form}</p>
              )}
              <Button
                size="md"
                className="max-w-[200px] bg-primary text-white hover:bg-secondary"
                type="submit"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? "Sending..." : "Send Message"}{" "}
                {/* Show loading text */}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
