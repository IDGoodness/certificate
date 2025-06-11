import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../../assets/ginsti.png';
import sign1 from '../../assets/sign1.png';
import sign2 from '../../assets/signInsti.png';
import award from '../../assets/award.png';
import usa from "../../assets/usa.png";
import nig from "../../assets/nig.png";
import barcode from '../../assets/barcode.jpg';
import { toPng } from 'html-to-image';
import watermark from '../../assets/watermark.jpg';

interface FormData {
    name: string;
    course: string;
}

const Course5: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(() => {
                alert("An error occurred while generating your certificate. Please try again.");
            });
    }, [ref]);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        course: '',
    });

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        const storedCourse = localStorage.getItem('course');
        setFormData({
            name: storedName || '',
            course: storedCourse || '',
        });
    }, []);

    return (
        <>
            <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
                <div
                    ref={ref}
                    className="flex flex-col justify-center items-center bg-white relative"
                >
                    <div className="relative w-[1000px] h-[600px] flex z-10">
                        <div className="bg-gradient-to-b from-pink-400 via-purple-900 to-purple-900 w-[200px] h-[600px] ">
                            <div className="flex ">
                                <div className="mx-auto">
                                    <img src={logo} alt="logo2" className="w-28" />
                                </div>
                            </div>
                            <div className="-mt-2 ">
                                <p className="text-white text-center text-[13px] ">
                                    GENOMAC INSTITUTE INC
                                </p>
                                <p className="text-white text-center font-thin text-[8px]  ">
                                    ...discovering new things, improving life
                                </p>
                            </div>

                            <div className="text-white text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left mt-[100px] ">
                                <p>
                                    This certificate is issued by Genomac Institute Inc. a
                                    registered research institution in the United States of
                                    America.
                                </p>
                                <p>Registration Number : 3844801</p>
                            </div>

                            <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left ">
                                <div className="bg-white w-fit p-1 m-2 mx-auto flex items-center font-medium">
                                    <span className="-ml-5 mr-1">
                                        <img src={usa} alt="usa" className="w-6" />
                                    </span>
                                    USA Office Address
                                </div>
                                <p className="text-white">
                                    The corporation&apos;s registered office in the state of
                                    Delaware is located at 16192 coastal highway, lewes, Delware
                                    19958, county of Sussex
                                </p>
                            </div>

                            <div className="text-[10px] m-2 p-2 bg-purple-950 rounded-xl text-left ">
                                <div className="bg-white w-fit p-1 m-2 flex items-center mx-auto font-medium ">
                                    <span className="-ml-5 mr-1">
                                        <img src={nig} alt="nig" className="w-6" />
                                    </span>
                                    NIG Office Address
                                </div>
                                <p className="text-white">
                                    Genomac Holdings, beside Alari Akata Filling Station, Under-G,
                                    Ogbomoso, Oyo State, Nigeria.
                                </p>
                            </div>
                        </div>

                        <div className="w-[800px]">
                            <img src={watermark} alt="genes" className='absolute w-[800px] h-[500px] opacity-20 z-0 ' />
                            <div className="bg-white w-[800px] lg:h-[600px] lg:ml-4 lg:p-10">
                                <div className="p-5 bg-purple-900 text-white text-4xl text-center tracking-widest uppercase ">
                                    CERTIFICATE OF Participation
                                </div>

                                <div className="font-base text-center mt-5 italic">
                                    This Certificate is Presented to:
                                </div>

                                <div
                                    id="name"
                                    className=" capitalize border-b-4 border-purple-900 pb-1 text-center text-purple-900 mx-[70px] mt-[50px] text-4xl"
                                >
                                    {formData.name}
                                </div>

                                <p className=" capitalize py-4 pr-1 text-center font-base ">
                                    For Successfully Participating in the Research Internship on
                                    the application of Genomics and Bioinformatics Techniques in
                                    <span className="font-bold"> {formData.course} </span>
                                    Organized by Genomac Institute Inc.
                                </p>

                                <p className="font-bold mx-auto text-center w-[300px] uppercase ">
                                    January - April 2025
                                </p>

                                <div className="flex justify-between mt-5 z-10">
                                    <div className="w-[80px] -mr-[270px] mt-[70px] ">
                                        <img src={barcode} alt="" />
                                    </div>

                                    <div className="ml-[10px] z-10">
                                        <p className="border-b-2 border-purple-800 w-[200px] ">
                                            <img
                                                src={sign1}
                                                alt="signature"
                                                className="w-[200px] h-[150px] -mb-10 "
                                            />
                                        </p>
                                        <p className="text-base font-semibold">
                                            Oluwaseyi Abraham Olawale
                                        </p>
                                        <p className="text-xs font-medium">
                                            Founder & CEO of Genomac Holdings.
                                        </p>
                                    </div>

                                    <div className="w-[400px] h-auto -mt-[30px] -ml-[400px] -mr-[320px] z-10">
                                        <img src={award} alt="award" />
                                    </div>

                                    <div className="mt-2 z-10">
                                        <p className="border-b-2 border-purple-800 w-52 ">
                                            <img
                                                src={sign2}
                                                alt="signature"
                                                className="w-[200px] h-[150px] -mb-12 "
                                            />
                                        </p>
                                        <p className="text-base font-semibold">
                                            Oluwaseun Oyekunle Agboola
                                        </p>
                                        <p className="text-xs font-medium">
                                            Director, Genomac Institute INC.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center -mt-9">
                <button
                    className="bg-purple-600 p-2 rounded-xl hover:bg-purple-700 text-white z-10"
                    onClick={onButtonClick}
                >
                    Download Certificate
                </button>
            </div>
        </>
    );
}

export default Course5;