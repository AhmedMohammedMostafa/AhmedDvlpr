import { useRef } from 'react';
import { Html } from '@react-three/drei';
import { isBrowser } from 'react-device-detect';
import useInteractions from '../utils/stores/useInteractions';
import ProjectsMonitor from './HTML/ProjectsMonitor';
import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';


const MonitorScene = (props) => {
    
    
    
    const { total, progress } = useProgress();
    const state = useInteractions((state) => state);
    console.log('🚀 ~ file: MonitorScene.js ~ line 19 ~ MonitorScene ~ state', state);
    console.log('🚀 ~ file: MonitorScene.js ~ line 19 ~ MonitorScene ~ total', total);
    console.log('🚀 ~ file: MonitorScene.js ~ line 19 ~ MonitorScene ~ progress', progress);
    useEffect(() => {
        if (total === 21 && progress === 100) {
             console.log('🚀 Ready');
             console.log('🚀', total, progress);
            state.loaded();
        }
    }, [total, progress]);
                                 


    
    const nodes = props.nodes;
    const bakedMaterial = props.material;
    const screenMaterial = props.screenMaterial;
    const screenOffMaterial = props.screenOffMaterial;
    const screenRef = useRef();

    /**
     * Mouse Enter
     */
    const handleMouseEnter = () => {
        if (state.phase === 'explore' || state.phase === 'start') {
            document.body.style.cursor = 'pointer';
        }
    };

    /**
     * Mouse Leave
     */
    const handleMouseLeave = () => {
        document.body.style.cursor = 'default';
    };

    /**
     * Handle Phase
     */
    const handlePhase = () => {
        if (isBrowser) {
            if (state.phase !== 'projects') {
                state.projects();
            }
        }
    };

    return (
        <group
            onPointerEnter={handleMouseEnter}
            onPointerLeave={handleMouseLeave}
            onClick={handlePhase}
        >
            <mesh
                geometry={nodes.Monitor.geometry}
                position={nodes.Monitor.position}
                rotation={nodes.Monitor.rotation}
                scale={nodes.Monitor.scale}
                material={bakedMaterial}
            />

            {/* MonitorScreen */}
            <mesh
                ref={screenRef}
                geometry={nodes.MonitorScreen.geometry}
                position={nodes.MonitorScreen.position}
                rotation={nodes.MonitorScreen.rotation}
                scale={nodes.MonitorScreen.scale}
                material={isBrowser ? screenMaterial : screenOffMaterial}
            >
                {/* Visible only in Desktop mode */}
                {isBrowser && (
                    <Html
                        fixed
                        prepend
                        center
                        transform
                        parent={screenRef.current}
                        portal={screenRef.current}
                        zIndexRange={[0, 1]}
                        distanceFactor={0.0775}
                        position={[-0.02, 0.03, -0.004]}
                        rotation-y={Math.PI}
                    >
                        <section
                            id="monitor"
                            className="fonted centered no-user-select"
                            onMouseOver={handleMouseEnter}
                            onClick={handlePhase}
                        >
                            <ProjectsMonitor />
                        </section>
                    </Html>
                )}
            </mesh>
        </group>
    );
};

export default MonitorScene;
