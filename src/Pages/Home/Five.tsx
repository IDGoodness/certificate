// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ginsti.png";
import * as XLSX from "xlsx";






const Five = () => {
    const [formData, setFormData] = useState({
    name: "",
    });

    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const normalizeName = (name: string): string => {
        return name
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // remove accents
            .replace(/\s+/g, " ") // collapse spaces
            .trim()
            .toLowerCase();
    };

    const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const inputName = normalizeName(formData.name);

    try {
        const res = await fetch("/students.xlsx"); // File should be in public/
        const data = await res.arrayBuffer();

        const workbook = XLSX.read(data, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 }) as string[][];

        // Flatten the 2D array and normalize all names
        const validNames = rawData
        .flat()
        .filter(Boolean) // Remove empty rows
        .map(normalizeName);

        if (validNames.includes(inputName)) {
        Object.keys(formData).forEach((key) => {
            localStorage.setItem(key, formData[key as keyof typeof formData] as string);
        });
        navigate("/course5");
        } else {
        navigate("/notallowed");
        }
    } catch (error) {
        console.error("Error parsing Excel:", error);
        alert("Verification failed. Please try again or contact support.");
    }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
            <h1 className="flex justify-center">
                <img src={logo} alt="Logo" className="w-20 sm:w-24" />
            </h1>
            <form id="certificateForm" className="p-5" >
                <div className="">
                <h3 className="text-sm sm:text-xs text-center italic">
                    Enter your name below <br /> to generate your certificate.
                </h3>
                <div className="py-5">
                    <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full rounded-xl p-3 pl-5 outline-1 hover:outline-purple-800"
                    />
                </div>
                </div>
                <button
                type="submit" onClick={handleSubmit}
                className="bg-purple-900 text-white p-3 my-1 rounded-xl w-full hover:bg-purple-800"
                >
                Generate Certificate
                </button>
            </form>
            </div>
            </div>
        </>
    )
}

export default Five