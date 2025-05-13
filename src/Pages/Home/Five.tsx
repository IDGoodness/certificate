import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/ginsti.png";
import "./Five.css";


const Five = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const [isLoading, setIsLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const userEmail = [
        "adewuyigoodness1@gmail.com",
        "adewuyigoodness2@gmail.com",
        "adewuyigoodness3@gmail.com",
        "adewuyigoodness4@gmail.com",
        "adewuyigoodness5@gmail.com",
    ];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true); // Start loading animation

        const inputEmail = formData.email;

        setTimeout(() => {
            // Simulate a delay for the loading animation
            if (userEmail.includes(inputEmail)) {
                // Object.keys(formData).forEach((key) => {
                //     localStorage.setItem(key, formData[key as keyof typeof formData] as string);
                // });
                navigate("/course5");
            } else {
                // alert("Email not allowed. Please contact support.");
                navigate("/notallowed");
            }
            setIsLoading(false); // Stop loading animation
        }, 2000); // Adjust the delay as needed
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen px-4">
                <div className="w-full max-w-md bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
                    <h1 className="flex justify-center">
                        <img src={logo} alt="Logo" className="w-20 sm:w-24" />
                    </h1>
                    {isLoading ? (
                        <div className="flex justify-center items-center py-5">
                            <div className="loader"></div> {/* Add your loading animation here */}
                        </div>
                    ) : (
                        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
                            <div className="">
                                <h3 className="text-sm sm:text-xs text-center italic">
                                    Enter your name below <br /> to generate your certificate.
                                </h3>
                                <div className="pt-5">
                                    <input
                                        type="text"
                                        placeholder="Enter your email address"
                                        onChange={handleChange}
                                        className="w-full rounded-xl p-3 pl-5 outline-1 hover:outline-purple-800"
                                        name="email"
                                        required
                                        value={formData.email}
                                    />
                                </div>
                                <div className="py-2">
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
                                type="submit"
                                className="bg-purple-900 text-white p-3 my-1 rounded-xl w-full hover:bg-purple-800"
                            >
                                Generate Certificate
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Five;