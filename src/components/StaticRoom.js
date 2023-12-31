import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Center, useGLTF, useTexture } from '@react-three/drei';
import Smoke from './Smoke';
import LaptopScene from './LaptopScene';
import MonitorScene from './MonitorScene';
import Lights from './Lights/Lights';
import TabletScene from './TabletScene';
import PhoneScene from './PhoneScene';

const StaticRoom = () => {
    /**
     * Nodes
     */
    const { nodes } = useGLTF('./assets/Room.glb');
    
    console.log('🚀 ~ StaticRoom ~ nodes:', nodes);

    /**
     * Textures
     */
    // Baked Texture
    const bakedTexture = useTexture('./assets/Textures/baked.jpg');
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;

    /**
     * Materials
     */
    // Baked Material
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });

    // Screen Material
    const screenMaterial = new THREE.MeshBasicMaterial({ color: '#D4CBB3' });
    const screenOffMaterial = new THREE.MeshBasicMaterial({ color: '#333333' });

    /**
     * Ref
     */
    const chairRef = useRef();
    const plantRef = useRef();


    /**
     * Animation
     */
    useFrame(({ clock }) => {
        const elapsedTime = clock.elapsedTime;

        // Chair Animation
        chairRef.current.rotation.y -= Math.cos(elapsedTime) * 0.0025;

        // Plant rotation
        plantRef.current.rotation.y += 0.01;
    });

    return (
        <Center position-y={0.5}>
            <group>
                {/* Static Model */}
                <mesh
                    geometry={nodes.Room.geometry}
                    position={nodes.Room.position}
                    rotation={nodes.Room.rotation}
                    scale={nodes.Room.scale}
                    material={bakedMaterial}
                />

                {/* Chair */}
                <mesh
                    ref={chairRef}
                    geometry={nodes.Office_chair.geometry}
                    position={nodes.Office_chair.position}
                    scale={nodes.Office_chair.scale}
                    material={bakedMaterial}
                />

                {/* Plant */}
                <mesh
                    ref={plantRef}
                    geometry={nodes.Plant.geometry}
                    position={nodes.Plant.position}
                    rotation={nodes.Plant.rotation}
                    scale={nodes.Plant.scale}
                    material={bakedMaterial}
                />



       

                {/* Smoke */}
                <Smoke />

                {/* Lights Effects */}
                <Lights nodes={nodes} />

                {/* Laptop => Loading */}
                <LaptopScene
                    nodes={nodes}
                    material={bakedMaterial}
                    screenMaterial={screenMaterial}
                    screenOffMaterial={screenOffMaterial}
                />

                {/* Monitor => Projects */}
                <MonitorScene
                    nodes={nodes}
                    material={bakedMaterial}
                    screenMaterial={screenMaterial}
                    screenOffMaterial={screenOffMaterial}
                />

                {/* Tablet => Skills */}
                <TabletScene
                    nodes={nodes}
                    material={bakedMaterial}
                    screenMaterial={screenMaterial}
                    screenOffMaterial={screenOffMaterial}
                />

                {/* Phone => Contacts */}
                <PhoneScene
                    nodes={nodes}
                    material={bakedMaterial}
                    screenMaterial={screenMaterial}
                    screenOffMaterial={screenOffMaterial}
                />


                {/* CorkBoard => Experiences */}
            </group>
        </Center>
    );
};

useGLTF.preload('./assets/Room.glb');

export default StaticRoom;
