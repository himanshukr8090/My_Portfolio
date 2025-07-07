import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 800;
    
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
      velocityArray[i] = (Math.random() - 0.5) * 0.002;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#64748b',
      transparent: true,
      opacity: 0.8,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocityArray[i3];
        positions[i3 + 1] += velocityArray[i3 + 1];
        positions[i3 + 2] += velocityArray[i3 + 2];
        
        // Boundary checks
        if (positions[i3] > 5) positions[i3] = -5;
        if (positions[i3] < -5) positions[i3] = 5;
        if (positions[i3 + 1] > 5) positions[i3 + 1] = -5;
        if (positions[i3 + 1] < -5) positions[i3 + 1] = 5;
      }
      
      particlesGeometry.attributes.position.needsUpdate = true;
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}
    />
  );
};

export default AnimatedBackground;