
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Desk(props) {
  const { nodes, materials } = useGLTF('/models/programmer_desktop_3d_pc.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]} userData={{ name: 'Sketchfab_model' }}>
          <group
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
            userData={{ name: 'gaming desktop pc2.fbx' }}>
            <group userData={{ name: 'RootNode' }}>
              <group
                position={[-61.02370453, -0.5557102, 156.09016418]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-368.94952393, 731.63635254, 25.97609711]}
                userData={{ name: 'Cube' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube_Material_0.geometry}
                  material={materials.Material}
                  userData={{ name: 'Cube_Material_0' }}
                />
              </group>
              <group
                position={[-85.93536377, 199.69992065, -353.72021484]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[173.48944092, 89.97060394, 157.34742737]}
                userData={{ name: 'Cube.011' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube011_Material010_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.011_Material.010_0' }}
                />
              </group>
              <group
                position={[-85.93536377, 199.69992065, -353.72021484]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[173.48944092, 89.97060394, 157.34742737]}
                userData={{ name: 'Cube.012' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube012_Material011_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.012_Material.011_0' }}
                />
              </group>
              <group
                position={[82.76553345, 33.22783661, -353.60855103]}
                rotation={[-Math.PI / 2, -0.2371594, Math.PI]}
                scale={[-5.9858408, 88.36328125, 12.13771629]}
                userData={{ name: 'Cube.013' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube013_Material015_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.013_Material.015_0' }}
                />
              </group>
              <group
                position={[-253.44522095, 33.22783661, -353.60855103]}
                rotation={[-Math.PI / 2, 0.13556853, -Math.PI]}
                scale={[-5.97856951, 88.36328125, 12.15162849]}
                userData={{ name: 'Cube.014' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube014_Material014_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.014_Material.014_0' }}
                />
              </group>
              <group
                position={[74.20914459, 51.21781158, -262.89413452]}
                rotation={[4e-8, 0, 0]}
                scale={[6.07749987, 6.27478647, 2.27723908]}
                userData={{ name: 'Cylinder' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder_Material009_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cylinder_Material.009_0' }}
                />
              </group>
              <group
                position={[79.29447174, 288.42816162, -355.5619812]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[50.67383194, 50.67383194, 9.99981689]}
                userData={{ name: 'Cube.018' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube018_Material017_0.geometry}
                  material={materials['Material.017']}
                  userData={{ name: 'Cube.018_Material.017_0' }}
                />
              </group>
              <group
                position={[89.58861542, 288.68112183, -355.42318726]}
                rotation={[0, Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans_aorus case fans_0' }}
                />
              </group>
              <group
                position={[69.01843262, 288.68112183, -355.42318726]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans001_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.001_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.015' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube015_Material016_0.geometry}
                  material={materials['Material.074_1']}
                  userData={{ name: 'Cube.015_Material.016_0' }}
                />
              </group>
              <group
                position={[79.29447174, 177.86126709, -355.5619812]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[50.67383194, 50.67383194, 9.99981689]}
                userData={{ name: 'Cube.016' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube016_Material017_0.geometry}
                  material={materials['Material.017']}
                  userData={{ name: 'Cube.016_Material.017_0' }}
                />
              </group>
              <group
                position={[89.58861542, 178.11424255, -355.42318726]}
                rotation={[0, Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans002_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.002_aorus case fans_0' }}
                />
              </group>
              <group
                position={[69.01843262, 178.11424255, -355.42318726]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans003_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.003_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-251.3770752, 292.34863281, -334.89868164]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[50.67383194, 50.67383194, 9.99981689]}
                userData={{ name: 'Cube.017' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube017_Material017_0.geometry}
                  material={materials['Material.017']}
                  userData={{ name: 'Cube.017_Material.017_0' }}
                />
              </group>
              <group
                position={[-241.08293152, 292.60159302, -334.7598877]}
                rotation={[0, Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans.004' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans004_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.004_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-261.65310669, 292.60159302, -334.7598877]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={108.51660919}
                userData={{ name: 'aorus case fans.005' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans005_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.005_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-171.5443573, 344.35876465, -355.43011475]}
                rotation={[Math.PI / 2, 3.9e-7, Math.PI]}
                scale={[51.51337814, 51.51337814, 10.1654911]}
                userData={{ name: 'Cube.019' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube019_Material017_0.geometry}
                  material={materials['Material.017']}
                  userData={{ name: 'Cube.019_Material.017_0' }}
                />
              </group>
              <group
                position={[-171.28721619, 333.89407349, -355.28903198]}
                rotation={[Math.PI / 2, -4e-7, -Math.PI / 2]}
                scale={110.31447601}
                userData={{ name: 'aorus case fans.006' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans006_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.006_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-171.28721619, 354.80505371, -355.28903198]}
                rotation={[Math.PI / 2, -4e-7, -Math.PI / 2]}
                scale={110.31447601}
                userData={{ name: 'aorus case fans.007' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans007_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.007_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-96.10669708, 78.82550049, -363.39776611]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[160.68109131, 73.93254852, 34.31197739]}
                userData={{ name: 'Cube.020' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube020_Material020_0.geometry}
                  material={materials['Material.074_2']}
                  userData={{ name: 'Cube.020_Material.020_0' }}
                />
              </group>
              <group
                position={[-108.06404114, 346.35284424, -354.98104858]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[7.18748188, 57.54200745, 10.78547764]}
                userData={{ name: 'Cube.021' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube021_Material018_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.021_Material.018_0' }}
                />
              </group>
              <group
                position={[-44.54793167, 344.35876465, -355.43011475]}
                rotation={[Math.PI / 2, 3.9e-7, Math.PI]}
                scale={[51.51337814, 51.51337814, 10.1654911]}
                userData={{ name: 'Cube.022' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube022_Material017_0.geometry}
                  material={materials['Material.017']}
                  userData={{ name: 'Cube.022_Material.017_0' }}
                />
              </group>
              <group
                position={[-44.29078674, 333.89407349, -355.28903198]}
                rotation={[Math.PI / 2, -4e-7, -Math.PI / 2]}
                scale={110.31447601}
                userData={{ name: 'aorus case fans.008' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans008_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.008_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-44.29078674, 354.80505371, -355.28903198]}
                rotation={[Math.PI / 2, -4e-7, -Math.PI / 2]}
                scale={110.31447601}
                userData={{ name: 'aorus case fans.009' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_case_fans009_aorus_case_fans_0.geometry}
                  material={materials['Material.074_0']}
                  userData={{ name: 'aorus case fans.009_aorus case fans_0' }}
                />
              </group>
              <group
                position={[-277.54421997, 457.86047363, -407.85446167]}
                rotation={[-1.51444376, 0, 0]}
                scale={4.8596406}
                userData={{ name: 'Sphere' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere_Material019_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Sphere_Material.019_0' }}
                />
              </group>
              <group
                position={[-277.54421997, 457.86047363, -439.73150635]}
                rotation={[-1.61992872, 0, 0]}
                scale={[4.8596406, 4.85964012, 4.85964012]}
                userData={{ name: 'Sphere.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere001_Material019_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Sphere.001_Material.019_0' }}
                />
              </group>
              <group
                position={[-259.68862915, 284.79934692, -422.4909668]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[26.47535133, 30.85505295, 31.83249855]}
                userData={{ name: 'IOSHIELD' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.IOSHIELD_IOSHIELD_0.geometry}
                  material={materials['Material.074_3']}
                  userData={{ name: 'IOSHIELD_IOSHIELD_0' }}
                />
              </group>
              <group
                position={[93.78107452, 228.5900116, -355.28201294]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-11.99118233, 59.26457596, 117.81004333]}
                userData={{ name: 'Cube.023' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube023_Material021_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.023_Material.021_0' }}
                />
              </group>
              <group
                position={[-265.09573364, 291.70205688, -335.08990479]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[6.37821341, 55.45826721, 55.45826721]}
                userData={{ name: 'Cube.024' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube024_Material022_0.geometry}
                  material={materials['Material.074']}
                  userData={{ name: 'Cube.024_Material.022_0' }}
                />
              </group>
              <group
                position={[-235.59091187, 287.74694824, -423.91906738]}
                rotation={[-3.4e-7, 8.7e-7, 0.65059584]}
                scale={6.34325886}
                userData={{ name: 'MOBOAORUSORANGETRANS' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0.geometry}
                  material={materials['Material.074_4']}
                  userData={{ name: 'MOBOAORUSORANGETRANS_MOBOAORUSORANGETRANS_0' }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.025' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube025_Material023_0.geometry}
                  material={materials['Material.023']}
                  userData={{ name: 'Cube.025_Material.023_0' }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.026' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube026_Material024_0.geometry}
                  material={materials['Material.024']}
                  userData={{ name: 'Cube.026_Material.024_0' }}
                />
              </group>
              <group
                position={[-42.31238556, 356.98364258, -354.16351318]}
                rotation={[Math.PI / 2, -1.5e-7, Math.PI]}
                scale={[100, 133.70451355, 100]}
                userData={{ name: 'metal-mesh-500x500' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['metal-mesh-500x500_metal-mesh-500x500_0'].geometry}
                  material={materials['Material.074_5']}
                  userData={{ name: 'metal-mesh-500x500_metal-mesh-500x500_0' }}
                />
              </group>
              <group
                position={[-174.20526123, 356.98364258, -354.16351318]}
                rotation={[Math.PI / 2, 8.8e-7, Math.PI / 2]}
                scale={[100, 133.70451355, 100]}
                userData={{ name: 'metal-mesh-500x500.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['metal-mesh-500x500001_metal-mesh-500x500_0'].geometry}
                  material={materials['Material.074_5']}
                  userData={{ name: 'metal-mesh-500x500.001_metal-mesh-500x500_0' }}
                />
              </group>
              <group
                position={[-270.89990234, 291.5138855, -335.32818604]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[79.5553894, 106.36914825, 79.5553894]}
                userData={{ name: 'metal-mesh-500x500.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['metal-mesh-500x500002_metal-mesh-500x500_0'].geometry}
                  material={materials['Material.074_5']}
                  userData={{ name: 'metal-mesh-500x500.002_metal-mesh-500x500_0' }}
                />
              </group>
              <group
                position={[-96.40647888, 270.96295166, -430.92712402]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.51289129, 10.9163847, 44.28952408]}
                userData={{ name: 'Cube.027' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube027_Material008_0.geometry}
                  material={materials['Material.074_6']}
                  userData={{ name: 'Cube.027_Material.008_0' }}
                />
              </group>
              <group
                position={[-95.70954132, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.028' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube028_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.028_Material.026_0' }}
                />
              </group>
              <group
                position={[-96.38716125, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.24975339, 9.33852386, 46.66292191]}
                userData={{ name: 'Cube.029' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube029_Material025_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.029_Material.025_0' }}
                />
              </group>
              <group
                position={[-96.99602509, 270.96295166, -451.70101929]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.030' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube030_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.030_Material.026_0' }}
                />
              </group>
              <group
                position={[-103.6867981, 270.96295166, -430.92712402]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.51289129, 10.9163847, 44.28952408]}
                userData={{ name: 'Cube.031' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube031_Material008_0.geometry}
                  material={materials['Material.074_6']}
                  userData={{ name: 'Cube.031_Material.008_0' }}
                />
              </group>
              <group
                position={[-102.98986816, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.032' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube032_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.032_Material.026_0' }}
                />
              </group>
              <group
                position={[-103.66747284, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.24975339, 9.33852386, 46.66292191]}
                userData={{ name: 'Cube.033' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube033_Material025_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.033_Material.025_0' }}
                />
              </group>
              <group
                position={[-104.2763443, 270.96295166, -451.70101929]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.034' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube034_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.034_Material.026_0' }}
                />
              </group>
              <group
                position={[-110.55084229, 270.96295166, -430.92712402]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.51289129, 10.9163847, 44.28952408]}
                userData={{ name: 'Cube.035' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube035_Material008_0.geometry}
                  material={materials['Material.074_6']}
                  userData={{ name: 'Cube.035_Material.008_0' }}
                />
              </group>
              <group
                position={[-109.85391235, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.036' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube036_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.036_Material.026_0' }}
                />
              </group>
              <group
                position={[-110.53152466, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.24975339, 9.33852386, 46.66292191]}
                userData={{ name: 'Cube.037' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube037_Material025_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.037_Material.025_0' }}
                />
              </group>
              <group
                position={[-111.14039612, 270.96295166, -451.70101929]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.038' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube038_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.038_Material.026_0' }}
                />
              </group>
              <group
                position={[-117.50195313, 270.96295166, -430.92712402]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.51289129, 10.9163847, 44.28952408]}
                userData={{ name: 'Cube.039' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube039_Material008_0.geometry}
                  material={materials['Material.074_6']}
                  userData={{ name: 'Cube.039_Material.008_0' }}
                />
              </group>
              <group
                position={[-116.80501556, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.040' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube040_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.040_Material.026_0' }}
                />
              </group>
              <group
                position={[-117.48262787, 270.96295166, -432.40905762]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[-0.24975339, 9.33852386, 46.66292191]}
                userData={{ name: 'Cube.041' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube041_Material025_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.041_Material.025_0' }}
                />
              </group>
              <group
                position={[-118.09149933, 270.96295166, -451.70101929]}
                rotation={[-Math.PI / 2, 0, -Math.PI]}
                scale={[-1.05112779, 9.73474026, 44.41103745]}
                userData={{ name: 'Cube.042' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube042_Material026_0.geometry}
                  material={materials['Material.074_7']}
                  userData={{ name: 'Cube.042_Material.026_0' }}
                />
              </group>
              <group
                position={[-257.97729492, 182.03939819, -359.04949951]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[109.08169556, 106.36914825, 79.5553894]}
                userData={{ name: 'metal-mesh-500x500.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['metal-mesh-500x500003_metal-mesh-500x500_0'].geometry}
                  material={materials['Material.074_5']}
                  userData={{ name: 'metal-mesh-500x500.003_metal-mesh-500x500_0' }}
                />
              </group>
              <group
                position={[-219.48551941, 85.33855438, -71.14894104]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[49.17704391, 29.27764702, 59.65811539]}
                userData={{ name: 'Cube.043' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube043_Material012_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.043_Material.012_0' }}
                />
              </group>
              <group
                position={[-212.13954163, 79.39873505, -298.22796631]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[35.4759407, 5.16580582, 20.56838036]}
                userData={{ name: 'Cube.045' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube045_Material027_0.geometry}
                  material={materials['Material.074_8']}
                  userData={{ name: 'Cube.045_Material.027_0' }}
                />
              </group>
              <group
                position={[-93.47690582, 83.16719818, -288.7958374]}
                rotation={[4e-8, 6.5e-7, 0]}
                scale={36.94224548}
                userData={{ name: 'rgb-hdd-cover-aorus-v1' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'].geometry}
                  material={materials['Material.074_9']}
                  userData={{ name: 'rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0' }}
                />
              </group>
              <group
                position={[87.71413422, 83.61499023, -355.31155396]}
                rotation={[0, Math.PI / 2, 0]}
                scale={39.41070938}
                userData={{ name: 'maxresdefault (1)' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['maxresdefault_(1)_maxresdefault_(1)_0'].geometry}
                  material={materials['Material.074_10']}
                  userData={{ name: 'maxresdefault (1)_maxresdefault (1)_0' }}
                />
              </group>
              <group
                position={[-169.22512817, 114.40611267, -71.64431763]}
                rotation={[-1.57079192, 1.5536567, -0.00000432]}
                scale={[19.39973259, 19.39973259, 2.50632143]}
                userData={{ name: 'Cylinder.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder001_Material028_0.geometry}
                  material={materials['Material.074_11']}
                  userData={{ name: 'Cylinder.001_Material.028_0' }}
                />
              </group>
              <group
                position={[-166.36904907, 70.64706421, -71.64431763]}
                rotation={[-Math.PI / 2, 1.53621423, 0.00000129]}
                scale={[10.29806614, 10.29806614, 1.33044434]}
                userData={{ name: 'Cylinder.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder002_Material029_0.geometry}
                  material={materials['Material.074_11']}
                  userData={{ name: 'Cylinder.002_Material.029_0' }}
                />
              </group>
              <group
                position={[-219.48551941, 85.33855438, 671.43267822]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[49.17704391, 29.27764702, 59.65811539]}
                userData={{ name: 'Cube.044' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube044_Material012_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.044_Material.012_0' }}
                />
              </group>
              <group
                position={[-169.22512817, 114.40611267, 670.93731689]}
                rotation={[-1.57079192, 1.5536567, -0.00000432]}
                scale={[19.39973259, 19.39973259, 2.50632143]}
                userData={{ name: 'Cylinder.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder003_Material031_0.geometry}
                  material={materials['Material.074_11']}
                  userData={{ name: 'Cylinder.003_Material.031_0' }}
                />
              </group>
              <group
                position={[-166.36904907, 70.64706421, 670.93731689]}
                rotation={[-Math.PI / 2, 1.53621423, 0.00000129]}
                scale={[10.29806614, 10.29806614, 1.33044434]}
                userData={{ name: 'Cylinder.004' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder004_Material030_0.geometry}
                  material={materials['Material.074_11']}
                  userData={{ name: 'Cylinder.004_Material.030_0' }}
                />
              </group>
              <group
                position={[0.58591437, 70.42808533, -289.06567383]}
                rotation={[4e-8, 6.5e-7, 6.5e-7]}
                scale={45.18875885}
                userData={{ name: 'NVIDIA LOGO' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.NVIDIA_LOGO_NVIDIA_LOGO_0.geometry}
                  material={materials['Material.074_12']}
                  userData={{ name: 'NVIDIA LOGO_NVIDIA LOGO_0' }}
                />
              </group>
              <group
                position={[-260.26617432, 77.97001648, -352.75244141]}
                rotation={[0, Math.PI / 2, 0]}
                scale={59.48864365}
                userData={{ name: 'psuback' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.psuback_psuback_0.geometry}
                  material={materials['Material.074_13']}
                  userData={{ name: 'psuback_psuback_0' }}
                />
              </group>
              <group
                position={[70.47293091, 357.14990234, -289.69473267]}
                rotation={[-Math.PI / 2, 6.7e-7, Math.PI / 2]}
                scale={7.34210443}
                userData={{ name: 'usb' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.usb_usb_0.geometry}
                  material={materials['Material.074_14']}
                  userData={{ name: 'usb_usb_0' }}
                />
              </group>
              <group
                position={[70.47293091, 357.14990234, -321.00268555]}
                rotation={[-Math.PI / 2, 6.7e-7, Math.PI / 2]}
                scale={7.34210443}
                userData={{ name: 'usb.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.usb001_usb_0.geometry}
                  material={materials['Material.074_14']}
                  userData={{ name: 'usb.001_usb_0' }}
                />
              </group>
              <group
                position={[70.47293091, 357.14990234, -352.59017944]}
                rotation={[-Math.PI / 2, 6.7e-7, Math.PI / 2]}
                scale={7.34210443}
                userData={{ name: 'usb.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.usb002_usb_0.geometry}
                  material={materials['Material.074_14']}
                  userData={{ name: 'usb.002_usb_0' }}
                />
              </group>
              <group
                position={[69.92597961, 356.74127197, -407.00549316]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={3.29706478}
                userData={{ name: 'Torus' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus_Material013_0.geometry}
                  material={materials['Material.013']}
                  userData={{ name: 'Torus_Material.013_0' }}
                />
              </group>
              <group
                position={[69.92597961, 356.74127197, -423.72918701]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={3.29706478}
                userData={{ name: 'Torus.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Torus001_Material032_0.geometry}
                  material={materials['Material.032']}
                  userData={{ name: 'Torus.001_Material.032_0' }}
                />
              </group>
              <group
                position={[70.47293091, 357.14990234, -384.89071655]}
                rotation={[-Math.PI / 2, 6.7e-7, Math.PI / 2]}
                scale={7.34210443}
                userData={{ name: 'usb.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.usb003_usb_0.geometry}
                  material={materials['Material.074_14']}
                  userData={{ name: 'usb.003_usb_0' }}
                />
              </group>
              <group
                position={[-188.16020203, 268.51605225, -368.19424438]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[9.27820301, 42.44593811, 42.44593811]}
                userData={{ name: 'Cube.046' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube046_Material034_0.geometry}
                  material={materials['Material.034']}
                  userData={{ name: 'Cube.046_Material.034_0' }}
                />
              </group>
              <group
                position={[-134.66369629, 268.51605225, -368.19424438]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[9.27820301, 42.44593811, 42.44593811]}
                userData={{ name: 'Cube.047' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube047_Material033_0.geometry}
                  material={materials['Material.034']}
                  userData={{ name: 'Cube.047_Material.033_0' }}
                />
              </group>
              <group
                position={[-161.35374451, 268.24206543, -368.17098999]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.43628311, 39.40528488, 40.07472229]}
                userData={{ name: 'Cube.048' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube048_Material035_0.geometry}
                  material={materials['Material.074_15']}
                  userData={{ name: 'Cube.048_Material.035_0' }}
                />
              </group>
              <group
                position={[-161.35374451, 268.24206543, -368.17098999]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.43628311, 39.40528488, 40.07472229]}
                userData={{ name: 'Cube.049' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube049_Material040_0.geometry}
                  material={materials['Material.074_16']}
                  userData={{ name: 'Cube.049_Material.040_0' }}
                />
              </group>
              <group
                position={[-161.35374451, 268.24206543, -368.17098999]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.43628311, 39.40528488, 40.07472229]}
                userData={{ name: 'Cube.050' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube050_Material038_0.geometry}
                  material={materials['Material.074_16']}
                  userData={{ name: 'Cube.050_Material.038_0' }}
                />
              </group>
              <group
                position={[-161.35374451, 268.24206543, -368.17098999]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.43628311, 39.40528488, 40.07472229]}
                userData={{ name: 'Cube.051' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube051_Material042_0.geometry}
                  material={materials['Material.042']}
                  userData={{ name: 'Cube.051_Material.042_0' }}
                />
              </group>
              <group
                position={[-161.13897705, 268.6579895, -369.02438354]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[32.71004105, 32.71004105, 34.21257019]}
                userData={{ name: 'Cylinder.005' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_Material041_0.geometry}
                  material={materials['Material.074_17']}
                  userData={{ name: 'Cylinder.005_Material.041_0' }}
                />
              </group>
              <group
                position={[-173.93435669, 242.50073242, -421.74005127]}
                rotation={[0.47362569, -1.8e-7, Math.PI]}
                scale={[2.05494046, 2.0549407, 16.97274399]}
                userData={{ name: 'Cylinder.011' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder011_Material045_0.geometry}
                  material={materials['Material.045']}
                  userData={{ name: 'Cylinder.011_Material.045_0' }}
                />
              </group>
              <group
                position={[-257.97729492, 220.72346497, -359.04949951]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[109.08169556, 106.36914825, 79.5553894]}
                userData={{ name: 'metal-mesh-500x500.004' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['metal-mesh-500x500004_metal-mesh-500x500_0'].geometry}
                  material={materials['Material.074_5']}
                  userData={{ name: 'metal-mesh-500x500.004_metal-mesh-500x500_0' }}
                />
              </group>
              <group
                position={[-143.8039856, 250.19326782, -325.72390747]}
                rotation={[0, 4e-8, Math.PI / 2]}
                scale={2.43557787}
                userData={{ name: 'Text' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Text_Material046_0.geometry}
                  material={materials['Material.046']}
                  userData={{ name: 'Text_Material.046_0' }}
                />
              </group>
              <group
                position={[83.51468658, 83.27584839, -355.59872437]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[5.7498374, 46.28050995, 28.86747932]}
                userData={{ name: 'Cube.052' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube052_Material047_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.052_Material.047_0' }}
                />
              </group>
              <group
                position={[-115.85402679, 150.74829102, -435.22268677]}
                rotation={[4e-8, 0, 0]}
                scale={35.19368362}
                userData={{ name: 'test-aorus-m2-souris-aorus-rgb2' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes['test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0']
                      .geometry
                  }
                  material={materials['Material.074_18']}
                  userData={{
                    name: 'test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0',
                  }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.053' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube053_Material048_0.geometry}
                  material={materials['Material.048']}
                  userData={{ name: 'Cube.053_Material.048_0' }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.054' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube054_Material049_0.geometry}
                  material={materials['Material.049']}
                  userData={{ name: 'Cube.054_Material.049_0' }}
                />
              </group>
              <group
                position={[-122.28582001, 185.07626343, -370.55859375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[133.16307068, 54.53351212, 13.17438507]}
                userData={{ name: 'Cube.055' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube055_Material054_0.geometry}
                  material={materials['Material.054']}
                  userData={{ name: 'Cube.055_Material.054_0' }}
                />
              </group>
              <group
                position={[-127.22206116, 200.08087158, -370.55859375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[128.0589447, 52.44324875, 12.66940975]}
                userData={{ name: 'Cube.056' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube056_Material061_0.geometry}
                  material={materials['Material.061']}
                  userData={{ name: 'Cube.056_Material.061_0' }}
                />
              </group>
              <group
                position={[-209.45143127, 184.61602783, -370.09606934]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[36.3536911, 38.22153473, 10.57465553]}
                userData={{ name: 'Cylinder.006' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder006_Material050_0.geometry}
                  material={materials['Material.074_19']}
                  userData={{ name: 'Cylinder.006_Material.050_0' }}
                />
              </group>
              <group
                position={[-124.4391098, 184.61602783, -370.09606934]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[36.3536911, 38.22153473, 10.57465553]}
                userData={{ name: 'Cylinder.007' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder007_Material051_0.geometry}
                  material={materials['Material.074_20']}
                  userData={{ name: 'Cylinder.007_Material.051_0' }}
                />
              </group>
              <group
                position={[-37.77696991, 184.61602783, -370.09606934]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[36.3536911, 38.22153473, 10.57465553]}
                userData={{ name: 'Cylinder.008' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder008_Material052_0.geometry}
                  material={materials['Material.074_19']}
                  userData={{ name: 'Cylinder.008_Material.052_0' }}
                />
              </group>
              <group
                position={[117.18205261, 25.60487938, -29.16535759]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[124.42671967, 154.11138916, 119.91057587]}
                userData={{ name: 'Plane' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane_Material053_0.geometry}
                  material={materials['Material.074_21']}
                  userData={{ name: 'Plane_Material.053_0' }}
                />
              </group>
              <group
                position={[-229.27110291, 204.82577515, -315.956604]}
                rotation={[4e-8, 0, 0]}
                scale={[10.37661552, 10.37661552, 10.90976429]}
                userData={{ name: 'geforcertx' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geforcertx_Material056_0.geometry}
                  material={materials['Material.056']}
                  userData={{ name: 'geforcertx_Material.056_0' }}
                />
              </group>
              <group
                position={[-127.22206116, 200.08087158, -370.55859375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[128.0589447, 52.44324875, 12.66940975]}
                userData={{ name: 'Cube.057' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube057_Material059_0.geometry}
                  material={materials['Material.074_22']}
                  userData={{ name: 'Cube.057_Material.059_0' }}
                />
              </group>
              <group
                position={[-127.22206116, 200.08087158, -370.55859375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[128.0589447, 52.44324875, 12.66940975]}
                userData={{ name: 'Cube.059' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube059_Material058_0.geometry}
                  material={materials['Material.058']}
                  userData={{ name: 'Cube.059_Material.058_0' }}
                />
              </group>
              <group
                position={[-123.74424744, 264.2767334, -316.79519653]}
                rotation={[4e-8, 0, 0]}
                scale={[133.25665283, 53.22020721, 0.82428288]}
                userData={{ name: 'Cube.060' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube060_Material062_0.geometry}
                  material={materials['Material.062']}
                  userData={{ name: 'Cube.060_Material.062_0' }}
                />
              </group>
              <group
                position={[-122.59111023, 213.70861816, -370.42941284]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[133.2590332, 54.50397873, 0.80946386]}
                userData={{ name: 'Cube.058' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube058_Material063_0.geometry}
                  material={materials['Material.074_23']}
                  userData={{ name: 'Cube.058_Material.063_0' }}
                />
              </group>
              <group
                position={[-182.4276123, 181.69923401, -315.84664917]}
                rotation={[4e-8, 0, 0]}
                scale={[8.64550114, 8.64550114, 9.08970547]}
                userData={{ name: 'aorus logotranspa' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.aorus_logotranspa_aorus_logotranspa_0.geometry}
                  material={materials['Material.074_24']}
                  userData={{ name: 'aorus logotranspa_aorus logotranspa_0' }}
                />
              </group>
              <group
                position={[-122.28582001, 185.07626343, -370.55859375]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[133.16307068, 54.53351212, 13.17438507]}
                userData={{ name: 'Cube.061' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube061_Material064_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.061_Material.064_0' }}
                />
              </group>
              <group
                position={[-165.45028687, 224.12275696, -440.83956909]}
                rotation={[-Math.PI / 2, -9e-8, -Math.PI]}
                scale={[-89.3741684, 0.69890112, 106.4344635]}
                userData={{ name: 'Cube.062' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube062_Material065_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.062_Material.065_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.4466629, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 42.88701248, 22.90224648]}
                userData={{ name: 'Cube.064' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube064_Material074_0.geometry}
                  material={materials['Material.074_25']}
                  userData={{ name: 'Cube.064_Material.074_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.4466629, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 42.88701248, 22.90224648]}
                userData={{ name: 'Cube.067' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube067_Material075_0.geometry}
                  material={materials['Material.075']}
                  userData={{ name: 'Cube.067_Material.075_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.49509048, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 42.88701248, 22.90224648]}
                userData={{ name: 'Cube.063' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube063_Material074_0.geometry}
                  material={materials['Material.074_25']}
                  userData={{ name: 'Cube.063_Material.074_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.49509048, -27.40592003]}
                rotation={[Math.PI / 2, -0.0109047, Math.PI]}
                scale={[-42.88702011, 42.88701248, 22.9022522]}
                userData={{ name: 'Cube.065' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube065_Material074_0.geometry}
                  material={materials['Material.074_25']}
                  userData={{ name: 'Cube.065_Material.074_0' }}
                />
              </group>
              <group
                position={[111.46056366, 32.28697586, -27.29169464]}
                rotation={[Math.PI / 2, -0.0109047, Math.PI]}
                scale={[-42.88702011, 42.88701248, 22.9022522]}
                userData={{ name: 'Cube.066' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube066_Material076_0.geometry}
                  material={materials['Material.076']}
                  userData={{ name: 'Cube.066_Material.076_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.4466629, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 42.88701248, 22.90224648]}
                userData={{ name: 'Cube.072' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube072_Material078_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.072_Material.078_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.4466629, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 42.88701248, 22.90224648]}
                userData={{ name: 'Cube.073' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube073_Material079_0.geometry}
                  material={materials['Material.074_6']}
                  userData={{ name: 'Cube.073_Material.079_0' }}
                />
              </group>
              <group
                position={[65.92594147, 34.46109009, -27.34622002]}
                rotation={[Math.PI / 2, -0.234337, -Math.PI]}
                scale={[-42.8870163, 42.88701248, 22.90225601]}
                userData={{ name: 'Cube.076' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube076_Material080_0.geometry}
                  material={materials['Material.074_25']}
                  userData={{ name: 'Cube.076_Material.080_0' }}
                />
              </group>
              <group
                position={[77.22225189, 34.52458572, -28.48189163]}
                rotation={[4e-8, -0.00111956, 0]}
                scale={[11.57417297, 11.57417202, 2.50102758]}
                userData={{ name: 'Cylinder.009' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder009_Material081_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cylinder.009_Material.081_0' }}
                />
              </group>
              <group
                position={[77.22154236, 34.52458572, -27.85783768]}
                rotation={[4e-8, -0.00111956, 0]}
                scale={[11.89139175, 11.89138889, 0.39316934]}
                userData={{ name: 'Cylinder.010' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder010_Material077_0.geometry}
                  material={materials['Material.077']}
                  userData={{ name: 'Cylinder.010_Material.077_0' }}
                />
              </group>
              <group
                position={[77.22250366, 34.52458572, -28.70949745]}
                rotation={[4e-8, -0.00111956, 0]}
                scale={[10.43813896, 10.43813705, 2.86763906]}
                userData={{ name: 'Cylinder.012' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder012_Material082_0.geometry}
                  material={materials['Material.082']}
                  userData={{ name: 'Cylinder.012_Material.082_0' }}
                />
              </group>
              <group
                position={[-57.66334534, 118.32025146, -315.59509277]}
                rotation={[1.57079466, -1.23387098, -0.00000156]}
                scale={100}
                userData={{ name: 'BezierCurve.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve001_Material085_0.geometry}
                  material={materials['Material.085']}
                  userData={{ name: 'BezierCurve.001_Material.085_0' }}
                />
              </group>
              <group
                position={[-92.94392395, 206.71899414, -314.86199951]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[5.64184952, 5.40027714, 4.23397255]}
                userData={{ name: 'Cube.074' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube074_Material084_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.074_Material.084_0' }}
                />
              </group>
              <group
                position={[-258.00680542, 195.51239014, -371.51080322]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[1.16333556, 52.43508148, 17.74275398]}
                userData={{ name: 'Cube.075' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube075_Material086_0.geometry}
                  material={materials['Material.074_26']}
                  userData={{ name: 'Cube.075_Material.086_0' }}
                />
              </group>
              <group
                position={[-31.4378891, 183.7853241, -440.15563965]}
                rotation={[1.57079466, -1.23387098, -0.00000156]}
                scale={100}
                userData={{ name: 'BezierCurve.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve002_Material087_0.geometry}
                  material={materials['Material.087']}
                  userData={{ name: 'BezierCurve.002_Material.087_0' }}
                />
              </group>
              <group
                position={[-81.67821503, 266.50561523, -437.41055298]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.84893036, 4.87202072, 17.37691498]}
                userData={{ name: 'Cube.077' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube077_Material083_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.077_Material.083_0' }}
                />
              </group>
              <group
                position={[70.35210419, 334.37463379, -437.41055298]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[2.84893036, 4.87202072, 12.04591846]}
                userData={{ name: 'Cube.078' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube078_Material083_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.078_Material.083_0' }}
                />
              </group>
              <group
                position={[73.0335083, 238.19570923, -437.38818359]}
                rotation={[Math.PI, -1.5e-7, Math.PI / 2]}
                scale={100}
                userData={{ name: 'BezierCurve' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve_Material088_0.geometry}
                  material={materials['Material.088']}
                  userData={{ name: 'BezierCurve_Material.088_0' }}
                />
              </group>
              <group
                position={[-269.83956909, 182.6096344, -338.40841675]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[16.03799438, 9.16200733, 4.32624245]}
                userData={{ name: 'Cube.079' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube079_Material089_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.079_Material.089_0' }}
                />
              </group>
              <group
                position={[-158.4934082, 199.9745636, 375.16342163]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[16.03799438, 9.16200733, 4.32624245]}
                userData={{ name: 'Cube.080' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube080_Material089_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.080_Material.089_0' }}
                />
              </group>
              <group
                position={[-158.89813232, 127.66092682, 299.39437866]}
                rotation={[2.4637505, -Math.PI / 2, 0]}
                scale={100}
                userData={{ name: 'BezierCurve.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve003_Material091_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.003_Material.091_0' }}
                />
              </group>
              <group
                position={[93.21507263, 47.65832901, -27.74674606]}
                rotation={[-1.54407858, -0.23347464, -1e-8]}
                scale={[2.62349224, 1.33410251, 2.23680639]}
                userData={{ name: 'Cube.081' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube081_Material090_0.geometry}
                  material={materials['Material.090']}
                  userData={{ name: 'Cube.081_Material.090_0' }}
                />
              </group>
              <group
                position={[129.11863708, 44.50042725, -27.60698509]}
                rotation={[-Math.PI / 2, 0.28377548, 1e-8]}
                scale={[5.96410656, 5.96410656, 2.08078337]}
                userData={{ name: 'Cube.068' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube068_Material092_0.geometry}
                  material={materials['Material.092']}
                  userData={{ name: 'Cube.068_Material.092_0' }}
                />
              </group>
              <group
                position={[129.54119873, 46.5521965, -27.47589684]}
                rotation={[-Math.PI / 2, 0.28377552, Math.PI / 2]}
                scale={[12.4111042, 12.41110706, 12.41110706]}
                userData={{ name: 'Color-PewDiePie-Logo' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['Color-PewDiePie-Logo_Color-PewDiePie-Logo_0'].geometry}
                  material={materials['Material.074_27']}
                  userData={{ name: 'Color-PewDiePie-Logo_Color-PewDiePie-Logo_0' }}
                />
              </group>
              <group
                position={[111.41255188, 32.4466629, -27.40592003]}
                rotation={[Math.PI / 2, 9e-8, -Math.PI]}
                scale={[-42.88701248, 44.8205986, 22.90224648]}
                userData={{ name: 'Cube.069' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube069_Material093_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.069_Material.093_0' }}
                />
              </group>
              <group
                position={[83.02698517, 308.22509766, -282.19314575]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[9.85618973, 9.85618973, 4.8788743]}
                userData={{ name: 'Cylinder.013' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder013_Material094_0.geometry}
                  material={materials['Material.094']}
                  userData={{ name: 'Cylinder.013_Material.094_0' }}
                />
              </group>
              <group
                position={[84.51951599, 280.42373657, -282.19314575]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6.54355431, 6.54355431, 3.23909974]}
                userData={{ name: 'Cylinder.014' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder014_Material095_0.geometry}
                  material={materials['Material.088']}
                  userData={{ name: 'Cylinder.014_Material.095_0' }}
                />
              </group>
              <group
                position={[84.51951599, 254.30729675, -282.19314575]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[6.67004061, 6.67004061, 3.30171108]}
                userData={{ name: 'Cylinder.015' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder015_Material096_0.geometry}
                  material={materials['Material.088']}
                  userData={{ name: 'Cylinder.015_Material.096_0' }}
                />
              </group>
              <group
                position={[87.58583069, 202.48217773, -275.48571777]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[10.32542515, 8.38370609, 9.71771717]}
                userData={{ name: 'Text.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Text001_Material097_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Text.001_Material.097_0' }}
                />
              </group>
              <group
                position={[98.95756531, 38.35158539, -8.16156673]}
                rotation={[-Math.PI / 2, -0.1286833, 1e-8]}
                scale={[5.45257711, 4.94627142, 1.90907717]}
                userData={{ name: 'Cube.088' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube088_Material098_0.geometry}
                  material={materials['Material.098']}
                  userData={{ name: 'Cube.088_Material.098_0' }}
                />
              </group>
              <group
                position={[-33.39333344, 29.82614326, -26.83372498]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
                userData={{ name: 'BezierCurve.004' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve004_Material099_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.004_Material.099_0' }}
                />
              </group>
              <group
                position={[-266.84872437, 260.33532715, -432.75085449]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[7.66781664, 2.32363391, 5.23633194]}
                userData={{ name: 'Cube.070' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube070_Material100_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.070_Material.100_0' }}
                />
              </group>
              <group
                position={[-266.84872437, 260.33532715, -426.84283447]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[7.66781664, 2.32363391, 5.23633194]}
                userData={{ name: 'Cube.071' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube071_Material101_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.071_Material.101_0' }}
                />
              </group>
              <group
                position={[-266.84872437, 274.04226685, -426.64099121]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[7.66781664, 2.32363391, 5.23633194]}
                userData={{ name: 'Cube.082' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube082_Material101_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.082_Material.101_0' }}
                />
              </group>
              <group
                position={[-263.63272095, 248.73675537, -421.76037598]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={[3.07049751, 3.07049751, 5.45383072]}
                userData={{ name: 'Cylinder.016' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder016_Material102_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cylinder.016_Material.102_0' }}
                />
              </group>
              <group
                position={[87.65415955, 308.18771362, -282.26647949]}
                rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                scale={5.70255947}
                userData={{ name: 'BezierCircle' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCircle_Material104_0.geometry}
                  material={materials['Material.104']}
                  userData={{ name: 'BezierCircle_Material.104_0' }}
                />
              </group>
              <group
                position={[83.41278076, 25.9663105, 360.69610596]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={100}
                userData={{ name: 'BezierCurve.005' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve005_Material103_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.005_Material.103_0' }}
                />
              </group>
              <group
                position={[-275.73001099, 25.9663105, 569.7454834]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={100}
                userData={{ name: 'BezierCurve.006' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve006_Material106_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.006_Material.106_0' }}
                />
              </group>
              <group
                position={[-271.33932495, 25.9663105, 569.7454834]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={100}
                userData={{ name: 'BezierCurve.007' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve007_Material105_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.007_Material.105_0' }}
                />
              </group>
              <group
                position={[-280.43081665, 25.9663105, 28.49835777]}
                rotation={[Math.PI / 2, -1.9e-7, Math.PI / 2]}
                scale={100}
                userData={{ name: 'BezierCurve.008' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.BezierCurve008_Material107_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'BezierCurve.008_Material.107_0' }}
                />
              </group>
              <group
                position={[-138.59448242, 295.65393066, 300.40536499]}
                rotation={[-Math.PI / 2, -0.06981318, Math.PI / 2]}
                scale={[325.34155273, 4.0508194, 184.09069824]}
                userData={{ name: 'Cube.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube001_Material055_0.geometry}
                  material={materials['Material.055']}
                  userData={{ name: 'Cube.001_Material.055_0' }}
                />
              </group>
              <group
                position={[-146.7056427, 263.67810059, 300.40536499]}
                rotation={[-Math.PI / 2, -0.12217291, Math.PI / 2]}
                scale={[-325.3414917, 14.74692345, 152.85322571]}
                userData={{ name: 'Cube.002' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube002_Material044_0.geometry}
                  material={materials['Material.044']}
                  userData={{ name: 'Cube.002_Material.044_0' }}
                />
              </group>
              <group
                position={[-142.04046631, 164.81265259, 596.08050537]}
                rotation={[0.44116908, -1.28418151, 0.44080623]}
                scale={[80.68906403, 80.6890564, 80.68906403]}
                userData={{ name: 'gallerymodel' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.gallerymodel_gallerymodel_0.geometry}
                  material={materials['Material.074_28']}
                  userData={{ name: 'gallerymodel_gallerymodel_0' }}
                />
              </group>
              <group
                position={[-157.13122559, 447.65158081, 300.40536499]}
                rotation={[-Math.PI / 2, -0.06981318, Math.PI / 2]}
                scale={[325.34155273, 4.0508194, 31.03392029]}
                userData={{ name: 'Cube.003' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube003_Material001_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Cube.003_Material.001_0' }}
                />
              </group>
              <group
                position={[-153.70526123, 194.9165802, 83.02733612]}
                rotation={[1.57199344, -1.44152906, 1.56678481]}
                scale={[113.03370667, 113.03370667, 113.03368378]}
                userData={{ name: 'bg2' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.bg2_bg2_0.geometry}
                  material={materials['Material.074_29']}
                  userData={{ name: 'bg2_bg2_0' }}
                />
              </group>
              <group
                position={[-136.17652893, 300.13247681, 300.40536499]}
                rotation={[-Math.PI / 2, 1.50098311, Math.PI / 2]}
                scale={[331.6211853, 348.06524658, 331.6211853]}
                userData={{ name: 'MY SCREEN' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.MY_SCREEN_MY_SCREEN_0.geometry}
                  material={materials['Material.074_30']}
                  userData={{ name: 'MY SCREEN_MY SCREEN_0' }}
                />
              </group>
              <group
                position={[-161.54264832, 449.44662476, 82.08215332]}
                rotation={[1.57078843, -1.50098319, 1.57078841]}
                scale={[23.68860054, 23.68860626, 23.68860626]}
                userData={{ name: 'gigabyte-logo' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['gigabyte-logo_gigabyte-logo_0'].geometry}
                  material={materials['Material.074_31']}
                  userData={{ name: 'gigabyte-logo_gigabyte-logo_0' }}
                />
              </group>
              <group
                position={[-122.05940247, 122.82362366, 301.59841919]}
                rotation={[-Math.PI / 2, 1.50098311, Math.PI / 2]}
                scale={17.8398037}
                userData={{ name: 'gigabyte-logo.001' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['gigabyte-logo001_gigabyte-logo_0'].geometry}
                  material={materials['Material.074_31']}
                  userData={{ name: 'gigabyte-logo.001_gigabyte-logo_0' }}
                />
              </group>
              <group
                position={[-148.74098206, 180.96983337, 299.24612427]}
                rotation={[-Math.PI / 2, -0.06981318, Math.PI / 2]}
                scale={[167.59892273, 17.79327965, 193.49797058]}
                userData={{ name: 'Cube.004' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube004_Material002_0.geometry}
                  material={materials['Material.002']}
                  userData={{ name: 'Cube.004_Material.002_0' }}
                />
              </group>
              <group
                position={[-186.5324707, 291.56369019, 297.42510986]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[16.31993866, 28.81181908, 12.93589211]}
                userData={{ name: 'Cube.005' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube005_Material003_0.geometry}
                  material={materials['Material.003']}
                  userData={{ name: 'Cube.005_Material.003_0' }}
                />
              </group>
              <group
                position={[-202.95593262, -64.8224411, 300.40536499]}
                rotation={[-Math.PI / 2, -0.06981318, Math.PI / 2]}
                scale={[40.58772659, 16.64016724, 531.60827637]}
                userData={{ name: 'Cube.006' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube006_Material043_0.geometry}
                  material={materials['Material.043']}
                  userData={{ name: 'Cube.006_Material.043_0' }}
                />
              </group>
              <group
                position={[-213.01782227, 35.33295822, 296.05508423]}
                rotation={[-Math.PI / 2, 4e-8, Math.PI / 2]}
                scale={[-193.84959412, 54.11582184, 9.32083225]}
                userData={{ name: 'Cube.007' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube007_Material037_0.geometry}
                  material={materials['Material.037']}
                  userData={{ name: 'Cube.007_Material.037_0' }}
                />
              </group>
              <group
                position={[-80.19874573, 31.64809418, 453.14889526]}
                rotation={[-Math.PI / 2, -3.3e-7, 1.24923491]}
                scale={[49.07019806, 108.7794342, 5.64813375]}
                userData={{ name: 'Cube.008' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube008_Material036_0.geometry}
                  material={materials['Material.039']}
                  userData={{ name: 'Cube.008_Material.036_0' }}
                />
              </group>
              <group
                position={[-80.19878387, 31.64809418, 163.79450989]}
                rotation={[-Math.PI / 2, -9e-8, 1.86104262]}
                scale={[49.07019806, 108.77944183, 5.64813375]}
                userData={{ name: 'Cube.009' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube009_Material039_0.geometry}
                  material={materials['Material.039']}
                  userData={{ name: 'Cube.009_Material.039_0' }}
                />
              </group>
              <group
                position={[-181.14555359, 31.63688278, 295.7958374]}
                rotation={[-Math.PI / 2, 0, 3.13555169]}
                scale={[43.41202927, 96.2363205, 4.99686003]}
                userData={{ name: 'Cube.010' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube010_Material006_0.geometry}
                  material={materials['Material.006']}
                  userData={{ name: 'Cube.010_Material.006_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_8' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_8_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_10' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10_Tastatur_Unterseite_0.geometry}
                  material={materials.Tastatur_Unterseite}
                  userData={{ name: 'Object_10_Tastatur_Unterseite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_12' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12_Tastatur_Unterseite_0.geometry}
                  material={materials.Tastatur_Unterseite}
                  userData={{ name: 'Object_12_Tastatur_Unterseite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_14' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_14_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_16' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_16_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_18' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_18_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_20' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_20_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_22' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_22_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_24' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_24_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_26' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_26_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_28' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_28_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_30' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30_Material007_0.geometry}
                  material={materials['Material.007']}
                  userData={{ name: 'Object_30_Material.007_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_32' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_32_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_34' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34_Material004_0.geometry}
                  material={materials['Material.004']}
                  userData={{ name: 'Object_34_Material.004_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_36' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_36_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_38' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_38_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_40' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_40_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_42' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_42_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 33.24464035, 403.08636475]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[91.41484833, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_44' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44_Tastatur_Seite_0.geometry}
                  material={materials.Tastatur_Seite}
                  userData={{ name: 'Object_44_Tastatur_Seite_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_47' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_47_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_49' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_49_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_51' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_51_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_53' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_53_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_55' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_55_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_57' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_57_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_59' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_59_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_61' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_61_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_63' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_63_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_65' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_65_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_67' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_67_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_69' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_69_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_71' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_71_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_73' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_73_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_75' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_75_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_77' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_77_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_79' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_79_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_81' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_81_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_83' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_83_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_85' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_85_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_87' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_87_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_89' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_89_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_91' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_91_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_93' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_93_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_95' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_95_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_97' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_97_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_99' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_99_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_101' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_101_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_103' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_103_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_105' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_105_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_107' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_107_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_109' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_109_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_111' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_111_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_113' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_113_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_115' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_115_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_117' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_117_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_119' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_119_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_121' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_121_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_123' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_123_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_125' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_125_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_125_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70851135, 32.60113525, 400.77029419]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[154.1346283, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_127' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_127_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 385.79162598]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_129' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_129_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_131' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_131_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_133' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_133_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_133_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_135' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_135_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_135_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_137' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_137_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_139' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_139_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_139_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_141' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_141_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_143' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_143_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_143_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_145' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_145_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_145_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_147' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_147_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_147_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_149' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_149_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_149_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_151' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_151_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_151_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_153' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_153_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_153_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_155' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_155_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_155_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_157' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_157_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_157_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_159' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_159_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_159_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_161' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_161_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_161_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_163' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_163_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_163_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_165' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_165_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_165_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_167' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_167_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_167_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_169' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_169_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_169_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_171' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_171_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_171_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_173' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_173_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_173_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_175' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_175_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_175_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_177' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_177_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_177_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_179' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_179_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_179_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_181' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_181_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_181_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_183' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_183_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_183_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_185' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_185_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_185_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_187' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_187_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_187_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_189' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_189_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_189_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_191' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_191_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_191_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_193' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_193_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_193_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_195' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_195_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_195_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_197' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_197_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_197_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_199' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_199_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_199_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_201' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_201_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_201_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_203' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_203_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_203_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70852661, 32.57765961, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_205' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_205_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_205_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_207' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_207_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_207_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_209' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_209_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_209_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_211' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_211_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_211_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_213' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_213_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_213_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_215' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_215_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_215_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_217' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_217_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_217_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_219' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_219_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_219_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70851135, 32.60113525, 400.77029419]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[154.1346283, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_221' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_221_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_221_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_223' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_223_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_223_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_225' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_225_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_225_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70852661, 32.43153381, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_227' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_227_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_227_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_229' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_229_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_229_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_231' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_231_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_231_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_233' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_233_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_233_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_235' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_235_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_235_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_237' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_237_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_237_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_239' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_239_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_239_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_241' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_241_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_241_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_243' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_243_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_243_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70852661, 32.60113525, 289.94110107]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[142.88983154, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_245' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_245_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_245_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_247' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_247_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_247_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_249' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_249_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_249_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_251' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_251_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_251_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_253' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_253_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_253_Material.057_0' }}
                />
              </group>
              <group
                position={[129.14137268, 32.6011467, 395.13369751]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[79.31445313, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_255' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_255_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_255_Material.057_0' }}
                />
              </group>
              <group
                position={[129.14137268, 32.6011467, 395.13369751]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[79.31445313, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_257' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_257_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_257_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 385.74856567]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_259' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_259_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_259_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 385.71777344]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_261' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_261_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_261_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 385.52600098]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_263' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_263_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_263_Material.060_0' }}
                />
              </group>
              <group
                position={[125.98516083, 34.7924118, 402.73141479]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_265' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_265_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_265_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_267' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_267_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_267_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_269' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_269_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_269_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_271' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_271_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_271_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_273' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_273_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_273_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_275' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_275_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_275_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_277' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_277_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_277_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_279' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_279_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_279_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_281' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_281_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_281_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_283' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_283_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_283_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_285' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_285_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_285_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_287' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_287_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_287_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_289' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_289_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_289_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_291' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_291_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_291_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_293' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_293_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_293_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_295' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_295_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_295_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_297' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_297_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_297_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_299' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_299_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_299_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_301' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_301_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_301_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_303' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_303_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_303_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_305' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_305_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_305_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_307' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_307_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_307_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_309' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_309_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_309_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_311' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_311_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_311_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_313' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_313_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_313_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_315' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_315_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_315_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_317' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_317_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_317_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_319' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_319_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_319_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_321' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_321_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_321_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_323' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_323_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_323_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_325' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_325_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_325_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_327' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_327_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_327_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_329' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_329_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_329_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_331' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_331_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_331_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_333' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_333_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_333_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_335' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_335_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_335_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_337' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_337_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_337_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_339' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_339_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_339_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_341' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_341_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_341_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_343' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_343_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_343_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_345' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_345_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_345_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_347' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_347_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_347_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_349' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_349_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_349_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_351' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_351_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_351_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_353' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_353_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_353_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_355' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_355_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_355_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_357' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_357_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_357_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_359' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_359_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_359_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_361' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_361_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_361_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_363' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_363_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_363_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_365' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_365_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_365_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_367' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_367_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_367_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_369' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_369_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_369_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_371' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_371_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_371_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_373' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_373_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_373_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_375' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_375_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_375_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_377' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_377_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_377_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_379' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_379_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_379_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_381' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_381_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_381_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_383' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_383_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_383_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_385' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_385_Material069_0.geometry}
                  material={materials['Material.074_38']}
                  userData={{ name: 'Object_385_Material.069_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_387' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_387_Material005_0.geometry}
                  material={materials['Material.074_32']}
                  userData={{ name: 'Object_387_Material.005_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_389' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_389_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_389_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_391' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_391_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_391_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_393' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_393_Material068_0.geometry}
                  material={materials['Material.074_37']}
                  userData={{ name: 'Object_393_Material.068_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_395' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_395_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_395_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_397' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_397_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_397_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_399' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_399_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_399_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70852661, 32.60113525, 289.94110107]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[142.88983154, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_401' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_401_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_401_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_403' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_403_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_403_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_405' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_405_Material060_0.geometry}
                  material={materials['Material.074_34']}
                  userData={{ name: 'Object_405_Material.060_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_407' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_407_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_407_Material.070_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_409' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_409_Material067_0.geometry}
                  material={materials['Material.074_36']}
                  userData={{ name: 'Object_409_Material.067_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_411' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_411_Tasten_2_0.geometry}
                  material={materials.Tasten_2}
                  userData={{ name: 'Object_411_Tasten_2_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_413' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_413_Material066_0.geometry}
                  material={materials['Material.074_35']}
                  userData={{ name: 'Object_413_Material.066_0' }}
                />
              </group>
              <group
                position={[147.70854187, 32.60114288, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41484833, 91.4148941, 91.4148941]}
                userData={{ name: 'Object_415' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_415_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_415_Material.057_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_418' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_418_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_418_Tasten_0' }}
                />
              </group>
              <group
                position={[164.91656494, 31.11358833, 386.96435547]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[67.56851959, 91.41490173, 91.41490173]}
                userData={{ name: 'Object_420' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_420_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_420_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_422' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_422_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_422_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_424' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_424_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_424_Tasten_0' }}
                />
              </group>
              <group
                position={[130.24081421, 34.60498428, 390.5765686]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[72.76605225, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_426' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_426_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_426_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_428' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_428_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_428_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_430' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_430_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_430_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_432' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_432_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_432_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_434' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_434_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_434_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_436' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_436_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_436_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 402.92755127]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_438' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_438_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_438_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_440' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_440_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_440_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_442' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_442_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_442_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_444' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_444_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_444_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_446' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_446_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_446_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_448' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_448_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_448_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_450' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_450_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_450_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_452' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_452_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_452_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_454' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_454_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_454_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_456' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_456_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_456_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_458' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_458_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_458_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_460' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_460_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_460_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_462' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_462_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_462_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_464' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_464_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_464_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_466' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_466_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_466_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_468' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_468_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_468_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_470' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_470_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_470_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_472' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_472_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_472_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_474' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_474_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_474_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_476' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_476_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_476_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_478' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_478_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_478_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_480' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_480_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_480_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_482' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_482_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_482_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_484' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_484_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_484_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_486' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_486_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_486_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_488' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_488_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_488_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_490' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_490_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_490_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_492' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_492_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_492_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_494' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_494_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_494_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_496' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_496_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_496_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_498' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_498_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_498_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_500' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_500_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_500_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_502' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_502_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_502_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_504' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_504_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_504_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_506' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_506_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_506_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_508' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_508_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_508_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_510' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_510_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_510_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_512' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_512_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_512_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_514' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_514_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_514_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_516' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_516_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_516_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_518' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_518_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_518_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_520' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_520_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_520_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_522' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_522_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_522_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_524' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_524_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_524_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_526' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_526_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_526_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 385.85632324]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_528' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_528_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_528_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_530' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_530_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_530_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_532' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_532_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_532_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_534' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_534_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_534_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_536' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_536_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_536_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_538' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_538_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_538_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_540' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_540_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_540_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_542' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_542_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_542_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_544' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_544_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_544_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_546' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_546_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_546_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_548' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_548_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_548_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_550' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_550_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_550_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_552' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_552_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_552_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_554' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_554_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_554_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_556' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_556_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_556_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_558' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_558_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_558_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_560' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_560_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_560_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_562' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_562_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_562_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_564' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_564_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_564_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_566' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_566_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_566_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_568' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_568_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_568_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_570' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_570_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_570_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_572' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_572_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_572_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_574' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_574_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_574_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_576' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_576_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_576_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_578' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_578_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_578_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_580' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_580_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_580_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_582' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_582_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_582_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_584' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_584_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_584_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_586' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_586_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_586_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_588' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_588_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_588_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_590' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_590_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_590_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_592' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_592_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_592_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_594' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_594_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_594_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_596' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_596_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_596_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_598' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_598_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_598_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_600' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_600_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_600_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_602' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_602_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_602_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.58149338, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_604' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_604_Material071_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_604_Material.071_0' }}
                />
              </group>
              <group
                position={[147.70852661, 34.29640579, 259.27456665]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[157.89584351, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_606' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_606_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_606_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_608' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_608_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_608_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_610' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_610_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_610_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_612' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_612_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_612_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_614' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_614_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_614_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_616' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_616_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_616_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_618' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_618_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_618_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_620' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_620_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_620_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_622' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_622_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_622_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_624' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_624_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_624_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_626' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_626_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_626_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_628' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_628_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_628_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_630' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_630_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_630_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_632' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_632_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_632_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_634' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_634_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_634_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_636' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_636_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_636_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_638' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_638_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_638_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_640' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_640_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_640_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_642' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_642_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_642_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_644' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_644_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_644_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_646' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_646_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_646_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_648' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_648_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_648_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_650' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_650_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_650_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_652' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_652_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_652_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_654' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_654_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_654_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_656' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_656_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_656_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_658' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_658_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_658_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_660' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_660_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_660_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_662' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_662_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_662_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_664' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_664_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_664_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_666' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_666_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_666_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_668' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_668_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_668_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_670' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_670_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_670_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_672' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_672_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_672_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_674' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_674_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_674_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_676' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_676_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_676_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_678' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_678_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_678_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_680' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_680_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_680_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_682' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_682_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_682_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_684' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_684_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_684_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_686' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_686_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_686_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_688' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_688_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_688_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_690' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_690_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_690_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_692' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_692_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_692_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_694' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_694_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_694_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_696' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_696_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_696_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_698' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_698_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_698_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_700' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_700_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_700_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_702' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_702_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_702_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_704' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_704_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_704_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_706' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_706_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_706_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_708' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_708_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_708_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_710' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_710_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_710_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_712' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_712_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_712_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_714' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_714_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_714_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_716' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_716_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_716_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_718' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_718_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_718_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_720' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_720_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_720_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_722' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_722_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_722_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_724' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_724_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_724_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_726' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_726_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_726_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_728' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_728_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_728_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_730' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_730_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_730_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_732' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_732_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_732_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_734' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_734_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_734_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_736' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_736_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_736_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_738' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_738_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_738_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_740' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_740_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_740_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_742' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_742_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_742_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_744' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_744_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_744_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_746' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_746_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_746_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_748' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_748_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_748_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_750' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_750_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_750_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_752' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_752_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_752_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_754' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_754_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_754_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_756' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_756_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_756_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_758' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_758_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_758_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_760' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_760_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_760_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_762' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_762_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_762_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_764' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_764_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_764_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_766' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_766_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_766_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_768' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_768_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_768_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_770' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_770_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_770_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_772' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_772_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_772_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_774' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_774_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_774_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_776' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_776_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_776_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_778' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_778_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_778_Tasten_0' }}
                />
              </group>
              <group
                position={[147.70854187, 34.60497665, 403.08642578]}
                rotation={[-Math.PI / 2, -1.48051612, Math.PI / 2]}
                scale={[91.41486359, 91.41487885, 91.41487885]}
                userData={{ name: 'Object_780' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_780_Tasten_0.geometry}
                  material={materials['Material.012']}
                  userData={{ name: 'Object_780_Tasten_0' }}
                />
              </group>
              <group
                position={[101.60081482, 40.62207794, 244.00744629]}
                rotation={[-Math.PI / 2, 0.0776536, Math.PI / 2]}
                scale={[21.89258575, 21.89258766, 21.89258766]}
                userData={{ name: 'OnTheFly-bg_422' }}>
                <group position={[0, 0, 6e-8]} scale={0.99999994} userData={{ name: 'Object_782' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['Object_782_OnTheFly-bg_0'].geometry}
                    material={materials['Material.074_40']}
                    userData={{ name: 'Object_782_OnTheFly-bg_0' }}
                  />
                </group>
              </group>
              <group
                position={[174.16149902, 46.92334747, 307.71350098]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[49.82361221, 49.82361603, 49.82361603]}
                userData={{ name: 'Object_784' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_784_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_784_Material.057_0' }}
                />
              </group>
              <group
                position={[191.37669373, 45.22822189, 324.98468018]}
                rotation={[-Math.PI / 2, 1.5e-7, -Math.PI]}
                scale={[49.82362747, 49.82362366, 49.82361603]}
                userData={{ name: 'Object_786' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_786_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_786_Material.057_0' }}
                />
              </group>
              <group
                position={[159.01754761, 47.31952667, 359.93609619]}
                rotation={[-Math.PI / 2, 1.5e-7, -Math.PI]}
                scale={[19.6082077, 19.60820389, 19.60820389]}
                userData={{ name: 'Plane.003_425' }}>
                <group
                  position={[0, -0.00000191, 1.4e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_788' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_788_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_788_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[191.37667847, 45.22822189, 290.09939575]}
                rotation={[-Math.PI / 2, 1.3e-7, -1.3e-7]}
                scale={[49.82362747, 49.82362366, 49.82361603]}
                userData={{ name: 'Object_790' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_790_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_790_Material.057_0' }}
                />
              </group>
              <group
                position={[190.940979, 45.22822189, 307.68377686]}
                rotation={[-Math.PI / 2, 9.9e-7, -1.53752482]}
                scale={[52.61216736, 52.61217499, 52.61215973]}
                userData={{ name: 'Object_792' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_792_Material057_0.geometry}
                  material={materials['Material.074_33']}
                  userData={{ name: 'Object_792_Material.057_0' }}
                />
              </group>
              <group
                position={[139.3813324, 50.46008301, 591.25964355]}
                rotation={[-Math.PI / 2, 1.3e-7, -Math.PI]}
                scale={[29.26561737, 29.26561546, 29.26561737]}
                userData={{ name: 'Object_794' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_794_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_794_Material.070_0' }}
                />
              </group>
              <group
                position={[141.10798645, 50.46008682, 586.29034424]}
                rotation={[-Math.PI / 2, 1.3e-7, -1.3e-7]}
                scale={[29.265625, 29.26561737, 29.26561737]}
                userData={{ name: 'Object_796' }}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_796_Material070_0.geometry}
                  material={materials['Material.074_39']}
                  userData={{ name: 'Object_796_Material.070_0' }}
                />
              </group>
              <group
                position={[122.70124817, 53.5329361, 358.45635986]}
                rotation={[-Math.PI / 2, 0.16312638, -Math.PI]}
                scale={[19.60820389, 19.60820198, 19.60820389]}
                userData={{ name: 'Plane.008_430' }}>
                <group
                  position={[9.5e-7, -0.00000191, 0]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_798' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_798_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_798_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[190.98551941, 44.57741928, 567.47930908]}
                rotation={[-Math.PI / 2, -0.08910623, -Math.PI]}
                scale={8.87175369}
                userData={{ name: 'Plane.087_431' }}>
                <group
                  position={[-0.00000191, 0.00000381, 2.4e-7]}
                  rotation={[0, -1e-8, 0]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_800' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_800_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_800_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[190.86802673, 44.6282196, 565.25457764]}
                rotation={[-Math.PI / 2, -0.08910623, -Math.PI]}
                scale={8.87175369}
                userData={{ name: 'Plane.088_432' }}>
                <group
                  position={[-0.00000191, 0.00000381, -1.2e-7]}
                  rotation={[0, -1e-8, 0]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_802' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_802_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_802_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.49043274, 44.41950226, 565.41204834]}
                rotation={[-Math.PI / 2, -0.08910623, -Math.PI]}
                scale={8.87175369}
                userData={{ name: 'Plane.089_433' }}>
                <group
                  position={[0.00000191, 0, -3.6e-7]}
                  rotation={[0, -1e-8, 0]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_804' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_804_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_804_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.40278625, 44.40128326, 567.47186279]}
                rotation={[-Math.PI / 2, -0.08910623, -Math.PI]}
                scale={8.87175369}
                userData={{ name: 'Plane.090_434' }}>
                <group
                  position={[0, 0.00000381, 1.2e-7]}
                  rotation={[0, -1e-8, 0]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_806' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_806_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_806_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.84440613, 50.58172989, 568.86975098]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text_435' }}>
                <group
                  position={[0, -0.00000191, 9e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_808' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_808_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_808_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 552.0098877]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.001_436' }}>
                <group position={[-0.00000763, 0, -5e-7]} userData={{ name: 'Object_810' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_810_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_810_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 532.02557373]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.002_437' }}>
                <group position={[0, 0, -5e-7]} userData={{ name: 'Object_812' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_812_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_812_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 514.78375244]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.003_438' }}>
                <group position={[-0.00000763, 0, -5e-7]} userData={{ name: 'Object_814' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_814_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_814_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 498.13827515]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.004_439' }}>
                <group position={[-0.00000763, 0, -5e-7]} userData={{ name: 'Object_816' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_816_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_816_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 480.75231934]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.005_440' }}>
                <group position={[-0.00000763, 0, -5e-7]} userData={{ name: 'Object_818' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_818_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_818_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 463.61550903]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.006_441' }}>
                <group position={[0, 0, -5e-7]} userData={{ name: 'Object_820' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_820_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_820_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.03799438, 50.58172989, 443.7456665]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.71255779}
                userData={{ name: 'Text.007_442' }}>
                <group position={[-0.00000763, 0, -5e-7]} userData={{ name: 'Object_822' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_822_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_822_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.64889526, 50.88457489, 427.97769165]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={6.15839672}
                userData={{ name: 'Text.008_443' }}>
                <group position={[0.00000763, 0, 2.3e-7]} userData={{ name: 'Object_824' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_824_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_824_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[142.09455872, 50.95511627, 409.21594238]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={6.15839672}
                userData={{ name: 'Text.009_444' }}>
                <group position={[0, 0, 2.4e-7]} userData={{ name: 'Object_826' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_826_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_826_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.54900742, 561.97143555]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.010_445' }}>
                <group
                  position={[0, 0, -5e-7]}
                  scale={1.00000012}
                  userData={{ name: 'Object_828' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_828_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_828_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.43692017, 543.87518311]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.011_446' }}>
                <group
                  position={[0.00000763, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_830' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_830_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_830_Material.069_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.43692017, 528.22668457]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.012_447' }}>
                <group
                  position={[-0.00000763, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_832' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_832_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_832_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.43692017, 509.56359863]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.013_448' }}>
                <group
                  position={[0, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_834' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_834_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_834_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.35330963, 494.30532837]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.014_449' }}>
                <group
                  position={[-0.00000763, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_836' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_836_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_836_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[156.65711975, 48.63592529, 594.00311279]}
                rotation={[-1.58771241, 8.5e-7, Math.PI / 2]}
                scale={2.69176006}
                userData={{ name: 'Text.015_450' }}>
                <group
                  position={[-0.00003052, 0.00000763, -0.00000167]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_838' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_838_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_838_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.64385986, 45.64980316, 594.79852295]}
                rotation={[-Math.PI / 2, -0.11956088, Math.PI / 2]}
                scale={[3.12313223, 3.12313247, 3.12313247]}
                userData={{ name: 'Text.017_452' }}>
                <group scale={0.99999994} userData={{ name: 'Object_840' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_840_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_840_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.43692017, 475.97640991]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.020_455' }}>
                <group
                  position={[-0.00000763, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_842' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_842_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_842_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[157.21144104, 48.43692017, 455.62521362]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 5.27187777, 6.41432714]}
                userData={{ name: 'Text.021_456' }}>
                <group
                  position={[-0.00000763, -0.00000191, 4.3e-7]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_844' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_844_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_844_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.03039551, 48.43692017, 441.25991821]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.41432619, 6.41432714, 6.41432714]}
                userData={{ name: 'Text.022_457' }}>
                <group
                  position={[-0.00000763, 0, -3e-8]}
                  scale={1.00000012}
                  userData={{ name: 'Object_846' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_846_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_846_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[159.02734375, 48.63896561, 422.07058716]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[6.91493654, 6.9149375, 6.9149375]}
                userData={{ name: 'Text.023_458' }}>
                <group position={[0, 0, 2.3e-7]} userData={{ name: 'Object_848' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_848_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_848_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.02915192, 53.8866272, 594.92388916]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.98051262}
                userData={{ name: 'Text.025_460' }}>
                <group
                  position={[0.00001526, 0, 9.5e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[0.99999994, 1, 1]}
                  userData={{ name: 'Object_850' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_850_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_850_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.26929474, 483.90689087]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.026_461' }}>
                <group
                  position={[-0.00000763, 0.00000191, -7.2e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_852' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_852_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_852_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.4868927, 47.26929474, 501.88751221]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.027_462' }}>
                <group
                  position={[-0.00000763, 0.00000191, -4.8e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_854' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_854_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_854_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.26929474, 519.09472656]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.028_463' }}>
                <group
                  position={[0, 0.00000191, -7.2e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_856' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_856_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_856_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.26929474, 537.01409912]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.029_464' }}>
                <group
                  position={[0, 0.00000191, -7.2e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_858' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_858_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_858_Material.069_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.16625977, 554.65942383]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.030_465' }}>
                <group
                  position={[0, 0.00000191, -2.4e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_860' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_860_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_860_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.26929474, 467.98291016]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.031_466' }}>
                <group
                  position={[0, 0.00000191, -7.2e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_862' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_862_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_862_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.48690796, 47.26929474, 450.2833252]}
                rotation={[-Math.PI / 2, -0.09949677, Math.PI / 2]}
                scale={6.41432619}
                userData={{ name: 'Text.032_467' }}>
                <group
                  position={[-0.00000763, 0.00000191, -7.2e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1.00000012, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_864' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_864_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_864_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.44432831, 53.93135452, 578.0614624]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.038_473' }}>
                <group position={[0, 0.00000191, 9.5e-7]} userData={{ name: 'Object_866' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_866_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_866_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.05757141, 53.85054398, 561.22576904]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.16979074, 3.16979122, 3.16979122]}
                userData={{ name: 'Text.039_474' }}>
                <group
                  position={[0, 0, 9.5e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={0.99999994}
                  userData={{ name: 'Object_868' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_868_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_868_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.00793457, 53.02889252, 560.64025879]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.040_475' }}>
                <group position={[0, 0.00000191, 0]} userData={{ name: 'Object_870' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_870_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_870_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.64385986, 45.64980316, 359.94561768]}
                rotation={[-Math.PI / 2, -0.11956088, Math.PI / 2]}
                scale={[3.12313223, 3.12313247, 3.12313247]}
                userData={{ name: 'Text.053_488' }}>
                <group
                  position={[0.00000763, 0, 0]}
                  scale={0.99999994}
                  userData={{ name: 'Object_872' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_872_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_872_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[156.28501892, 46.93686295, 363.37927246]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={4.0060358}
                userData={{ name: 'Text.055_490' }}>
                <group position={[0, 0.00000381, -4.8e-7]} userData={{ name: 'Object_874' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_874_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_874_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.9046936, 543.3729248]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.057_492' }}>
                <group position={[0, -0.00000191, 9.5e-7]} userData={{ name: 'Object_876' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_876_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_876_Material.069_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43417358, 53.0830574, 543.25836182]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.058_493' }}>
                <group
                  position={[-0.00000763, 0.00000191, -0.00000143]}
                  userData={{ name: 'Object_878' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_878_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_878_Material.069_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.74461365, 525.76837158]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.059_494' }}>
                <group
                  position={[0.00001526, -0.00000381, 9.5e-7]}
                  userData={{ name: 'Object_880' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_880_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_880_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 52.92296982, 525.65148926]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.060_495' }}>
                <group position={[-0.00000763, 0, 9.5e-7]} userData={{ name: 'Object_882' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_882_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_882_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.73891449, 56.42401123, 595.2723999]}
                rotation={[-Math.PI / 2, 0.14062245, Math.PI / 2]}
                scale={[4.18351364, 4.18351412, 4.18351412]}
                userData={{ name: 'Text.061_496' }}>
                <group position={[0.00001526, 0, -4.8e-7]} userData={{ name: 'Object_884' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_884_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_884_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.85218811, 509.28488159]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.062_497' }}>
                <group position={[0, -0.00000381, 9.5e-7]} userData={{ name: 'Object_886' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_886_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_886_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 53.03054047, 508.771698]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.063_498' }}>
                <group position={[-0.00001526, 0, -9.5e-7]} userData={{ name: 'Object_888' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_888_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_888_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.36672211, 56.132061, 484.34060669]}
                rotation={[-Math.PI / 2, 0.15088733, Math.PI / 2]}
                scale={[4.5317812, 4.53178167, 4.53178167]}
                userData={{ name: 'Text.070_505' }}>
                <group
                  position={[0.00001526, -0.00000191, 0]}
                  rotation={[1e-8, 0, 0]}
                  scale={[0.99999988, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_890' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_890_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_890_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.20507813, 56.94178772, 513.08984375]}
                rotation={[-Math.PI / 2, 0.105316, Math.PI / 2]}
                scale={[4.45052814, 4.4505291, 4.4505291]}
                userData={{ name: 'Text.071_506' }}>
                <group
                  position={[-0.00000763, 0.00000191, -7.2e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_892' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_892_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_892_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.20507813, 56.94178772, 530.45532227]}
                rotation={[-Math.PI / 2, 0.105316, Math.PI / 2]}
                scale={[4.45052814, 4.4505291, 4.4505291]}
                userData={{ name: 'Text.072_507' }}>
                <group
                  position={[-0.00000763, 0.00000191, -7.2e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_894' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_894_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_894_Material.069_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.20507813, 56.94178772, 548.20251465]}
                rotation={[-Math.PI / 2, 0.105316, Math.PI / 2]}
                scale={[4.45052814, 4.4505291, 4.4505291]}
                userData={{ name: 'Text.073_508' }}>
                <group
                  position={[-0.00001526, 0.00000191, -7.2e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_896' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_896_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_896_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.20507813, 56.94178772, 565.17810059]}
                rotation={[-Math.PI / 2, 0.105316, Math.PI / 2]}
                scale={[4.45052814, 4.4505291, 4.4505291]}
                userData={{ name: 'Text.074_509' }}>
                <group
                  position={[0, 0.00000191, -7.2e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_898' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_898_Material005_0.geometry}
                    material={materials['Material.074_32']}
                    userData={{ name: 'Object_898_Material.005_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.36672211, 56.15393066, 466.89434814]}
                rotation={[-Math.PI / 2, 0.15088733, Math.PI / 2]}
                scale={[4.5317812, 4.53178167, 4.53178167]}
                userData={{ name: 'Text.079_514' }}>
                <group
                  position={[0.00000763, 0, 0]}
                  rotation={[1e-8, 0, 0]}
                  scale={[0.99999988, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_900' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_900_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_900_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.36672211, 56.15393066, 449.36746216]}
                rotation={[-Math.PI / 2, 0.15088733, Math.PI / 2]}
                scale={[4.5317812, 4.53178167, 4.53178167]}
                userData={{ name: 'Text.080_515' }}>
                <group
                  position={[0.00000763, 0, 0]}
                  rotation={[1e-8, 0, 0]}
                  scale={[0.99999988, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_902' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_902_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_902_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.36672211, 56.15393066, 431.9487915]}
                rotation={[-Math.PI / 2, 0.15088733, Math.PI / 2]}
                scale={[4.5317812, 4.53178167, 4.53178167]}
                userData={{ name: 'Text.081_516' }}>
                <group
                  position={[0.00000763, 0, 0]}
                  rotation={[1e-8, 0, 0]}
                  scale={[0.99999988, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_904' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_904_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_904_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.47316742, 56.12112808, 402.97323608]}
                rotation={[-Math.PI / 2, 0.16055258, Math.PI / 2]}
                scale={[4.50132751, 4.50132847, 4.50132847]}
                userData={{ name: 'Text.082_517' }}>
                <group
                  position={[-0.00000763, 0, 7.2e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_906' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_906_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_906_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.35198975, 56.18399811, 386.48110962]}
                rotation={[-Math.PI / 2, 0.19630917, Math.PI / 2]}
                scale={[4.18931484, 4.18931532, 4.18931532]}
                userData={{ name: 'Text.083_518' }}>
                <group
                  position={[0, 0.00000191, 4.8e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_908' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_908_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_908_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.35198975, 56.18399811, 368.47247314]}
                rotation={[-Math.PI / 2, 0.19630917, Math.PI / 2]}
                scale={[4.18931484, 4.18931532, 4.18931532]}
                userData={{ name: 'Text.084_519' }}>
                <group
                  position={[0.00000763, 0.00000191, 4.8e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_910' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_910_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_910_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[101.35196686, 56.18399811, 351.34899902]}
                rotation={[-Math.PI / 2, 0.19630917, Math.PI / 2]}
                scale={[4.18931484, 4.18931532, 4.18931532]}
                userData={{ name: 'Text.085_520' }}>
                <group
                  position={[0.00000763, 0, -9.5e-7]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_912' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_912_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_912_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.85177612, 491.65100098]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.086_521' }}>
                <group
                  position={[-0.00001526, -0.00000381, -9.5e-7]}
                  userData={{ name: 'Object_914' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_914_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_914_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 53.03013229, 491.82400513]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.087_522' }}>
                <group position={[0, -0.00000191, 0]} userData={{ name: 'Object_916' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_916_Material068_0.geometry}
                    material={materials['Material.074_37']}
                    userData={{ name: 'Object_916_Material.068_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.82077789, 473.66394043]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.088_523' }}>
                <group
                  position={[-0.00000763, -0.00000381, 0.00000191]}
                  userData={{ name: 'Object_918' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_918_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_918_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 52.99912643, 473.40484619]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.089_524' }}>
                <group position={[-0.00000763, 0.00000191, 0]} userData={{ name: 'Object_920' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_920_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_920_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.4838028, 53.85144806, 456.47302246]}
                rotation={[-Math.PI / 2, 0.1644748, Math.PI / 2]}
                scale={[3.82158232, 3.82158184, 3.82158184]}
                userData={{ name: 'Text.090_525' }}>
                <group position={[0, -0.00000381, 9.5e-7]} userData={{ name: 'Object_922' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_922_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_922_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 53.02980042, 456.74624634]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.091_526' }}>
                <group position={[-0.00001526, 0.00000191, 0]} userData={{ name: 'Object_924' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_924_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_924_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[121.67271423, 54.09598923, 439.12200928]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={[3.82158232, 3.14163613, 3.82158184]}
                userData={{ name: 'Text.092_527' }}>
                <group
                  position={[-0.00000763, 0, 4.8e-7]}
                  rotation={[-1e-8, 0, 0]}
                  userData={{ name: 'Object_926' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_926_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_926_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[120.31279755, 54.21159363, 419.68740845]}
                rotation={[-Math.PI / 2, 0.16447489, -Math.PI / 2]}
                scale={[3.82158232, 3.14163613, 3.82158184]}
                userData={{ name: 'Text.093_528' }}>
                <group
                  position={[0, 0, -4.8e-7]}
                  scale={0.99999988}
                  userData={{ name: 'Object_928' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_928_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_928_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 53.03436661, 439.36080933]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.094_529' }}>
                <group position={[-0.00000763, 0, 0]} userData={{ name: 'Object_930' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_930_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_930_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[127.43415833, 53.02962112, 421.59118652]}
                rotation={[-Math.PI / 2, 0.16447468, Math.PI / 2]}
                scale={4.32622337}
                userData={{ name: 'Text.095_530' }}>
                <group position={[-0.00000763, 0, 0]} userData={{ name: 'Object_932' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_932_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_932_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[186.13475037, 46.57475281, 219.39630127]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={4.0060358}
                userData={{ name: 'Text.099_534' }}>
                <group position={[0, 0, -4.3e-7]} userData={{ name: 'Object_934' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_934_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_934_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[173.51959229, 46.99939346, 585.52423096]}
                rotation={[-1.63978039, 0.0000475, -0.00068554]}
                scale={[6.19664812, 8.41984653, 6.20915079]}
                userData={{ name: 'Text.135_570' }}>
                <group
                  position={[-0.00000381, -0.00000763, 9.5e-7]}
                  userData={{ name: 'Object_936' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_936_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_936_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 400.00888062]}
                rotation={[-1.57084382, -0.07850803, 1.57010835]}
                scale={[6.67205667, 4.93107939, 2.74238372]}
                userData={{ name: 'Text.136_571' }}>
                <group position={[0, -0.00000381, 4.8e-7]} userData={{ name: 'Object_938' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_938_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_938_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 434.853302]}
                rotation={[-1.57084382, -0.07850803, 1.57010835]}
                scale={[4.23990774, 4.93107843, 2.742383]}
                userData={{ name: 'Text.137_572' }}>
                <group
                  position={[-0.00000763, 0, 0.00000191]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_940' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_940_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_940_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[176.05154419, 46.78771973, 584.42993164]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[1.86133146, 6.96778536, 6.96778536]}
                userData={{ name: 'Text.138_573' }}>
                <group
                  position={[0, 0, -4.8e-7]}
                  scale={1.00000012}
                  userData={{ name: 'Object_942' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_942_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_942_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 417.32489014]}
                rotation={[-1.57084382, -0.07850803, 1.57010835]}
                scale={[4.23990774, 4.93107843, 2.742383]}
                userData={{ name: 'Text.139_574' }}>
                <group
                  position={[-0.00000763, -0.00000763, 0.00000143]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_944' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_944_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_944_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[126.21009064, 53.6651535, 253.13334656]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.140_575' }}>
                <group
                  position={[0, 0, 2.5e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_946' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_946_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_946_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.21870422, 53.89300537, 271.17224121]}
                rotation={[-Math.PI / 2, 0.21444698, Math.PI / 2]}
                scale={[2.70006943, 2.70006967, 2.70006967]}
                userData={{ name: 'Text.141_576' }}>
                <group
                  position={[0, 0.00000381, 9.5e-7]}
                  rotation={[1e-8, 0, 0]}
                  userData={{ name: 'Object_948' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_948_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_948_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.32383728, 45.45188522, 259.96655273]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={4.41908598}
                userData={{ name: 'Text.142_577' }}>
                <group position={[0, 0, -2.4e-7]} userData={{ name: 'Object_950' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_950_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_950_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[197.02304077, 45.61362839, 260.98995972]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[3.79220581, 3.792207, 3.792207]}
                userData={{ name: 'Text.143_578' }}>
                <group
                  position={[0.00000763, -0.00000763, 0.00000143]}
                  rotation={[-1e-8, 0, 0]}
                  scale={[0.99999994, 1, 1]}
                  userData={{ name: 'Object_952' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_952_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_952_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[184.7771759, 33.3195343, 601.23431396]}
                rotation={[-Math.PI / 2, 0.08985749, -Math.PI]}
                scale={[5.01155376, 3.8755064, 5.01155281]}
                userData={{ name: 'Text.144_579' }}>
                <group
                  position={[0, 0.00001526, -2.4e-7]}
                  scale={[0.99999994, 1, 0.99999988]}
                  userData={{ name: 'Object_954' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_954_Material072_0.geometry}
                    material={materials['Material.012']}
                    userData={{ name: 'Object_954_Material.072_0' }}
                  />
                </group>
              </group>
              <group
                position={[164.61962891, 35.13227463, 204.96691895]}
                rotation={[-Math.PI / 2, 0.08911201, 8e-8]}
                scale={3.12935519}
                userData={{ name: 'Text.145_580' }}>
                <group
                  position={[0, 0, -0.00000143]}
                  scale={[1, 1.00000012, 1]}
                  userData={{ name: 'Object_956' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_956_Material072_0.geometry}
                    material={materials['Material.012']}
                    userData={{ name: 'Object_956_Material.072_0' }}
                  />
                </group>
              </group>
              <group
                position={[189.41836548, 46.75699615, 488.8923645]}
                rotation={[-Math.PI / 2, -0.07038705, Math.PI / 2]}
                scale={[4.95076418, 15.56542587, 11.58833599]}
                userData={{ name: 'Text.146_581' }}>
                <group
                  position={[-0.00000763, 0, 0]}
                  scale={[0.99999994, 0.99999994, 0.99999988]}
                  userData={{ name: 'Object_958' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_958_Material066_0.geometry}
                    material={materials['Material.074_35']}
                    userData={{ name: 'Object_958_Material.066_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.32285309, 267.74502563]}
                rotation={[-Math.PI / 2, 0.07711966, Math.PI / 2]}
                scale={[4.07934523, 4.0793457, 4.0793457]}
                userData={{ name: 'Text.147_582' }}>
                <group position={[0, 0, 2.4e-7]} userData={{ name: 'Object_960' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_960_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_960_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[145.18632507, 50.32285309, 270.03369141]}
                rotation={[-Math.PI / 2, 0.07711966, Math.PI / 2]}
                scale={[2.49061966, 2.49062061, 2.49062061]}
                userData={{ name: 'Text.148_583' }}>
                <group position={[0, 0.00000381, 0.00000191]} userData={{ name: 'Object_962' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_962_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_962_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[145.18632507, 50.32285309, 234.87057495]}
                rotation={[-Math.PI / 2, 0.07711966, Math.PI / 2]}
                scale={[2.49061966, 2.49062061, 2.49062061]}
                userData={{ name: 'Text.149_584' }}>
                <group position={[0, 0.00000381, 0.00000191]} userData={{ name: 'Object_964' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_964_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_964_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[157.08648682, 48.54575348, 408.61831665]}
                rotation={[-1.57084382, -0.07850803, 1.57010835]}
                scale={[6.67205667, 4.93107939, 2.74238372]}
                userData={{ name: 'Text.150_585' }}>
                <group
                  position={[-0.00000381, -0.00000381, 4.8e-7]}
                  userData={{ name: 'Object_966' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_966_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_966_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.95478821, 48.54574966, 391.26965332]}
                rotation={[-1.57084364, -0.04317683, 1.57011015]}
                scale={[6.67205667, 4.93107939, 2.74238372]}
                userData={{ name: 'Text.151_586' }}>
                <group
                  position={[-0.00000381, 0, 0.00000167]}
                  scale={[1, 1.00000012, 1.00000012]}
                  userData={{ name: 'Object_968' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_968_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_968_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.36923218, 250.49256897]}
                rotation={[-Math.PI / 2, 0.07711966, Math.PI / 2]}
                scale={[4.07934523, 4.0793457, 4.0793457]}
                userData={{ name: 'Text.152_587' }}>
                <group position={[0.00000381, 0, -7.2e-7]} userData={{ name: 'Object_970' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_970_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_970_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.80537415, 47.35289001, 358.08096313]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[3.74894285, 1.6588192, 5.44937086]}
                userData={{ name: 'Text.153_588' }}>
                <group
                  position={[0, 0.00001526, 1e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_972' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_972_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_972_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.52870178, 47.35289764, 360.20516968]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.154_589' }}>
                <group
                  position={[0, 0.00000381, 0.00000105]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_974' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_974_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_974_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[138.80638123, 50.50963211, 591.89898682]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={[5.56814146, 5.56814241, 5.56814241]}
                userData={{ name: 'Text.155_590' }}>
                <group position={[-0.00000763, 0, -4.7e-7]} userData={{ name: 'Object_976' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_976_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_976_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.36923218, 233.01014709]}
                rotation={[-Math.PI / 2, 0.07711966, Math.PI / 2]}
                scale={[4.07934523, 4.0793457, 4.0793457]}
                userData={{ name: 'Text.156_591' }}>
                <group position={[0, 0, -7.2e-7]} userData={{ name: 'Object_978' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_978_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_978_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[143.95036316, 50.12162781, 251.21594238]}
                rotation={[-1.4936769, 1.4e-7, -5e-8]}
                scale={[2.4906199, 4.57714653, 2.50823617]}
                userData={{ name: 'Text.157_592' }}>
                <group
                  position={[-0.00000763, -0.00000381, -0.00000191]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_980' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_980_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_980_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[100.21073914, 56.32522583, 328.50500488]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.158_593' }}>
                <group position={[0, 0.00000381, 4.8e-7]} userData={{ name: 'Object_982' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_982_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_982_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[100.21073914, 56.32522583, 310.76239014]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.159_594' }}>
                <group position={[0, 0.00000381, 4.8e-7]} userData={{ name: 'Object_984' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_984_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_984_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[100.21073914, 56.32522583, 293.44415283]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.160_595' }}>
                <group
                  position={[-0.00000763, 0.00000381, 4.8e-7]}
                  userData={{ name: 'Object_986' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_986_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_986_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.19645691, 48.54575348, 268.31750488]}
                rotation={[-1.5708437, -0.04321811, 1.57011015]}
                scale={[5.11876297, 4.44418812, 2.47160244]}
                userData={{ name: 'Text.161_596' }}>
                <group
                  position={[0.00000381, 0.00000763, 0.00000143]}
                  scale={[0.99999988, 1, 1]}
                  userData={{ name: 'Object_988' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_988_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_988_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[162.31190491, 48.54574966, 268.01174927]}
                rotation={[-1.5708437, -0.04321811, 1.57011015]}
                scale={[3.21286845, 4.44418669, 2.47160244]}
                userData={{ name: 'Text.162_597' }}>
                <group position={[0, 0.00000381, 0]} userData={{ name: 'Object_990' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_990_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_990_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.19645691, 48.54575348, 250.90188599]}
                rotation={[-1.5708437, -0.04321811, 1.57011015]}
                scale={[5.11876297, 4.44418812, 2.47160244]}
                userData={{ name: 'Text.163_598' }}>
                <group
                  position={[0.00000381, 0, 9.5e-7]}
                  scale={[0.99999988, 1, 1]}
                  userData={{ name: 'Object_992' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_992_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_992_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[158.19645691, 48.54575348, 233.22363281]}
                rotation={[-1.5708437, -0.04321811, 1.57011015]}
                scale={[5.11876297, 4.44418812, 2.47160244]}
                userData={{ name: 'Text.164_599' }}>
                <group
                  position={[0.00000381, 0, 0.00000167]}
                  scale={[0.99999988, 1, 1]}
                  userData={{ name: 'Object_994' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_994_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_994_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[162.31190491, 48.54574966, 232.6932373]}
                rotation={[-1.5708437, -0.04321811, 1.57011015]}
                scale={[3.21286845, 4.44418669, 2.47160244]}
                userData={{ name: 'Text.165_600' }}>
                <group position={[0, 0.00000381, 0.00000238]} userData={{ name: 'Object_996' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_996_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_996_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[191.76898193, 45.45188522, 235.88261414]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[3.25155807, 3.25155926, 3.25155926]}
                userData={{ name: 'Text.166_601' }}>
                <group position={[0, -0.00000381, 9.5e-7]} userData={{ name: 'Object_998' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_998_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_998_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[139.97386169, 50.53956985, 592.7052002]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={2.45857596}
                userData={{ name: 'Text.167_602' }}>
                <group position={[0, 0, 2e-8]} userData={{ name: 'Object_1000' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1000_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1000_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[141.68286133, 50.50963211, 585.65093994]}
                rotation={[-Math.PI / 2, 1.6e-7, -Math.PI / 2]}
                scale={[5.56814146, 5.56814241, 5.56814241]}
                userData={{ name: 'Text.168_603' }}>
                <group position={[0, 0.00000191, -4e-7]} userData={{ name: 'Object_1002' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1002_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1002_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.51538086, 50.53956985, 584.8447876]}
                rotation={[-Math.PI / 2, 1.6e-7, -Math.PI / 2]}
                scale={2.45857596}
                userData={{ name: 'Text.169_604' }}>
                <group position={[0, -0.00000381, 5e-8]} userData={{ name: 'Object_1004' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1004_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1004_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.32383728, 45.45188522, 402.25897217]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={2.69837785}
                userData={{ name: 'Text.170_605' }}>
                <group
                  position={[0, 0, 9.5e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1006' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1006_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1006_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.32383728, 45.45188522, 377.97457886]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={2.69837785}
                userData={{ name: 'Text.171_606' }}>
                <group
                  position={[0, 0, 9.5e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1008' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1008_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1008_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.11471558, 45.45188522, 422.3739624]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={2.69837785}
                userData={{ name: 'Text.172_607' }}>
                <group
                  position={[-0.00001526, 0, 4.8e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1010' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1010_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_1010_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[176.05154419, 46.78771973, 581.64245605]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[1.86133146, 6.96778536, 6.96778536]}
                userData={{ name: 'Text.173_608' }}>
                <group
                  position={[-0.00003052, 0, -4.8e-7]}
                  scale={1.00000012}
                  userData={{ name: 'Object_1012' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1012_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1012_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[178.05625916, 46.78771973, 584.42993164]}
                rotation={[-1.50181234, 2.1e-7, -Math.PI]}
                scale={[2.69266844, 9.46765614, 6.98184681]}
                userData={{ name: 'Text.174_609' }}>
                <group
                  position={[0, 0, -4.8e-7]}
                  scale={[0.99999994, 1, 1]}
                  userData={{ name: 'Object_1014' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1014_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1014_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[178.05625916, 46.78771973, 582.62646484]}
                rotation={[-1.50181234, 2.1e-7, -Math.PI]}
                scale={[2.69266844, 9.46765614, 6.98184681]}
                userData={{ name: 'Text.175_610' }}>
                <group
                  position={[0, 0, 9.5e-7]}
                  scale={[0.99999994, 1, 1]}
                  userData={{ name: 'Object_1016' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1016_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1016_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[177.22296143, 46.78771973, 583.33868408]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[3.57236981, 6.96778536, 6.96778536]}
                userData={{ name: 'Text.176_611' }}>
                <group
                  position={[-0.00001526, 0, -1.2e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_1018' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1018_Material070_0.geometry}
                    material={materials['Material.074_39']}
                    userData={{ name: 'Object_1018_Material.070_0' }}
                  />
                </group>
              </group>
              <group
                position={[173.51959229, 47.0359726, 367.41500854]}
                rotation={[-1.56354642, 0.00004748, -0.00068522]}
                scale={[6.19664907, 11.14282799, 6.19700909]}
                userData={{ name: 'Text.177_612' }}>
                <group position={[0, -0.00000381, 3.6e-7]} userData={{ name: 'Object_1020' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1020_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1020_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[176.25715637, 47.09310913, 365.52767944]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[2.18831682, 6.19664478, 6.19664478]}
                userData={{ name: 'Text.178_613' }}>
                <group
                  position={[0.00001526, -0.00000191, 4.8e-7]}
                  scale={[0.99999988, 1, 1]}
                  userData={{ name: 'Object_1022' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1022_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1022_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[176.25715637, 47.09310913, 362.2505188]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[2.18831682, 6.19664478, 6.19664478]}
                userData={{ name: 'Text.179_614' }}>
                <group
                  position={[0, -0.00000191, 4.8e-7]}
                  scale={[0.99999988, 1, 1]}
                  userData={{ name: 'Object_1024' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1024_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1024_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[178.04000854, 47.09310913, 365.52767944]}
                rotation={[-1.50181234, 2.1e-7, -Math.PI]}
                scale={[2.39466548, 11.12473297, 6.22944164]}
                userData={{ name: 'Text.180_615' }}>
                <group
                  position={[0, 0, -4.8e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_1026' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1026_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1026_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[178.04000854, 47.09310913, 363.40740967]}
                rotation={[-1.50181234, 2.1e-7, -Math.PI]}
                scale={[2.39466548, 11.12473297, 6.22944164]}
                userData={{ name: 'Text.181_616' }}>
                <group
                  position={[0, 0, -9.5e-7]}
                  rotation={[1e-8, 0, 0]}
                  scale={[1, 1, 0.99999994]}
                  userData={{ name: 'Object_1028' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1028_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1028_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[177.29891968, 47.09310913, 364.24472046]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={[4.19993782, 6.19664478, 6.19664478]}
                userData={{ name: 'Text.182_617' }}>
                <group
                  position={[0, 0, 8.3e-7]}
                  scale={[0.99999994, 1, 1]}
                  userData={{ name: 'Object_1030' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1030_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1030_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.2243042, 53.64524841, 358.72543335]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.183_618' }}>
                <group position={[0.00000763, 0, -7.2e-7]} userData={{ name: 'Object_1032' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1032_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1032_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.2243042, 53.78228378, 328.50500488]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.184_619' }}>
                <group position={[0, -0.00000381, 0]} userData={{ name: 'Object_1034' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1034_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1034_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.2243042, 53.78228378, 311.13424683]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.185_620' }}>
                <group position={[-0.00000763, -0.00000381, 0]} userData={{ name: 'Object_1036' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1036_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1036_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.2243042, 53.78228378, 292.76785278]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.186_621' }}>
                <group position={[0.00000763, -0.00000381, 0]} userData={{ name: 'Object_1038' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1038_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1038_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[152.1118927, 49.61494064, 217.77520752]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.187_622' }}>
                <group
                  position={[0, 0.00000381, -0.00000102]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_1040' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1040_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1040_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[123.4098053, 53.50948715, 217.77520752]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.188_623' }}>
                <group
                  position={[0, 0, 1.8e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_1042' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1042_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1042_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.55778503, 328.6005249]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.189_624' }}>
                <group position={[0, -0.00000763, 0]} userData={{ name: 'Object_1044' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1044_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1044_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.55778503, 310.08901978]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.190_625' }}>
                <group position={[0, -0.00000763, 0]} userData={{ name: 'Object_1046' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1046_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1046_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[140.39271545, 50.55778503, 293.02920532]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={2.52184391}
                userData={{ name: 'Text.191_626' }}>
                <group position={[0.00000763, -0.00000763, 0]} userData={{ name: 'Object_1048' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1048_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1048_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[126.58975983, 53.6651535, 235.6444397]}
                rotation={[-Math.PI / 2, -4e-8, Math.PI / 2]}
                scale={5.44937086}
                userData={{ name: 'Text.192_627' }}>
                <group
                  position={[0, 0, 2.6e-7]}
                  scale={[1.00000012, 1, 1]}
                  userData={{ name: 'Object_1050' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1050_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1050_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[138.83164978, 50.65608597, 360.84170532]}
                rotation={[-Math.PI / 2, 0.16312631, Math.PI / 2]}
                scale={[2.98967171, 2.98967218, 2.98967218]}
                userData={{ name: 'Text.193_628' }}>
                <group
                  position={[-0.00000763, 0, 0.00000143]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1052' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1052_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1052_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[138.83164978, 50.51897049, 377.70513916]}
                rotation={[-Math.PI / 2, 0.04323848, Math.PI / 2]}
                scale={[2.98967171, 2.98967218, 2.98967218]}
                userData={{ name: 'Text.194_629' }}>
                <group
                  position={[-0.00000763, 0.00000381, -0.00000119]}
                  userData={{ name: 'Object_1054' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1054_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1054_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[138.83164978, 50.62509155, 395.77130127]}
                rotation={[-Math.PI / 2, 0.04323848, Math.PI / 2]}
                scale={[2.98967171, 2.98967218, 2.98967218]}
                userData={{ name: 'Text.195_630' }}>
                <group position={[0, 0.00000763, 7.2e-7]} userData={{ name: 'Object_1056' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1056_Material073_0.geometry}
                    material={materials['Material.073']}
                    userData={{ name: 'Object_1056_Material.073_0' }}
                  />
                </group>
              </group>
              <group
                position={[122.2243042, 53.89914703, 387.24560547]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={[4.68307686, 4.68307877, 4.68307877]}
                userData={{ name: 'Text.196_631' }}>
                <group
                  position={[0, -0.00000191, -0.00000191]}
                  scale={[0.99999994, 0.99999988, 0.99999988]}
                  userData={{ name: 'Object_1058' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1058_Material057_0.geometry}
                    material={materials['Material.074_33']}
                    userData={{ name: 'Object_1058_Material.057_0' }}
                  />
                </group>
              </group>
              <group
                position={[118.87957001, 54.41367722, 404.72622681]}
                rotation={[-Math.PI / 2, 0.16312642, Math.PI / 2]}
                scale={[4.68307686, 4.68307877, 4.68307877]}
                userData={{ name: 'Text.197_632' }}>
                <group
                  position={[0, 0, -9.5e-7]}
                  scale={[0.99999994, 0.99999988, 0.99999988]}
                  userData={{ name: 'Object_1060' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1060_Material060_0.geometry}
                    material={materials['Material.074_34']}
                    userData={{ name: 'Object_1060_Material.060_0' }}
                  />
                </group>
              </group>
              <group
                position={[178.58618164, 47.22291565, 251.21594238]}
                rotation={[-1.49361684, -0.03929846, 0.00303814]}
                scale={[2.49062037, 4.57714653, 2.50823593]}
                userData={{ name: 'Text.198_633' }}>
                <group
                  position={[0.00000763, 0.00000381, -9.5e-7]}
                  scale={[1.00000012, 1.00000012, 0.99999994]}
                  userData={{ name: 'Object_1062' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1062_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1062_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 250.74853516]}
                rotation={[-1.57084382, -0.07855004, 1.57010835]}
                scale={[4.72308254, 4.03809309, 2.73959661]}
                userData={{ name: 'Text.199_634' }}>
                <group
                  position={[0.00000763, -0.00000381, 0]}
                  scale={[0.99999988, 1, 0.99999994]}
                  userData={{ name: 'Object_1064' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1064_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1064_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 267.89801025]}
                rotation={[-1.57084382, -0.07855004, 1.57010835]}
                scale={[4.72308254, 4.03809309, 2.73959661]}
                userData={{ name: 'Text.200_635' }}>
                <group
                  position={[0.00000763, 0, 4.8e-7]}
                  scale={[0.99999988, 1, 0.99999994]}
                  userData={{ name: 'Object_1066' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1066_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_1066_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[180.14515686, 47.43604279, 269.12240601]}
                rotation={[-1.57084382, -0.07855004, 1.57010835]}
                scale={[3.03014874, 2.59068561, 1.75761998]}
                userData={{ name: 'Text.201_636' }}>
                <group
                  position={[-0.00000763, 0, -9.5e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1068' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1068_Material067_0.geometry}
                    material={materials['Material.074_36']}
                    userData={{ name: 'Object_1068_Material.067_0' }}
                  />
                </group>
              </group>
              <group
                position={[175.03382874, 47.0359726, 233.44607544]}
                rotation={[-1.57084382, -0.07855004, 1.57010835]}
                scale={[4.72308254, 4.03809309, 2.73959661]}
                userData={{ name: 'Text.202_637' }}>
                <group
                  position={[0.00000763, 0.00000381, 4.8e-7]}
                  scale={[0.99999988, 1, 0.99999994]}
                  userData={{ name: 'Object_1070' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1070_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1070_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[180.14515686, 47.58256912, 235.55493164]}
                rotation={[-1.57084382, -0.07855004, 1.57010835]}
                scale={[3.03014874, 2.59068561, 1.75761998]}
                userData={{ name: 'Text.203_638' }}>
                <group
                  position={[0, 0.00000763, 0]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1072' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1072_Tasten_2_0.geometry}
                    material={materials.Tasten_2}
                    userData={{ name: 'Object_1072_Tasten_2_0' }}
                  />
                </group>
              </group>
              <group
                position={[192.11471558, 45.45188522, 545.46234131]}
                rotation={[-Math.PI / 2, -0.06898384, Math.PI / 2]}
                scale={2.69837785}
                userData={{ name: 'Text.204_639' }}>
                <group
                  position={[-0.00001526, 0, 4.8e-7]}
                  scale={[1, 0.99999994, 0.99999994]}
                  userData={{ name: 'Object_1074' }}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1074_Material069_0.geometry}
                    material={materials['Material.074_38']}
                    userData={{ name: 'Object_1074_Material.069_0' }}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/programmer_desktop_3d_pc.glb')
