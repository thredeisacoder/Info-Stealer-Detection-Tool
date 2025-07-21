# 🔒 Info Stealer Detection Tool

<div align="center">

![GitHub](https://img.shields.io/github/license/thredeisacoder/Info-Stealer-Detection-Tool)
![Node.js](https://img.shields.io/badge/node.js-v14+-green)
![Express](https://img.shields.io/badge/express-4.18+-blue)
![Platform](https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey)

**Advanced cybersecurity tool for detecting compromised credentials in dark web databases**

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-documentation) • [🎨 Interface](#-interface-preview) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 **Overview**

 Info Stealer Detection Tool is a professional-grade cybersecurity application that scans for compromised email addresses and usernames in info-stealer malware databases. Built with a **hacker-themed cyberpunk interface** and **modern web technologies** for optimal performance.

### ✨ **Key Features**

- 🔍 **Smart Detection**: Automatically identifies email vs username inputs
- 🎨 **Cyberpunk UI**: Matrix-style hacker interface with terminal effects
- 📊 **Detailed Reports**: Comprehensive breach analysis and threat intelligence
- ⚡ **High Performance**: Optimized for speed and reliability
- 🌐 **API Integration**: Seamless integration with threat intelligence databases
- 📱 **Responsive Design**: Works perfectly on all devices

---

## 🚀 **Quick Start**

### Prerequisites
- **Node.js** v14.0.0 or higher
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/thredeisacoder/Info-Stealer-Detection-Tool.git
cd Info-Stealer-Detection-Tool

# Install dependencies
npm install

# Start the application
npm start
```

### Access
Open your browser and navigate to: `http://localhost:3000`

---

## 📁 **Project Structure**

```
Info-Stealer-Detection-Tool/
├── 📂 public/              # Frontend files
│   ├── index.html          # Main UI (Cyberpunk theme)
│   ├── style.css           # Hacker-themed styling
│   └── script.js           # Client-side logic
├── 📂 src/                 # Backend source code
│   └── server.js           # Express.js server
├── 📂 config/              # Configuration files
│   └── security.js         # API endpoint configuration
├── 📂 docs/                # Documentation
│   ├── SETUP-GUIDE.md      # Installation guide
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🎨 **Interface Preview**

### 🌌 **Cyberpunk Theme Features**
- **Matrix-style background** with digital rain effect
- **Terminal-inspired interface** with monospace fonts
- **Neon glow effects** and scanlines
- **Hacker-themed colors** (green/red matrix palette)
- **Animated loading sequences** with terminal text
- **Anti-forensic styling** for authentic hacker aesthetic

---

## 📖 **Documentation**

| Document | Description |
|----------|-------------|
| [📚 Full Documentation](README.md) | Complete feature documentation |
| [⚙️ Setup Guide](docs/SETUP-GUIDE.md) | Step-by-step installation |

---

## 🛠️ **API Endpoints**

### Local Proxy API
```
GET /api/search-by-email?email=<email>
GET /api/search-by-username?username=<username>
GET /api/health
```

### Response Format
```json
{
  "message": "Status message",
  "stealers": [...],
  "total_user_services": 0,
  "total_corporate_services": 0
}
```

---

## 🔧 **Development**

### Development Mode
```bash
npm run dev  # Runs with nodemon for auto-reload
```

### Port Configuration
```bash
PORT=3001 npm start  # Custom port
```

### Environment Variables
```bash
NODE_ENV=production
PORT=3000
```

---

## 🐛 **Troubleshooting**

### Common Issues

| Issue | Solution |
|-------|----------|
| `npm not recognized` | Install Node.js and restart terminal |
| `Port already in use` | Use `PORT=3001 npm start` |
| `PowerShell execution policy` | Run `Set-ExecutionPolicy RemoteSigned` |
| `API timeout` | Check internet connection and API endpoints |

### Logs Location
- Server logs: Console output
- Error logs: Browser Developer Tools

---

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow cyberpunk/hacker theme consistency
- Write clean and maintainable code
- Add appropriate documentation
- Test all features thoroughly

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ **Disclaimer**

This tool is designed for **educational and legitimate security testing purposes only**. Users must:

- ✅ Only use for authorized security assessments
- ✅ Respect privacy and legal boundaries  
- ✅ Follow responsible disclosure practices
- ❌ Not use for malicious activities
- ❌ Not attempt unauthorized access

---

## 🌟 **Acknowledgments**

- **Cybersecurity Community** for inspiration
- **Matrix/Cyberpunk Aesthetic** for UI design inspiration

---

<div align="center">

### 🔒 **Stay Secure • Stay Anonymous • Stay Elite** 🔒

**[⬆ Back to Top](#-info-stealer-detection-tool)**

</div> 
