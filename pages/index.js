import Button from "../components/Button";
import Iconcard from "../components/Iconcard";
import Contactcard from "../components/Contactcard";
import Navigation from "../components/Layout/Navigation";
import Textcard from "../components/Textcard";
import Logos from "../components/Logos";
import Titles from "../components/Titles";
import Footer from "../components/Layout/Footer";
export default function Homepage() {
    return (
        <>
            <div className="absolute h-screen w-1/3 top-0 right-0 -z-10">
                <img
                    className=" ml-auto h-full w-full object-cover"
                    src="./shape.png"
                />
            </div>
            <div className="h-screen">
                <div className="flex px-24 h-full  ">
                    <div className="grid gap-8 w-2/5 content-center">
                        <h1 className="text-6xl text-primary font-bold">
                            Development company
                        </h1>
                        <label className="text-xl text-primary">
                            Forward-thinking real estate developer, owner and
                            investor with a reputation
                        </label>
                        <div className="flex gap-4">
                            <Button text="services" />
                            <Button
                                text="about the company"
                                classes={["text-primary", "bg-tertiary"]} modified
                            />
                        </div>
                    </div>
                    <div className="w-3/5 h-full pb-28 flex flex-col gap-8 ">
                        <div className="h-2/5 w-full flex items-end ">
                            <div className="w-4/12 h-3/5">
                                <img
                                    src="./img1.png"
                                    className=" object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-5/12 h-full">
                                <img
                                    src="./img2.png"
                                    className=" object-contain w-full h-full"
                                />
                            </div>
                            <div className="w-3/12 h-2/5">
                                <img
                                    src="./img3.png"
                                    className=" object-contain w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="h-3/4 w-full flex items-start">
                            <div className="w-3/5 h-full">
                                <img
                                    src="./img4.png"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-2/5 h-full">
                                <img
                                    src="./img5.png"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-24 py-32 grid content-center gap-8 justify-items-center">
                <label className="text-primary font-bold text-3xl">
                    Innovative Execution
                </label>

                <div className="flex justify-evenly">
                    <Iconcard name="icon1.png" text="Featured Listing" />
                    <Iconcard name="icon2.png" text="Available Properties" />
                    <Iconcard name="icon3.png" text="In the News" />
                </div>
            </div>
            <div className="bg-tertiary px-24 pt-12 ">
                <Logos />
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-3/5 my-auto col-span-1">
                        <img
                            className="h-full w-full object-cover"
                            src="./img4.png"
                        />
                    </div>
                    <Textcard
                        title="Owner and investor with a reputation"
                        header="about us"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 content-center px-24 justify-items-center">
                <Textcard
                    title="Featured listings"
                    header="Avaibale properties"
                />
                <div className="grid grid-cols-2 h-96 gap-8">
                    <div className="flex flex-col h-full items-end justify-center ">
                        <div className="h-1/3">
                            <img
                                className="h-full object-contain"
                                src="./img21.png"
                            />
                        </div>
                        <div className="h-2/5">
                            <img
                                className="h-full object-contain"
                                src="./img23.png"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col h-full  gap-4 items-start justify-center">
                        <div className="h-1/2">
                            <img
                                className="h-full object-contain"
                                src="./img22.png"
                            />
                        </div>
                        <div className="h-1/4">
                            <img
                                className="h-full object-contain"
                                src="./img24.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-32 grid content-center justify-items-center gap-8 bg-tertiary">
                <label className="text-secondary text-base">Socials</label>
                <label className="text-primary text-4xl capitalize">
                    on instagram
                </label>
                <div className="grid grid-cols-3 grid-rows-2 gap-8">
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i1.png"
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i2.png"
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i3.png"
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i4.png"
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i5.png"
                        />
                    </div>
                    <div className="">
                        <img
                            className="h-full w-full object-cover"
                            src="./i6.png"
                        />
                    </div>
                </div>
            </div>
            <div className="py-32 px-24 flex justify-between">
                <div className="grid justify-between">
                    <Titles header="Contact" title="Get in touch" />
                    <div className="grid content-center gap-4">
                        <Contactcard
                            src="ic1"
                            type="Tel"
                            address="708-790-0000"
                        />
                        <Contactcard
                            src="ic2"
                            type="Email"
                            address="sales@buildit.site"
                        />
                        <Contactcard
                            src="ic3"
                            type="Office"
                            address="60 Manor Station St.
Fairport, NY 14450"
                        />
                    </div>
                </div>
                <div className="w-1/3 rounded shadow-2xl bg-tertiary shadow-blue-400 grid grid-cols-2 text-primary gap-6 p-6">
                    <div className="">
                        <label className="text-sm ">Name</label>
                        <input
                            className="border bg-transparent border-primary rounded w-full
                        "
                        />
                    </div>
                    <div className="">
                        <label className="text-sm ">Email</label>
                        <input className="border bg-transparent border-primary rounded w-full" />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm ">Subject</label>
                        <input className="border bg-transparent border-primary rounded w-full" />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm ">Message</label>
                        <input className="border bg-transparent border-primary rounded w-full h-16" />
                    </div>
                    <Button
                        text="Send Message"
                        classes={["col-span-2"]}
                        block={true}
                    />
                </div>
            </div>
        </>
    );
}
