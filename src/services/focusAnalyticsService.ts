export interface DistractionEvent {
  id: string;
  timestamp: number;
}

export interface StudySession {
  id: string;
  startTime: number;
  endTime: number;
  duration: number; // in minutes
}

export interface ChartData {
  name: string;
  count: number;
}

export interface FocusAnalytics {
  totalDistractions: number;
  averageFocusTime: number; // in minutes
  longestSession: number; // in minutes
  focusScore: number; // 0-100
  dailyDistractions: ChartData[];
  weeklyDistractions: ChartData[];
}

const DISTRACTIONS_KEY = 'focus_distractions';
const SESSIONS_KEY = 'focus_sessions';

// Helper to seed data if empty
const seedDataIfEmpty = () => {
  if (typeof window === 'undefined') return;
  
  if (!localStorage.getItem(DISTRACTIONS_KEY)) {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const seedDistractions = [];
    
    // Seed some distractions over the past 7 days
    for (let i = 0; i < 7; i++) {
      const count = Math.floor(Math.random() * 5); // 0-4 distractions per day
      for (let j = 0; j < count; j++) {
        seedDistractions.push({
          id: `seed-d-${i}-${j}`,
          timestamp: now - (i * oneDay) - (Math.random() * oneDay / 2)
        });
      }
    }
    localStorage.setItem(DISTRACTIONS_KEY, JSON.stringify(seedDistractions));
  }

  if (!localStorage.getItem(SESSIONS_KEY)) {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const seedSessions = [];
    
    // Seed some sessions over the past 7 days
    for (let i = 0; i < 7; i++) {
      const count = 1 + Math.floor(Math.random() * 2); // 1-2 sessions per day
      for (let j = 0; j < count; j++) {
        const duration = 20 + Math.floor(Math.random() * 100); // 20-120 mins
        seedSessions.push({
          id: `seed-s-${i}-${j}`,
          startTime: now - (i * oneDay) - (duration * 60 * 1000),
          endTime: now - (i * oneDay),
          duration: duration
        });
      }
    }
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(seedSessions));
  }
};

export const focusAnalyticsService = {
  async getAnalytics(): Promise<FocusAnalytics> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    seedDataIfEmpty();

    const distractions: DistractionEvent[] = JSON.parse(localStorage.getItem(DISTRACTIONS_KEY) || '[]');
    const sessions: StudySession[] = JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]');

    const totalDistractions = distractions.length;
    
    let totalTime = 0;
    let longestSession = 0;
    
    sessions.forEach(session => {
      totalTime += session.duration;
      if (session.duration > longestSession) {
        longestSession = session.duration;
      }
    });

    const averageFocusTime = sessions.length > 0 ? Math.round(totalTime / sessions.length) : 0;

    // Calculate Focus Score (100 - (distractions per hour * 10))
    const totalHours = totalTime / 60;
    const distractionsPerHour = totalHours > 0 ? totalDistractions / totalHours : 0;
    let focusScore = Math.round(100 - (distractionsPerHour * 10));
    if (focusScore < 0) focusScore = 0;
    if (focusScore > 100) focusScore = 100;
    
    if (sessions.length === 0) focusScore = 0; // No data

    // Generate daily chart data (last 7 days)
    const dailyDistractions: ChartData[] = [];
    const now = new Date();
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
      const dateString = d.toLocaleDateString('en-US', { weekday: 'short' });
      
      const count = distractions.filter(e => {
        const eventDate = new Date(e.timestamp);
        return eventDate.getDate() === d.getDate() && eventDate.getMonth() === d.getMonth() && eventDate.getFullYear() === d.getFullYear();
      }).length;

      dailyDistractions.push({ name: dateString, count });
    }

    // Generate weekly chart data (last 4 weeks)
    const weeklyDistractions: ChartData[] = [];
    for (let i = 3; i >= 0; i--) {
      const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - (i * 7) - now.getDay());
      const endOfWeek = new Date(startOfWeek.getTime() + 6 * 24 * 60 * 60 * 1000);
      
      const count = distractions.filter(e => {
        const eventDate = new Date(e.timestamp);
        return eventDate >= startOfWeek && eventDate <= endOfWeek;
      }).length;

      weeklyDistractions.push({ name: `Week ${4 - i}`, count });
    }

    return {
      totalDistractions,
      averageFocusTime,
      longestSession,
      focusScore,
      dailyDistractions,
      weeklyDistractions
    };
  },

  async logDistraction(): Promise<void> {
    seedDataIfEmpty();
    const distractions: DistractionEvent[] = JSON.parse(localStorage.getItem(DISTRACTIONS_KEY) || '[]');
    distractions.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `d-${Date.now()}`,
      timestamp: Date.now()
    });
    localStorage.setItem(DISTRACTIONS_KEY, JSON.stringify(distractions));
  },

  async logStudySession(durationInMinutes: number): Promise<void> {
    seedDataIfEmpty();
    const sessions: StudySession[] = JSON.parse(localStorage.getItem(SESSIONS_KEY) || '[]');
    const now = Date.now();
    sessions.push({
      id: crypto.randomUUID ? crypto.randomUUID() : `s-${Date.now()}`,
      startTime: now - (durationInMinutes * 60 * 1000),
      endTime: now,
      duration: durationInMinutes
    });
    localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
  }
};
