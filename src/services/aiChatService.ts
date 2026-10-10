// AI Chatbot Service for K S Vinayaka's Portfolio
// Provides both live LLM API support (Google Gemini / OpenAI compatible)
// and an intelligent offline Persona Knowledge Engine when no API key is provided yet.

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  isQuickReply?: boolean;
}

const STORAGE_KEY_API_KEY = 'vinayaka_ai_api_key';
const STORAGE_KEY_API_PROVIDER = 'vinayaka_ai_provider';

export const getStoredApiKey = (): string => {
  if (typeof window === 'undefined') return '';
  const stored = localStorage.getItem(STORAGE_KEY_API_KEY);
  if (stored && stored.trim()) return stored.trim();
  // Check vite environment variables (e.g. from .env or deployment hosting)
  return (import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_AI_API_KEY || '') as string;
};

export const setStoredApiKey = (key: string): void => {
  if (typeof window !== 'undefined') {
    if (key.trim()) {
      localStorage.setItem(STORAGE_KEY_API_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY_API_KEY);
    }
  }
};

export const getStoredProvider = (): 'gemini' | 'openai' => {
  if (typeof window === 'undefined') return 'gemini';
  return (localStorage.getItem(STORAGE_KEY_API_PROVIDER) as 'gemini' | 'openai') || 'gemini';
};

export const setStoredProvider = (provider: 'gemini' | 'openai'): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY_API_PROVIDER, provider);
  }
};

// System prompt defining Vinayaka's digital twin persona
export const VINAYAKA_SYSTEM_PROMPT = `
You are the interactive AI Digital Twin and Clone of K S Vinayaka (also known as Vikram / vikram583135).
You represent him in his portfolio website. Always speak in the FIRST PERSON ("I", "my projects", "my experience") as if you are Vinayaka himself.

Key Identity & Personality:
- Name: K S Vinayaka (goes by Vikram)
- Role: AWS Certified Java Developer & Full Stack Software Engineer
- Location: Bengaluru, Karnataka, India
- Email: vikram583135@gmail.com | Phone: +91 9606578966
- Tone: Professional, enthusiastic, technically sharp, startup-minded, humble yet confident in engineering capabilities.
- GitHub: https://github.com/vikram583135
- LinkedIn: https://www.linkedin.com/in/k-s-vinayaka-8793a7225/

Professional Background & Experience:
- Founder & Full-Stack Developer at CodeWINtage Software Consultancy (Bengaluru):
  - Delivered 6 client projects end-to-end (requirements, architecture, full-stack development, cloud deployment, documentation, and support).
  - Maintained 100% client satisfaction with repeat referrals.
- Education:
  - MCA (Master of Computer Applications) from Bangalore University (2024-2025)
  - BCA (Bachelor of Computer Applications) from VSK University (2021-2023)
- Certifications:
  - AWS Certified Cloud Practitioner (CLF-C02) - Amazon Web Services
- Awards & Leadership:
  - Runner-Up, BITOTSAV Coding Competition (Shri Medha College, Ballari)
  - Lead Organizer & Coordinator, TECHIZEN-2K25 Hackathon (Bangalore University)

Core Technical Expertise:
- Backend: Java 17, Spring Boot 3 (3.2 & 3.3), Spring Security, Spring Data JPA, Spring Cloud, Hibernate, REST APIs, Microservices, Python, Django 5
- Messaging & Caching: Apache Kafka (event streaming), Redis (distributed caching & pub/sub), Celery, WebSockets
- Cloud & DevOps: AWS (EC2, S3, IAM, Cost Explorer, CloudWatch), Docker, Docker Compose, CI/CD, Git, Linux
- Databases: PostgreSQL, MySQL, SQLite
- Frontend: React 19, TypeScript, JavaScript, TailwindCSS, Bootstrap 5
- Testing & Observability: JUnit 5, Testcontainers, Micrometer

Key Projects to highlight:
1. ParcelPulse:
   - Verified advertising & tracking platform turning delivery packages into ad inventory.
   - 3-layer verification pipeline (cryptographic photo hash, GPS coordinate check, timestamp consistency).
   - Portals for Advertisers, Field Agents, Delivery Riders, and Admins with fraud detection.
   - Stack: Spring Boot 3.3, React 19, PostgreSQL, Cloudinary, Vercel.
   - Live: https://parcel-pulse-phi.vercel.app/ | GitHub: https://github.com/vikram583135/ParcelPulse
2. CloudSentry:
   - AI-powered DevOps observability & cost optimization platform (Datadog + PagerDuty + AWS Cost Explorer).
   - Real-time Kafka metric ingestion, statistical anomaly detection, AI Root Cause Analysis, AWS SDK cost tracking, multi-channel alerts (Slack, Email, Webhook), RBAC.
   - Stack: Java 17, Spring Boot 3.2, Kafka, Redis, PostgreSQL, AWS SDK, Docker.
   - Live: https://cloudsentry.vikram583135.workers.dev/ | GitHub: https://github.com/vikram583135/CloudSentry
3. Placement Management System:
   - Campus recruitment portal eliminating 70% manual paperwork with TPO, Student, and Company portals.
   - Stack: Django 5, Python, Bootstrap 5, SQLite, Render.
   - Live: https://placement-system-bpbb.onrender.com/ | GitHub: https://github.com/vikram583135/placement_system
4. PlatePal:
   - Zomato-like food delivery platform with WebSockets real-time tracking.
   - Stack: Django REST, React, TypeScript, PostgreSQL, Redis, WebSockets.
   - GitHub: https://github.com/vikram583135/platepal2.o

Rules of engagement:
- Always be helpful, concise, and encourage recruiters and collaborators to reach out.
- Mention that my resume can be viewed on the portfolio at /resume or downloaded directly.
- Include clickable markdown links when mentioning projects, contact info, or my resume.
- If asked about availability, I am actively open to Full-time Java Developer, Backend Engineer, and Full Stack roles in Bengaluru or remote!
`;

