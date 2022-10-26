export default function Teamcard({
    source = "t1",
    name = "John doe",
    proffesion = "unknown",
}) {
    return (
        <div className="text-base pb-4 gap-4 bg-gradient-to-r from-blue-200 shadow-md shadow-blue-200 grid">
            <div className="">
                <img src= {`./${source}.png`} className=" h-full object-cover w-full"/>
            </div>
            <label className="font-bold capitalize pl-4">{name}</label>
            <label className="pl-4">{proffesion}</label>
        </div>
    )
}
