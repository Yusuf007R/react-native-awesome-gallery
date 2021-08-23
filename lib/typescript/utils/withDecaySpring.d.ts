import Animated from 'react-native-reanimated';
export declare function withDecaySpring(userConfig: Animated.WithDecayConfig & Animated.WithSpringConfig & {
    clamp: [number, number];
}): number;
