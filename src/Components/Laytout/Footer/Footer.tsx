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
                                <li><button>About Last.fm</button></li>
                                <li><button>Contact Us</button></li>
                                <li><button>Jobs</button></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Help</h2>
                                <li><button>Track My Music</button></li>
                                <li><a href="https://support.last.fm/">Community Support</a></li>
                                <li><button>Community Guidelines</button></li>
                                <li><button>Help</button></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Goodies</h2>
                                <li><button>Download Scrobbler</button></li>
                                <li><button>Developer API</button></li>
                                <li><button>Free Music Downloads</button></li>
                                <li><a href="https://store.last.fm">Merchandise</a></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Account</h2>
                                <li><button>Inbox</button></li>
                                <li><button>Settings</button></li>
                                <li><button>Last.fm Pro</button></li>
                            </ul>
                        </div>

                        <div className="footer-top-col">
                            <ul className="footer-links">
                                <h2 className="footer-heading">Follow Us</h2>
                                <li><a href="https://www.facebook.com/lastfm">Facebook</a></li>
                                <li><a href="https://twitter.com/lastfm">Twitter</a></li>
                                <li><a href="https://www.instagram.com/last_fm">Instagram</a></li>
                                <li><a href="https://www.youtube.com/user/lastfm">YouTube</a></li>
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
                                    <li className="footer-legal-item"><button>Terms of Use</button></li>
                                    <li className="footer-legal-item"><button>Privacy Policy</button></li>
                                    <li className="footer-legal-item"><button>Legal Policies</button></li>
                                    <li className="footer-legal-item"><button>Cookies Policy</button></li>
                                    <li className="footer-legal-item"><button className="ot-sdk-show-settings">Cookie Information</button></li>
                                    <li className="footer-legal-item"><a href="https://careers.viacomcbs.com/">Jobs at
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