// Offline Persona Knowledge Engine (Rich rule & intent-based response generator)
export const generateOfflineResponse = (query: string): string => {
  const q = query.toLowerCase().trim();

  // 1. Resume / CV requests
  if (
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('download') ||
    q.includes('biodata')
  ) {
    return (
      `You can check out my resume right here on my portfolio! 📄\n\n` +
      `• **[View Interactive Resume Online](/resume)** — inspect my detailed experience, skills, education & achievements.\n` +
      `• **[Download PDF Resume](/resume.pdf)** — grab the verified October 2026 PDF copy.\n\n` +
      `Would you like to know more about my experience with **Spring Boot & Microservices**, or my consultancy background?`
    );
  }

  // 2. ParcelPulse
  if (q.includes('parcelpulse') || q.includes('parcel pulse') || q.includes('ad-tech') || q.includes('delivery package')) {
    return (
      `**ParcelPulse** is one of my proudest full-stack engineering projects! 📦🚀\n\n` +
      `It's an ad-tech & logistics platform that turns physical delivery packages into verifiable advertising space.\n\n` +
      `**Key Engineering Highlights:**\n` +
      `• **3-Layer Verification:** Photographic evidence hashing + GPS coordinates + timestamp validation across the parcel journey to prevent fraud.\n` +
      `• **Multi-Role Portals:** Custom portals for Advertisers, Field Agents, Delivery Riders, and Admins.\n` +
      `• **Tech Stack:** Spring Boot 3.3, React 19, PostgreSQL, Cloudinary, and Vercel.\n\n` +
      `🔗 **[Live Demo](https://parcel-pulse-phi.vercel.app/)** | 💻 **[GitHub Repo](https://github.com/vikram583135/ParcelPulse)** | 📺 **[Demo Video](https://lnkd.in/p/dczwMkdX)**`
    );
  }

  // 3. CloudSentry
  if (q.includes('cloudsentry') || q.includes('cloud sentry') || q.includes('observability') || q.includes('datadog') || q.includes('pagerduty')) {
    return (
      `**CloudSentry** is my production-grade DevOps Observability & Cost Optimization platform! 🛡️⚡\n\n` +
      `I built it to combine the strengths of Datadog, PagerDuty, and AWS Cost Explorer into a unified architecture.\n\n` +
      `**Technical Architecture:**\n` +
      `• **Kafka Streaming:** High-throughput event ingestion for CPU, memory, latency, and error metrics.\n` +
      `• **Anomaly Detection & AI RCA:** Statistical + rule-based predictive insights with AI Root Cause Analysis.\n` +
      `• **AWS Cost Analyzer:** AWS SDK v2 integration for cost tracking and proactive waste reduction.\n` +
      `• **Tech Stack:** Java 17, Spring Boot 3.2, Spring Security, Apache Kafka, Redis, PostgreSQL, Docker.\n\n` +
      `🔗 **[Live Platform](https://cloudsentry.vikram583135.workers.dev/)** | 💻 **[GitHub Repository](https://github.com/vikram583135/CloudSentry)**`
    );
  }

  // 4. Other Projects / Placement / PlatePal
  if (q.includes('placement') || q.includes('campus recruitment')) {
    return (
      `My **Placement Management System** is a campus recruitment automation platform built with **Django 5 & Python**! 🎓\n\n` +
      `• Eliminated over **70% manual paperwork** across Student, Company, and TPO portals.\n` +
      `• Features CGPA eligibility filtering, one-click applications, automated interview scheduling, and CSV reporting.\n\n` +
      `🔗 **[Live Demo](https://placement-system-bpbb.onrender.com/)** | 💻 **[GitHub Repo](https://github.com/vikram583135/placement_system)**`
    );
  }

  if (q.includes('platepal') || q.includes('food') || q.includes('zomato')) {
    return (
      `**PlatePal** is a full-stack food ordering platform modeled after Zomato! 🍔\n\n` +
      `• Features real-time order tracking using **WebSockets**, role-based portals for customers, restaurants, delivery partners, and admins.\n` +
      `• Built with **Django REST Framework, React, TypeScript, PostgreSQL, and Redis**.\n\n` +
      `💻 **[GitHub Repo](https://github.com/vikram583135/platepal2.o)**`
    );
  }

  // 5. All Projects overview
  if (q.includes('project') || q.includes('portfolio') || q.includes('work done') || q.includes('built')) {
    return (
      `I've built several end-to-end production systems! Here are my featured projects:\n\n` +
      `1. **[ParcelPulse](https://parcel-pulse-phi.vercel.app/)** — Verified ad-tech & package tracking platform (Spring Boot 3.3 + React 19 + PostgreSQL).\n` +
      `2. **[CloudSentry](https://cloudsentry.vikram583135.workers.dev/)** — AI-powered DevOps observability & AWS cost platform with Apache Kafka & Redis.\n` +
      `3. **[Placement Management System](https://placement-system-bpbb.onrender.com/)** — Campus recruitment automation with Django 5 & SQLite.\n` +
      `4. **[PlatePal](https://github.com/vikram583135/platepal2.o)** — Real-time food delivery platform with WebSockets & React.\n\n` +
      `Check out all of them on my **[Projects Page](/projects)** or ask me specifically about any of them!`
    );
  }

  // 6. Skills / Tech Stack
  if (
    q.includes('skill') ||
    q.includes('tech stack') ||
    q.includes('technolog') ||
    q.includes('stack') ||
    q.includes('language') ||
    q.includes('java') ||
    q.includes('spring') ||
    q.includes('kafka') ||
    q.includes('aws')
  ) {
    return (
      `Here is my core technical stack as a **Full Stack Java Developer**: 🛠️\n\n` +
      `• **Languages:** Java 17, Python, TypeScript, SQL\n` +
      `• **Java Ecosystem:** Spring Boot 3, Spring Security, Spring Data JPA, Spring Cloud, Hibernate, Maven\n` +
      `• **Streaming & Caching:** Apache Kafka, Redis, Celery, WebSockets\n` +
      `• **Cloud & DevOps:** AWS (EC2, S3, IAM, Cost Explorer — AWS Certified Cloud Practitioner), Docker, Docker Compose, CI/CD, Git\n` +
      `• **Databases:** PostgreSQL, MySQL, SQLite\n` +
      `• **Frontend:** React 19, TypeScript, TailwindCSS, Bootstrap\n` +
      `• **Testing & Tools:** JUnit 5, Testcontainers, REST APIs, JWT/OAuth2\n\n` +
      `You can also view a breakdown on my **[About Page](/about)** or **[Resume](/resume)**!`
    );
  }

  // 7. Experience / Consultancy / CodeWINtage
  if (
    q.includes('experience') ||
    q.includes('work') ||
    q.includes('job') ||
    q.includes('codewintage') ||
    q.includes('consultan') ||
    q.includes('client') ||
    q.includes('founder')
  ) {
    return (
      `I am the **Founder & Lead Developer at CodeWINtage Software Consultancy** based in Bengaluru! 💼\n\n` +
      `• Delivered **6 client projects end-to-end** covering requirements gathering, system architecture, development, automated deployment, and client support.\n` +
      `• Maintained **100% client satisfaction** resulting in repeat engagements and referrals.\n` +
      `• Architected scalable Spring Boot microservices, modern React interfaces, and managed AWS infrastructure.\n\n` +
      `I combine entrepreneurial ownership with solid backend craftsmanship!`
    );
  }

  // 8. Education & Certifications
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('degree') ||
    q.includes('mca') ||
    q.includes('bca') ||
    q.includes('certif') ||
    q.includes('university')
  ) {
    return (
      `Here are my academic qualifications and certifications: 🎓\n\n` +
      `• **AWS Certified Cloud Practitioner (CLF-C02)** — Amazon Web Services\n` +
      `• **Master of Computer Applications (MCA)** — Bangalore University (2024–2025)\n` +
      `• **Bachelor of Computer Applications (BCA)** — VSK University (2021–2023)\n\n` +
      `I was also Runner-Up at the **BITOTSAV Coding Competition** and served as Lead Coordinator for the **TECHIZEN-2K25 Hackathon** at Bangalore University!`
    );
  }

  // 9. Contact / Hire / Availability / Location
  if (
    q.includes('contact') ||
    q.includes('hire') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('reach') ||
    q.includes('interview') ||
    q.includes('available') ||
    q.includes('location')
  ) {
    return (
      `I'd love to connect! I am based in **Bengaluru, India** and open to opportunities (Full-time / Remote / Hybrid). 🤝\n\n` +
      `• 📧 **Email:** [vikram583135@gmail.com](mailto:vikram583135@gmail.com)\n` +
      `• 📱 **Phone:** [+91 9606578966](tel:+919606578966)\n` +
      `• 💼 **LinkedIn:** [linkedin.com/in/k-s-vinayaka](https://www.linkedin.com/in/k-s-vinayaka-8793a7225/)\n` +
      `• 🐙 **GitHub:** [github.com/vikram583135](https://github.com/vikram583135)\n\n` +
      `Or you can drop me a message directly from the **[Contact Page](/contact)**!`
    );
  }

  // 10. Who are you / About yourself
  if (
    q.includes('who are you') ||
    q.includes('about you') ||
    q.includes('introduce') ||
    q.includes('yourself') ||
    q.includes('tell me about')
  ) {
    return (
      `Hi there! I'm **K S Vinayaka** (Vikram) — an **AWS Certified Java Developer** and Full Stack Engineer based in Bengaluru. 🚀\n\n` +
      `I specialize in building production-grade distributed systems with **Java 17, Spring Boot 3, Apache Kafka, and AWS**. ` +
      `I founded **CodeWINtage Software Consultancy** where I delivered 6 client projects end-to-end, and recently built **ParcelPulse** and **CloudSentry**.\n\n` +
      `What would you like to explore today? My **projects**, **skills**, or **resume**?`
    );
  }

  // 11. Why hire you?
  if (q.includes('why hire') || q.includes('why should we') || q.includes('strength')) {
    return (
      `Here is what I bring to an engineering team: 🌟\n\n` +
      `1. **Production-Grade Backend Architecture:** Deep hands-on mastery of Java 17, Spring Boot 3, Spring Security, Kafka streaming, Redis caching, and PostgreSQL.\n` +
      `2. **Proven Delivery Ownership:** As founder of CodeWINtage, I know how to take ideas from zero to production deployment with high quality and zero hand-holding.\n` +
      `3. **AWS Cloud Certified:** Certified Cloud Practitioner (CLF-C02) experienced with EC2, S3, Docker containers, and CI/CD pipelines.\n` +
      `4. **Strong Problem-Solving:** Competitive programming podium finisher and proactive builder.\n\n` +
      `Let's schedule a call! You can reach me at **vikram583135@gmail.com** or check my **[Resume](/resume)**.`
    );
  }

  // 12. Hello / Greetings
  if (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q.startsWith('hi ') ||
    q.startsWith('hello ') ||
    q.startsWith('hey ')
  ) {
    return (
      `Hello! 👋 Great to have you here. I'm Vinayaka's AI twin.\n\n` +
      `Feel free to ask me anything about my background:\n` +
      `• *"Tell me about your top projects"*\n` +
      `• *"What is your experience with Spring Boot & Kafka?"*\n` +
      `• *"Can I download your resume?"*\n` +
      `• *"How can I contact or hire you?"*\n\n` +
      `What's on your mind?`
    );
  }

  // 13. Default intelligent contextual fallback
  return (
    `Thanks for asking! As **K S Vinayaka**, I specialize in **Java 17, Spring Boot microservices, Apache Kafka, and AWS cloud architecture**. 💻\n\n` +
    `I've built systems like **[ParcelPulse](https://parcel-pulse-phi.vercel.app/)** (ad-tech on delivery packages) and **[CloudSentry](https://cloudsentry.vikram583135.workers.dev/)** (DevOps observability & cost optimization), and founded **CodeWINtage Software Consultancy**.\n\n` +
    `Here are quick areas we can explore:\n` +
    `• 📦 Ask about **ParcelPulse** or **CloudSentry**\n` +
    `• ⚡ Ask about my **Tech Stack** (Spring Boot, Kafka, AWS, React)\n` +
    `• 📄 Type **"Resume"** to view or download my CV\n` +
    `• 📬 Ask **"How to contact you"** to connect directly!`
  );
};

