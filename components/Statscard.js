export default function Statscard({
    source = "ic4",
    value = ">000",
    text = "Number",
    padded = false,
}) {
    return (
        <div
            className={`flex text-primary items-center max-w-max gap-4 font-bold  ${
                padded ? "pl-8" : ""
            } `}
        >
            <div className="w-16 h-16">
                <img
                    src={`./${source}.png`}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="grid">
                <label className="text-4xl">{value}</label>
                <label className="text-base">{text}</label>
            </div>
        </div>
    );
}
