import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ContentStyles from "@/styles/_Content.module.scss";

const Content = (props) => {

    return (
        <div className={ContentStyles["content"]}>
            <Skeleton height={300} width={500} className={ContentStyles['skeleton']}/>
        </div>
    );
};

export default Content;
