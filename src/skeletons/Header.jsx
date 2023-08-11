import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HeaderStyles from "@/styles/_Header.module.scss";

const Header = (props) => {
    return (
        <div className={HeaderStyles.header}>
                <div className={HeaderStyles["avatar-container"]}>
                    <Skeleton circle={true} height={32} width={32} className={HeaderStyles['avatar-skeleton']} />
                </div>
                <Skeleton width={100} height={16} />
        </div>
    );
};

export default Header;