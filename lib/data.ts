export const timelineData = [
  {
    year: "2020",
    title: "高校入学",
    description: "プログラミングに興味を持ち始める",
    icon: "star" as const
  },
  {
    year: "2023",
    title: "福岡工業大学 入学",
    description: "情報工学部で本格的にプログラミングを学ぶ",
    icon: "wing" as const
  },
  {
    year: "2024",
    title: "初めてのWebアプリ開発",
    description: "React / Next.js を使った開発を始める",
    icon: "star" as const
  },
  {
    year: "2025",
    title: "インターンシップ参加",
    description: "実務経験を積み、スキルを磨く",
    icon: "wing" as const
  },
  {
    year: "現在",
    title: "エンジニアを目指して",
    description: "日々学習を続けながら夢に向かって前進中",
    icon: "star" as const
  }
]

export const worksData = [
  {
    id: 1,
    title: "Task Management App",
    description: "シンプルで使いやすいタスク管理アプリケーション。ドラッグ&ドロップでタスクの並び替えが可能。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "リアルタイムで天気情報を表示するダッシュボード。美しいUIと直感的な操作性。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "API", "Chart.js"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "このポートフォリオサイト。ゴシック×かわいいをテーマにデザイン。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    title: "Chat Application",
    description: "リアルタイムチャット機能を持つWebアプリケーション。WebSocketを使用。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Socket.io", "Node.js"]
  }
]

export type TimelineItem = typeof timelineData[0]
export type WorkItem = typeof worksData[0]
