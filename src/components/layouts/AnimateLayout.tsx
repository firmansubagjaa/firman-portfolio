import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

function AnimateLayout() {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col h-full font-poppins bg-gradient-to-br from-purple-800 from-10% via-purple-900 via-30% to-gray-900 to-100% tracking-tight"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimateLayout;
