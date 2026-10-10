import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';

interface CuteRobotProps {
  isOpen: boolean;
  isWalking: boolean;
  direction: 'left' | 'right';
  isDragging: boolean;
  speechText?: string | null;
  onToggleChat: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isOnline?: boolean;
}

export const CuteRobot: React.FC<CuteRobotProps> = ({
  isOpen,
  isWalking,
  direction,
  isDragging,
  speechText,
  onToggleChat,
  onMouseEnter,
  onMouseLeave,
  isOnline = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic natural blinking
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 3200 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  // Determine emotional state
  const isHappy = isHovered || isOpen;
  const isWaving = isHovered && !isWalking && !isOpen;

  return (
    <div
      className="relative select-none group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onToggleChat}
      title={isOpen ? 'Close chat' : 'Vinayaka AI Robot • Click to chat or drag me!'}
    >
      {/* CUTE FLOATING SPEECH BUBBLE */}
      {(speechText || isHovered) && !isOpen && (
        <div
          className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none z-20 transition-all duration-300 animate-fadeIn"
          style={{ minWidth: '160px' }}
        >
          <div className="relative bg-white/95 backdrop-blur-sm border border-outline text-text-primary text-[11px] font-semibold py-1.5 px-3 rounded-2xl shadow-goog-3 flex items-center gap-1.5 justify-center text-center">
            <span className="text-g-blue text-xs">💬</span>
            <span className="truncate max-w-[190px]">
              {isHovered ? 'Click me to chat with Vinayaka!' : speechText}
            </span>
          </div>
          {/* Bubble beak */}
          <div className="w-2.5 h-2.5 bg-white border-r border-b border-outline rotate-45 mx-auto -mt-1.5 shadow-sm"></div>
        </div>
      )}

      {/* ONLINE STATUS BADGE */}
      {isOnline && (
        <div
          className="absolute -top-1 -right-1 z-10 w-3.5 h-3.5 rounded-full bg-g-green border-2 border-white shadow-sm flex items-center justify-center"
          title="Vinayaka AI is Online"
        >
          <span className="w-2 h-2 rounded-full bg-g-green animate-ping opacity-75"></span>
        </div>
      )}

      {/* DRAG ME / CHAT HINT ICON BADGE */}
      <div
        className={`absolute -bottom-1 -right-1 z-10 w-6 h-6 rounded-full bg-g-blue text-white shadow-md flex items-center justify-center transition-transform duration-200 ${
          isHovered ? 'scale-110' : 'scale-90'
        }`}
      >
        {isOpen ? <FiX size={13} /> : <FiMessageSquare size={12} />}
      </div>

      {/* ROBOT SVG CONTAINER */}
      <div
        style={{
          transform: `scaleX(${direction === 'left' ? -1 : 1})`,
          transition: 'transform 0.25s ease-out',
        }}
        className={`transition-all duration-150 ${
          isDragging ? 'scale-110 cursor-grabbing' : 'hover:scale-105 cursor-grab'
        }`}
      >
        <svg
          viewBox="0 0 84 100"
          width="76"
          height="92"
          className="overflow-visible filter drop-shadow(0 8px 16px rgba(66, 133, 244, 0.2))"
        >
          <defs>
            {/* Glossy ceramic gradient for head and body */}
            <linearGradient id="robotWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Dark glass visor gradient */}
            <linearGradient id="robotVisorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>

            {/* Google Blue accent gradient */}
            <linearGradient id="robotBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="100%" stopColor="#1A73E8" />
            </linearGradient>
          </defs>

          {/* GROUND SHADOW */}
          <ellipse
            cx="42"
            cy="94"
            rx="24"
            ry="5.5"
            className={isWalking ? 'robot-shadow' : 'opacity-30'}
            fill="#0F172A"
            opacity="0.25"
          />

          {/* ROBOT MAIN BODY GROUP */}
          <g
            className={
              isDragging
                ? 'robot-dangle'
                : isWalking
                ? 'robot-walking-body'
                : 'robot-idle-body'
            }
          >
            {/* ANTENNA STEM & ORB */}
            <line
              x1="42"
              y1="20"
              x2="42"
              y2="8"
              stroke="#94A3B8"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Glowing signal rings */}
            <circle
              cx="42"
              cy="7"
              r="7"
              fill="none"
              stroke="#4285F4"
              strokeWidth="1.5"
              className="robot-antenna-ring"
            />
            {/* Antenna Ball */}
            <circle
              cx="42"
              cy="7"
              r="4.5"
              fill={isHappy ? '#34A853' : '#4285F4'}
              className="transition-colors duration-300"
            />
            <circle cx="41" cy="5.5" r="1.5" fill="#FFFFFF" opacity="0.8" />

            {/* LEGS & FEET */}
            {/* Left Leg */}
            <g className={isWalking ? 'robot-leg-left-walk' : ''}>
              <rect x="28" y="65" width="7.5" height="19" rx="3.5" fill="#64748B" />
              {/* Left Foot */}
              <path
                d="M26 80 Q32 78 38 80 L38 85 Q32 86 26 85 Z"
                fill="#334155"
              />
              <circle cx="32" cy="83" r="1.5" fill="#4285F4" />
            </g>

            {/* Right Leg */}
            <g className={isWalking ? 'robot-leg-right-walk' : ''}>
              <rect x="48.5" y="65" width="7.5" height="19" rx="3.5" fill="#64748B" />
              {/* Right Foot */}
              <path
                d="M46.5 80 Q52.5 78 58.5 80 L58.5 85 Q52.5 86 46.5 85 Z"
                fill="#334155"
              />
              <circle cx="52.5" cy="83" r="1.5" fill="#4285F4" />
            </g>

            {/* LEFT ARM */}
            <g
              className={
                isWaving
                  ? 'robot-arm-wave'
                  : isWalking
                  ? 'robot-arm-left-walk'
                  : 'robot-arm-idle'
              }
            >
              <rect x="14" y="39" width="6.5" height="17" rx="3" fill="#64748B" />
              <circle cx="17.2" cy="57" r="4.2" fill="#334155" />
              <circle cx="17.2" cy="57" r="2" fill="#4285F4" />
            </g>

            {/* RIGHT ARM */}
            <g
              className={
                isWalking
                  ? 'robot-arm-right-walk'
                  : isHappy && !isWaving
                  ? 'robot-arm-happy-right'
                  : 'robot-arm-idle'
              }
            >
              <rect x="63.5" y="39" width="6.5" height="17" rx="3" fill="#64748B" />
              <circle cx="66.8" cy="57" r="4.2" fill="#334155" />
              <circle cx="66.8" cy="57" r="2" fill="#4285F4" />
            </g>

            {/* TORSO / BODY */}
            <rect
              x="22"
              y="34"
              width="40"
              height="35"
              rx="15"
              fill="url(#robotWhiteGrad)"
              stroke="#CBD5E1"
              strokeWidth="2"
            />

            {/* Chest Plate / Screen */}
            <rect
              x="29"
              y="42"
              width="26"
              height="18"
              rx="7"
              fill="url(#robotVisorGrad)"
              stroke="#334155"
              strokeWidth="1"
            />

            {/* Chest Power Reactor (Heart/Pulse) */}
            <circle
              cx="36"
              cy="51"
              r="3"
              fill={isHappy ? '#EA4335' : '#34A853'}
              className="animate-ping opacity-75"
            />
            <circle
              cx="36"
              cy="51"
              r="2.5"
              fill={isHappy ? '#EA4335' : '#34A853'}
            />

            {/* Google-colored mini data bars */}
            <rect x="42" y="47" width="8" height="2" rx="1" fill="#4285F4" />
            <rect x="42" y="51" width="6" height="2" rx="1" fill="#FBBC04" />
            <rect x="42" y="55" width="4" height="2" rx="1" fill="#34A853" />

            {/* NECK JOINT */}
            <rect x="37" y="31" width="10" height="4" rx="2" fill="#94A3B8" />

            {/* HEAD GROUP */}
            <g className={!isWalking ? 'robot-head-idle' : ''}>
              {/* Head Shell */}
              <rect
                x="18"
                y="14"
                width="48"
                height="28"
                rx="14"
                fill="url(#robotWhiteGrad)"
                stroke="#CBD5E1"
                strokeWidth="2"
              />

              {/* Side Headphones / Ears (Google Blue) */}
              <rect
                x="15"
                y="20"
                width="4.5"
                height="16"
                rx="2"
                fill="url(#robotBlueGrad)"
              />
              <rect
                x="64.5"
                y="20"
                width="4.5"
                height="16"
                rx="2"
                fill="url(#robotBlueGrad)"
              />

              {/* Glossy Black Visor */}
              <rect
                x="23"
                y="18"
                width="38"
                height="20"
                rx="9"
                fill="url(#robotVisorGrad)"
                stroke="#334155"
                strokeWidth="1"
              />

              {/* Visor top gloss reflection */}
              <path
                d="M26 21 Q42 19 58 21"
                stroke="#475569"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* GLOWING CYAN LED EYES */}
              {isHappy ? (
                /* Joyful curved eyes (^ ^) */
                <>
                  <path
                    d="M30 29 Q35 23 40 29"
                    stroke="#00F0FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    className="robot-eye"
                  />
                  <path
                    d="M44 29 Q49 23 54 29"
                    stroke="#00F0FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    className="robot-eye"
                  />
                </>
              ) : isBlinking ? (
                /* Blinking closed eyes (-) */
                <>
                  <line
                    x1="31"
                    y1="28"
                    x2="39"
                    y2="28"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="robot-eye"
                  />
                  <line
                    x1="45"
                    y1="28"
                    x2="53"
                    y2="28"
                    stroke="#00F0FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="robot-eye"
                  />
                </>
              ) : (
                /* Normal glowing capsule eyes */
                <>
                  <ellipse
                    cx="35"
                    cy="28"
                    rx="4"
                    ry="5"
                    fill="#00F0FF"
                    className="robot-eye"
                  />
                  <circle cx="34" cy="26" r="1.3" fill="#FFFFFF" />

                  <ellipse
                    cx="49"
                    cy="28"
                    rx="4"
                    ry="5"
                    fill="#00F0FF"
                    className="robot-eye"
                  />
                  <circle cx="48" cy="26" r="1.3" fill="#FFFFFF" />
                </>
              )}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CuteRobot;
