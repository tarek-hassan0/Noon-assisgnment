import PageErrorStyles from "@/styles/_PageError.module.scss";

const PageError = (props) => {
    const { title = "Something went wrong!", msg, reset } = props;
    return (
        <div className={PageErrorStyles["error-container"]}>
            <h2 className={PageErrorStyles["title"]}>{title}</h2>
            {msg && <p className={PageErrorStyles["message"]}>{msg}</p>}
            {reset && (
                <button
                    className={PageErrorStyles["reset-btn"]}
                    onClick={() => reset()}
                >
                    Try again
                </button>
            )}
        </div>
    );
};

export default PageError;
