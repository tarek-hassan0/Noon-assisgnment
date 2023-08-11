import CommentsStyle from "@/styles/_Comments.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Comments = () => {
    return (
        <div className={CommentsStyle["comments"]}>
            <Skeleton height={16} width={100}/>
        </div>
    );
};

export default Comments;
