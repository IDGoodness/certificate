import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/ginsti.png";



interface HomepageProps {
    navi: string;
}

const Homepage = ({ navi }: HomepageProps) => {
    const [formData, setFormData] = useState<{ [key: string]: string }>({
        name: "",
    });

    const navigate = useNavigate();

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        Object.keys(formData).forEach((key) => {
            localStorage.setItem(key, formData[key]);
        });
        navigate(navi);
    };

    return (
    <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white p-6 shadow-purple-400 shadow-2xl rounded-xl">
        <h1 className="flex justify-center">
            <img src={logo} alt="Logo" className="w-20 sm:w-24" />
        </h1>
        <form id="certificateForm" className="p-5" onSubmit={handleSubmit}>
            <div className="">
            <h3 className="text-sm sm:text-xs text-center italic">
                Enter your name below <br /> to generate your certificate.
            </h3>
            <div className="pt-5 pb-2">
                <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Name"
                required
                className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-purple-800 focus:ring-purple-800 hover:outline-purple-800"
                />
            </div>
            {navi === "/coursesix" && (
                <div className="pb-5" >
                    <select name="course" id="course" value={formData.course} onChange={handleChange} className="border border-gray-300 w-full rounded-xl p-3 pl-5 focus:outline-none focus:border-purple-800 focus:ring-purple-800 appearance-none transition-colors duration-200">
                        <option value="">Course</option>
                        <option value="Anti Cancer R&D">Anti Cancer R&D</option>
                        <option value="Cancer Genomics">Cancer Genomics</option>
                        <option value="Epidemiology and Health ">Epidemiology and Health</option>
                        <option value="Human Microbes">Human Microbes</option>
                        <option value="Virulence Factor">Virulence Factor</option>
                        <option value="Plant Genomics">Plant Genomics</option>
                        <option value="Infectious Diseases">Infectious Diseases</option>
                        <option value="Comparative Genomics">Comparative Genomics</option>
                    </select>
                </div>
            )}
            </div>
            <button
            type="submit"
            className="bg-purple-900 text-white p-3 my-1 rounded-xl w-full hover:bg-purple-800"
            >
            Generate Certificate
            </button>
        </form>
        </div>
    </div>
    );

};

export default Homepage;