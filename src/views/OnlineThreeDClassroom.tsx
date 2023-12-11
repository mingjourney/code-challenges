import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const OnlineThreeDClassroom: React.FC = () => {
  const mount = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mount.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.current.appendChild(renderer.domElement)

    const loader = new GLTFLoader()
    loader.load('assets/classroom.glb', (gltf) => {
      scene.add(gltf.scene)
    })

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mount.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mount}></div>
}

export default OnlineThreeDClassroom
