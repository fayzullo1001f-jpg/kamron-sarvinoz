
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";

import musicFile from "./music/asad.mp3";

import play from "./img/circle-play-regular-full.svg";
import pause from "./img/circle-pause-regular-full.svg";

import one from "./img/one.png";
import wed_lw from "./img/1first.jpg";
import wed_lws from "./img/third.jpg";
import wed_lws4 from "./img/fourth.jpg";
import wed_lws5 from "./img/five.jpg";
import wed_lws6 from "./img/six.jpg";
import wed_lws7 from "./img/seven.jpg";
import wed_lws8 from "./img/eight.jpg";
import bird from "./img/footer.png";

import cake from "./img/second.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [sealOpened, setSealOpened] = useState(false);

  const audioRef = useRef(null);

  /*
  ============================================================
  TO'Y SANASI
  26.11.2026 — 18:00
  ============================================================
  */

  const weddingDate = useMemo(() => {
    return new Date(2026, 10, 26, 18, 0, 0).getTime();
  }, []);

  /*
  ============================================================
  COUNTDOWN
  ============================================================
  */

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const distance = weddingDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(
          distance / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
          (distance / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
          (distance / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
          (distance / 1000) % 60
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [weddingDate]);

  /*
  ============================================================
  MUSIC
  ============================================================
  */

  const toggleMusic = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
    }
  };

  /*
  ============================================================
  INTRO / TAKLIFNOMANI OCHISH
  ============================================================
  */

  const openInvitation = () => {
    if (sealOpened) return;

    setSealOpened(true);

    setTimeout(() => {
      setShowIntro(false);

      const audio = audioRef.current;

      if (audio) {
        audio
            .play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {});
      }
    }, 1100);
  };

  /*
  ============================================================
  ANIMATION
  ============================================================
  */

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 30,
    },

    visible: (i) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const imgVariant = {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },

    visible: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.8,
      },
    },
  };

  return (
      <>
        {/* AUDIO */}

        <audio
            ref={audioRef}
            loop
            preload="auto"
        >
          <source
              src={musicFile}
              type="audio/mpeg"
          />
        </audio>

        <AnimatePresence>
          {showIntro ? (
              /*
              ====================================================
              INTRO
              ====================================================
              */

              <motion.div
                  className={`intro ${
                      sealOpened ? "intro_opening" : ""
                  }`}
                  initial={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
              >
                <motion.img
                    src={one}
                    alt="Wedding invitation"
                    className="intro_image"
                    initial={{
                      scale: 1,
                    }}
                    animate={{
                      scale: sealOpened ? 1.04 : 1,
                    }}
                    transition={{
                      duration: 1,
                    }}
                />

                {/* MUHR BOSILADIGAN JOY */}

                <button
                    className="seal_button"
                    onClick={openInvitation}
                    aria-label="Taklifnomani ochish"
                >
                  <span />
                </button>

                {/* OCHILISH NURI */}

                <div
                    className={`opening_light ${
                        sealOpened ? "light_active" : ""
                    }`}
                />
              </motion.div>
          ) : (
              /*
              ====================================================
              MAIN APP
              ====================================================
              */

              <div className="app">

                {/* HERO */}

                <section className="hero">

                  <div className="hero_overlay" />
                  <div className="hero_glow" />

                  <div className="hero_content">

                    <motion.p
                        className="wedding_date_top"
                        initial={{
                          opacity: 0,
                          y: -20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 1,
                        }}
                    >
                      Taklifnoma
                    </motion.p>

                    {/* KUYOV */}

                    <motion.h1
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          duration: 1,
                        }}
                    >
                      Kamron
                    </motion.h1>

                    {/* & */}

                    <motion.div
                        className="wedding_and"
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.3,
                          duration: 0.8,
                        }}
                    >
                      &
                    </motion.div>

                    {/* KELIN */}

                    <motion.h1
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: 0.2,
                          duration: 1,
                        }}
                    >
                      Sarvinoz
                    </motion.h1>

                    {/* SANA */}

                    <motion.p
                        className="wedding_date"
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 0.5,
                          duration: 1,
                        }}
                    >
                      26.11.2026
                    </motion.p>

                    {/* MUSIQA */}

                    <motion.div
                        className={`music_btn ${
                            isPlaying ? "playing" : ""
                        }`}
                        onClick={toggleMusic}
                        whileTap={{
                          scale: 0.9,
                        }}
                        whileHover={{
                          scale: 1.1,
                        }}
                    >
                      <img
                          src={isPlaying ? pause : play}
                          alt="Musiqa"
                      />
                    </motion.div>

                  </div>
                </section>

                {/* TAKLIFNOMA */}

                <motion.section
                    className="section sed"
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <motion.h2
                      custom={0}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    TO‘Y TAKLIFNOMASI
                  </motion.h2>

                  <motion.p
                      custom={1}
                      variants={textVariant}
                      initial="hidden"
                      whileInView="visible"

                  >
                    <span className="span">
                    Assalomu alaykum!
                    <br />

                    Hurmatli mehmonimiz!
                    <br />

                    Sizni nikoh to'yimiz
                    munosabati bilan
                    bo'lib o'tadigan


                    <span className="visol">  "Visol oqshomi"</span>"ga
                    <br />

                    taklif etamiz 💍</span>
                  </motion.p>

                  <motion.div
                      className="border"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                  >
                    <img
                        className="img_bor"
                        src={wed_lw}
                        alt=""
                    />
                  </motion.div>

                  <div className="timer">

                    <div className="time_box">
                      <strong>{timeLeft.days}</strong>
                      <span>Kun</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.hours}</strong>
                      <span>Soat</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.minutes}</strong>
                      <span>Minut</span>
                    </div>

                    <div className="time_box">
                      <strong>{timeLeft.seconds}</strong>
                      <span>Sekund</span>
                    </div>

                  </div>
                </motion.section>

                {/* TO'Y KUNI */}

                <motion.section
                    className="section"
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                >

                  <h2>
                    TO'Y KUNI
                  </h2>

                  <motion.img
                      src={cake}
                      className="cade"
                      variants={imgVariant}
                      initial="hidden"
                      whileInView="visible"
                      alt=""
                  />

                  <div className="calendar">

                    {Array.from(
                        {
                          length: 31,
                        },
                        (_, i) => {
                          const day = i + 1;

                          return (
                              <div
                                  key={day}
                                  className={`day ${
                                      day === 26 ? "active_day" : ""
                                  }`}
                              >
                                {day}
                              </div>
                          );
                        }
                    )}

                  </div>

                  <h2 className="nov">
                    26 November 2026
                  </h2>

                </motion.section>

                {/* LOKATSIYA */}

                {/* GALEREYA */}

                <motion.section
                    className="section gallery_section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                  <div className="gallery_heading">
                    <span className="gallery_subtitle">Our memories</span>

                    <h2>GALEREYA</h2>

                    <div className="gallery_decoration">
                      <span></span>
                      ♡
                      <span></span>
                    </div>

                    <p>
                      Baxtli lahzalarimizdan esdaliklar
                    </p>
                  </div>

                  <div className="gallery_grid">

                    <motion.div
                        className="gallery_item gallery_large"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws} alt="Wedding memories" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>

                    <motion.div
                        className="gallery_item"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws4} alt="Wedding rings" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>

                    <motion.div
                        className="gallery_item"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws5} alt="Wedding venue" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>

                    <motion.div
                        className="gallery_item gallery_wide"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws6} alt="Wedding celebration" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>
                    <motion.div
                        className="gallery_item"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws7} alt="Wedding moments" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>

                    <motion.div
                        className="gallery_item"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                    >
                      <img src={wed_lws8} alt="Beautiful memories" />
                      <div className="gallery_overlay">
                        <span>♡</span>
                      </div>
                    </motion.div>


                  </div>

                  <div className="gallery_footer">
                    Kamron <span>&</span> Sarvinoz
                  </div>
                </motion.section>

                {/* FOOTER */}

                <section
                    className="footer"
                    style={{
                      backgroundImage: `url(${bird})`,
                    }}
                />

              </div>
          )}
        </AnimatePresence>
      </>
  );
}

export default App;
