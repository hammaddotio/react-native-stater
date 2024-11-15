import React from 'react'
import { RootStackParamList } from '../../App';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen page</Text>
            <Button
                title='Go to Details'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default HomeScreen
