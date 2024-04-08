import { colors } from "@/styles/colors";
import { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";

type InputProps = {
    children: ReactNode
}

function Input ({children}: InputProps) {
    return (<View className="w-[350] h-14 bg-white rounded-md px-3 flex-row items-center gap-4">
        {children}
    </View>
    )
}

function InputField ({...rest}: TextInputProps){
    return (
    <TextInput className="flex-1 font-normal  text-[#040011]" {...rest}
    placeholderTextColor={colors.inputfont}
    />
    )
}

Input.Field = InputField

export { Input }