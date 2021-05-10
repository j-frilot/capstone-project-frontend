import React from "react";
import PhysicianResults from "../sections/PhysicianResults";
import Filter from "../sections/Filter";
import { getSuggestedQuery } from "@testing-library/dom";

const Physicians = (props) => {
    return (
        <main>
            <section className="banner-container">
                <div className="hero-content">
                    <h2>Find A Doctor</h2>
                </div>
            </section>
            <hr className="hr" />

            <Filter getQuery={(q) => getSuggestedQuery(q)} />
            <section className="directory container">
                <div className="results">
                    <div className="alphabet">
                        <a href="#!" className="all">
                            All
                        </a>
                        <a href="#!" className="a">
                            A
                        </a>
                        <a href="#!" className="b">
                            B
                        </a>
                        <a href="#!" className="c">
                            C
                        </a>
                        <a href="#!" className="d">
                            D
                        </a>
                        <a href="#!" className="e">
                            E
                        </a>
                        <a href="#!" className="f">
                            F
                        </a>
                        <a href="#!" className="g">
                            G
                        </a>
                        <a href="#!" className="h">
                            H
                        </a>
                        <a href="#!" className="i">
                            I
                        </a>
                        <a href="#!" className="j">
                            J
                        </a>
                        <a href="#!" className="k">
                            K
                        </a>
                        <a href="#!" className="l">
                            L
                        </a>
                        <a href="#!" className="m">
                            M
                        </a>
                        <a href="#!" className="n">
                            N
                        </a>
                        <a href="#!" className="o">
                            O
                        </a>
                        <a href="#!" className="p">
                            P
                        </a>
                        <a href="#!" className="q">
                            Q
                        </a>
                        <a href="#!" className="r">
                            R
                        </a>
                        <a href="#!" className="s">
                            S
                        </a>
                        <a href="#!" className="t">
                            T
                        </a>
                        <a href="#!" className="u">
                            U
                        </a>
                        <a href="#!" className="v">
                            V
                        </a>
                        <a href="#!" className="w">
                            W
                        </a>
                        <a href="#!" className="x">
                            X
                        </a>
                        <a href="#!" className="y">
                            Y
                        </a>
                        <a href="#!" className="z">
                            Z
                        </a>
                    </div>
                    <PhysicianResults />
                </div>
            </section>
        </main>
    );
};

export default Physicians;
