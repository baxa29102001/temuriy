import styles from "./Instruction.module.css";

import { useTranslation } from "next-i18next";
import Link from "next/link";

import Card from "@/components/Card/Card";
import CardDuplImg from "@/components/CardDuplImg";
import Up from "@/assets/icon/chevron-up.svg";
import Camera from "@/assets/icon/Camera.svg";
import Play from "@/assets/icon/play_circle_filled.svg";
import Binoculars from "@/assets/icon/binoculars.svg";
import Viewer from "@/assets/icon/360_viewer.svg";
import Sensor from "@/assets/icon/sensor_door.svg";
import Information from "@/assets/icon/Information.svg";
import Audio from "@/assets/icon/audio.svg";
import Sun from "@/assets/icon/sun.svg";
import Moon from "@/assets/icon/moon.svg";
import Now from "@/assets/icon/Now.svg";
import Before from "@/assets/icon/before.svg";
import Menu from "@/assets/icon/menu.svg";
import Map from "@/assets/icon/map.svg";
import Rotation from "@/assets/icon/rotation.svg";
import Music from "@/assets/icon/music.svg";
import Full from "@/assets/icon/full.svg";

const redirects = {
  ru: "https://zkg.technocorp.uz/www/output/rus_out/index.html",
  uz: "https://zkg.technocorp.uz/www/output/UZB_out/index.html",
  en: "https://zkg.technocorp.uz/www/output/eng_out/index.html",
};

function Instruction() {
  const { t, i18n } = useTranslation();

  const locale = i18n.language;

  return (
    <>
      <div className={styles.wrap}>
        <header>
          <div className={styles.instuction_wrap}>
            <h1 className={styles.instuction}>{t("instuction")}</h1>
          </div>
        </header>
        <section>
          <div className={styles.grid}>
            {/* <div
              style={{
                border: "1px solid rgba(255, 255, 255, 0.5)",
                borderRadius: "35px",
              }}
            ></div> */}
            <div className={styles.grid_border}>
              <Card
                image={Up}
                title={t("location")}
                text={t("locationText")}
                className={{
                  borderRadius: "35px 0 0px 0px",
                }}
              />
              <Card image={Camera} title={t("photo")} text={t("photoText")} />
              <Card image={Play} title={t("video")} text={t("videoText")} />
              <Card
                image={Binoculars}
                title={t("observation")}
                text={t("observationText")}
              />
              <Card
                image={Viewer}
                title={t("tracking")}
                text={t("trackingText")}
                className={{
                  borderRadius: "0px 35px 0px 0px",
                }}
              />
              <Card image={Sensor} title={t("enter")} text={t("enterText")} />
              <Card
                image={Information}
                title={t("information")}
                text={t("informationText")}
              />
              {/* <Card image={Audio} title={t('audio')} text={t('audioText')} /> */}
              <Card image={Menu} title={t("menu")} text={t("menuText")} />
              <Card image={Map} title={t("map")} text={t("mapText")} />
              <Card
                image={Rotation}
                title={t("rotation")}
                text={t("rotationText")}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card image={Music} title={t("music")} text={t("musicText")} />
              <Card image={Full} title={t("screen")} text={t("screenText")} />
            </div>
          </div>
          <div className={styles.link}>
            <Link href="/" className={styles.continue_left}>
              {t("back")}
            </Link>

            <Link href={redirects[locale]} className={styles.continue_right}>
              {t("continue")}
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Instruction;
