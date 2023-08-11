import DescriptionStyles from "@/styles/_Description.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Description = () => {
    return (
        <div className={DescriptionStyles["description"]}>
            <div>
                <Skeleton count={2} className={DescriptionStyles['skeleton']}/>
            </div>
        </div>
    );
};

export default Description;
