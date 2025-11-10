# 🌟 React Greetings Website

A beautiful, modern React application featuring time-based greetings with an outstanding white and black theme system. This enhanced version transforms the classic greeting app into a premium user experience with sophisticated animations, glassmorphism design, and seamless theme switching.

![React Greetings](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## ✨ Features

### 🎨 **Outstanding UI Design**
- **Modern Glassmorphism**: Semi-transparent cards with backdrop blur effects
- **Dynamic Gradients**: Beautiful gradient backgrounds that change with theme
- **Floating Animations**: Smooth particle effects and micro-interactions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🌓 **Advanced Theme System**
- **White & Black Themes**: Elegant light and dark mode options
- **Smart Toggle**: Beautiful animated theme switcher
- **Theme Persistence**: Remembers user preference with localStorage
- **Smooth Transitions**: Seamless theme switching with elegant animations

### ⏰ **Time-Based Greetings**
- **Smart Greetings**: Automatically changes based on time of day
  - Good Morning (12 AM - 12 PM)
  - Good Afternoon (12 PM - 6 PM)
  - Good Evening (6 PM - 8 PM)
  - Good Night (8 PM - 12 AM)
- **Live Clock**: Real-time time display with smooth updates
- **Dynamic Styling**: Greeting colors change with time periods

### 🔧 **Technical Excellence**
- **Clean Architecture**: Modular component structure
- **Performance Optimized**: Efficient CSS animations and React hooks
- **Accessibility Ready**: Reduced motion support and ARIA labels
- **Error-Free**: TypeScript-compatible and lint-free code

## 🚀 Quick Start

### Prerequisites
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-greetings-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🎮 Usage

### Theme Toggle
- Click the theme toggle button in the top-right corner
- Switch between elegant light and dark themes
- Your preference is automatically saved

### Time Display
- View the current time with live updates every second
- Time display includes a rotating clock icon
- Greeting text animates with time updates

### Greeting System
- The greeting automatically updates based on the current time
- Text styling and colors change throughout the day
- Smooth animations enhance the user experience

## 🏗️ Project Structure

```
react-greetings-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── ThemeContext.js      # Theme management system
│   │   ├── ThemeToggle.js       # Theme toggle component
│   │   └── ThemeToggle.css      # Theme toggle styling
│   ├── App.js                   # Main application component
│   ├── App.css                  # Original styles (legacy)
│   ├── EnhancedApp.css          # Enhanced UI styling
│   ├── index.js                 # Application entry point
│   └── index.css                # Global styles
├── package.json
└── README.md
```

## 📁 Key Files

- **`src/ThemeContext.js`**: React Context for theme management
- **`src/ThemeToggle.js`**: Beautiful theme toggle component
- **`src/EnhancedApp.css`**: Main styling with theme support
- **`src/App.js`**: Core application logic and component structure

## 🎨 Design System

### Color Palette

#### Light Theme
- **Primary Background**: Gradient (Purple to Blue)
- **Card Background**: rgba(255, 255, 255, 0.95)
- **Text Color**: #2d3748
- **Accent Colors**: #667eea, #764ba2

#### Dark Theme
- **Primary Background**: Gradient (Dark Gray to Darker Gray)
- **Card Background**: rgba(0, 0, 0, 0.8)
- **Text Color**: #f7fafc
- **Accent Colors**: #f093fb, #f5576c

### Typography
- **Font Family**: Inter, system fonts
- **Heading Size**: clamp(2rem, 5vw, 3.5rem)
- **Body Size**: clamp(1.2rem, 3vw, 1.8rem)
- **Weight**: 700 (headings), 500 (body)

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode.
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.
```bash
npm test
```

### `npm run build`
Builds the app for production to the `build` folder.
```bash
npm run build
```

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
```bash
npm run eject
```

## 🌐 Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)

## ♿ Accessibility

- **Reduced Motion**: Respects `prefers-reduced-motion` setting
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **High Contrast**: Excellent color contrast ratios

## 🔧 Customization

### Adding New Themes
1. Update `ThemeContext.js` to include new theme options
2. Add corresponding CSS variables in `EnhancedApp.css`
3. Update the theme toggle component

### Modifying Greetings
Edit the greeting logic in `src/App.js`:
```javascript
if (currDate >= 0 && currDate < 12) {
  greeting = "Good Morning";
} else if (currDate >= 12 && currDate < 18) {
  greeting = "Good Afternoon";
} // ... add more conditions
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Create React App** - For the excellent development environment
- **Inter Font** - For beautiful typography
- **CSS Gradient** - For inspiration on gradient effects

## 📞 Support

If you encounter any issues or have questions, please feel free to open an issue in the repository.

---

**Enjoy your enhanced greetings experience! 🎉**
