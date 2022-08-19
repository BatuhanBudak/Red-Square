import React from "react";
import Image from "next/image";
import PhotosList from "./PhotosList";

export default function MainPage() {
    return (
        <main>
            <h1 className="main-title">The agency for what comes next.</h1>
            <PhotosList />
            <section className="desc-container">
                <h2 className="desc-title">
                    We deal in ideas, design and media that are category defying. When the
                    world Millis, you’ve got to Vanilli.
                </h2>
                <p className="desc-body">
                    Red Square believes in rigorous development of brand strategy and
                    whip-smart execution. We make all sorts of things. Things that move
                    markets, compel audiences and sell product. We help great brands
                    create what comes next.
                </p>
            </section>
            <section className="clients-container">
                <h3 className="client-title">Select Clients</h3>
                <ul className="clients-list">
                    <li>Cherokee Casinos</li>
                    <li>Flipboard</li>
                    <li>Foxwoods</li>
                    <li>Glanbia Nutritionals</li>
                    <li>Google</li>
                    <li>Hard Rock</li>
                    <li>Hibbett Sports</li>
                    <li>Hilton Worldwide</li>
                    <li>Jack Daniel’s</li>
                    <li>Nescafé</li>
                    <li>New York Pride</li>
                    <li>Patreon</li>
                    <li>Rivers Casino</li>
                    <li>Snickers</li>
                    <li>Southern Comfort</li>
                    <li>The University of Alabama</li>
                    <li>Twix</li>
                    <li>Wind Creek Hospitality</li>
                </ul>
            </section>
        </main>
    );
}
