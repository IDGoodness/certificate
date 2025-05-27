import { useNavigate } from "react-router-dom";
import logo from "../../assets/ginsti.png";
import "./Five.css";
import { useFormStore } from "../../zustand/formStore";
import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";



const Five = () => {

    const { formData, setFormData, resetForm, setLoading, isLoading } = useFormStore();    
    const [allowedEmailsTyped, setAllowedEmails] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmails = async () => {
            const { data, error } = await supabase
                .from('allowed_emails')
                .select('email');
            if (data) {
                setAllowedEmails(data.map((row: { email: string }) => row.email));
            } else {
                setAllowedEmails([]);
                alert(error)
            }
        };
        fetchEmails();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true); 

        Object.keys(formData).forEach((key) => {
            localStorage.setItem(key, formData[key as keyof typeof formData] as string);
        });

        const normalizedEmails = allowedEmailsTyped.map((email) => email.toLocaleLowerCase());
        const inputEmail = formData.email.toLocaleLowerCase();

        setTimeout(() => {
            if (normalizedEmails.includes(inputEmail)) {
                navigate("/course5");
            } else {
                // alert("Email not allowed. Please contact support.");
                navigate("/notallowed");
            }
            setLoading(false);
            resetForm();
        }, 2000);
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
                                        className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-purple-800 focus:ring-purple-800 "
                                        name="email"
                                        onChange={handleChange}
                                        required
                                        value={formData.email}
                                    />
                                </div>
                                <div className="py-2">
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        name="name"
                                        onChange={handleChange}
                                        placeholder="Name"
                                        className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-purple-800 focus:ring-purple-800 "
                                    />
                                </div>
                                <div className="pb-5" >
                                    <select name="course" id="course" value={formData.course} onChange={handleChange} className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-purple-800 focus:ring-purple-800 appearance-none transition-colors duration-200 ">
                                        <option value="" disabled>Course</option>
                                        <option value="Infectious Diseases">Infectious Diseases</option>
                                        <option value="Cancer Genomics">Cancer Genomics</option>
                                        <option value="Anti Fungi R&D">Anti Fungi R&D</option>
                                        <option value="Anti Viral R&D">Anti Viral R&D</option>
                                        <option value="Anti Cancer R&D">Anti Cancer R&D</option>
                                        <option value="Anti Bacteria R&D">Anti Bacteria R&D</option>
                                        <option value="Anti Malaria R&D">Anti Malaria R&D</option>
                                    </select>
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