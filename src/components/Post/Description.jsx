"use client";
import DescriptionStyles from "@/styles/_Description.module.scss";
import Link from "next/link";

const Description = (props) => {
    const { description, tags } = props;

    return (
        <div className={DescriptionStyles["description"]}>
            <div>
                {description.length > 0 && description}
                <div>
                    {tags?.map((tag, index) => <Link href={tag} key={index} prefetch={false}>{" #" + tag}</Link>)}
                </div>
            </div>
        </div>
    );
};

export default Description;
