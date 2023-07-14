import React, { useState } from 'react';
import { FiMail, FiPhoneCall, FiGithub, FiDownload } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import useInteractions from '../../utils/stores/useInteractions';

const ContactsPhone = () => {
    const [messageVisible, setMessageVisible] = useState(false);

    const phase = useInteractions((state) => state.phase);

    /**
     * Copy Phone Number
     */
    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('+201147389977');
    };

    /**
     * Open url in another Tab
     */
    const goToUrl = (url) => {
        if (phase === 'contacts') {
            window.open(url, '_blank');
        }
    };

    /**
     * Show message for 4 seconds
     */
    const showMessage = () => {
        if (phase === 'contacts') {
            copyPhoneNumber();
            setMessageVisible(true);
            setTimeout(() => {
                setMessageVisible(false);
            }, 4000);
        }
    };

    return (
        <div className="phone-container">
            {/* CV */}
            <div
                onClick={() => goToUrl('./assets/downloads/AhmedDvlpr Resume.pdf')}
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                        <FiDownload />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">CV</h1>
                    <p className="phone-notification-description">
                        Download my <span>CV</span>
                    </p>
                </div>
            </div>

            {/* MAIL */}
            <div
                onClick={() => goToUrl('mailto:hi@ahmeddvlpr.me')}
                className="phone-notification"
            >
                <div className="phone-notification-icon centered">
                    <i style={{ backgroundColor: '#56b3ee' }}>
                        <FiMail />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">Mail</h1>
                    <p className="phone-notification-description">
                        Send Me an email at <span>hi@ahmeddvlpr.me</span>
                    </p>
                </div>
            </div>

            {/* PHONE NUMBER */}
            <div onClick={showMessage} className="phone-notification">
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#2dcb73' }}>
                        <FiPhoneCall />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">Phone</h1>
                    <p className="phone-notification-description">
                        Call me at <span>+20 1147389977</span>
                    </p>
                </div>
            </div>

            {/* MESSAGE => phone number copied */}
            {messageVisible && (
                <div className="phone-notification">
                    <div className="phone-notification-icon">
                        <i style={{ backgroundColor: '#2dcb73' }}>
                            <FiPhoneCall />
                        </i>
                    </div>
                    <div className="phone-notification-info">
                        <h1 className="phone-notification-title">Phone</h1>
                        <p className="phone-notification-description">
                            Number copied into the clipboard
                        </p>
                    </div>
                </div>
            )}

            {/* LINKEDIN */}
            <div
                onClick={() => goToUrl('https://www.linkedin.com/in/ahmedmohammedmostafa/')}
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#0077b5' }}>
                        <FaLinkedin />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">LinkedIn</h1>
                    <p className="phone-notification-description">
                        Message me on <span>LinkedIn</span>
                    </p>
                </div>
            </div>

            {/* GITHUB */}
            <div
                onClick={() => goToUrl('https://github.com/AhmedMohammedMostafa')}
                className="phone-notification"
            >
                <div className="phone-notification-icon">
                    <i style={{ backgroundColor: '#ffffff', color: '#333333' }}>
                        <FiGithub />
                    </i>
                </div>
                <div className="phone-notification-info">
                    <h1 className="phone-notification-title">GitHub</h1>
                    <p className="phone-notification-description">
                        Message me on <span>GitHub</span>
                    </p>
                </div>
            </div>

            <div id="phone-bar"></div>
        </div>
    );
};

export default ContactsPhone;
