import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface BetaAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BetaAccessModal: React.FC<BetaAccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would integrate with your waitlist/email system
    setSubmitted(true);
    // Optional: Close modal after delay
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                     w-full max-w-md p-6 rounded-xl bg-gray-900 border border-gray-800
                     shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-1 text-gray-400 hover:text-white
                       rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Get Early Access
              </h2>
              <p className="text-gray-400">
                Join the waitlist for exclusive beta access to our integration platform.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700
                             text-white rounded-lg focus:ring-2 focus:ring-green-500
                             focus:border-transparent outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2
                           bg-green-600 hover:bg-green-500 text-white rounded-lg
                           transition-colors"
                >
                  Request Access
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-4 text-green-400"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BetaAccessModal;