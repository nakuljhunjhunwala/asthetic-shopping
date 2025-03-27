import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';
import useScrollAnimation from '../hooks/useScrollAnimation';
import styles from './About.module.css';

const About: React.FC = () => {
    // Animation refs
    const { ref: introRef, inView: introInView } = useScrollAnimation();
    const { ref: missionRef, inView: missionInView } = useScrollAnimation({ threshold: 0.3 });
    const { ref: valuesRef, inView: valuesInView } = useScrollAnimation({ threshold: 0.3 });
    const { ref: teamRef, inView: teamInView } = useScrollAnimation({ threshold: 0.3 });

    // Team members data
    const teamMembers = [
        {
            name: 'Alex Rivera',
            role: 'Founder & CEO',
            bio: 'Former tech lead at Future Corp, Alex founded NeoGenz to create products that resonate with the next generation.',
            image: '/team/alex.png'
        },
        {
            name: 'Sam Chen',
            role: 'Chief Design Officer',
            bio: 'With a background in industrial design, Sam ensures all our products hit the perfect balance of aesthetics and functionality.',
            image: '/team/sam.png'
        },
        {
            name: 'Zoe Patel',
            role: 'Head of Innovation',
            bio: 'Zoe leads our R&D department, constantly pushing the boundaries of whats possible in lifestyle tech.',
            image: '/team/zoe.png'
        },
        {
            name: 'Jordan Kim',
            role: 'Community Manager',
            bio: 'Former content creator, Jordan ensures our products reflect the real needs of our community.',
            image: '/team/jordan.png'
        }
    ];

    // Core values
    const coreValues = [
        {
            title: 'Innovation',
            description: 'We push boundaries and challenge the status quo, always seeking new ways to enhance your digital life.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99992 20.1046 9.99992 19V18.469C9.99992 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Authenticity',
            description: 'We create products that are true to the Gen-Z experience, not what corporate focus groups think you want.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Sustainability',
            description: 'We design products with the planet in mind, using eco-friendly materials and sustainable manufacturing processes.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 9V3M15 3H21H15ZM21 3V9V3ZM21 9H15H21ZM10 21V12V21ZM10 12V6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6V12H10ZM10 12H14H10ZM3 21V14V21ZM3 14V9C3 7.89543 3.89543 7 5 7C6.10457 7 7 7.89543 7 9V14H3ZM3 14H7H3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: 'Community',
            description: 'We build more than products; we cultivate a community of forward-thinkers who shape the future together.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H13.5V18C13.5 17.4477 13.0523 17 12.5 17H11.5C10.9477 17 10.5 17.4477 10.5 18V20H7M7 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20H17M7 20L7 15M17 20V15M12 6V10M10 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <div className={styles.about}>
            <div className={styles.container}>
                {/* Intro Section */}
                <section
                    ref={introRef}
                    className={styles.intro}
                >
                    <motion.h1
                        className={styles.pageTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        About <span className="text-neon">NeoGenz</span>
                    </motion.h1>

                    <motion.p
                        className={styles.introText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        We're not just another tech brand. We're a movement, a vibe, a mindset.
                        Founded in 2024, NeoGenz creates products that align with the values and
                        aesthetic of Generation Z. We understand that technology should enhance
                        your reality, not replace it.
                    </motion.p>

                    <motion.div
                        className={styles.introVisual}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={introInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className={styles.visualShape1}></div>
                        <div className={styles.visualShape2}></div>
                    </motion.div>
                </section>

                {/* Mission Section */}
                <section
                    ref={missionRef}
                    className={styles.mission}
                >
                    <motion.div
                        className={styles.missionContent}
                        initial={{ opacity: 0, x: -30 }}
                        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.sectionTitle}>
                            Our <span className="text-neon">Mission</span>
                        </h2>

                        <p className={styles.missionText}>
                            To create technology that doesn't just fit into your life—it enhances it.
                            We design products that understand the Gen-Z mindset: authentic, sustainable,
                            and always ahead of the curve.
                        </p>

                        <p className={styles.missionText}>
                            Our team of visionaries works at the intersection of technology, culture,
                            and design to develop products that aren't just functional but meaningful.
                            We believe technology should solve real problems while looking absolutely fire.
                        </p>

                        <Link to={ROUTES.PRODUCTS}>
                            <Button variant="outline" size="md" className={styles.missionButton}>
                                See Our Products
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.missionVisual}
                        initial={{ opacity: 0, x: 30 }}
                        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.missionGlow}></div>
                    </motion.div>
                </section>

                {/* Values Section */}
                <section
                    ref={valuesRef}
                    className={styles.values}
                >
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Core <span className="text-neon">Values</span>
                    </motion.h2>

                    <div className={styles.valuesGrid}>
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className={styles.valueIcon}>
                                    {value.icon}
                                </div>

                                <h3 className={styles.valueTitle}>{value.title}</h3>

                                <p className={styles.valueDescription}>
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section
                    ref={teamRef}
                    className={styles.team}
                >
                    <motion.h2
                        className={styles.sectionTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        Meet the <span className="text-neon">Team</span>
                    </motion.h2>

                    <motion.p
                        className={styles.teamSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        A collective of future-focused individuals creating tech that matters.
                    </motion.p>

                    <div className={styles.teamGrid}>
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className={styles.teamCard}
                                initial={{ opacity: 0, y: 30 }}
                                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                <div className={styles.teamImageWrapper}>
                                    <div className={styles.teamImagePlaceholder} style={{ backgroundImage: `url(${member.image})` }}></div>
                                </div>

                                <div className={styles.teamInfo}>
                                    <h3 className={styles.teamName}>{member.name}</h3>
                                    <span className={styles.teamRole}>{member.role}</span>
                                    <p className={styles.teamBio}>{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>
                            Join the <span className="text-neon">Revolution</span>
                        </h2>

                        <p className={styles.ctaText}>
                            Be part of shaping the future of lifestyle tech. Check out our products or drop us a line.
                        </p>

                        <div className={styles.ctaButtons}>
                            <Link to={ROUTES.PRODUCTS}>
                                <Button variant="primary" size="lg">
                                    Explore Products
                                </Button>
                            </Link>

                            <Link to={ROUTES.CONTACT}>
                                <Button variant="outline" size="lg">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;