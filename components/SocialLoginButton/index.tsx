import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { shadow } from "@/global/shadow";
import { IconComponent, IconT } from "../IconComponent";
import colors from "@/global/colors";

type Props = {
    icon: IconT;
} & TouchableOpacityProps;

const SocialLoginButton = ({ icon, ...props }: Props) => {
    return (
        <TouchableOpacity
            {...props}
            style={[
            {
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.white,
                ...shadow.default,
                },
            ]}
        >
            <IconComponent name={icon} size={20}/>
        </TouchableOpacity>
    )
}

export default SocialLoginButton;