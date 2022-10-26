<Iconcard name="img2.png" text="make my day" />;
export default function Iconcard({
    name = "img1.png",
    text = "Available text",
}) {
    return (
        <div className="grid gap-4 w-1/4">
            <img className="w-14 h-14" src={`./${name}`} />
            <label className="text-primary text-2xl capitalize font-medium">
                {text}
            </label>
            <label className="text-primary text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </label>
        </div>
    );
}
