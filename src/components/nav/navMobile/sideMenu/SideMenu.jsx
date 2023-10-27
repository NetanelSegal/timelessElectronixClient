import { Link } from "react-router-dom";
import Button from "../../../button/Button";
import { motion } from "framer-motion";

const SideMenu = ({ isConnected }) => {
  const DURATION = 0.3;

  const animation = {
    from: { top: 0, right: 0, left: 0, bottom: "100vh", padding: 0 },
    to: {
      top: 0,
      right: 0,
      left: 0,
      bottom: "70vh",
    },
    exit: {
      top: 0,
      right: 0,
      left: 0,
      bottom: "100vh",
      padding: 0,
      transition: { duration: DURATION, ease: "easeIn" },
    },
  };

  return (
    <motion.ul
      variants={animation}
      initial="from"
      animate="to"
      exit="exit"
      transition={{ duration: DURATION, ease: "easeOut" }}
      className="absolute bottom-0 left-0 right-0 top-0 z-0 flex flex-col items-center justify-center gap-3 overflow-hidden bg-black py-10 font-semibold text-white"
    >
      <motion.li
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION }}
        className="hover:underline  active:scale-95"
      >
        <Link to={"/uploadBox"}> העלאת ארגז</Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION }}
        className=" hover:underline  active:scale-95"
      >
        <Link to={"/searchBox"}> חיפוש ארגז</Link>
      </motion.li>
      <motion.li
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION }}
        className=" hover:underline  active:scale-95"
      >
        {isConnected ? (
          <Link to={"/register"}>
            <Button secondery text={"התנתקות"} />
          </Link>
        ) : (
          <Link to={"/register"}>
            <Button text={"התחברות"} />
          </Link>
        )}
      </motion.li>
    </motion.ul>
  );
};

export default SideMenu;
