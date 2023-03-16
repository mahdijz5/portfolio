import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Container, Engine } from 'tsparticles-engine';

const HomeParticles = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
    }, []);
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 15,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 30,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#f8f8f2",
                        },

                        links: {
                            color: "#f8f8f2",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1.5,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 150,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 0, max: 1 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    )
}

export default HomeParticles;