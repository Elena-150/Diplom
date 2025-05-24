import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-top-row">
                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Company</h2>
                                <li><a href="/about">About Last.fm</a></li>
                                <li><a href="/about/contact">Contact Us</a></li>
                                <li><a href="/about/jobs">Jobs</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Help</h2>
                                <li><a href="/about/trackmymusic">Track My Music</a></li>
                                <li><a href="https://support.last.fm/" target="_BLANK">Community Support</a></li>
                                <li><a href="/help/guidelines">Community Guidelines</a></li>
                                <li><a href="/help/faq" target="_BLANK">Help</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Goodies</h2>
                                <li><a href="/about/trackmymusic">Download Scrobbler</a></li>
                                <li><a href="/api">Developer API</a></li>
                                <li><a href="/music/+free-music-downloads">Free Music Downloads</a></li>
                                <li><a href="https://store.last.fm">Merchandise</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Account</h2>
                                <li><a href="/inbox">Inbox</a></li>
                                <li><a href="/settings">Settings</a></li>
                                <li><a href="/pro">Last.fm Pro</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Follow Us</h2>
                                <li><a target="_blank" href="https://www.facebook.com/lastfm">Facebook</a></li>
                                <li><a target="_blank" href="https://twitter.com/lastfm">Twitter</a></li>
                                <li><a target="_blank" href="https://www.instagram.com/last_fm">Instagram</a></li>
                                <li><a target="_blank" href="https://www.youtube.com/user/lastfm">YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-9 inline-footer">
                            <ul id="language-selector">
                                <li className="footer-language footer-language--active">
                                    <strong>English</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Deutsch</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Español</strong>
                                </li>

                                <li className="footer-language">
                                    <strong>Français</strong>
                                </li>

                                <li className="footer-language">
                                    <strong>Italiano</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>日本語</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Polski</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Português</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Русский</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Svenska</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>Türkçe</strong>
                                </li>
                                <li className="footer-language">
                                    <strong>简体中文</strong>
                                </li>
                            </ul>
                            <div className="footer-legal">
                                <ul>
                                    <li className="footer-legal-item"><a rel="nofollow" href="http://www.cbsinteractive.com/">CBS
                                        Interactive</a> © 2022 <span>Last.fm</span> Ltd. All rights reserved</li>
                                    <li className="footer-legal-item"><a href="/legal/terms">Terms of Use</a></li>
                                    <li className="footer-legal-item"><a href="/legal/privacy">Privacy Policy</a></li>
                                    <li className="footer-legal-item"><a href="/legal">Legal Policies</a></li>
                                    <li className="footer-legal-item"><a href="/legal/cookies">Cookies Policy</a></li>
                                    <li className="footer-legal-item"><a className="ot-sdk-show-settings">Cookie Information</a></li>
                                    <li className="footer-legal-item"><a target="_blank" href="https://careers.viacomcbs.com/">Jobs at
                                        ViacomCBS</a></li>
                                    <li className="footer-legal-item"><a rel="nofollow" href="http://www.last.fm">Last.fm Music</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;