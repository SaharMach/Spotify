export function SideBarLib() {

    let footerLinks = ['Legal', 'Safety & Privacy Center', 'Privacy Policy', 'Cookies', 'About Ads', 'Accessibillty']

    return <div className="sidebar-lib">
        <section className="lib-header">
            <article>
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
                <span>Your Library</span>
            </article>
            <span className="material-symbols-outlined">
                add
            </span>
        </section>
        <div className="sidebar-lib-cards">
            <section className="sidebar-lib-card">
                <article>
                    <span className="sidebar-lib-card-title">
                        Create your first playlist
                    </span>
                    <p>it's easy, we'll help you</p>
                    <button className="clean-btn">
                        Create playlist
                    </button>
                </article>
            </section>
            <section className="sidebar-lib-card">
                <article>
                    <span className="sidebar-lib-card-title">
                        Let's find some podcasts to follow
                    </span>
                    <p>We'll keep you updated on new episodes</p>
                    <button className="clean-btn">
                        Browse podcasts
                    </button>
                </article>
            </section>
        </div>
        <section className="sidebar-lib-footer">
            <section>
                {footerLinks.map((link) => {
                    return <a href="">{link}</a>
                })}
                     </section>
                {/* <button className="clean-btn">English</button> */}
        </section>
    </div>
}