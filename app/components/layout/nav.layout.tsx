import { Fade as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { stagger } from "motion";
import ToggleDarkModeUI from "../ui/toggle-darkmode.ui";
import { Colors } from "~/shared/colors";
import MENUS from "~/shared/menus";
import { Link } from "react-router";
import useScreenSize from "~/hooks/useScreenSize";
import useDarkMode from "~/hooks/useDarkMode";
import LinkAnimatedUI from "../ui/link-animated.ui";
import ContactModalUI from "../ui/contact-modal.ui";
import ContactIcon from "../icons/contact.icon";

const menus = MENUS;
export default function NavLayout() {
  const [isOpen, setOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scope, animate] = useAnimate();
  const [desktopMenuScope, animateList] = useAnimate();
  const { width } = useScreenSize();
  const centerMenu = menus.slice(0, 6);
  const bottomMenu = MENUS[MENUS.length - 2];

  const darkMode = useDarkMode();

  const closeNav = () => setOpen(false);
  const toggleAnimation = () => {
    if (isOpen) {
      animate(
        "li",
        { x: 0, willChange: "transform" },
        { duration: 0.2, delay: stagger(0.05), type: "tween" }
      );

      setTimeout(() => {
        setOpen(false);
      }, 500);
    } else {
      setOpen(true);
    }
  };

  const onToggleContact = () => {
    setShowContact((prevState) => !prevState);
  };

  useEffect(() => {
    animateList(
      "li",
      { x: ["-200%", "0%"], willChange: "transform", scale: [0.2, 1] },
      { duration: 0.2, delay: stagger(0.05), type: "tween" }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        animate(
          "li",
          { x: "120%", willChange: "transform" },
          { duration: 0.3, delay: stagger(0.1) }
        );
      }, 300);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setOpen(false);
    setShowContact(false);
  }, [width]);

  useEffect(() => {
    setIsDarkMode(darkMode);
  }, [darkMode]);

  return (
    <>
      <AnimatePresence>
        {!isOpen ? null : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/30 backdrop-blur-[1px] z-20 lg:hidden"
            onClick={toggleAnimation}
          />
        )}
      </AnimatePresence>

      {/* pc menu */}
      <div className="hidden absolute top-2 right-2 lg:block scale-[80%]">
        <ToggleDarkModeUI />
      </div>
      <motion.nav className="hidden lg:flex bg-light lg:dark:bg-dark dark:bg-dark-bg flex-col fixed justify-between inset-y-0 left-0 items-center z-20 pb-10">
        <a href="/">
          <motion.img
            animate={{
              opacity: [0, 1],
              y: ["-100%", "0%"],
              willChange: "transform",
            }}
            transition={{ type: "tween" }}
            src={
              isDarkMode ? "/images/dark-logo.png" : "/images/light-logo.png"
            }
            alt="logo"
            width={70}
            height={70}
          />
        </a>
        <ul className="flex flex-col gap-10" ref={desktopMenuScope}>
          {centerMenu.map(({ Icon, href, name }, index) => (
            <li key={index}>
              <LinkAnimatedUI href={href} Icon={Icon} name={name} />
            </li>
          ))}
        </ul>
        <motion.div
          animate={{
            opacity: [0, 1],
            y: ["100%", "0%"],
            willChange: "transform",
          }}
        >
          <LinkAnimatedUI
            Icon={ContactIcon}
            name={bottomMenu.name}
            tooltipClassName="min-w-[140px]"
            onClick={onToggleContact}
          />
        </motion.div>
      </motion.nav>

      {/* mobile menu */}
      <motion.nav
        initial={{ y: "-100%", willChange: "transform" }}
        animate={{ y: "0%", willChange: "transform" }}
        transition={{ type: "spring", duration: 0.5 }}
        className="fixed top-0 inset-x-0 bg-light dark:bg-dark-bg z-20 text-dark dark:text-dark-text border-b-1  lg:border-0 border-border dark:border-border-dark lg:hidden"
      >
        <div className="flex justify-between bg-light dark:bg-dark-bg items-center px-2 z-30">
          <a href="/" onClick={closeNav}>
            <img
              src={
                isDarkMode ? "/images/dark-logo.png" : "/images/light-logo.png"
              }
              alt="logo"
              width={60}
              height={60}
            />
          </a>
          <div className="lg:hidden">
            <Hamburger
              toggled={isOpen}
              toggle={toggleAnimation}
              direction="left"
              rounded
              color={isDarkMode ? Colors.light : Colors.dark}
            />
          </div>
        </div>
        <AnimatePresence>
          {!isOpen ? null : (
            <motion.div
              animate={{ transform: "translateY(0%)" }}
              initial={{ transform: "translateY(-100%)" }}
              exit={{ transform: "translateY(-100%)" }}
              transition={{ type: "keyframes", ease: "easeInOut" }}
              className="bg-light dark:bg-dark-bg dark:border-border-dark border-b-1 border-border class p-5 absolute inset-x-0 top-0 pt-20 -z-10 lg:hidden"
            >
              <ul
                className="flex flex-col gap-2 font-anton pb-2 md:text-lg"
                ref={scope}
              >
                {MENUS.map(({ href, name, Icon }, index) => (
                  <li
                    className="translate-x-[-120%] relative w-fit group"
                    key={index}
                  >
                    <Link
                      onClick={closeNav}
                      className="hover:text-secondary w-fit p-2 pl-0 cursor-pointer flex items-center gap-2"
                      to={href}
                    >
                      <Icon />
                      {name}
                    </Link>
                    <span className="absolute left-0 -bottom-1 will-change-transform -translate-x-[130%] w-full h-0.5 rounded-md bg-secondary transition-transform duration-300 group-hover:translate-x-0" />
                  </li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col gap-2"
              >
                <hr className="text-border my-3 w-full dark:text-border-dark" />
                <ToggleDarkModeUI />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <ContactModalUI show={showContact} onClose={onToggleContact} />
    </>
  );
}
