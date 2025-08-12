"use client";
import { Formik, Form } from "formik";
import { useState } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";

interface SearchFormValues {
   propertyStatus: string;
   location?: string;
   propertyType?: string;
   bedsBaths?: string;
}

const locationOptions: SelectProps<string>["options"] = [
   { label: "Dubai", value: "Dubai" },
   { label: "Abu Dhabi", value: "Abu Dhabi" },
   { label: "Jumeirah Village Circle", value: "Jumeirah Village Circle" },
   { label: "Dubai Marina", value: "Dubai Marina" },
];

const propertyTypeOptions: SelectProps<string>["options"] = [
   { label: "Apartment", value: "Apartment" },
   { label: "Villa", value: "Villa" },
   { label: "Townhouse", value: "Townhouse" },
   { label: "Penthouse", value: "Penthouse" },
   { label: "Compound", value: "Compound" },
   { label: "Duplex", value: "Duplex" },
];

const bedsBathsOptions: SelectProps<string>["options"] = [
   { label: "Studio", value: "Studio" },
   { label: "1 Bed", value: "1" },
   { label: "2 Beds", value: "2" },
   { label: "3 Beds", value: "3" },
   { label: "4+ Beds", value: "4+" },
];

export default function PropertySearchBar() {
   const [propertyStatus, setPropertyStatus] = useState("Primary");

   return (
      <div className="w-full flex flex-col items-center">
         <Formik<SearchFormValues>
            initialValues={{
               propertyStatus: "Primary",
               location: undefined,
               propertyType: undefined,
               bedsBaths: undefined,
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
                           className={`p-2 text-xs xs:text-sm w-20 md:w-32 flex justify-center items-center font-medium border-r border-l border-primary font-nexa ${propertyStatus === status
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
                           suffixIcon={<MdKeyboardArrowDown size={20} />}
                        />
                     </div>

                     {/* Property Type */}
                     <div className="border-r w-40">
                        <Select
                           placeholder="Property type"
                           value={values.propertyType}
                           onChange={(val) => setFieldValue("propertyType", val)}
                           options={propertyTypeOptions}
                           className="w-full"
                           variant="borderless"
                           suffixIcon={<MdKeyboardArrowDown size={20} />}
                        />
                     </div>

                     {/* Beds & Baths */}
                     <div className="border-r w-40">
                        <Select
                           placeholder="Beds & Baths"
                           value={values.bedsBaths}
                           onChange={(val) => setFieldValue("bedsBaths", val)}
                           options={bedsBathsOptions}
                           className="w-full"
                           variant="borderless"
                           suffixIcon={<MdKeyboardArrowDown size={20} />}
                        />
                     </div>

                     {/* Search Button */}
                     <button
                        type="submit"
                        className="bg-primary text-white w-fit px-6 h-full text-sm font-medium hover:bg-transparent border-2 rounded-r-full border-transparent hover:border-primary hover:!text-primary"
                     >
                        Search
                     </button>
                  </div>
               </Form>
            )}
         </Formik>
      </div>
   );
}
