import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import randomColor from "randomcolor";

import RoundedName from "./roundedName";
import { getTimeAgo } from "./getTimeAgo";

import styles from "styles/InquiriesRow";

export default class InquiriesRow extends Component {
    state = {
        showInfo: false
    };

    infoPressed = () => {
        this.props.navigation.navigate("Info", {
            place: this.props.place
        });
    };

    phonePressed = () => {
        let phoneNumber = "";
        if (Platform.OS === "android") {
            phoneNumber = `tel:${this.props?.place?.phoneNumber}`;
        } else {
            phoneNumber = `telprompt:${this.props?.place?.phoneNumber}`;
        }

        Linking.openURL(phoneNumber);
    };

    render() {
        const { place } = this.props;
        return (
            <View key={place.enqId} style={styles.bgColor}>
                <TouchableOpacity onPress={this.infoPressed}>
                    <View style={styles.row}>
                        <View>
                            <RoundedName
                                title={place?.name.charAt(0)}
                                color="white"
                                fontSize={20}
                                size={70}
                            />
                        </View>
                        <View style={styles.nameAddress}>
                            <Text style={styles.nameText}>{place.name}</Text>
                            <Text style={styles.pAddress}>{place.categoryName}</Text>
                            <Text style={styles.pAddress}>{place.location}</Text>
                            <Text style={styles.pAddress}>{place.classLocPref}</Text>
                        </View>

                        <View style={styles.edges}>
                            <View style={styles.textRight}>
                                <Text style={styles.textDate}>
                                    {getTimeAgo(place.createdOn)}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={this.phonePressed}>
                                <Icon name="mobile" color={randomColor()} size={35} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
