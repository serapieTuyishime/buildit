import List from "../List";

export default function Footer() {
    return (
        <div className="bg-secondary py-14  text-light text-base grid grid-cols-4 px-24">
            <div className="grid">
                <label className="font-bold text-2xl">Buildit</label>
                <label className="">Development company, 2022</label>
                <label className="self-end">Site design – ⏰ Alarm</label>
            </div>
            <List listp={["Service 1", "Service 2", "Service 3", "Service 4"]} />
            <List listp={["About us", "Services", "Projects", "Contact"]} />
            <div className="grid gap-8">
                <List
                    listp={[
                        "Get in touch",
                        "60 Manor Station St. Fairport, NY 14450",
                    ]}
                />
                <List listp={["708-790-0000", "sales@buildit.site"]} />
            </div>
        </div>
    );
}
