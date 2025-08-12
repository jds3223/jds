"use client";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Select, Slider } from "antd";
import type { SelectProps } from "antd";

import Container from "../common/Container";

interface FormTypes {
  propertyType: string[];
  bedrooms: string[];
  currency: string;
  priceRange: [number, number];
}

const propertyTypeOptions: SelectProps<string>["options"] = [
  { label: "Apartments", value: "Apartments" },
  { label: "Villas", value: "Villas" },
  { label: "Penthouses", value: "Penthouses" },
  { label: "Townhouses", value: "Townhouses" },
  { label: "Duplexes", value: "Duplexes" },
  { label: "Hotel apartments", value: "Hotel apartments" },
  { label: "Whole buildings", value: "Whole buildings" },
  { label: "Short-terms", value: "Short-terms" },
  { label: "Full floor properties", value: "Full floor properties" },
  { label: "Half floor properties", value: "Half floor properties" },
  { label: "Commercial properties", value: "Commercial properties" },
];

const bedroomOptions: SelectProps<string>["options"] = Array.from(
  { length: 10 },
  (_, i) => ({ label: String(i + 1), value: String(i + 1) })
);

export default function PropertySearchForm() {
  const [propertyStatus, setPropertyStatus] = useState("Primary");

  // Currency symbols map
  const currencySymbols: Record<string, string> = {
    GBP: "£",
    CNY: "¥",
    EUR: "€",
    AED: "AED",
    USD: "$",
  };

  return (
    <Container className="relative">
      <Formik<FormTypes>
        initialValues={{
          propertyType: [],
          bedrooms: [],
          currency: "GBP",
          priceRange: [40000, 150000000],
        }}
        onSubmit={(values) => {
          console.log({ propertyStatus, ...values });
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="py-20 text-white">
            <div className="space-y-6">
              {/* Toggle Buttons */}
              <div className="flex border border-primary overflow-hidden">
                {["Primary", "Secondary"].map((status) => (
                  <button
                    key={status}
                    type="button"
                    className={`w-1/2 py-2 cursor-pointer ${
                      propertyStatus === status
                        ? "bg-primary text-black"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setPropertyStatus(status)}
                  >
                    {status}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                {/* Property type dropdown */}
                <div>
                  <label className="block mb-1 text-sm">Property type</label>
                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Select property types"
                    value={values.propertyType}
                    onChange={(val) => setFieldValue("propertyType", val)}
                    options={propertyTypeOptions}
                    style={{ width: "100%" }}
                    className="custom-select"
                    dropdownClassName="custom-dropdown"
                  />
                </div>

                {/* Bedrooms dropdown */}
                <div>
                  <label className="block mb-1 text-sm">Bedrooms</label>
                  <Select
                    mode="multiple"
                    allowClear
                    placeholder="Select bedrooms"
                    value={values.bedrooms}
                    onChange={(val) => setFieldValue("bedrooms", val)}
                    options={bedroomOptions}
                    style={{ width: "100%" }}
                    className="custom-select"
                    dropdownClassName="custom-dropdown"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                {/* Currency */}
                <div>
                  <label className="block mb-1 text-sm">Currency</label>
                  <div className="flex flex-wrap gap-2 xss:gap-3">
                    {["GBP", "CNY", "EUR", "AED", "USD"].map((cur) => (
                      <label
                        key={cur}
                        className={`px-2 md:px-3 py-1 border rounded cursor-pointer transition-colors
                          ${
                            values.currency === cur
                              ? "bg-primary text-White border-primary"
                              : "bg-transparent text-White border-white hover:border-primary hover:text-primary"
                          }`}
                      >
                        <Field
                          type="radio"
                          name="currency"
                          value={cur}
                          className="hidden"
                          onChange={() => setFieldValue("currency", cur)}
                        />
                        {cur}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Slider */}
                <div>
                  <label className="block mb-1 text-sm">Price Range</label>
                  <Slider
                    range
                    min={0}
                    max={200000000}
                    step={10000}
                    value={values.priceRange}
                    onChange={(val) =>
                      setFieldValue("priceRange", val as [number, number])
                    }
                    tooltip={{
                      formatter: (val) =>
                        `${currencySymbols[values.currency]} ${val?.toLocaleString()}`,
                    }}
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>
                      {currencySymbols[values.currency]}{" "}
                      {values.priceRange[0].toLocaleString()}
                    </span>
                    <span>
                      {currencySymbols[values.currency]}{" "}
                      {values.priceRange[1].toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-2 xss:gap-4 mx-auto">
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-black font-medium cursor-pointer text-sm xss:text-base"
                >
                  Show 81 projects
                </button>
                <button
                  type="button"
                  className="w-full py-3 border border-primary text-primary font-medium cursor-pointer text-sm xss:text-base"
                >
                  Properties on map
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
