import React from 'react';
import styles from "../style.js";
import { arrowUp } from "../assets"

const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[8.5rem] h-[8.5rem] 
        rounded-full bg-blue-gradient p-[0.125rem]
        cursor-pointer transform-origin-center transition duration-150 ease-in-out transform-gpu
        hover:-translate-y-1`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
                <div className={`${styles.flexStart} flex-col`}>
                    <p className="font-poppins font-medium text-[1.125rem] leading-[1.43rem]">
                        <span className="text-gradient mr-2">Get</span>
                        <img src={arrowUp} alt="arrow" className="w-[1.43rem] h-[1.43rem] object-contain inline-block"/>
                    </p>
                    <p className="font-poppins font-medium text-[1.125rem] leading-[1.43rem]">
                        <span className="text-gradient">Started</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
