"use client";
import Image from "next/image";
import designVariables from "@/styles/_design-variables.module.scss";
import ContentStyles from "@/styles/_Content.module.scss";
import { HeartIcon } from "@/components/Icons";
import { usePostsContext } from "@/app/Posts-Context";

const Content = (props) => {
    const { content, isFavorite, id, description } = props;
    const { imageSource, title } = content;

    const { state, dispatch } = usePostsContext();

    const handleHeartClicked = () => {
        if (!isFavorite) {
            dispatch({ type: "ADD_TO_FAVORITES", payload: id });
        } else {
            dispatch({ type: "REMOVE_FROM_FAVORITES", payload: id });
        }
    };

    return (
        <div className={ContentStyles["content"]}>
            <Image
                width={500}
                height={500}
                src={imageSource}
                alt={description || "Post Image"}
                priority={state.posts[0].id === id}
                
            />
            <div className={ContentStyles["title-container"]}>
                <div>{title}</div>
                <button
                    className={ContentStyles["title-heart-container"]}
                    onClick={handleHeartClicked}
                >
                    {isFavorite ? (
                        <HeartIcon
                            fillColor={designVariables["heart_red_color"]}
                            strokeColor={"white"}
                            strokeWidth={3}
                            width={26}
                        />
                    ) : (
                        <HeartIcon
                            fillColor={designVariables["secondary_color"]}
                            strokeColor={"white"}
                            strokeWidth={2}
                            width={26}
                        />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Content;
