import React from "react";
import Image from "next/image";
import PhotosList from "./PhotosList";
import { motion, Variants } from 'framer-motion';

const variants: Variants = {
    slideDown: {
        opacity: 0, y: "50%",
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    },
    slideUp: {
        opacity: 1, y: 0,

    },
    slideLeft: { opacity: 0, x: "-100%" },
    slideRight: {
        opacity: 1, x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    },
}

export default function MainPage() {
    return (
        <main>
            <h1 className="main-title">The agency for what comes next.</h1>
            <PhotosList />
            <section className="desc-container">
                <motion.h2 variants={variants} initial="slideDown" whileInView="slideUp" className="desc-title">
                    We deal in ideas, design and media that are category defying. When the
                    world Millis, you’ve got to Vanilli.
                </motion.h2>
                <motion.p className="desc-body"
                    variants={variants} initial="slideDown" whileInView="slideUp">
                    Red Square believes in rigorous development of brand strategy and
                    whip-smart execution. We make all sorts of things. Things that move
                    markets, compel audiences and sell product. We help great brands
                    create what comes next.
                </motion.p>
            </section>
            <section className="clients-container">
                <h3 className="client-title">Select Clients</h3>
                <ul className="clients-list">
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Cherokee Casinos</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Flipboard</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Foxwoods</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Glanbia Nutritionals</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Google</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Hard Rock</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Hibbett Sports</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Hilton Worldwide</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Jack Daniel’s</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Nescafé</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">New York Pride</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Patreon</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Rivers Casino</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Snickers</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Southern Comfort</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">The University of Alabama</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Twix</motion.li>
                    <motion.li variants={variants} initial="slideLeft" whileInView="slideRight">Wind Creek Hospitality</motion.li>
                </ul>
            </section>
        </main>
    );
}
