import Button from "../components/Button";
import Logos from "../components/Logos";
import Statscard from "../components/Statscard";
import Teamcard from "../components/Teamcard";
import Textcard from "../components/Textcard";
import Titles from "../components/Titles";

export default function About() {
    return (
        <>
            <div className="grid grid-cols-2 gap-8 h-screen px-24 pt-12 pb-8 bg-gradient-to-tr from-blue-200 via-blue-100 ">
                <div className="relative h-full">
                    <div className=" top-0 left-0 absolute h-2/3 w-3/5 ">
                        <img
                            className="w-full h-full object-contain"
                            src="./img8.png"
                        />
                    </div>
                    <div className=" absolute h-3/5 bottom-0 right-0 w-1/2 ">
                        <img
                            className="w-full h-full object-contain"
                            src="./img8.png"
                        />
                    </div>
                </div>
                <Textcard
                    header="About us"
                    title="Owner and investor with a reputation"
                />
            </div>
            <div className="grid content-center justify-items-center px-24 gap-12 py-20">
                <Titles
                    header="Statistics"
                    title="Development in numbers"
                    centered
                />
                <div className="shadow-lg shadow-blue-300 bg-gradient-to-tr from-blue-300 via-blue-200 max-w-max gap-8 px-8 flex justify-around divide-x divide-primary py-4 mt-12">
                    <Statscard source="ic4" value=">200" />
                    <Statscard source="ic5" value=">70" padded />
                    <Statscard source="ic6" value=">20" padded />
                </div>
                <Logos/>
            </div>
            <div className="px-32 grid gap-10 bg-tertiary py-24">
                <Titles title="Our team" header="Let's meet" centered/>
                <div className="grid grid-cols-3 grid-rows-3 gap-12">
                    <Teamcard source="t1" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t2" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t3" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t4" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t5" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t6" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t7" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t8" name="Name surname" proffesion="Worker"/>
                    <Teamcard source="t9" name="Name surname" proffesion="Worker"/>
                </div>
                <hr className="w-full h-0.5 bg-primary"/>
                <div className="flex justify-between">
                    <label className="   text-3xl text-primary font-bold">Call us</label>
                    <div className="grid grid-cols-2 gap-4 w-2/5 items-center">
                        <Button text="Call" block/>
                        <Button text="Email" block modified/>
                    </div>
                </div>
                <hr className="w-full h-0.5 bg-primary"/>

            </div>
        </>
    );
}
