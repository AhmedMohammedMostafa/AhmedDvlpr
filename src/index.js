import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Experience from './Experience';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import Interface from './components/Interface';
import Pending from './components/HTML/Pending';
import MobileModal from './components/Modal/MobileModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* Debug ui */}
        <Leva collapsed />

        {/* Canva */}
        <Canvas
            camera={{
                fov: 35,
                near: 0.1,
                far: 20,
                position: [0, 0, 0]
            }}
        >
            <Suspense fallback={<Pending />}>
                <Experience />
            </Suspense>
        </Canvas>

        {/* Interface */}
        <Interface />

        {/* Mobile Modal */}
        <MobileModal />
    </React.StrictMode>
);
