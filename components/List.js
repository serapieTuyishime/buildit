export default function List({ list }) {
    return (
        <ul className="grid content-center gap-2 text-base">
            {list.map((item, index) => {
                return (
                    <li className="capitalize" key={index} id={index}>
                        {item}
                    </li>
                );
            })}
        </ul>
    );
}
