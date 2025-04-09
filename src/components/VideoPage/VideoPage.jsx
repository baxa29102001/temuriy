import { useRouter } from "next/router";

import VideoRedirect from "@/components/VideoRedirect/VideoRedirect";

const videos = {
  uz: "/video/uzb.mp4",
  en: "/video/eng.mp4",
  ru: "/video/ru.mp4",
};

const redirects = {
  uz: "https://registon360.uz/registan/index.html",
  ru: "https://registon360.uz/ru/index.html",
  en: "https://registon360.uz/en/index.html",
};
const VideoPage = () => {
  const router = useRouter();
  const { locale } = router;

  const videoSrc = videos[locale] || videos["uz"];
  const redirectUrl = redirects[locale] || redirects["uz"];

  return (
    <div>
      <VideoRedirect videoSrc={videoSrc} redirectUrl={redirectUrl} />
    </div>
  );
};

export default VideoPage;
