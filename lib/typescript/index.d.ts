import React from 'react';
import { ViewStyle } from 'react-native';
declare type Dimensions = {
    height: number;
    width: number;
};
export declare const snapPoint: (value: number, velocity: number, points: ReadonlyArray<number>) => number;
export declare type RenderItemInfo<T> = {
    index: number;
    item: T;
    setImageDimensions: (imageDimensions: Dimensions) => void;
};
declare type EventsCallbacks = {
    onSwipeToClose?: () => void;
    onTap?: () => void;
    onDoubleTap?: () => void;
    onScaleStart?: () => void;
    onPanStart?: () => void;
};
declare type RenderItem<T> = (imageInfo: RenderItemInfo<T>) => React.ReactElement | null;
export declare type GalleryRef = {
    setIndex: (newIndex: number) => void;
    reset: (animated?: boolean) => void;
};
export declare type GalleryReactRef = React.Ref<GalleryRef>;
declare type GalleryProps<T> = EventsCallbacks & {
    ref?: GalleryReactRef;
    data: T[];
    renderItem?: RenderItem<T>;
    keyExtractor?: (item: T, index: number) => string | number;
    initialIndex?: number;
    onIndexChange?: (index: number) => void;
    numToRender?: number;
    emptySpaceWidth?: number;
    doubleTapScale?: number;
    maxScale?: number;
    style?: ViewStyle;
    containerDimensions?: {
        width: number;
        height: number;
    };
    disableTransitionOnScaledImage?: boolean;
    hideAdjacentImagesOnScaledImage?: boolean;
    disableVerticalSwipe?: boolean;
    loop?: boolean;
    onScaleChange?: (scale: number) => void;
    onScaleChangeRange?: {
        start: number;
        end: number;
    };
    disablePinchToZoom?: boolean;
};
declare const Gallery: <T extends unknown>(p: EventsCallbacks & {
    ref?: GalleryReactRef | undefined;
    data: T[];
    renderItem?: RenderItem<T> | undefined;
    keyExtractor?: ((item: T, index: number) => string | number) | undefined;
    initialIndex?: number | undefined;
    onIndexChange?: ((index: number) => void) | undefined;
    numToRender?: number | undefined;
    emptySpaceWidth?: number | undefined;
    doubleTapScale?: number | undefined;
    maxScale?: number | undefined;
    style?: ViewStyle | undefined;
    containerDimensions?: {
        width: number;
        height: number;
    } | undefined;
    disableTransitionOnScaledImage?: boolean | undefined;
    hideAdjacentImagesOnScaledImage?: boolean | undefined;
    disableVerticalSwipe?: boolean | undefined;
    loop?: boolean | undefined;
    onScaleChange?: ((scale: number) => void) | undefined;
    onScaleChangeRange?: {
        start: number;
        end: number;
    } | undefined;
    disablePinchToZoom?: boolean | undefined;
} & {
    ref?: GalleryReactRef | undefined;
}) => React.ReactElement;
export default Gallery;
