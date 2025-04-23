import { motion } from "motion/react";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            transition={{ duration: 15, repeat: Infinity }}
            animate={{ y: [50, 150, 50] }}
            src={banner1}
            className="max-w-sm w-80 rounded-tr-[35px] rounded-tl-[35px] rounded-br-[35px] border-l-4 border-b-4  border-green-500 shadow-2xl"
          />
          <motion.img
            transition={{ duration: 15, repeat: Infinity }}
            animate={{ x: [50, 150, 50] }}
            src={banner2}
            className="max-w-sm w-80 rounded-tr-[35px] rounded-tl-[35px] rounded-br-[35px] border-l-4 border-b-4  border-green-500 shadow-2xl"
          />
        </div>
        <motion.div
          animate={{ y: [130, 0] }}
          transition={{ duration: 2, delay: 1 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">
            The <span className="text-[#3C65F5]">Easiest Way </span>
            to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
