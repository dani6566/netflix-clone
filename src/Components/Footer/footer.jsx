import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const socialLinks = [
    {
        name: "Facebook",
        icon: <FaFacebookF />,
        url: "#",
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        url: "#",
    },
    {
        name: "Twitter",
        icon: <FaTwitter />,
        url: "#",
    },
    {
        name: "YouTube",
        icon: <FaYoutube />,
        url: "#",
    },
];

const footerColumns = [
    [
        { label: "Audio Description", url: "#" },
        { label: "Investor Relations", url: "#" },
        { label: "Legal Notices", url: "#" },
    ],
    [
        { label: "Help Centre", url: "#" },
        { label: "Jobs", url: "#" },
        { label: "Cookie Preferences", url: "#" },
    ],
    [
        { label: "Gift Cards", url: "#" },
        { label: "Terms of Use", url: "#" },
        { label: "Corporate Information", url: "#" },
    ],
    [
        { label: "Media Centre", url: "#" },
        { label: "Privacy", url: "#" },
        { label: "Contact Us", url: "#" },
    ],
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Social Media Links */}
                <div className={styles.socialLinks}>
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className={styles.socialIcon}
                            aria-label={social.name}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Footer Links */}
                <div className={styles.footerLinks}>
                    {footerColumns.map((column, columnIndex) => (
                        <div className={styles.column} key={columnIndex}>
                            {column.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.url}
                                    className={styles.footerLink}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <p className={styles.copyright}>
                    © 1997-{currentYear} Netflix, Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;