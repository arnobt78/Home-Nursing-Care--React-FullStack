import Img1 from "../../assets/icon/1.svg";
import Img2 from "../../assets/icon/2.svg";
import Img3 from "../../assets/icon/3.svg";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      <div className="bg-slate-100">
        <div className="container">
          {/* Existing Cards Section */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img1}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">About</p>
              <p className="text-sm text-black/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img2}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Connection</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img3}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Plugin</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          </div> */}

          {/* New Section: Why Choose Our Nursing Care */}
          <div className="py-16">
            <motion.h2
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="text-3xl font-bold text-center text-primary mb-10"
            >
              Why Choose Our Nursing Care
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
              <motion.div
                variants={slideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto bg-secondary/10"
              >
                <img
                  src={Img1}
                  alt="24/7 Available"
                  className="w-16 h-16 rounded-full object-contain p-3 bg-secondary"
                />
                <p className="text-xl font-semibold">24/7 Available</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </motion.div>
              <motion.div
                variants={slideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto bg-secondary/10"
              >
                <img
                  src={Img2}
                  alt="Medical Cycle Care"
                  className="w-16 h-16 rounded-full object-contain p-3 bg-secondary"
                />
                <p className="text-xl font-semibold">Medical Cycle Care</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </motion.div>
              <motion.div
                variants={slideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto bg-secondary/10"
              >
                <img
                  src={Img3}
                  alt="Quality Control"
                  className="w-16 h-16 rounded-full object-contain p-3 bg-secondary"
                />
                <p className="text-xl font-semibold">Quality Control</p>
                <p className="text-sm text-black/80 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
