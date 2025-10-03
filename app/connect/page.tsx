"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import NavogateUniverse from "@/components/navogateUniverse";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import emailjs from '@emailjs/browser'

import React, { useRef, useState } from "react";

const countries = [
  { code: "af", name: "Afghanistan" },
  { code: "al", name: "Albania" },
  { code: "dz", name: "Algeria" },
  { code: "ad", name: "Andorra" },
  { code: "ao", name: "Angola" },
  { code: "ag", name: "Antigua and Barbuda" },
  { code: "ar", name: "Argentina" },
  { code: "am", name: "Armenia" },
  { code: "au", name: "Australia" },
  { code: "at", name: "Austria" },
  { code: "az", name: "Azerbaijan" },
  { code: "bs", name: "Bahamas" },
  { code: "bh", name: "Bahrain" },
  { code: "bd", name: "Bangladesh" },
  { code: "bb", name: "Barbados" },
  { code: "by", name: "Belarus" },
  { code: "be", name: "Belgium" },
  { code: "bz", name: "Belize" },
  { code: "bj", name: "Benin" },
  { code: "bt", name: "Bhutan" },
  { code: "bo", name: "Bolivia" },
  { code: "ba", name: "Bosnia and Herzegovina" },
  { code: "bw", name: "Botswana" },
  { code: "br", name: "Brazil" },
  { code: "bn", name: "Brunei" },
  { code: "bg", name: "Bulgaria" },
  { code: "bf", name: "Burkina Faso" },
  { code: "bi", name: "Burundi" },
  { code: "cv", name: "Cabo Verde" },
  { code: "kh", name: "Cambodia" },
  { code: "cm", name: "Cameroon" },
  { code: "ca", name: "Canada" },
  { code: "cf", name: "Central African Republic" },
  { code: "td", name: "Chad" },
  { code: "cl", name: "Chile" },
  { code: "cn", name: "China" },
  { code: "co", name: "Colombia" },
  { code: "km", name: "Comoros" },
  { code: "cd", name: "Congo (DRC)" },
  { code: "cg", name: "Congo (Republic)" },
  { code: "cr", name: "Costa Rica" },
  { code: "ci", name: "Côte d’Ivoire" },
  { code: "hr", name: "Croatia" },
  { code: "cu", name: "Cuba" },
  { code: "cy", name: "Cyprus" },
  { code: "cz", name: "Czech Republic" },
  { code: "dk", name: "Denmark" },
  { code: "dj", name: "Djibouti" },
  { code: "dm", name: "Dominica" },
  { code: "do", name: "Dominican Republic" },
  { code: "ec", name: "Ecuador" },
  { code: "eg", name: "Egypt" },
  { code: "sv", name: "El Salvador" },
  { code: "gq", name: "Equatorial Guinea" },
  { code: "er", name: "Eritrea" },
  { code: "ee", name: "Estonia" },
  { code: "sz", name: "Eswatini" },
  { code: "et", name: "Ethiopia" },
  { code: "fj", name: "Fiji" },
  { code: "fi", name: "Finland" },
  { code: "fr", name: "France" },
  { code: "ga", name: "Gabon" },
  { code: "gm", name: "Gambia" },
  { code: "ge", name: "Georgia" },
  { code: "de", name: "Germany" },
  { code: "gh", name: "Ghana" },
  { code: "gr", name: "Greece" },
  { code: "gd", name: "Grenada" },
  { code: "gt", name: "Guatemala" },
  { code: "gn", name: "Guinea" },
  { code: "gw", name: "Guinea-Bissau" },
  { code: "gy", name: "Guyana" },
  { code: "ht", name: "Haiti" },
  { code: "hn", name: "Honduras" },
  { code: "hu", name: "Hungary" },
  { code: "is", name: "Iceland" },
  { code: "in", name: "India" },
  { code: "id", name: "Indonesia" },
  { code: "ir", name: "Iran" },
  { code: "iq", name: "Iraq" },
  { code: "ie", name: "Ireland" },
  { code: "il", name: "Israel" },
  { code: "it", name: "Italy" },
  { code: "jm", name: "Jamaica" },
  { code: "jp", name: "Japan" },
  { code: "jo", name: "Jordan" },
  { code: "kz", name: "Kazakhstan" },
  { code: "ke", name: "Kenya" },
  { code: "ki", name: "Kiribati" },
  { code: "kp", name: "North Korea" },
  { code: "kr", name: "South Korea" },
  { code: "kw", name: "Kuwait" },
  { code: "kg", name: "Kyrgyzstan" },
  { code: "la", name: "Laos" },
  { code: "lv", name: "Latvia" },
  { code: "lb", name: "Lebanon" },
  { code: "ls", name: "Lesotho" },
  { code: "lr", name: "Liberia" },
  { code: "ly", name: "Libya" },
  { code: "li", name: "Liechtenstein" },
  { code: "lt", name: "Lithuania" },
  { code: "lu", name: "Luxembourg" },
  { code: "mg", name: "Madagascar" },
  { code: "mw", name: "Malawi" },
  { code: "my", name: "Malaysia" },
  { code: "mv", name: "Maldives" },
  { code: "ml", name: "Mali" },
  { code: "mt", name: "Malta" },
  { code: "mh", name: "Marshall Islands" },
  { code: "mr", name: "Mauritania" },
  { code: "mu", name: "Mauritius" },
  { code: "mx", name: "Mexico" },
  { code: "fm", name: "Micronesia" },
  { code: "md", name: "Moldova" },
  { code: "mc", name: "Monaco" },
  { code: "mn", name: "Mongolia" },
  { code: "me", name: "Montenegro" },
  { code: "ma", name: "Morocco" },
  { code: "mz", name: "Mozambique" },
  { code: "mm", name: "Myanmar" },
  { code: "na", name: "Namibia" },
  { code: "nr", name: "Nauru" },
  { code: "np", name: "Nepal" },
  { code: "nl", name: "Netherlands" },
  { code: "nz", name: "New Zealand" },
  { code: "ni", name: "Nicaragua" },
  { code: "ne", name: "Niger" },
  { code: "ng", name: "Nigeria" },
  { code: "mk", name: "North Macedonia" },
  { code: "no", name: "Norway" },
  { code: "om", name: "Oman" },
  { code: "pk", name: "Pakistan" },
  { code: "pw", name: "Palau" },
  { code: "ps", name: "Palestine" },
  { code: "pa", name: "Panama" },
  { code: "pg", name: "Papua New Guinea" },
  { code: "py", name: "Paraguay" },
  { code: "pe", name: "Peru" },
  { code: "ph", name: "Philippines" },
  { code: "pl", name: "Poland" },
  { code: "pt", name: "Portugal" },
  { code: "qa", name: "Qatar" },
  { code: "ro", name: "Romania" },
  { code: "ru", name: "Russia" },
  { code: "rw", name: "Rwanda" },
  { code: "kn", name: "Saint Kitts and Nevis" },
  { code: "lc", name: "Saint Lucia" },
  { code: "vc", name: "Saint Vincent and the Grenadines" },
  { code: "ws", name: "Samoa" },
  { code: "sm", name: "San Marino" },
  { code: "st", name: "Sao Tome and Principe" },
  { code: "sa", name: "Saudi Arabia" },
  { code: "sn", name: "Senegal" },
  { code: "rs", name: "Serbia" },
  { code: "sc", name: "Seychelles" },
  { code: "sl", name: "Sierra Leone" },
  { code: "sg", name: "Singapore" },
  { code: "sk", name: "Slovakia" },
  { code: "si", name: "Slovenia" },
  { code: "sb", name: "Solomon Islands" },
  { code: "so", name: "Somalia" },
  { code: "za", name: "South Africa" },
  { code: "ss", name: "South Sudan" },
  { code: "es", name: "Spain" },
  { code: "lk", name: "Sri Lanka" },
  { code: "sd", name: "Sudan" },
  { code: "sr", name: "Suriname" },
  { code: "se", name: "Sweden" },
  { code: "ch", name: "Switzerland" },
  { code: "sy", name: "Syria" },
  { code: "tw", name: "Taiwan" },
  { code: "tj", name: "Tajikistan" },
  { code: "tz", name: "Tanzania" },
  { code: "th", name: "Thailand" },
  { code: "tl", name: "Timor-Leste" },
  { code: "tg", name: "Togo" },
  { code: "to", name: "Tonga" },
  { code: "tt", name: "Trinidad and Tobago" },
  { code: "tn", name: "Tunisia" },
  { code: "tr", name: "Turkey" },
  { code: "tm", name: "Turkmenistan" },
  { code: "tv", name: "Tuvalu" },
  { code: "ug", name: "Uganda" },
  { code: "ua", name: "Ukraine" },
  { code: "ae", name: "United Arab Emirates" },
  { code: "gb", name: "United Kingdom" },
  { code: "us", name: "United States" },
  { code: "uy", name: "Uruguay" },
  { code: "uz", name: "Uzbekistan" },
  { code: "vu", name: "Vanuatu" },
  { code: "va", name: "Vatican City" },
  { code: "ve", name: "Venezuela" },
  { code: "vn", name: "Vietnam" },
  { code: "ye", name: "Yemen" },
  { code: "zm", name: "Zambia" },
  { code: "zw", name: "Zimbabwe" },
];


