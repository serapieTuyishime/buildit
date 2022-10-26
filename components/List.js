export default function List({ listp }) {
    return (
        <ul className="grid content-center gap-2 text-base">
            {listp.map((item, index) => {
                return (
                    <li key={index} className="capitalize" >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}
