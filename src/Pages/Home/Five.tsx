import { useNavigate } from "react-router-dom";
import logo from "../../assets/ginsti.png";
import "./Five.css";
import { useFormStore } from "../../zustand/formStore";



const Five = () => {

    const { formData, setFormData, resetForm, setLoading, isLoading } = useFormStore();

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const userEmail = [
        "adewuyigoodness1@gmail.com",
        "adewuyigoodness2@gmail.com",
        "adewuyigoodness3@gmail.com",
        "adewuyigoodness4@gmail.com",
        "adewuyigoodness5@gmail.com",
        "chunga.eric@gmail.com",
        "emailhafsaijaz@gmail.com",
        "mrhushenge@gmail.com",
        "kaykay4him@googlemail.com",
        "aninzechidera7@gmail.com",
        "musabashibawa@gmail.com",
        "sam.boboye@gmail.com",
        "aninzechidera7@gmail.com",
        "musabashibawa@gmail.com",
        "sam.boboye@gmail.com",
        "oluboyoadeola274@gmail.com",
        "pela4381@gmail.com",
        "lindaagbugba@gmail.com",
        "chidiebereajugwo@gmail.com",
        "morayomo410@gmail.com",
        "chimezie.nzoputam@gmail.com",
        "ibrahimh20h23@gmail.com",
        "ghazalabioinfo@gmail.com",
        "kardous_ines@yahoo.com",
        "bobmanuelosuji@gmail.com",
        "mawada_abdalla88@hotmail.com",
        "saraspine@gmail.com",
        "olayemifadekogbe@gmail.com",
        "pazumini@gmail.com",
        "princestephenolubunmi@gmail.com",
        "bobmanuelosuji@gmail.com",
        "oladipouthman1@gmail.com",
        "hsupo1996@gmail.com",
        "bintajjjallow@gmail.com",
        "ozzychukwunta7@gmail.com",
        "mickuye13@gmail.com",
        "vuxarapatrice@gmail.com",
        "nitujannatulnaima@gmail.com",
        "stuartngereza5@gmail.com",
        "soukainatesnimbenamara@gmail.com",
        "barbaradanso93@gmail.com",
        "rmprah@gmail.com",
        "fatemah.it@gmail.com",
        "mahmushtaq@gmail.com",
        "olorunsolaezek@gmail.com",
        "princestephenolubunmi@gmail.com",
        "olawuyivictor06@gmail.com",
        "elias.k.meziani@gmail.com",
        "selbyjoey73@gmail.com",
        "rmprah@gmail.com",
        "carlo.dg.md@gmail.com",
        "ofuadarhochristopher@gmail.com",
        "eclecticbilalashraf@gmail.com",
        "chukumah.xavier@gmail.com",
        "ilorimuideen0000@gmail.com",
        "ghendre@smail.uni-koeln.de",
        "sayalihingane7@gmail.com",
        "zkhadijah9@gmail.com",
        "onwukweuchechukwu1@gmail.com",
        "tobigiwa89@gmail.com",
        "hridayastha@gmail.com",
        "koderkris@gmail.com",
        "lanrelekesophie@gmail.com",
        "edemaeddy@gmail.com",
        "ilomuanyaifeanyi@gmail.com",
        "xainabbb09@gmail.com",
        "zkhadijah9@gmail.com",
        "lindaagbugba@gmail.com",
        "zhrahim9@gmail.com",
        "ldfjoseph@gmail.com",
        "chinonsojolz@gmail.com",
        "Ochayisunday@gmail.com",
        "libesaseveni@gmail.com",
        "ranerugved@gmail.com",
        "tinuoladele@gmail.com",
        "kaykay4him@yahoo.com",
        "preciousidubor@gmail.com",
        "ahmadhabib8340@gmail.com",
        "ismailshittuolamilekan@gmail.com",
        "yosmanu6981@gmail.com",
        "zumbeng7@gmail.com",
        "adeebapatel11@gmail.com",
        "ochayisunday@gmail.com",
        "ajitharathi1999@gmail.com",
        "walagasim94@gmail.com",
        "jutt141azmat@gmail.com",
        "philile08slu@gmail.com",
        "delightokonkwo24@gmail.com",
        "asmtuha.bge@gmail.com",
        "lindaagbugba@gmail.com",
        "onyekaifeanyipeter@gmail.com",
        "emmanuelogana1x@gmail.com",
        "delightokonkwo24@gmail.com",
        "amakanwodo123@gmail.com",
        "salamiwahley@gmail.com",
        // "thatgenomeboyx@gmail.com",
    ];

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true); 

        Object.keys(formData).forEach((key) => {
            localStorage.setItem(key, formData[key as keyof typeof formData] as string);
        });

        const inputEmail = formData.email.toLocaleLowerCase();
        const normalizedEmails = userEmail.map((email) => email.toLocaleLowerCase());

        setTimeout(() => {
            if (normalizedEmails.includes(inputEmail)) {
                navigate("/course5");
            } else {
                // alert("Email not allowed. Please contact support.");
                navigate("/notallowed");
            }
            setLoading(false);
        }, 2000);

        resetForm();
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
                                        className="w-full rounded-xl p-3 pl-5 outline-1 hover:outline-purple-800"
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
                                        className="w-full rounded-xl p-3 pl-5 outline-1 hover:outline-purple-800"
                                    />
                                </div>
                                <div className="pb-5" >
                                    <select name="course" id="course" value={formData.course} onChange={handleChange} className="w-full rounded-xl p-3 pl-5 outline-1 appearance-none hover:outline-purple-800 transition-colors duration-200 ">
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