import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { counter, increment, decrement } = this.props;

        return (
            <View style={styles.container}>
                <Text>
                    {counter}
                </Text>
                <TouchableOpacity style={styles.button} onPress={increment}>
                    <Text>
                        up
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={decrement}>
                    <Text>
                        down
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        width: 100,
        height: 30,
        padding: 10,
        margin: 3,
        backgroundColor: 'lightgray',
    },
});
