import React, { Component } from "react";
import { View, Text } from "react-native";
import randomColor from "randomcolor";

class RoundedName extends Component {
    render() {
        const size = this.props.size;
        const fontSize = this.props.fontSize;
        const borderWidth = 10;
        const color = this.props.color;

        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: randomColor(),
                    borderColor: this.props.color,
                    width: size,
                    height: size,
                    borderRadius: size,
                    borderWidth: borderWidth
                }}>
                <Text
                    style={{
                        textAlign: "center",
                        backgroundColor: "none",
                        fontSize: fontSize,
                        color: color,
                        lineHeight: fontSize
                    }}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

export default RoundedName;
