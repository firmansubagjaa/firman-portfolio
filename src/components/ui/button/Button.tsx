import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
}
type TButton = ButtonProps;

const Button = ({ children }: TButton) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg hover:shadow-2xl hover:shadow-gray-300 transition ease-in-out duration-300 delay-100 text-white text-xl font-bold py-4 px-8 rounded-2xl"
    >
      {children}
    </motion.button>
  );
};

export default Button;
