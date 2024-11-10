import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const viewVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

interface ViewProps {
  children: React.ReactNode;
  currentView: string;
  previousView: string | null;
}

const ViewContainer = ({ children, currentView, previousView }: ViewProps) => {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Determine animation direction based on menu order
    const menuOrder = ['dashboard', 'documentation', 'discussions', 'environments', 
                      'contract', 'security', 'monitoring', 'audit', 'settings', 'support'];
    if (previousView && currentView) {
      const prevIndex = menuOrder.indexOf(previousView);
      const currentIndex = menuOrder.indexOf(currentView);
      setDirection(prevIndex < currentIndex ? 1 : -1);
    }
  }, [currentView, previousView]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode='wait'>
        <motion.div
          key={currentView}
          custom={direction}
          variants={viewVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ViewContainer;