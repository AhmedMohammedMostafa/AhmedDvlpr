import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import useInteractions from '../utils/stores/useInteractions';
import { MdHome, MdOutlineHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { BrowserView } from 'react-device-detect';

const Interface = () => {
    const state = useInteractions((state) => state);

    const animationsTime = useInteractions((state) => state.animationsTime);
    /**
     * Phases Array
     */
    const phases = [
        'Loading',
        'Explore',
        'Projects',
        'Skills',
        'Contacts'
    ];

    // Index of active phase will be shown in the slider
    const [activePhase, setActivePhase] = useState(phases[0]);

    useEffect(() => {
        switch (state.phase) {
            case 'loading':
                break;
            case 'projects':
                setActivePhase(2);
                break;
            case 'skills':
                setActivePhase(3);
                break;
            case 'contacts':
                setActivePhase(4);
                break;
            default:
                setActivePhase(1);
                break;
        }
    }, [state.phase]);

    /**
     * onClick on the prev button
     */
    const prevPhase = () => {
        switch (state.phase) {
            case 'projects':
                state.explore();
                break;
            case 'skills':
                state.projects();
                break;
                      case 'contacts':
                state.skills();
                break;
            default:
                break;
        }
    };

    /**
     * onClick on the next button
     */
    const nextPhase = () => {
        switch (state.phase) {
            case 'start':
            case 'explore':
                state.projects();
                break;
            case 'projects':
                state.skills();
                break;
                case 'skills':
                    state.contacts();
                    break;
            case 'contacts':
                state.explore();
                break;
            default:
                break;
        }
    };

    /**
     * onClick on the home button
     */
    const home = () => {
        if (state.phase !== 'explore') {
            state.explore();
        }
    };

    /**
     * Slider Animation
     */
    useEffect(() => {
        gsap.to('.label-phase-content', {
            x: -activePhase * 158.5,
            duration: animationsTime,
            ease: 'sine'
        });
    }, [activePhase]);

    return (
        <BrowserView>
            <div id="interface" className="fonted">
                <div className="controls-wrapper">
                    <button className="home-button" onClick={home}>
                        {state.phase === 'explore' ||
                        state.phase === 'loaded' ||
                        state.phase === 'start' ? (
                            <MdHome />
                        ) : (
                            <MdOutlineHome />
                        )}
                    </button>
                    <div className="interface-controls">
                        <button className="prev" onClick={prevPhase}>
                            <MdNavigateBefore />
                        </button>
                        <div className="label montserrat">
                            <div className="label-phase">
                                {phases.map((phase, index) => {
                                    return (
                                        <div key={index} className="label-phase-content">
                                            <span
                                                className={` ${activePhase === index && 'active'}`}
                                            >
                                                {phase}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <button className="next" onClick={nextPhase}>
                            <MdNavigateNext />
                        </button>
                    </div>
                </div>
            </div>
        </BrowserView>
    );
};

export default Interface;
