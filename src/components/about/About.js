import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>about <span
                className={Style.pink}> {firstName}.... </span></span>
                 {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
                <p><span className={Style.pink}>{firstName}'s </span>
                skills & tools....</p>
            <span style={{color: info.baseColor}}> <u>Programming Language</u></span>
            <ul className={Style.skills}>
                {info.skills.programingLanguage.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <span style={{color: info.baseColor}}> <u>Frontend Technology</u></span>
            <ul className={Style.skills}>
                {info.skills.frontendTechnology.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <span style={{color: info.baseColor}}> <u>Backend Technology and Database</u></span>
            <ul className={Style.skills}>
                {info.skills.backendTechnologyDatabase.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <span style={{color: info.baseColor}}> <u>Other skills</u></span>
            <ul className={Style.skills}>
                {info.skills.otherSkills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span className={Style.pink}>{firstName}'s </span>
                hobbies & interests....</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'0.7rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'2.6rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </Box>
    )
}