export default function Contactcard({
    src = "./ic1",
    type = "tel",
    address = "0343443",
}) {
    return (
        <div className="flex text-primary items-center max-w-max gap-4">
            <div className="w-16 h-16">
                <img
                    src={`${src}.png`}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="grid">
                <label className="text-base">{type}</label>
                <label className="text-xl font-medium">{address}</label>
            </div>
        </div>
    );
}
