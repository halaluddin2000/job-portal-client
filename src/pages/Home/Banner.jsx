import { motion } from "motion/react";
import banner1 from "../../assets/banner/banner-1.jpg";
import banner2 from "../../assets/banner/banner-2.jpg";
function Banner() {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            transition={{ duration: 10, repeat: Infinity }}
            animate={{ y: [50, 150, 50] }}
            src={banner1}
            className="max-w-sm w-80 rounded-tr-[35px] rounded-tl-[35px] rounded-br-[35px] border-l-4 border-b-4  border-green-500 shadow-2xl"
          />
          <motion.img
            transition={{ duration: 10, repeat: Infinity }}
            animate={{ x: [50, 150, 50] }}
            src={banner2}
            className="max-w-sm w-80 rounded-tr-[35px] rounded-tl-[35px] rounded-br-[35px] border-l-4 border-b-4  border-green-500 shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <motion.h1
            animate={{ y: 20 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
            className="text-5xl font-bold"
          >
            Box Office News!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
