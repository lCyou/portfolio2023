'use client';
import React, { useCallback } from "react";

import type { ISourceOptions, Engine } from "tsparticles-engine";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from 'react-particles';
import particlesOptions from "../data/particlesjs-config.json";

const BackGround = () =>{
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
		await loadFull(engine);
    }, []);

  return (
    <Particles 
                options={particlesOptions as ISourceOptions}
                init={particlesInit}
            />
    );
}

export default BackGround;