export default function page() {
     
 const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
const form = useRef<HTMLFormElement | null>()


  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    if (!form.current) return; // safety check

    emailjs
      .sendForm(
       "service_0i6cqah", 
      "template_xv0y10k", 
        form.current,
        "x2Rj-TukOxeJQEB38"
        
        
      )
      .then(
        () => {
          setSuccess(true);
          console.log(
             "service_0i6cqah", 
      "template_xv0y10k",
            form.current,
           "x2Rj-TukOxeJQEB38"
          );
          form.current?.reset();
        },
        () => {
          setError(true);
        }
      );
  };


 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-16">
            <h1 className="font-poppins font-black text-4xl lg:text-6xl text-[#03336d] mb-8 tracking-tight leading-tight uppercase">
              Speak to Us
            </h1>
            <div className="max-w-4xl mx-auto text-left">
              <p className="font-poppins text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
                Our job is to make high quality impact in getting undergraduate
                and graduate applicants to their dream universities. Starting{" "}
                <span className="relative inline-block">
                  earlier
                  <img
                    src="/underline.png"
                    alt="underline"
                    className="absolute -bottom-1 left-0 w-full h-1"
                  />
                </span>{" "}
                always makes a difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-gray-50 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={sendEmail} ref={form} className="text-gray-700">
            {/* Name of Student */}
            <div className="mb-8 text-gray-700">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Name of Student: <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    name="firstname"
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />

                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    First
                  </span>
                </div>
                <div>
                  <Input
                    name="lastname"
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />
                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    Last
                  </span>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Gender: <span className="text-red-500">*</span>
              </Label>
              <RadioGroup defaultValue="" className="space-y-3">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="male"
                  
                    id="male"
                    className="w-5 h-5 border-[#03336d] text-[#03336d]"
                  />
                  <Label
                    htmlFor="male"
                    className="font-poppins text-base text-gray-700"
                  >
                    Male
                  </Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem
                    value="female"
                    id="female"
                    className="w-5 h-5 border-[#03336d] text-[#03336d]"
                  />
                  <Label
                    htmlFor="female"
                    className="font-poppins text-base text-gray-700"
                  >
                    Female
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Admissions Need */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Admissions Need: <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins">
                  <SelectValue placeholder="Choose Admissions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="college">
                    Undergraduate Counseling
                  </SelectItem>
                  <SelectItem value="graduate">Graduate Counseling</SelectItem>
                  <SelectItem value="transfer">Transfer </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Name of Parent */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Name of Parent: <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                  name=""
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />
                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    First
                  </span>
                </div>
                <div>
                  <Input
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />
                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    Last
                  </span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Email: <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="email"
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />
                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    Email
                  </span>
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder=""
                    className="w-full h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                  />
                  <span className="font-poppins text-sm text-gray-600 mt-2 block">
                    Confirm Email
                  </span>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Phone Number: <span className="text-red-500">*</span>
              </Label>
              <Input
                type="tel"
                className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
              />
            </div>

            {/* Country */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Country: <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins">
                  <SelectValue placeholder="United States" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* City */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                City: <span className="text-red-500">*</span>
              </Label>
              <Input className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins" />
            </div>

            {/* Curent clg/uni */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Current School/University:{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins" />
            </div>

            {/* Current Year in School */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Current Year in School /University:{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                placeholder="Enter your current year"
              />
            </div>

            {/* Year of High School Graduation */}
            <div className="mb-8">
              <Label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Year of Graduation: <span className="text-red-500">*</span>
              </Label>
              <Input
                className="w-full max-w-md h-12 border-2 border-gray-300 rounded-md px-4 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 font-poppins"
                placeholder="Enter your graduation year"
              />
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="font-poppins text-lg font-semibold text-[#03336d] mb-4 block">
                Comments:
              </label>
              <textarea
                className="w-full h-32 border-2 border-gray-300 rounded-md px-4 py-3 text-base focus:border-[#03336d] focus:outline-none focus:ring-0 resize-none font-poppins"
                // value={comment}
                // onChange={handleChange}
                placeholder="Write your comment here..."
              />
              <p className="text-sm text-gray-500 mt-2">
                {/* {comment.length} of {maxChars} max of characters */}
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="mb-8">
              <div>
                <p className="font-poppins text-sm text-gray-700 mb-4">
                  <strong>Note:</strong> IF YOU DON'T HEAR FROM US INSTANTLY
                  WITH AN AUTOMATIC EMAIL CORRESPONDING TO YOUR SITUATION,
                  PLEASE CHECK YOUR SPAM FOLDER. IT'S LIKELY THERE.
                </p>
                <p className="font-poppins text-sm text-gray-700 mb-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque, placeat quibusdam dicta autem ea eius, quasi
                  praesentium eos porro iste blanditiis fugiat! Eligendi, unde
                  inventore! Repudiandae perferendis alias deserunt eveniet
                  expedita illum vitae, sunt nam.
                </p>
                <p className="font-poppins text-sm text-gray-700 mb-6 font-semibold">
                  Please confirm you have read and acknowledged Navo's Privacy
                  Policy.
                </p>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    className="mt-1 w-5 h-5 border-[#03336d] text-[#03336d]"
                  />
                  <Label
                    htmlFor="privacy"
                    className="font-poppins text-sm text-gray-700 leading-relaxed flex-1"
                  >
                    I understand that I will receive an automatic email when I
                    submit this form that will require my response to move
                    forward. <span className="text-red-500">*</span>
                  </Label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-yellowCust rounded-full hover:bg-yellowCust/90 text-blue-900 font-poppins font-normal text-md px-10 py-6 transition-all duration-300 transform hover:scale-105"
              >
                SUBMIT
              </button>
            </div>
             {success && (
              <span className="text-green-500 font-semibold ">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-500 font-semibold">
                Something wents wrong!
              </span>
            )}
          </form>
        </div>
      </div>

      {/* Navogate Your Universe section */}
      <NavogateUniverse />

      {/* Footer */}

    <Footer />
    </div>
  );
}
