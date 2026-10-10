import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiX,
  FiSend,
  FiKey,
  FiRefreshCw,
  FiCheck,
  FiExternalLink,
  FiEye,
  FiCopy,
  FiChevronDown
} from 'react-icons/fi';
import profileImg from '../assets/profile.png';
import { CuteRobot } from './CuteRobot';
import {
  ChatMessage,
  sendMessageToAI,
  getStoredApiKey,
  setStoredApiKey,
} from '../services/aiChatService';

interface Coords {
  x: number;
  y: number;
}

const STORAGE_COORDS_KEY = 'vinayaka_chatbot_coords';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'init-msg-1',
  role: 'assistant',
  content: `Hi there! 👋 I'm **Vinayaka's AI twin**.\n\nI can walk you through my projects (**ParcelPulse**, **CloudSentry**), my **Java 17 & Spring Boot** stack, my consultancy experience at **CodeWINtage**, or help you view and download my **resume**.\n\nWhat would you like to know?`,
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

const SUGGESTED_PROMPTS = [
  { label: '🚀 Top Projects', prompt: 'Tell me about your top projects like ParcelPulse and CloudSentry.' },
  { label: '📄 Resume & CV', prompt: 'Can I view or download your resume?' },
  { label: '⚡ Tech Stack', prompt: 'What is your core tech stack and experience in Java & AWS?' },
  { label: '💼 Work Experience', prompt: 'Tell me about your consultancy CodeWINtage and work experience.' },
  { label: '🌟 Why hire you?', prompt: 'Why should an engineering team hire you?' },
  { label: '📬 Contact / Hire', prompt: 'How can I contact or hire you?' },
];

const ROBOT_PHRASES = [
  "Hi! I'm Vinayaka's AI twin 👋",
  "Ask me about ParcelPulse! 📦",
  "I know Java 17 & Spring Boot ⚡",
  "Check out CloudSentry! 🛡️",
  "Want to view my resume? 📄",
  "Click me to chat! 🤖",
  "Ask me anything about my projects! 🚀",
  "Founder of CodeWINtage 💼",
  "AWS Certified Developer ☁️",
  "Patrolling your screen! 🚶‍♂️",
];

