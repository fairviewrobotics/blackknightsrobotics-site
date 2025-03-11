import React, { useState, useEffect } from "react";
import sponsors from "../data/sponsors.json";
import "../components/styles/SponsorList.css";

const SponsorList = () => {
    const [tiers, setTiers] = useState([]);

    useEffect(() => {
        if (sponsors && typeof sponsors === "object") {
            setTiers(Object.keys(sponsors));
        }
    }, []);

    return (
        <div className="sponsorlist-wrapper">
            {tiers.map((tier) => (
                <div key={tier}>
                    <h1>{tier}</h1>
                    <div className="sponsorlist-grid">
                        {sponsors[tier].map((sponsorGroup, groupIndex) => (
                            sponsorGroup["sponsors"].map((sponsor, sponsorIndex) => (
                                <div
                                    key={`${groupIndex}-${sponsorIndex}`}
                                    className={`sponsorlist-item`}
                                >
                                    {sponsor.type === "logo" ? (
                                        <a href={sponsor.link}>
                                            <img src={sponsor.src} alt={sponsor.name} />
                                        </a>
                                    ) : (
                                        <a href={sponsor.link} style={{fontSize: "1.5rem"}}>
                                            <div className={"sponsor-names"}>
                                                {Array.isArray(sponsor.name) ? (
                                                    sponsor.name.map((name, nameIndex) => (
                                                        <a key={nameIndex} href={sponsor.link}>
                                                            {name}
                                                        </a>
                                                    ))
                                                ) : (
                                                    <a href={sponsor.link}>
                                                        {sponsor.name}
                                                    </a>
                                                )}
                                            </div>
                                        </a>
                                    )}
                                </div>
                            ))
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SponsorList;
