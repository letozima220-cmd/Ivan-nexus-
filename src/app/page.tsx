'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Float, Sparkles } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

/* ===================== АВАТАР ===================== */
function Avatar() {
  const group = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.28
    }
  })

  return (
    <group ref={group} position={[0, -0.95, 0]}>
      {/* Голова */}
      <mesh position={[0, 1.62, 0]}>
        <sphereGeometry args={[0.27, 32, 32]} />
        <meshStandardMaterial color="#3b2a1e" roughness={0.45} />
      </mesh>

      {/* Причёска */}
      <mesh position={[0, 1.92, 0]}>
        <cylinderGeometry args={[0.17, 0.21, 0.32, 16]} />
        <meshStandardMaterial color="#f2eee6" roughness={0.55} />
      </mesh>

      {/* Очки */}
      <mesh position={[0, 1.65, 0.25]}>
        <boxGeometry args={[0.4, 0.11, 0.035]} />
        <meshStandardMaterial color="#fafafa" metalness={0.4} roughness={0.2} />
      </mesh>
      <mesh position={[-0.11, 1.65, 0.27]}>
        <circleGeometry args={[0.075, 16]} />
        <meshStandardMaterial color="#1e1435" transparent opacity={0.75} />
      </mesh>
      <mesh position={[0.11, 1.65, 0.27]}>
        <circleGeometry args={[0.075, 16]} />
        <meshStandardMaterial color="#1e1435" transparent opacity={0.75} />
      </mesh>

      {/* Оранжевая кофта */}
      <mesh position={[0, 1.02, 0]}>
        <cylinderGeometry args={[0.3, 0.36, 0.65, 16]} />
        <meshStandardMaterial color="#ff6a18" roughness={0.5} />
      </mesh>

      {/* Шуба */}
      <mesh position={[0, 1.12, 0]}>
        <boxGeometry args={[1.1, 0.9, 0.65]} />
        <meshStandardMaterial color="#6a5a98" roughness={0.88} />
      </mesh>
      <mesh position={[0, 1.52, 0.12]}>
        <boxGeometry args={[0.85, 0.32, 0.48]} />
        <meshStandardMaterial color="#7a6aad" roughness={0.9} />
      </mesh>

      {/* Цепь + медальон */}
      <mesh position={[0, 1.32, 0.36]}>
        <torusGeometry args={[0.17, 0.022, 8, 24]} />
        <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.12} />
      </mesh>
      <mesh position={[0, 1.15, 0.4]}>
        <circleGeometry args={[0.085, 16]} />
        <meshStandardMaterial color="#7b68ee" emissive="#7b68ee" emissiveIntensity={0.3} />
      </mesh>

      {/* Штаны */}
      <mesh position={[0, 0.42, 0]}>
        <cylinderGeometry args={[0.34, 0.3, 0.65, 16]} />
        <meshStandardMaterial color="#efebe3" roughness={0.6} />
      </mesh>

      {/* Кроссовки */}
      <mesh position={[-0.17, 0.07, 0.08]}>
        <boxGeometry args={[0.26, 0.14, 0.4]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      <mesh position={[0.17, 0.07, 0.08]}>
        <boxGeometry args={[0.26, 0.14, 0.4]} />
        <meshStandardMaterial color="#f5f5f0" />
      </mesh>
      <mesh position={[-0.17, 0.04, 0.26]}>
        <boxGeometry args={[0.24, 0.09, 0.11]} />
        <meshStandardMaterial color="#ff6a18" />
      </mesh>
      <mesh position={[0.17, 0.04, 0.26]}>
        <boxGeometry args={[0.24, 0.09, 0.11]} />
        <meshStandardMaterial color="#ff6a18" />
      </mesh>
    </group>
  )
}

/* ===================== ГОЛОГРАФИЧЕСКИЙ СКАН ===================== */
function HoloScan() {
  const ring1 = useRef<THREE.Mesh>(null)
  const ring2 = useRef<THREE.Mesh>(null)
  const scan = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1.current) ring1.current.rotation.z = t * 0.4
    if (ring2.current) ring2.current.rotation.z = -t * 0.55
    if (scan.current) {
      scan.current.position.y = Math.sin(t * 1.2) * 0.85 + 0.3
    }
  })

  return (
    <group position={[0, 0.2, 0]}>
      {/* Внешнее кольцо */}
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.35, 0.012, 16, 80]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.55} />
      </mesh>

      {/* Внутреннее кольцо */}
      <mesh ref={ring2} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.01, 16, 80]} />
        <meshBasicMaterial color="#7b68ee" transparent opacity={0.7} />
      </mesh>

      {/* Сканирующая линия */}
      <mesh ref={scan} rotation={[0, 0, 0]}>
        <planeGeometry args={[2.4, 0.035]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.85} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

/* ===================== КОМНАТА (объём + присутствие) ===================== */
function Room() {
  return (
    <group>
      {/* Пол */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.12, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#1a1528" roughness={0.85} metalness={0.1} />
      </mesh>

      {/* Задняя стена */}
      <mesh position={[0, 1.8, -5]} receiveShadow>
        <planeGeometry args={[14, 7]} />
        <meshStandardMaterial color="#120e1f" roughness={0.9} />
      </mesh>

      {/* Боковые стены (лёгкий объём) */}
      <mesh position={[-6.5, 1.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial color="#151022" roughness={0.9} />
      </mesh>
      <mesh position={[6.5, 1.8, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[10, 7]} />
        <meshStandardMaterial color="#151022" roughness={0.9} />
      </mesh>

      {/* «Окно» / светящаяся панель сзади для глубины */}
      <mesh position={[0, 2.2, -4.9]}>
        <planeGeometry args={[6, 3.2]} />
        <meshStandardMaterial
          color="#2a1f4a"
          emissive="#4a3a8a"
          emissiveIntensity={0.35}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  )
}

/* ===================== СТРАНИЦА ===================== */
export default function PresencePage() {
  return (
    <div className="w-full h-screen bg-[#0a0812]">
      <Canvas
        shadows
        camera={{ position: [0, 1.6, 5.2], fov: 42 }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={['#0a0812']} />
        <fog attach="fog" args={['#0a0812', 6, 16]} />

        {/* Свет — создаёт объём и присутствие */}
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[4, 7, 3]}
          intensity={1.35}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <directionalLight position={[-4, 3, -2]} intensity={0.45} color="#8b7cf7" />
        <pointLight position={[0, 3.5, 2]} intensity={0.6} color="#00e5ff" distance={8} />

        <Room />
        <Avatar />
        <HoloScan />

        {/* Частицы для «живости» пространства */}
        <Sparkles
          count={60}
          scale={[8, 5, 6]}
          size={2.5}
          speed={0.3}
          opacity={0.4}
          color="#a78bfa"
        />

        <ContactShadows
          position={[0, -1.11, 0]}
          opacity={0.45}
          scale={10}
          blur={2.5}
          far={4}
        />

        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
          {/* лёгкое дыхание всей сцены */}
        </Float>

        <OrbitControls
          enablePan={false}
          minDistance={3.5}
          maxDistance={9}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 1.65}
          target={[0, 0.6, 0]}
        />
      </Canvas>

      {/* UI-подсказка */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <p className="text-violet-300/70 text-sm tracking-wide">
          Digital Avatar Analysis · Presence Space
        </p>
      </div>
    </div>
  )
}
