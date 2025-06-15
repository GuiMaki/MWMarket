import {View, Text } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

import colors from "@/global/colors";
import fontFamily from "@/global/fontFamily";

const LoginSeparator = () => {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap:15}}>
            <LinearGradient
                colors={[colors.white, colors.primary[100]]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ width: 100, height: 2, borderRadius: 5 }}
            />
            <Text style={{
                fontFamily: fontFamily.nunito[0],
                color: colors.primary[100],
                fontSize: 16,
                textAlign: 'center',
                width: 30,
            }} >ou</Text>
            <LinearGradient
                colors={[colors.white, colors.primary[100]]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{ width: 100, height: 2, borderRadius: 5 }}
            />
        </View>
    );
}

export default LoginSeparator;