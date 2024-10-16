import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function HeroModel() {
  const model = useLoader(GLTFLoader, "/models/heromodel.gltf"); // Adjust the path if necessary

  return (
    <primitive
      object={model.scene}
      position={[8.5, -10, -20]}
      rotation={[-0.15, 0, 0]}
    />
  );
}

export default HeroModel;
