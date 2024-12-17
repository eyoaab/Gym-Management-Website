import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import NavButtons from './components/nav-buttons';
import VideosPage from './videos-page';
import PlaningPage from './plans-page';
import PersonalTrainingPage from './personal-training-page';
import Slider from './components/sliders';

function ServicePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeIndex = (index) => {
    setActiveIndex(index);
  };

  // Variants for animation
  const pageVariants = {
    initial: { opacity: 0, y: 20 }, 
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${
        activeIndex % 2 === 0 ? 'bg-darkGray' : 'bg-darkYellow'
      }`}
    >
      {/* Navigation Buttons */}
      <NavButtons index={activeIndex} ChangeToIndex={changeIndex} />

      {/* Main Pages*/}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait"> 
          {activeIndex === 0 && (
            <motion.div
              key="personal-training"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full h-full"
            >
              <PersonalTrainingPage />
            </motion.div>
          )}
          {activeIndex === 1 && (
            <motion.div
              key="videos"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full h-full"
            >
              <VideosPage />
            </motion.div>
          )}
          {activeIndex === 2 && (
            <motion.div
              key="planning"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-full h-full"
            >
              <PlaningPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Slider */}
      <Slider index={activeIndex} ChangeToIndex={changeIndex} />
    </div>
  );
}

export default ServicePage;
