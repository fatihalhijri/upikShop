"use client";

import React, { useState } from "react";
import * as yup from "yup";
import UseAuthModule from "../lib";

import axios from "axios";



const LoginPage = () => {
  const { useLogin } = UseAuthModule();
  const { mutate, isLoading } = useLogin();
  
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    // setLoading(true);
    
    
    if (!email || !password) {
      setError("Email dan password harus diisi!");
      setLoading(false);
      return;
    }
    
    mutate(
      { email, password }, // Data yang dikirim ke backend
      
    );
  };
  console.log(email);
  console.log(password);
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


// "use client";

// import React from "react";
// import * as yup from "yup";
// import UseAuthModule from "../lib";

// import { useFormik, Form, FormikProvider, getIn } from "formik";
// import { LoginPayload } from "../interface";
// import Label from "@/components/Label";
// import InputText from "@/components/InputText";
// import Button from "@/components/Button";
// import Link from "next/link";

// export const registerSchema = yup.object().shape({
//   email: yup
//     .string()
//     .nullable()
//     .default("")
//     .email("Gunakan format email")
//     .required("Wajib isi"),
//   password: yup
//     .string()
//     .nullable()
//     .default("")
//     .required("Wajib isi P")
//     .min(8, "Minimal 8 karakater"),
// });

// const LoginPage = () => {
//   const { useLogin } = UseAuthModule();
//   const { mutate, isLoading } = useLogin();
//   const formik = useFormik<LoginPayload>({
//     initialValues: registerSchema.getDefault(),
//     validationSchema: registerSchema,
//     enableReinitialize: true,
//     onSubmit: (payload) => {
//       mutate(payload);
//     },
//   });
//   const { handleChange, handleSubmit, handleBlur, values, errors } = formik;
//   return (
//     <section>
//       <div></div>
//       <FormikProvider value={formik}>
//         <Form className="space-y-5" onSubmit={handleSubmit}>
//           <section>
//             <Label htmlFor="email" title="Email" />
//             <InputText
//               value={values.email}
//               placeholder="exampel@email.com"
//               id="email"
//               name="email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               isError={getIn(errors, "email")}
//               messageError={getIn(errors, "email")}
//             />
//           </section>
//           <section>
//             <Label htmlFor="password" title="Password" />

//             <InputText
//               value={values.password}
//               placeholder="**********"
//               id="password"
//               name="password"
//               type="password"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               isError={getIn(errors, "password")}
//               messageError={getIn(errors, "password")}
//             />
//           </section>
//           <section>
//             <Button
//               height="lg"
//               title="Login"
//               colorSchema="blue"
//               // isLoading={isLoading}
//               isDisabled={isLoading}
//             />
//             <Link href={"/register"}>
//               <Button title="Halaman Register" colorSchema="green" />
//             </Link>
//           </section>
//         </Form>
//       </FormikProvider>
//     </section>
//   );
// };

// export default LoginPage;
