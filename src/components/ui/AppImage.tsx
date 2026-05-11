import React, { useState, useCallback, memo } from 'react';
import noImageFallback from '@/assets/images/no_image.png';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    [key: string]: any;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = noImageFallback,
    loading = 'lazy',
    unoptimized = false,
    ...props
}: AppImageProps) {
    const [imageSrc, setImageSrc] = useState(src);

    const handleError = useCallback(() => {
        setImageSrc(fallbackSrc);
    }, [fallbackSrc]);

    const handleLoad = useCallback(() => {
        // Handle load completion
    }, []);

    const imgStyle: React.CSSProperties = {
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        objectFit: 'cover',
        ...(fill && { position: 'absolute', inset: 0 }),
    };

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            style={imgStyle}
            onClick={onClick}
            onError={handleError}
            onLoad={handleLoad}
            loading={priority ? 'eager' : loading}
            {...props}
        />
    );
});

export default AppImage;