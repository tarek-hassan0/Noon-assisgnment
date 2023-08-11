import LikesStyles from "@/styles/_Likes.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Likes = () => {
    return (
        <div className={LikesStyles["likes"]}>
            <Skeleton width={50} height={16} />
        </div>
    );
};

export default Likes;
