// import React from 'react'
import logo from "../../assets/ginsti.png";
import { supabase } from "../../supabaseClient";


const AddEmail = () => {
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const emailInput = document.getElementById("email") as HTMLInputElement;
        const email = emailInput.value;
    
        if (email) {
            try {
                const { error } = await supabase
                    .from('allowed_emails')
                    .insert([{ email }]);
                if (!error) {
                    alert("Email added successfully!");
                    emailInput.value = ""; // Clear the input field
                } else {
                    alert(error.message || "Failed to add email.");
                }
            } catch {
                alert("Server error.");
            }
        } else {
            alert("Please enter a valid email.");
        }
    };
  return (
    <>
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
            <h1 className="flex justify-center">
                <img src={logo} alt="Logo" className="w-20 sm:w-24" />
            </h1>
            <form id="certificateForm" className="p-5">
                <div className="">
                <h3 className="text-sm sm:text-xs text-center italic">
                    Enter student email below <br /> to add to the allowed emails list.
                </h3>
                </div>
                
                <div className="flex flex-col mt-4">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring focus:ring-purple-800"
                    />
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-purple-700 text-white rounded-md px-4 py-2 hover:bg-purple-800 transition duration-200"
                        onClick={handleSubmit}
                    >
                        Add Email
                    </button>
                </div>
            </form>
            </div>
        </div>
    </>
  )
}

export default AddEmail