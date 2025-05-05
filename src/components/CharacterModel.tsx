//disable eslint and typescript for this file
/* eslint-disable */
// @ts-nocheck

import { useRef } from "react";
import { useGLTF, useAnimations, ContactShadows } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { editable as e } from "@theatre/r3f";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cat.glb");
    const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model001" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="sm_1_0_0_1001" />
              <group name="sm_3_0_0_0001" />
            </group>
          </group>
        </group>
        <group name="cat_rig">
          <group name="Object_6001">
            <skinnedMesh
              name="Object_1001"
              geometry={nodes.Object_1001.geometry}
              material={materials["Material.006"]}
              skeleton={nodes.Object_1001.skeleton}
            />
            <skinnedMesh
              name="Object_1001_1"
              geometry={nodes.Object_1001_1.geometry}
              material={materials["Material.005"]}
              skeleton={nodes.Object_1001_1.skeleton}
            />
          </group>
          <primitive object={nodes.root} />
          <primitive object={nodes["MCH-torsoparent"]} />
          <primitive object={nodes["MCH-foot_ikparentL"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentL"]} />
          <primitive object={nodes["MCH-foot_ikparentR"]} />
          <primitive object={nodes["MCH-thigh_ik_targetparentR"]} />
          <primitive object={nodes["MCH-hand_ikparentL"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentL"]} />
          <primitive object={nodes["MCH-hand_ikparentR"]} />
          <primitive object={nodes["MCH-upper_arm_ik_targetparentR"]} />
          <primitive object={nodes.neutral_bone} />
        </group>
        <group
          name="WGT-cat_rig_spine_fk"
          position={[0, 0.242, -0.07]}
          rotation={[-3.023, 0, 0]}
          scale={0.053}
        />
        <group
          name="WGT-cat_rig_spine_fk001"
          position={[0, 0.232, -0.009]}
          rotation={[-2.99, 0, 0]}
          scale={0.062}
        />
        <group
          name="WGT-cat_rig_spine_fk002"
          position={[0, 0.232, -0.009]}
          rotation={[-3.081, 0, 0]}
          scale={0.064}
        />
        <group
          name="WGT-cat_rig_spine_fk003"
          position={[0, 0.228, 0.055]}
          rotation={[3.073, 0, 0]}
          scale={0.086}
        />
        <group
          name="WGT-cat_rig_tweak_spine"
          position={[0, 0.248, -0.123]}
          rotation={[-3.023, 0, 0]}
          scale={0.027}
        />
        <group
          name="WGT-cat_rig_tweak_spine001"
          position={[0, 0.242, -0.07]}
          rotation={[-2.99, 0, 0]}
          scale={0.031}
        />
        <group
          name="WGT-cat_rig_tweak_spine002"
          position={[0, 0.232, -0.009]}
          rotation={[-3.081, 0, 0]}
          scale={0.032}
        />
        <group
          name="WGT-cat_rig_tweak_spine003"
          position={[0, 0.228, 0.055]}
          rotation={[3.073, 0, 0]}
          scale={0.043}
        />
        <group
          name="WGT-cat_rig_tweak_spine004"
          position={[0, 0.234, 0.141]}
          rotation={[2.56, 0, 0]}
          scale={0.014}
        />
        <group
          name="WGT-cat_rig_torso"
          position={[0, 0.245, -0.096]}
          scale={0.159}
        />
        <group
          name="WGT-cat_rig_hips"
          position={[0, 0.248, -0.123]}
          rotation={[-3.023, 0, 0]}
          scale={0.066}
        />
        <group
          name="WGT-cat_rig_chest"
          position={[0, 0.228, 0.055]}
          rotation={[3.073, 0, 0]}
          scale={0.088}
        />
        <group
          name="WGT-cat_rig_thigh_parentL"
          position={[0.036, 0.213, -0.135]}
          rotation={[-1.785, -0.002, 0.001]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_thigh_fkL"
          position={[0.036, 0.213, -0.135]}
          rotation={[-1.785, -0.002, 0.001]}
          scale={0.096}
        />
        <group
          name="WGT-cat_rig_shin_fkL"
          position={[0.036, 0.119, -0.114]}
          rotation={[-0.708, 0, 0.002]}
          scale={0.083}
        />
        <group
          name="WGT-cat_rig_foot_fkL"
          position={[0.036, 0.065, -0.177]}
          rotation={[-1.89, 0, 0.001]}
          scale={0.063}
        />
        <group
          name="WGT-cat_rig_r_toeL"
          position={[0.037, 0.005, -0.157]}
          rotation={[-3.028, 0, 0]}
          scale={0.03}
        />
        <group
          name="WGT-cat_rig_thigh_ikL"
          position={[0.036, 0.213, -0.135]}
          rotation={[-1.785, -0.002, 0.001]}
          scale={0.096}
        />
        <group
          name="WGT-cat_rig_thigh_ik_targetL"
          position={[0.037, 0.076, 0.034]}
          rotation={[0.281, 0.002, 0]}
          scale={0.019}
        />
        <group
          name="WGT-cat_rig_foot_ikL"
          position={[0.036, 0.002, -0.127]}
          scale={0.05}
        />
        <group
          name="WGT-cat_rig_VIS_thigh_ik_poleL"
          position={[0.036, 0.119, -0.114]}
          rotation={[Math.PI / 2, 0, 0.002]}
          scale={0.154}
        />
        <group
          name="WGT-cat_rig_thigh_tweakL"
          position={[0.036, 0.213, -0.135]}
          rotation={[-1.785, -0.002, 0.001]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_thigh_tweakL001"
          position={[0.036, 0.166, -0.124]}
          rotation={[-1.785, -0.002, 0.001]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_shin_tweakL"
          position={[0.037, 0.119, -0.114]}
          rotation={[-0.708, 0, 0.002]}
          scale={0.021}
        />
        <group
          name="WGT-cat_rig_shin_tweakL001"
          position={[0.037, 0.092, -0.146]}
          rotation={[-0.708, 0, 0.002]}
          scale={0.021}
        />
        <group
          name="WGT-cat_rig_foot_tweakL"
          position={[0.037, 0.065, -0.177]}
          rotation={[-1.89, 0, 0.001]}
          scale={0.016}
        />
        <group
          name="WGT-cat_rig_foot_tweakL001"
          position={[0.037, 0.035, -0.167]}
          rotation={[-1.89, 0, 0.001]}
          scale={0.016}
        />
        <group
          name="WGT-cat_rig_r_toe_tweakL"
          position={[0.037, 0.005, -0.157]}
          rotation={[-3.028, 0, 0]}
          scale={0.008}
        />
        <group
          name="WGT-cat_rig_foot_heel_ikL"
          position={[0.036, 0.005, -0.157]}
          rotation={[1.252, 0, 0.001]}
          scale={0.063}
        />
        <group
          name="WGT-cat_rig_thigh_parentR"
          position={[-0.036, 0.213, -0.135]}
          rotation={[1.357, -0.002, 0.001]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_thigh_fkR"
          position={[-0.036, 0.213, -0.135]}
          rotation={[1.357, -0.002, 0.001]}
          scale={-0.096}
        />
        <group
          name="WGT-cat_rig_shin_fkR"
          position={[-0.036, 0.119, -0.114]}
          rotation={[2.434, 0, 0.002]}
          scale={-0.083}
        />
        <group
          name="WGT-cat_rig_foot_fkR"
          position={[-0.036, 0.065, -0.177]}
          rotation={[1.252, 0, 0.001]}
          scale={-0.063}
        />
        <group
          name="WGT-cat_rig_r_toeR"
          position={[-0.037, 0.005, -0.157]}
          rotation={[0.113, 0, 0]}
          scale={-0.03}
        />
        <group
          name="WGT-cat_rig_thigh_ikR"
          position={[-0.036, 0.213, -0.135]}
          rotation={[1.357, -0.002, 0.001]}
          scale={-0.096}
        />
        <group
          name="WGT-cat_rig_thigh_ik_targetR"
          position={[-0.037, 0.076, 0.034]}
          rotation={[-2.861, 0.002, 0]}
          scale={-0.019}
        />
        <group
          name="WGT-cat_rig_foot_ikR"
          position={[-0.036, 0.002, -0.127]}
          rotation={[Math.PI, 0, 0]}
          scale={-0.05}
        />
        <group
          name="WGT-cat_rig_VIS_thigh_ik_poleR"
          position={[-0.036, 0.119, -0.114]}
          rotation={[-Math.PI / 2, 0, 0.002]}
          scale={-0.154}
        />
        <group
          name="WGT-cat_rig_thigh_tweakR"
          position={[-0.036, 0.213, -0.135]}
          rotation={[1.357, -0.002, 0.001]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_thigh_tweakR001"
          position={[-0.036, 0.166, -0.124]}
          rotation={[1.357, -0.002, 0.001]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_shin_tweakR"
          position={[-0.037, 0.119, -0.114]}
          rotation={[2.434, 0, 0.002]}
          scale={-0.021}
        />
        <group
          name="WGT-cat_rig_shin_tweakR001"
          position={[-0.037, 0.092, -0.146]}
          rotation={[2.434, 0, 0.002]}
          scale={-0.021}
        />
        <group
          name="WGT-cat_rig_foot_tweakR"
          position={[-0.037, 0.065, -0.177]}
          rotation={[1.252, 0, 0.001]}
          scale={-0.016}
        />
        <group
          name="WGT-cat_rig_foot_tweakR001"
          position={[-0.037, 0.035, -0.167]}
          rotation={[1.252, 0, 0.001]}
          scale={-0.016}
        />
        <group
          name="WGT-cat_rig_r_toe_tweakR"
          position={[-0.037, 0.005, -0.157]}
          rotation={[0.113, 0, 0]}
          scale={-0.008}
        />
        <group
          name="WGT-cat_rig_foot_heel_ikR"
          position={[-0.036, 0.005, -0.157]}
          rotation={[-1.89, 0, 0.001]}
          scale={-0.063}
        />
        <group
          name="WGT-cat_rig_bellyC"
          position={[0, 0.206, -0.013]}
          rotation={[-1.562, 0, 0]}
          scale={0.059}
        />
        <group
          name="WGT-cat_rig_BreastC"
          position={[0, 0.207, 0.088]}
          rotation={[-2.255, 0, 0]}
          scale={0.051}
        />
        <group
          name="WGT-cat_rig_shoulderL"
          position={[0.011, 0.257, 0.081]}
          rotation={[-2.077, -0.439, -2.876]}
          scale={0.068}
        />
        <group
          name="WGT-cat_rig_upper_arm_parentL"
          position={[0.038, 0.195, 0.11]}
          rotation={[-1.162, 0, -Math.PI]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_upper_arm_fkL"
          position={[0.038, 0.195, 0.11]}
          rotation={[-1.162, 0, -Math.PI]}
          scale={0.095}
        />
        <group
          name="WGT-cat_rig_forearm_fkL"
          position={[0.038, 0.107, 0.073]}
          rotation={[-1.792, 0, Math.PI]}
          scale={0.073}
        />
        <group
          name="WGT-cat_rig_hand_fkL"
          position={[0.038, 0.036, 0.088]}
          rotation={[-2.14, 0, Math.PI]}
          scale={0.035}
        />
        <group
          name="WGT-cat_rig_f_toeL"
          position={[0.038, 0.007, 0.107]}
          rotation={[-2.966, 0, -Math.PI]}
          scale={0.03}
        />
        <group
          name="WGT-cat_rig_upper_arm_ikL"
          position={[0.038, 0.195, 0.11]}
          rotation={[-1.162, 0, -Math.PI]}
          scale={0.095}
        />
        <group
          name="WGT-cat_rig_upper_arm_ik_targetL"
          position={[0.038, 0.129, -0.086]}
          rotation={[-3.004, 0, 0]}
          scale={0.02}
        />
        <group
          name="WGT-cat_rig_hand_ikL"
          position={[0.038, 0.002, 0.137]}
          scale={0.048}
        />
        <group
          name="WGT-cat_rig_VIS_upper_arm_ik_poleL"
          position={[0.038, 0.107, 0.073]}
          rotation={[Math.PI / 2, 0, Math.PI]}
          scale={0.16}
        />
        <group
          name="WGT-cat_rig_upper_arm_tweakL"
          position={[0.039, 0.195, 0.11]}
          rotation={[-1.162, 0, -Math.PI]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_upper_arm_tweakL001"
          position={[0.038, 0.151, 0.092]}
          rotation={[-1.162, 0, -Math.PI]}
          scale={0.024}
        />
        <group
          name="WGT-cat_rig_forearm_tweakL"
          position={[0.038, 0.107, 0.073]}
          rotation={[-1.792, 0, Math.PI]}
          scale={0.018}
        />
        <group
          name="WGT-cat_rig_forearm_tweakL001"
          position={[0.038, 0.072, 0.081]}
          rotation={[-1.792, 0, Math.PI]}
          scale={0.018}
        />
        <group
          name="WGT-cat_rig_hand_tweakL"
          position={[0.038, 0.036, 0.088]}
          rotation={[-2.14, 0, Math.PI]}
          scale={0.009}
        />
        <group
          name="WGT-cat_rig_hand_tweakL001"
          position={[0.038, 0.022, 0.098]}
          rotation={[-2.14, 0, Math.PI]}
          scale={0.009}
        />
        <group
          name="WGT-cat_rig_f_toe_tweakL"
          position={[0.038, 0.007, 0.107]}
          rotation={[-2.966, 0, -Math.PI]}
          scale={0.008}
        />
        <group
          name="WGT-cat_rig_hand_heel_ikL"
          position={[0.038, 0.007, 0.107]}
          rotation={[1.001, 0, Math.PI]}
          scale={0.035}
        />
        <group
          name="WGT-cat_rig_shoulderR"
          position={[-0.011, 0.257, 0.081]}
          rotation={[1.065, -0.439, -2.876]}
          scale={-0.068}
        />
        <group
          name="WGT-cat_rig_upper_arm_parentR"
          position={[-0.038, 0.195, 0.11]}
          rotation={[1.98, 0, -Math.PI]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_upper_arm_fkR"
          position={[-0.038, 0.195, 0.11]}
          rotation={[1.98, 0, -Math.PI]}
          scale={-0.095}
        />
        <group
          name="WGT-cat_rig_forearm_fkR"
          position={[-0.038, 0.107, 0.073]}
          rotation={[1.35, 0, Math.PI]}
          scale={-0.073}
        />
        <group
          name="WGT-cat_rig_hand_fkR"
          position={[-0.038, 0.036, 0.088]}
          rotation={[1.001, 0, Math.PI]}
          scale={-0.035}
        />
        <group
          name="WGT-cat_rig_f_toeR"
          position={[-0.038, 0.007, 0.107]}
          rotation={[0.176, 0, -Math.PI]}
          scale={-0.03}
        />
        <group
          name="WGT-cat_rig_upper_arm_ikR"
          position={[-0.038, 0.195, 0.11]}
          rotation={[1.98, 0, -Math.PI]}
          scale={-0.095}
        />
        <group
          name="WGT-cat_rig_upper_arm_ik_targetR"
          position={[-0.038, 0.129, -0.086]}
          rotation={[0.138, 0, 0]}
          scale={-0.02}
        />
        <group
          name="WGT-cat_rig_hand_ikR"
          position={[-0.038, 0.002, 0.137]}
          rotation={[Math.PI, 0, 0]}
          scale={-0.048}
        />
        <group
          name="WGT-cat_rig_VIS_upper_arm_ik_poleR"
          position={[-0.038, 0.107, 0.073]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={-0.16}
        />
        <group
          name="WGT-cat_rig_upper_arm_tweakR"
          position={[-0.039, 0.195, 0.11]}
          rotation={[1.98, 0, -Math.PI]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_upper_arm_tweakR001"
          position={[-0.038, 0.151, 0.092]}
          rotation={[1.98, 0, -Math.PI]}
          scale={-0.024}
        />
        <group
          name="WGT-cat_rig_forearm_tweakR"
          position={[-0.038, 0.107, 0.073]}
          rotation={[1.35, 0, Math.PI]}
          scale={-0.018}
        />
        <group
          name="WGT-cat_rig_forearm_tweakR001"
          position={[-0.038, 0.072, 0.081]}
          rotation={[1.35, 0, Math.PI]}
          scale={-0.018}
        />
        <group
          name="WGT-cat_rig_hand_tweakR"
          position={[-0.038, 0.036, 0.088]}
          rotation={[1.001, 0, Math.PI]}
          scale={-0.009}
        />
        <group
          name="WGT-cat_rig_hand_tweakR001"
          position={[-0.038, 0.022, 0.098]}
          rotation={[1.001, 0, Math.PI]}
          scale={-0.009}
        />
        <group
          name="WGT-cat_rig_f_toe_tweakR"
          position={[-0.038, 0.007, 0.107]}
          rotation={[0.176, 0, -Math.PI]}
          scale={-0.008}
        />
        <group
          name="WGT-cat_rig_hand_heel_ikR"
          position={[-0.038, 0.007, 0.107]}
          rotation={[-2.14, 0, Math.PI]}
          scale={-0.035}
        />
        <group
          name="WGT-cat_rig_neck"
          position={[0, 0.234, 0.141]}
          rotation={[2.447, 0, 0]}
          scale={0.062}
        />
        <group
          name="WGT-cat_rig_head"
          position={[0, 0.274, 0.188]}
          rotation={[2.453, 0, 0]}
          scale={0.085}
        />
        <group
          name="WGT-cat_rig_tweak_spine005"
          position={[0, 0.249, 0.164]}
          rotation={[2.358, 0, 0]}
          scale={0.017}
        />
        <group
          name="WGT-cat_rig_tail001"
          position={[0, 0.248, -0.123]}
          rotation={[-0.198, 0, 0]}
          scale={0.09}
        />
        <group
          name="WGT-cat_rig_tail002"
          position={[0, 0.23, -0.211]}
          rotation={[-0.344, 0, 0]}
          scale={0.07}
        />
        <group
          name="WGT-cat_rig_tail003"
          position={[0, 0.207, -0.277]}
          rotation={[-0.496, 0, 0]}
          scale={0.07}
        />
        <group
          name="WGT-cat_rig_tail004"
          position={[0, 0.173, -0.339]}
          rotation={[-0.525, 0, 0]}
          scale={0.07}
        />
        <group
          name="WGT-cat_rig_tweak_tail001"
          position={[0, 0.23, -0.211]}
          rotation={[-0.198, 0, 0]}
          scale={0.045}
        />
        <group
          name="WGT-cat_rig_tweak_tail002"
          position={[0, 0.207, -0.277]}
          rotation={[-0.344, 0, 0]}
          scale={0.035}
        />
        <group
          name="WGT-cat_rig_tweak_tail003"
          position={[0, 0.173, -0.339]}
          rotation={[-0.496, 0, 0]}
          scale={0.035}
        />
        <group
          name="WGT-cat_rig_tweak_tail004"
          position={[0, 0.138, -0.399]}
          rotation={[-0.525, 0, 0]}
          scale={0.035}
        />
        <group
          name="WGT-cat_rig_tail_master001"
          position={[0, 0.138, -0.399]}
          rotation={[-0.525, 0, 0]}
          scale={0.09}
        />
        <group name="WGT-cat_rig_root" scale={0.236} />
      </group>
    </group>
  );
}

useGLTF.preload("/cat.glb");