export const AIChatbot: React.FC = () => {
  const navigate = useNavigate();

  // Floating trigger button state
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<Coords>({ x: -1, y: -1 });
  const [isDragging, setIsDragging] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Walking Robot Roaming state
  const [isWalking, setIsWalking] = useState(false);
  const [walkDirection, setWalkDirection] = useState<'left' | 'right'>('left');
  const [walkDuration, setWalkDuration] = useState(2.5);
  const [isHovered, setIsHovered] = useState(false);
  const [speechText, setSpeechText] = useState<string | null>("Hi! I'm Vinayaka's AI twin 🤖");
  const [isRoaming] = useState(true);

  // Chat conversation state
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputVal, setInputVal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // API Key Settings Modal
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [keyInput, setKeyInput] = useState('');
  const [activeApiKey, setActiveApiKey] = useState('');
  const [keySavedFeedback, setKeySavedFeedback] = useState(false);

  // Refs
  const buttonRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number; moved: boolean }>({
    mouseX: 0,
    mouseY: 0,
    startX: 0,
    startY: 0,
    moved: false,
  });

  // Load API key and initial coordinates
  useEffect(() => {
    setActiveApiKey(getStoredApiKey());

    // Initial positioning
    const savedCoords = localStorage.getItem(STORAGE_COORDS_KEY);
    if (savedCoords) {
      try {
        const parsed = JSON.parse(savedCoords);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          // Clamp to current viewport
          const clampedX = Math.min(Math.max(16, parsed.x), window.innerWidth - 80);
          const clampedY = Math.min(Math.max(16, parsed.y), window.innerHeight - 80);
          setCoords({ x: clampedX, y: clampedY });
          return;
        }
      } catch (e) {
        // ignore JSON parse error
      }
    }

    // Default position: bottom-right
    const defaultX = Math.max(16, window.innerWidth - 88);
    const defaultY = Math.max(16, window.innerHeight - 92);
    setCoords({ x: defaultX, y: defaultY });
  }, []);

  // Handle window resizing to keep icon on screen
  useEffect(() => {
    const handleResize = () => {
      setCoords((prev) => {
        if (prev.x < 0) return prev;
        const clampedX = Math.min(Math.max(16, prev.x), window.innerWidth - 80);
        const clampedY = Math.min(Math.max(16, prev.y), window.innerHeight - 80);
        return { x: clampedX, y: clampedY };
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autonomous wandering robot engine
  useEffect(() => {
    // Pause wandering if chat is open, dragging, hovered, or roaming disabled
    if (isOpen || isDragging || !isRoaming || isHovered) {
      setIsWalking(false);
      return;
    }

    // Schedule next stroll after resting
    const restTime = 3000 + Math.random() * 4500;
    const walkTimer = setTimeout(() => {
      if (isOpen || isDragging || isHovered || !isRoaming) return;

      const screenW = typeof window !== 'undefined' ? window.innerWidth : 1200;
      const minX = 24;
      const maxX = Math.max(minX + 60, screenW - 110);

      // Choose next target X
      const curX = coords.x;
      const stepDistance = 110 + Math.random() * 200;
      let targetX: number;

      if (curX > screenW - 180) {
        // Walk left
        targetX = Math.max(minX, curX - stepDistance);
      } else if (curX < 140) {
        // Walk right
        targetX = Math.min(maxX, curX + stepDistance);
      } else {
        const goLeft = Math.random() > 0.5;
        targetX = goLeft
          ? Math.max(minX, curX - stepDistance)
          : Math.min(maxX, curX + stepDistance);
      }

      const dist = Math.abs(targetX - curX);
      if (dist < 30) return;

      const durationSec = Math.max(1.4, Number((dist / 44).toFixed(2)));
      setWalkDuration(durationSec);
      setWalkDirection(targetX > curX ? 'right' : 'left');
      setIsWalking(true);
      setSpeechText(null);

      // Stroll to target
      setCoords((prev) => ({
        ...prev,
        x: targetX,
      }));

      // Arrival at destination
      const arrivalTimer = setTimeout(() => {
        setIsWalking(false);
        const randomPhrase = ROBOT_PHRASES[Math.floor(Math.random() * ROBOT_PHRASES.length)];
        setSpeechText(randomPhrase);

        const speechTimer = setTimeout(() => {
          setSpeechText((current) => (current === randomPhrase ? null : current));
        }, 4000);

        return () => clearTimeout(speechTimer);
      }, durationSec * 1000);

      return () => clearTimeout(arrivalTimer);
    }, restTime);

    return () => clearTimeout(walkTimer);
  }, [coords.x, isOpen, isDragging, isRoaming, isHovered]);

  // Auto scroll chat to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only primary mouse button
    setIsWalking(false);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: coords.x,
      startY: coords.y,
      moved: false,
    };

    const handleMouseMove = (moveEvt: MouseEvent) => {
      const dx = moveEvt.clientX - dragStartRef.current.mouseX;
      const dy = moveEvt.clientY - dragStartRef.current.mouseY;

      if (Math.hypot(dx, dy) > 5) {
        dragStartRef.current.moved = true;
        setIsDragging(true);

        const newX = Math.min(Math.max(12, dragStartRef.current.startX + dx), window.innerWidth - 76);
        const newY = Math.min(Math.max(12, dragStartRef.current.startY + dy), window.innerHeight - 76);

        setCoords({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      setTimeout(() => {
        setIsDragging(false);
      }, 50);

      // Save position if it was moved
      if (dragStartRef.current.moved) {
        setCoords((current) => {
          localStorage.setItem(STORAGE_COORDS_KEY, JSON.stringify(current));
          return current;
        });
      } else {
        // Pure click without dragging -> toggle chat
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Touch Drag Handlers (for mobile & touchscreens)
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsWalking(false);
    dragStartRef.current = {
      mouseX: touch.clientX,
      mouseY: touch.clientY,
      startX: coords.x,
      startY: coords.y,
      moved: false,
    };

    const handleTouchMove = (moveEvt: TouchEvent) => {
      const moveTouch = moveEvt.touches[0];
      const dx = moveTouch.clientX - dragStartRef.current.mouseX;
      const dy = moveTouch.clientY - dragStartRef.current.mouseY;

      if (Math.hypot(dx, dy) > 8) {
        dragStartRef.current.moved = true;
        setIsDragging(true);

        const newX = Math.min(Math.max(10, dragStartRef.current.startX + dx), window.innerWidth - 72);
        const newY = Math.min(Math.max(10, dragStartRef.current.startY + dy), window.innerHeight - 72);

        setCoords({ x: newX, y: newY });
      }
    };

    const handleTouchEnd = () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);

      setTimeout(() => {
        setIsDragging(false);
      }, 50);

      if (dragStartRef.current.moved) {
        setCoords((current) => {
          localStorage.setItem(STORAGE_COORDS_KEY, JSON.stringify(current));
          return current;
        });
      } else {
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Send message
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInputVal('');
    setIsLoading(true);

    try {
      const response = await sendMessageToAI(updatedMessages, query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        content: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...updatedMessages, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: `I'm having a brief issue right now, but feel free to explore my **[Projects](/projects)**, **[Resume](/resume)**, or reach out to me directly at **[vikram583135@gmail.com](mailto:vikram583135@gmail.com)**!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...updatedMessages, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset conversation
  const handleResetChat = () => {
    setMessages([
      {
        ...INITIAL_MESSAGE,
        id: `init-msg-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Save API Key
  const handleSaveApiKey = () => {
    setStoredApiKey(keyInput);
    setActiveApiKey(getStoredApiKey());
    setKeySavedFeedback(true);
    setTimeout(() => {
      setKeySavedFeedback(false);
      setShowKeyModal(false);
    }, 1200);
  };

  // Copy text helper
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Parse markdown-like links & formatting
  const renderMessageContent = (content: string) => {
    // Regex matches [label](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(renderFormattedText(content.substring(lastIndex, match.index)));
      }

      const label = match[1];
      const url = match[2];

      if (url.startsWith('/')) {
        // Internal route link
        parts.push(
          <button
            key={`link-${match.index}`}
            onClick={() => {
              navigate(url);
            }}
            className="inline-flex items-center gap-1 text-g-blue font-semibold hover:underline bg-g-blue/10 px-2 py-0.5 rounded text-xs mx-0.5 transition-colors"
          >
            <span>{label}</span>
            <FiEye size={12} />
          </button>
        );
      } else {
        // External link
        parts.push(
          <a
            key={`link-${match.index}`}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-g-blue font-semibold hover:underline bg-g-blue/10 px-2 py-0.5 rounded text-xs mx-0.5 transition-colors"
          >
            <span>{label}</span>
            <FiExternalLink size={12} />
          </a>
        );
      }

      lastIndex = linkRegex.lastIndex;
    }

    if (lastIndex < content.length) {
      parts.push(renderFormattedText(content.substring(lastIndex)));
    }

    return parts;
  };

  const renderFormattedText = (text: string) => {
    // Basic bold parsing: **bold**
    const boldRegex = /\*\*([^*]+)\*\*/g;
    const segments: React.ReactNode[] = [];
    let lastIdx = 0;
    let match: RegExpExecArray | null;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIdx) {
        segments.push(text.substring(lastIdx, match.index));
      }
      segments.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-text-primary">
          {match[1]}
        </strong>
      );
      lastIdx = boldRegex.lastIndex;
    }

    if (lastIdx < text.length) {
      segments.push(text.substring(lastIdx));
    }

    return segments;
  };

  // Calculate desktop chat window coordinates anchored smoothly to viewport
  const getWindowPositionStyles = () => {
    if (typeof window === 'undefined') return {};
    const isMobile = window.innerWidth < 640;
    if (isMobile) {
      return {
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '85dvh',
        maxHeight: '92dvh',
        borderRadius: '24px 24px 0 0',
      };
    }

    // Desktop/Tablet floating popup
    const width = 410;
    const height = 580;

    // Center window slightly towards the left of the button
    let left = coords.x - (width - 64);
    let top = coords.y - height - 16;

    // Bounds checking
    if (left < 16) left = 16;
    if (left + width > window.innerWidth - 16) left = window.innerWidth - width - 16;
    if (top < 16) top = coords.y + 72; // Flip downwards if no room above
    if (top + height > window.innerHeight - 16) top = window.innerHeight - height - 16;

    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  };

  // If initial coords not set yet
  if (coords.x === -1) return null;

  return (
    <>
      {/* =========================================================
          MOVABLE / DRAGGABLE FLOATING CUTE WALKING ROBOT
         ========================================================= */}
      <div
        ref={buttonRef}
        style={{
          position: 'fixed',
          left: `${coords.x}px`,
          top: `${coords.y}px`,
          zIndex: 9999,
          touchAction: 'none',
          transition: isDragging
            ? 'none'
            : isWalking
            ? `left ${walkDuration}s linear, top 0.25s ease-out`
            : 'left 0.35s ease-out, top 0.25s ease-out',
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={`select-none ${isOpen ? 'hidden sm:block' : ''}`}
      >
        <CuteRobot
          isOpen={isOpen}
          isWalking={isWalking}
          direction={walkDirection}
          isDragging={isDragging}
          speechText={speechText}
          onToggleChat={() => setIsOpen((prev) => !prev)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

      {/* =========================================================
          CHAT MODAL / WINDOW (BOTTOM SHEET ON MOBILE)
         ========================================================= */}
      {isOpen && (
        <>
          {/* Mobile backdrop */}
          <div
            className="sm:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[9997] animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />

          <div
            style={getWindowPositionStyles()}
            className="fixed z-[9998] bg-white rounded-t-3xl sm:rounded-2xl shadow-goog-4 border border-outline flex flex-col overflow-hidden chatbot-window-enter"
          >
            {/* Mobile pull-down indicator handle */}
            <div className="sm:hidden flex justify-center py-2 bg-gradient-to-r from-blue-50 via-white to-surface-alt border-b border-outline/30">
              <div className="w-10 h-1 bg-slate-300 rounded-full" />
            </div>

            {/* HEADER */}
            <div className="px-4 py-3 bg-gradient-to-r from-blue-50 via-white to-surface-alt border-b border-outline flex items-center justify-between gap-2">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative flex-shrink-0">
                  <img
                    src={profileImg}
                    alt="Vinayaka AI"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-g-green border-2 border-white rounded-full"></span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-text-primary text-sm truncate">
                    Vinayaka AI
                  </h3>
                  <span className="text-[10px] bg-g-blue/10 text-g-blue font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                    Digital Twin
                  </span>
                </div>
                <p className="text-[11px] text-text-secondary truncate">
                  Full Stack Java Dev & AWS Specialist
                </p>
              </div>
            </div>

            {/* Header controls */}
            <div className="flex items-center gap-1 flex-shrink-0">
              {/* API Key settings trigger */}
              <button
                onClick={() => setShowKeyModal((prev) => !prev)}
                className={`p-2 rounded-full transition-colors text-xs flex items-center gap-1 ${
                  activeApiKey
                    ? 'text-g-green hover:bg-g-green/10'
                    : 'text-text-secondary hover:text-g-blue hover:bg-g-blue/10'
                }`}
                title={activeApiKey ? 'Custom Gemini API Key Active' : 'Configure Gemini API Key'}
              >
                <FiKey size={16} />
                {activeApiKey && <span className="w-1.5 h-1.5 rounded-full bg-g-green"></span>}
              </button>

              {/* Reset chat button */}
              <button
                onClick={handleResetChat}
                className="p-2 text-text-secondary hover:text-g-blue hover:bg-surface-hover rounded-full transition-colors"
                title="Restart Conversation"
              >
                <FiRefreshCw size={15} />
              </button>

              {/* Close window */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-secondary hover:text-g-red hover:bg-g-red/10 rounded-full transition-colors"
                title="Close Window"
              >
                <FiX size={18} />
              </button>
            </div>
          </div>

          {/* API KEY SETTINGS BANNER / DRAWER */}
          {showKeyModal && (
            <div className="p-3.5 bg-surface-alt border-b border-outline text-xs animate-fadeIn space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-text-primary flex items-center gap-1.5">
                  <FiKey className="text-g-blue" />
                  <span>Google Gemini API Key</span>
                </span>
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="text-text-secondary hover:text-text-primary"
                >
                  <FiChevronDown size={16} />
                </button>
              </div>
              <p className="text-text-secondary text-[11px] leading-relaxed">
                The chatbot already answers all questions about Vinayaka out-of-the-box via the built-in Persona Engine!
                You can also connect a Google Gemini API Key anytime for live generative responses.
              </p>
              <div className="flex gap-2">
                <input
                  type="password"
                  placeholder="Paste Gemini API Key (AQ... or AIzaSy...)"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-white border border-outline rounded-lg text-xs focus:outline-none focus:border-g-blue"
                />
                <button
                  onClick={handleSaveApiKey}
                  className="btn-blue py-1.5 px-3 text-xs font-semibold rounded-lg flex items-center gap-1"
                >
                  {keySavedFeedback ? <FiCheck size={14} /> : 'Save'}
                </button>
              </div>
              {activeApiKey && (
                <div className="flex items-center justify-between pt-1 text-[11px] text-g-green font-medium">
                  <span>✓ Active Key Stored</span>
                  <button
                    onClick={() => {
                      setStoredApiKey('');
                      setActiveApiKey('');
                      setKeyInput('');
                    }}
                    className="text-g-red hover:underline text-[10px]"
                  >
                    Clear Key
                  </button>
                </div>
              )}
            </div>
          )}

          {/* MESSAGES CONTAINER */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-white via-surface-alt/20 to-white text-sm">
            {messages.map((msg) => {
              const isBot = msg.role === 'assistant';

              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} animate-fadeIn`}
                >
                  <div className="flex items-end gap-2 max-w-[88%]">
                    {isBot && (
                      <img
                        src={profileImg}
                        alt="Bot"
                        className="w-6 h-6 rounded-full object-cover flex-shrink-0 mb-1 border border-outline"
                      />
                    )}
                    <div
                      className={`p-3.5 leading-relaxed text-[13px] ${
                        isBot ? 'chat-bubble-bot' : 'chat-bubble-user'
                      }`}
                    >
                      <div className="whitespace-pre-line">
                        {renderMessageContent(msg.content)}
                      </div>

                      {/* Optional Action Shortcuts attached to bot response */}
                      {isBot && (
                        <div className="mt-2.5 pt-2 border-t border-outline/50 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                          <span className="text-text-secondary text-[10px]">
                            {msg.timestamp}
                          </span>
                          <button
                            onClick={() => handleCopy(msg.id, msg.content)}
                            className="inline-flex items-center gap-1 text-text-secondary hover:text-g-blue transition-colors"
                            title="Copy reply"
                          >
                            {copiedId === msg.id ? (
                              <>
                                <FiCheck size={11} className="text-g-green" />
                                <span className="text-g-green">Copied</span>
                              </>
                            ) : (
                              <>
                                <FiCopy size={11} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {!isBot && (
                    <span className="text-[10px] text-text-secondary mt-1 mr-1">
                      {msg.timestamp}
                    </span>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex items-end gap-2 animate-fadeIn">
                <img
                  src={profileImg}
                  alt="Vinayaka AI"
                  className="w-6 h-6 rounded-full object-cover flex-shrink-0 mb-1 border border-outline"
                />
                <div className="chat-bubble-bot p-3 flex items-center gap-2">
                  <div className="google-dots">
                    <span className="animate-bounce"></span>
                    <span className="animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                    <span className="animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                    <span className="animate-bounce" style={{ animationDelay: '0.45s' }}></span>
                  </div>
                  <span className="text-xs text-text-secondary ml-1">Vinayaka is typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK PROMPT SUGGESTIONS */}
          <div className="px-3 py-2 bg-surface-alt/60 border-t border-outline flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {SUGGESTED_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(item.prompt)}
                disabled={isLoading}
                className="chip-prompt"
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* INPUT BAR */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-outline flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask me anything about my projects, stack..."
              disabled={isLoading}
              className="flex-1 px-3.5 py-2.5 bg-surface-alt border border-outline rounded-full text-xs sm:text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:border-g-blue focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isLoading}
              className={`p-2.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                inputVal.trim() && !isLoading
                  ? 'bg-g-blue text-white shadow-goog-1 hover:bg-blue-600 hover:scale-105'
                  : 'bg-surface-hover text-text-secondary cursor-not-allowed opacity-50'
              }`}
              title="Send message"
            >
              <FiSend size={16} />
            </button>
          </form>

          {/* FOOTER NOTICE */}
          <div className="px-3 py-1 bg-surface-alt border-t border-outline text-[10px] text-text-secondary flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-g-green"></span>
              {activeApiKey ? 'Gemini AI Active' : 'Persona Knowledge Engine'}
            </span>
            <button
              onClick={() => setShowKeyModal(true)}
              className="text-g-blue hover:underline font-medium"
            >
              {activeApiKey ? 'Manage Key' : '+ Set API Key'}
            </button>
          </div>
        </div>
      </>
    )}
  </>
);
};

export default AIChatbot;
