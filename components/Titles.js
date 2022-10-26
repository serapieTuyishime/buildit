export default function Titles({ header = "No header", title = "No title", centered = false }) {
    return (
        <div className={`grid gap-3 ${centered ? 'justify-items-center': ''}`}>
            <label className="text-light-primary capitalize text-base">
                {header}
            </label>
            <label className="text-primary text-3xl font-bold">{title}</label>
        </div>
    );
}
