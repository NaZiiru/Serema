import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomIconProps {
  name: any;
  size: number;
  color: string;
  onPress?: () => void;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  name,
  size,
  color,
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <Ionicons name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default CustomIcon;
