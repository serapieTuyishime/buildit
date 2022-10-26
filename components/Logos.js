export default function Logos() {
    return (
        <div className="w-full">
            <hr className="h-1 w-4/5 bg-primary mx-auto mb-2" />
            <div className="flex w-full h-12 gap-8 justify-center items-center py-2">
                <div className="h-full">
                    <img src="./logo1.png" className="h-full object-contain" />
                </div>
                <div className="h-full">
                    <img src="./logo2.png" className="h-full object-contain" />
                </div>
                <div className="h-full">
                    <img
                        src="./logobig.png"
                        className="h-full object-contain"
                    />
                </div>
                <div className="h-full">
                    <img src="./logo3.png" className="h-full object-contain" />
                </div>
                <div className="h-full">
                    <img src="./logo4.png" className="h-full object-contain" />
                </div>
            </div>
            <hr className="h-1 w-4/5 mt-2 bg-primary mx-auto" />
        </div>
    );
}
