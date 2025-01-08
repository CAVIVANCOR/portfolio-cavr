/* eslint-disable no-unused-vars */
import React, { useEffect, useRef} from 'react'
import * as THREE from 'three'
export default function ThreeBackground() {
    const mountRef = useRef(null);
    useEffect(() => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('#00386D');
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 5;
        //Create dense white stars for the background
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 1500;
        const starPositions = new Float32Array(starCount * 3);
        for (let i = 0; i < starCount*3; i++) {
            starPositions[i] = (Math.random() - 0.5) * 1000; //Spread stars over a larger area
        }
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        const starMaterial = new THREE.PointsMaterial({color: 0xEFE293, size: 0.1});
        const starField = new THREE.Points(starGeometry, starMaterial);
        scene.add(starField);
        //Make stars move or interact with the mouse (parallax effect)
        const handleMouseMove = (event) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            starField.rotation.x += mouseY * 0.01;
            starField.rotation.y += mouseX * 0.01;
        };
        window.addEventListener('mousemove', handleMouseMove);
        //Handle window resize for responsiveness
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };
        window.addEventListener('resize', handleResize);
        //render loop
        const animate = () => {
            requestAnimationFrame(animate);
            starField.rotation.x += 0.01;
            starField.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    },[]);
  return (
    <div ref={mountRef} className='fixed inset-0 -z-1 w-full h-full'/>
  )
}
