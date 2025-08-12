"use client";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { IoSearchSharp } from "react-icons/io5";

interface SearchFormValues {
   propertyStatus: string;
   location?: string;
}

const locationOptions: SelectProps<string>["options"] = [
   { label: "Dubai", value: "Dubai" },
   { label: "Abu Dhabi", value: "Abu Dhabi" },
   { label: "Jumeirah Village Circle", value: "Jumeirah Village Circle" },
   { label: "Dubai Marina", value: "Dubai Marina" },
];


export default function SearchFormMobile() {
   const [propertyStatus, setPropertyStatus] = useState("Primary");

   return (
      <div className="w-full flex flex-col items-center">
         <Formik<SearchFormValues>
            initialValues={{
               propertyStatus: "Primary",
               location: undefined,
            }}
            onSubmit={(values) => {
               console.log(values);
            }}
         >
            {({ setFieldValue, values }) => (
               <Form className="w-full overflow-hidden">
                  {/* Status Toggle */}
                  <div className="flex justify-center rounded-full overflow-hidden bg-white shadow mb-3 w-fit mx-auto">
                     {["Primary", "Secondary"].map((status) => (
                        <button
                           key={status}
                           type="button"
                           className={`p-2 text-[12px] w-24 flex justify-center items-center font-medium border-r border-l border-primary font-nexa ${propertyStatus === status
                              ? "bg-primary"
                              : "!text-gray-700"
                              }`}
                           onClick={() => {
                              setPropertyStatus(status);
                              setFieldValue("propertyStatus", status);
                           }}
                        >
                           {status}
                        </button>
                     ))}
                  </div>

                  {/* Search Bar */}
                  <div className="flex items-center w-full rounded-full overflow-hidden shadow bg-white h-12">
                     {/* Location */}
                     <div className="border-r flex-1">
                        <Select
                           showSearch
                           placeholder="City, community or building"
                           value={values.location}
                           onChange={(val) => setFieldValue("location", val)}
                           options={locationOptions}
                           className="w-full"
                           popupRender={(menu) => (
                              <div>
                                 <div className="px-4 py-2 text-gray-500 font-medium">
                                    Popular locations
                                 </div>
                                 {menu}
                              </div>
                           )}
                           variant="borderless"
                           suffixIcon={''}
                        />
                     </div>

                     {/* Search Button */}
                     <button
                        type="submit"
                        className="bg-primary text-white w-fit px-3 h-full text-sm font-medium hover:bg-transparent border-2 rounded-r-full border-transparent hover:border-primary hover:!text-primary"
                     >
                        <IoSearchSharp size={18} />
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}
