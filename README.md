# Launchpad Philadelphia - Donor Connection Platform

A modern donor connection platform built with Next.js 16, React 19, and Tailwind CSS 4. This platform celebrates the generosity of donors and showcases the impact of their contributions to Launchpad Philadelphia.

## 🎯 Project Overview

### Problem Solved
This platform addresses the need for transparency and connection between donors and the community they support. For people aged 20-40+, it provides:
- **Visibility**: See who is donating and how much
- **Impact Tracking**: Understand how donations are being used
- **Community Connection**: Feel part of a larger movement
- **Trust**: Transparent reporting of donor activities

### What the Audience Cares About
1. **Transparency**: Knowing where their money goes
2. **Impact**: Seeing real results from donations
3. **Community**: Being part of something bigger
4. **Recognition**: Public acknowledgment of contributions
5. **Ease of Use**: Simple, intuitive interface

### Success Metrics
- Number of active donors
- Total donation amount
- User engagement (time spent on site)
- Repeat donation rate
- Social sharing of donor profiles

## 🚀 Features

### Public Website
- **Landing Page**: Hero section with impact statistics
- **Donation Page**: Complete donation form with amount selection, program choice, and donor information
- **Donor Showcase**: Grid view of all donors with filtering and sorting
- **Donor Profiles**: Detailed view of individual donors with donation history
- **Impact Dashboard**: Visual representation of community impact
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop

### Admin Dashboard
- **Donor Management**: Add, edit, and delete donors
- **Search & Filter**: Quick access to specific donors
- **Statistics Overview**: Real-time metrics on donations
- **Status Management**: Track active/inactive donors

### Technical Features
- **Search**: Find donors by name or message
- **Filter**: By category (Individual, Corporate, Foundation)
- **Sort**: By date or amount
- **Dark Mode**: Automatic dark mode support
- **TypeScript**: Full type safety

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)

## 📁 Project Structure

```
my-app/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   ├── donate/
│   │   └── page.tsx          # Donation form page
│   ├── donors/
│   │   └── [id]/
│   │       └── page.tsx      # Donor profile page
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main landing page
│   └── globals.css           # Global styles
├── types/
│   └── donor.ts              # TypeScript interfaces
├── public/                   # Static assets
└── package.json              # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: Blue to Purple gradient
- **Success**: Green
- **Background**: Light gray/white (dark mode: dark gray/black)
- **Text**: Dark gray (dark mode: light gray)

### Typography
- **Headings**: Geist Sans (bold)
- **Body**: Geist Sans (regular)
- **Monospace**: Geist Mono

### Components
- **Cards**: Rounded corners, subtle shadows
- **Buttons**: Gradient backgrounds, hover effects
- **Inputs**: Clean borders, focus states
- **Avatars**: Circular with gradient backgrounds

## 📦 Installation

1. Navigate to the project directory:
```bash
cd my-app
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏃 Running the App

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📄 Pages

### Home Page (`/`)
- Hero section with mission statement
- Statistics cards (total donations, donors, impact rate)
- Donor showcase with search, filter, and sort
- Impact section with community metrics
- About section
- Footer with links

### Donation Page (`/donate`)
- Donation amount selection (preset amounts or custom)
- Program selection (General Support, Career Exploration, Job Readiness, Real-World Experience)
- Donor information form (name, email, phone, category)
- Anonymous donation option
- Personal message field
- Success confirmation page

### Donor Profile (`/donors/[id]`)
- Donor information and avatar
- Donation history
- Total donated amount
- Member since date
- Latest program supported

### Admin Dashboard (`/admin`)
- Statistics overview
- Donor management table
- Add/Edit donor modal
- Search and filter functionality
- Delete donor capability

## 🔧 Configuration

### Environment Variables
Currently using sample data. For production, you'll need to set up:
- Database connection
- Authentication (for admin access)
- Email service (for notifications)

### Database Schema (Planned)
```typescript
interface Donor {
  id: number;
  name: string;
  email: string;
  category: "Individual" | "Corporate" | "Foundation";
  avatar: string;
  message: string;
  status: "active" | "inactive";
  createdAt: Date;
  updatedAt: Date;
}

interface Donation {
  id: number;
  donorId: number;
  amount: number;
  program: string;
  date: Date;
}
```

## 🎯 Future Enhancements

1. **Database Integration**: Connect to a real database (PostgreSQL, MongoDB)
2. **Authentication**: Add login for admin and donor accounts
3. **Payment Processing**: Integrate Stripe or similar for donations
4. **Email Notifications**: Send thank you emails to donors
5. **Social Sharing**: Allow donors to share their contributions
6. **Recurring Donations**: Support monthly/yearly donations
7. **Impact Reports**: Generate PDF reports for donors
8. **API Endpoints**: RESTful API for mobile apps
9. **Analytics**: Track user behavior and engagement
10. **Multi-language**: Support for multiple languages

## 🤝 Contributing

This is a demo project. For production use, consider:
- Adding proper error handling
- Implementing form validation
- Adding unit and integration tests
- Setting up CI/CD pipeline
- Adding monitoring and logging

## 📄 License

This project is created for demonstration purposes.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from emoji set
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Contact

For questions or support, please contact the Launchpad Philadelphia team.

---

**Built with ❤️ for Launchpad Philadelphia**