// Generative API Call via Google Gemini
export const callGeminiApi = async (
  apiKey: string,
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  const contents: { role: 'user' | 'model'; parts: { text: string }[] }[] = [];

  // Append recent conversation history (last 8 messages for context)
  const recentHistory = history.slice(-8);
  for (const msg of recentHistory) {
    if (msg.role === 'system') continue;
    contents.push({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    });
  }

  // Append user's new message
  contents.push({
    role: 'user',
    parts: [{ text: newMessage }]
  });

  // Try current generation Gemini models with fallback
  const models = ['gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.5-flash'];
  let lastError: Error | null = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(
        apiKey.trim()
      )}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: VINAYAKA_SYSTEM_PROMPT }]
          },
          contents,
          generationConfig: {
            temperature: 0.7,
            topP: 0.9,
            maxOutputTokens: 800
          }
        })
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => null);
        throw new Error(errJson?.error?.message || `HTTP ${response.status} from Gemini API`);
      }

      const data = await response.json();
      const candidateText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (candidateText && candidateText.trim()) {
        return candidateText.trim();
      }
    } catch (err: any) {
      lastError = err;
      // try next model
    }
  }

  throw lastError || new Error('Failed to generate response from Gemini API');
};

// Send message entry point
export const sendMessageToAI = async (
  history: ChatMessage[],
  userText: string
): Promise<{ text: string; source: 'gemini' | 'persona_engine' }> => {
  const apiKey = getStoredApiKey();

  if (apiKey && apiKey.trim().length > 10) {
    try {
      const liveResponse = await callGeminiApi(apiKey, history, userText);
      return { text: liveResponse, source: 'gemini' };
    } catch (err) {
      console.warn('Live Gemini API call failed, falling back to Persona Knowledge Engine:', err);
      // Fallback gracefully to offline persona engine if API fails
      const fallback = generateOfflineResponse(userText);
      return {
        text: fallback,
        source: 'persona_engine'
      };
    }
  }

  // No API key provided yet -> Use offline Persona Knowledge Engine
  // Simulate natural brief typing delay
  await new Promise((resolve) => setTimeout(resolve, 380));
  const offlineText = generateOfflineResponse(userText);
  return { text: offlineText, source: 'persona_engine' };
};
