"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface SayHelloModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SayHelloModal({ isOpen, onClose }: SayHelloModalProps) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = async () => {
    setIsClosing(true);
    await animOut();
    setIsClosing(false);
    onClose();
  };

  // Simple animations
  useEffect(() => {
    if (isOpen && !isClosing) {
      document.body.style.overflow = "hidden";

      // Simple fade in and scale up
      gsap.fromTo(
        backgroundRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const animOut = async () => {
    document.body.style.overflow = "unset";

    return new Promise((resolve, reject) => {
      // Simple fade out and scale down
      gsap.to(backgroundRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });

      gsap
        .to(modalRef.current, {
          opacity: 0,
          scale: 0.9,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
        })
        .then(resolve)
        .catch(reject);
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, subject, message });
    handleCloseModal();
  };

  // Handle background click to close modal
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Only render when explicitly open
  if (!isOpen) return null;

  return (
    <div
      ref={backgroundRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      onClick={handleBackgroundClick}
    >
      <div
        ref={modalRef}
        className="bg-black rounded-lg p-8 w-full max-w-md mx-4 shadow-2xl"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-2xl font-bold">Say Hello</h2>
          <button
            onClick={handleCloseModal}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-white text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-kwRed focus:border-transparent resize-none"
              placeholder="Tell me more..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-kwRed hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-kwRed focus:ring-offset-2 focus:ring-offset-black"
          >
            Send Message
          </button>

          <div className="text-center">
            <a
              href="mailto:anton@klockworks.se"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200 underline decoration-gray-600 hover:decoration-white"
            >
              open email client
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
