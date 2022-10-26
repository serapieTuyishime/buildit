export default function Button({
    text = "dummy text",
    classes = [],
    block = false,
    modified= false,
}) {
    return block ? (
        <button
            className={`${modified ? 'bg-tertiary text-secondary': 'bg-secondary text-white'}  px-8 flex items-center justify-center h-8 capitalize font-medium rounded-md box-content text-base   ${classes.join(
                " "
            )}`}
        >
            {text}
        </button>
    ) : (
        <button
            className={` ${modified ? 'bg-tertiary text-secondary': 'bg-secondary text-white'} px-8 flex justify-center items-center h-8 capitalize font-medium  rounded-md box-content text-base max-w-min whitespace-pre ${classes.join(
                " "
            )}`}
        >
            {text}
        </button>
    );
}
