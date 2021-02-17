import React, { Component } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import InquiriesList from "components/InquiriesList";
import InquiriesInfo from "components/InquiriesInfo";
import About from "components/About";

import store from "./src/redux/store";
const List = createStackNavigator(
    {
        INQUIRIES: { screen: InquiriesList },
        Info: { screen: InquiriesInfo }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#bf360c",
                color: "#fff"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff"
            }
        },
        headerLayoutPreset: "center"
    }
);

console.disableYellowBox = true;

const Tabs = createBottomTabNavigator(
    {
        List: { screen: List },
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                tabBarIcon: ({ tintColor }) => {
                    const route = navigation.state.routeName;
                    const name = {
                        List: "list",
                        About: "info-circle"
                    }[route];
                    return <Icon name={name} color={tintColor} size={18} />;
                },
                tabBarOptions: {
                    activeBackgroundColor: "#E6F0FA"
                }
            };
        }
    }
);

const AppContainer = createAppContainer(Tabs);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}
