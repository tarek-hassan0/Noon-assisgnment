import PostStyles from "@/styles/_Post.module.scss";
import HeaderSkeleton from './Header';
import ContentSkeleton from './Content';
import LikesSkeleton from './Likes';
import DescriptionSkeleton from './Description';
import CommentsSkeleton from './Comments';

const SkeletonPost = () => {
    return (
        <article className={PostStyles.post_container}>
            <HeaderSkeleton />
            <ContentSkeleton />
            <LikesSkeleton />
            <DescriptionSkeleton />
            <CommentsSkeleton />
        </article>
    );
};

export default SkeletonPost;
