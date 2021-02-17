import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "styles/About";

export default class About extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 40 }}>
                <Text style={styles.header}>About Inquires</Text>

                <Icon name="utensils" color="#0066CC" size={100} style={styles.icon} />

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    et ligula ullamcorper, pellentesque magna quis, lobortis quam.
                </Text>
            </View>
        );
    }
}
