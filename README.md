# 🏆 Brag Dashboard

An elegant, data-driven "Brag Document" dashboard built to showcase your professional achievements, skills, and impact. Designed for software engineers, designers, and managers who want to keep track of their career milestones in a beautiful, accessible, and shareable format.

## ✨ Features

- **📊 Comprehensive Timeline**: Display your highest-impact work, complete with before/after charts, PR links, and supporting documents.
- **📈 Stats & Metrics**: A quick-glance carousel of key performance indicators (e.g., projects shipped, PRs reviewed).
- **🟩 GitHub-Style Code Activity**: A visual heatmap calendar showing your daily activity or deep-work intervals.
- **🛠️ Skills Inventory**: Track the technologies you are learning and improving over time.
- **🥇 Badges & Tokens**: Show off awards, internal company recognitions, or achievements with custom badges.
- **📜 Certifications**: Keep an updated list of your professional certifications and expiration dates.
- **💬 Testimonials**: Highlight praise and positive feedback from your managers and peers.
- **🎯 Misc Goals**: Track personal and professional goals, language learning, or side-projects.
- **🌗 Dark Mode Ready**: Fully responsive and supports beautiful light and dark themes.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Components**: [React 19](https://react.dev/), [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Code Quality**: Husky, Prettier, Lint-Staged

## 🛠️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:sunilband/hike-master-2000.git
   cd brag-dashboard
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## 🎨 Customizing Your Data

All the data powering this dashboard is located in a single file: **`lib/data.ts`**.

To make this dashboard your own:

1. Open `lib/data.ts`.
2. Locate the `BRAG_DATA` object at the bottom of the file.
3. Replace the placeholder data with your own:
   - Name, Role, and Team
   - Metrics (PRs reviewed, projects shipped, etc.)
   - Array of `achievements` (include charts, text, and supporting docs)
   - Array of `skills`, `testimonials`, `badges`, `certifications`, and `misc` goals.

The UI will automatically adapt and render based on what data you provide! If a section (like `testimonials`) has no data, the corresponding tab will automatically hide itself.

## 🏗️ Available Commands

- `pnpm run dev`: Starts the local development server.
- `pnpm run build`: Builds the app for production deployment.
- `pnpm run start`: Runs the production build locally.
- `pnpm run prepare`: Installs Husky pre-commit hooks (runs automatically on install).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
