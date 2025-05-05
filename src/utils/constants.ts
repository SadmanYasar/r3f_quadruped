import mainRoadTexture from "../assets/main_road_material.jpg"
import intersectionTexture from "../assets/intersection_material.jpg"
import * as THREE from 'three'

export const mainRoadTextureLoader = new THREE.TextureLoader().load(mainRoadTexture)
export const intersectionTextureLoader = new THREE.TextureLoader().load(intersectionTexture)
