import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import styles from './VideoRedirect.module.css'

const VideoRedirect = ({ videoSrc, redirectUrl }) => {
    const videoRef = useRef(null);
    const router = useRouter();
    const { t } = useTranslation();
    
    useEffect(() => {
        const handleVideoEnd = () => {
            router.push(redirectUrl);
        };

        const videoElement = videoRef.current;
        videoElement.addEventListener('ended', handleVideoEnd);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, [redirectUrl, router]);

    useEffect(() => {
        const playVideo = async () => {
            try {
                if (videoRef.current) {
                    videoRef.current.muted = false; // Mute the video to bypass autoplay restrictions
                    await videoRef.current.play();
                }
            } catch (error) {
                console.error('Error attempting to play', error);
                // Handle the error gracefully if needed
            }
        };

        playVideo();
    }, []);
    const handleSkipToEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration; // Пропуск до конца видео
        }
    };
    return (
        <div className={styles.video_wrap}>
            <video ref={videoRef}  key={videoSrc} autoPlay className={styles.video}>
                <source src={videoSrc} type="video/mp4" />
                {/* Your browser does not support the video tag. */}
            </video>
            <button className={styles.skip} onClick={handleSkipToEnd}>{t('skip')} </button>
        </div>
    );
};

export default VideoRedirect;