import Button from "./Button";
import Titles from "./Titles";

export default function Textcard({
    title = "Featured Listing",
    header = "Available Properties",
}) {
    return (
        <div className=" grid gap-8 content-center">
            <Titles title={title} header={header}/>
            <label className="text-primary text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                elit sem, vestibulum sed leo eu, malesuada pharetra mauris.
                Integer rhoncus, eros vel euismod tempor, ipsum magna tristique
                nisi, quis ullamcorper enim magna eu orci. Sed semper ex quis
                semper aliquet. Cras hendrerit molestie sapien sed fermentum.
                Mauris dui tortor, viverra vel ultrices in, congue sed ex.
            </label>
            <Button text="Explore"/>
        </div>
    );
}
