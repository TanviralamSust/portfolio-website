import React from 'react';
import Style from '../about/About.module.scss';
import Terminal from "../about/Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";

export default function ResearchPortfolio() {
    const firstName = info.firstName.toLowerCase()
    function aboutMyResearchText() {
        return <>
            <p><span style={{color: info.baseColor}}> <span
                className={Style.pink}> {firstName}.... </span></span>
                {info.researchBio}
            </p>
        </>;
    }
    function researchDetailsText() {
        return <>
            <p><span className={Style.pink}>{firstName}'s </span>
                published research work....</p>
            <ul>
                {info.publishedResearch.map((research, index) => (
                    <li key={index}><Box component={'span'} mr={'0.7rem'}>
                        <a href={research.link}>
                            {research.title}
                        </a>
                    </Box></li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2.6rem'}>
            <Terminal text={aboutMyResearchText()}/>
            <Terminal text={researchDetailsText()}/>
        </Box>
    )
}