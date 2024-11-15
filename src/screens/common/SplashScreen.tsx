import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../../../App';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const SplashScreen = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View className={'flex-1 justify-center items-center bg-blue-500'}>
            <Text className={'text-white text-lg font-bold'}>Welcome to Auth App</Text>
        </View>
    );
}

export default SplashScreen;
