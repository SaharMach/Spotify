export function Header() {
    return <div className="header">
        <section className="header-wrapper">
            <section className="arrow-btns">
                <span className="material-symbols-outlined">
                    arrow_back_ios
                </span>
                <span className="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </section>
            <section className="right-side-btns">
                <button className="clean-btn explore">
                    Explore Premium
                </button>
                <button className="clean-btn install">
                    <span className="material-symbols-outlined">
                        download
                    </span>
                    <span>
                        Install app
                    </span>
                </button>
                <button className="clean-btn circle">
                    <span className="material-symbols-outlined">
                        notifications
                    </span>
                </button>
                <button className="clean-btn circle">
                <span className="material-symbols-outlined">
                    person
                </span>
                </button>
            </section>

        </section>
    </div>
}