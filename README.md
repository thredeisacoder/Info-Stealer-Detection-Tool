<div align="center"><h1>🔒 Info Stealer Detection Tool v2.1</h1></div>

<div align="center">

![GitHub](https://img.shields.io/github/license/thredeisacoder/Info-Stealer-Detection-Tool)
![Node.js](https://img.shields.io/badge/node.js-v14+-green)
![Express](https://img.shields.io/badge/express-4.18+-blue)
![Platform](https://img.shields.io/badge/platform-windows%20%7C%20linux%20%7C%20macos-lightgrey)
![Version](https://img.shields.io/badge/version-2.1-brightgreen)

**Advanced cybersecurity tool for detecting compromised credentials and domains in dark web databases**

[🚀 Quick Start](#-quick-start) • [📖 Documentation](#-documentation) • [🎨 Interface](#-interface-preview) • [🔍 Features](#-new-features) • [🤝 Contributing](#-contributing)

</div>

---

## 🎯 **Overview**

 Info Stealer Detection Tool is a professional-grade cybersecurity application that scans for compromised email addresses and usernames in info-stealer malware databases. Built with a **hacker-themed cyberpunk interface** and **modern web technologies** for optimal performance.

### ✨ **Key Features**

- 🔍 **Triple Target Detection**: Emails, usernames, AND domains scanning
- 🌐 **Domain Intelligence**: Comprehensive domain threat analysis
- 🎨 **Enhanced Cyberpunk UI**: Color-coded interface with smart detection
- 📊 **Advanced Reports**: Detailed breach analysis and malware family breakdown
- ⚡ **High Performance**: Optimized API endpoints with proper error handling
- 📱 **Fully Responsive**: Perfect mobile and tablet experience
- ♿ **Accessibility**: Support for screen readers and reduced motion preferences
- 🔒 **Security First**: Advanced input validation and secure API communication

---

## 🆕 **New Features v2.1**

### 🌐 **Domain Scanning Capability**
- **Domain Intelligence Gathering**: Scan domains for compromised credentials
- **URL Analysis**: Identify specific compromised endpoints within domains
- **Malware Family Breakdown**: Detailed analysis by stealer family (Lumma, RedLine, StealC, etc.)
- **Password Security Analysis**: Domain-wide password strength assessment
- **Employee vs User Data**: Separate analysis for corporate and personal accounts

### 🎨 **Enhanced User Interface**
- **Color-Coded Input Hints**: 
  - 🟦 **Blue**: Email targets (`user@example.com`)
  - 🟧 **Orange**: Username targets (`johndoe123`)
  - 🟣 **Purple**: Domain targets (`example.com`)
- **Smart Target Detection**: Automatic recognition of input type
- **Dynamic Scan Indicators**: Real-time target type display
- **Improved Mobile Experience**: Touch-optimized responsive design
- **Enhanced Animations**: Smooth transitions and loading effects

### 📊 **Advanced Results Display**
- **Scan Type Indicators**: Clear visualization of target type being scanned
- **Domain-Specific Results**: Specialized display for domain intelligence
- **Enhanced Error Handling**: Multiple recovery options and clear error messages
- **Improved Data Visualization**: Better organization of threat intelligence

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

## 🔍 **Usage Guide**

### Input Types & Examples

| Type | Format | Example | Description |
|------|--------|---------|-------------|
| 📧 **Email** | `user@domain.com` | `john.doe@company.com` | Search for compromised email credentials |
| 👤 **Username** | `username123` | `johndoe2023` | Search for compromised usernames |
| 🌐 **Domain** | `domain.com` | `company.com` | Analyze domain for security breaches |

### Interface Features

1. **Smart Input Detection**: Tool automatically detects input type
2. **Visual Feedback**: Color-coded hints show what type you're entering
3. **Scan Button**: Dynamically updates based on target type
4. **Results**: Tailored display for each scan type with relevant threat intelligence

---

## 📁 **Project Structure**

```
Info-Stealer-Detection-Tool/
├── 📂 public/              # Frontend files
│   ├── index.html          # Enhanced UI (v2.1 Cyberpunk theme)
│   ├── style.css           # Responsive hacker-themed styling
│   └── script.js           # Enhanced client-side logic
├── 📂 src/                 # Backend source code
│   └── server.js           # Express.js server with domain support
├── 📂 config/              # Configuration files
│   └── security.js         # Enhanced security configuration
├── 📂 docs/                # Documentation
│   ├── SETUP-GUIDE.md      # Installation guide
├── package.json            # Project dependencies
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

---

## 🎨 **Interface Preview**

### 🌌 **Enhanced Cyberpunk Theme Features**
- **Matrix-style background** with digital rain effect
- **Color-coded smart hints** for different target types
- **Dynamic scan type indicators** with real-time feedback
- **Terminal-inspired interface** with enhanced monospace fonts
- **Neon glow effects** and improved scanlines
- **Responsive animations** optimized for all devices
- **Accessibility features** with reduced motion support
- **Enhanced loading sequences** with detailed terminal text

### 📱 **Mobile Experience**
- **Touch-optimized interface** for smartphones and tablets
- **Responsive hint system** that adapts to screen size
- **Mobile-first button design** with improved touch targets
- **Optimized animations** for mobile performance

---

## 📖 **Documentation**

| Document | Description |
|----------|-------------|
| [📚 Full Documentation](README.md) | Complete feature documentation |
| [⚙️ Setup Guide](docs/SETUP-GUIDE.md) | Step-by-step installation |

---

## 🛠️ **API Endpoints**

### Enhanced Local Proxy API
```
GET /api/search-by-email?email=<email>        # Email credential search
GET /api/search-by-username?username=<username>  # Username credential search
GET /api/search-by-domain?domain=<domain>     # 🆕 Domain intelligence search
GET /api/health                               # Health check endpoint
```

### Response Formats

#### Email/Username Response
```json
{
  "message": "Status message",
  "stealers": [...],
  "total_user_services": 0,
  "total_corporate_services": 0
}
```

#### Domain Response
```json
{
  "total": 173,
  "users": 173,
  "employees": 0,
  "third_parties": 0,
  "data": {
    "clients_urls": [
      {
        "url": "https://example.com/login.php",
        "occurrence": 208,
        "type": "User"
      }
    ]
  },
  "stealerFamilies": {
    "total": 348,
    "Lumma": 200,
    "RedLine": 46,
    "StealC": 38
  },
  "userPasswords": {
    "totalPass": 231,
    "weak": {"qty": 227, "perc": 98.27}
  },
  "last_user_compromised": "2025-07-15T07:27:24.000Z"
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

### Testing Features
```bash
# Test email scanning
curl "http://localhost:3000/api/search-by-email?email=test@example.com"

# Test username scanning  
curl "http://localhost:3000/api/search-by-username?username=testuser"

# Test domain scanning (NEW!)
curl "http://localhost:3000/api/search-by-domain?domain=example.com"
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
| `Domain validation error` | Ensure domain format is correct (e.g., `example.com`) |
| `Mobile interface issues` | Clear browser cache and reload |

### Feature-Specific Issues

| Feature | Issue | Solution |
|---------|-------|----------|
| Domain Scanning | "Unexpected token '<'" error | Restart server to load new endpoints |
| Color-coded hints | Not showing colors | Ensure CSS is loaded properly |
| Mobile interface | Layout breaking | Update to latest version |
| Responsive design | Elements overlapping | Check viewport meta tag |

### Logs Location
- Server logs: Console output
- Error logs: Browser Developer Tools
- API logs: Network tab in DevTools

---

## 🤝 **Contributing**

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow cyberpunk/hacker theme consistency
- Maintain responsive design principles
- Write clean and maintainable code
- Add appropriate documentation
- Test all features thoroughly across devices
- Ensure accessibility compliance

### Feature Requests
- 🌐 Additional API integrations
- 📊 Enhanced data visualization
- 🔒 Additional security features
- 📱 Mobile app version
- 🔍 Advanced search filters

---

## 📄 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## ⚠️ **Disclaimer**

This tool is designed for **educational and legitimate security testing purposes only**. Users must:

- ✅ Only use for authorized security assessments
- ✅ Respect privacy and legal boundaries  
- ✅ Follow responsible disclosure practices
- ✅ Comply with applicable laws and regulations
- ❌ Not use for malicious activities
- ❌ Not attempt unauthorized access
- ❌ Not violate terms of service of target domains

---

## 🔄 **Changelog v2.1**

### ✨ **Added**
- 🌐 **Domain scanning capability** with comprehensive intelligence
- 🎨 **Color-coded interface** for different target types
- 📱 **Enhanced responsive design** for mobile devices
- ♿ **Accessibility improvements** with reduced motion support
- 🔍 **Smart target detection** with visual feedback
- 📊 **Advanced domain analytics** with malware family breakdown

### 🔧 **Improved**
- 🚀 **Performance optimizations** for faster loading
- 🎯 **Enhanced input validation** with better error messages
- 📐 **Responsive layout** improvements for all screen sizes
- 🔒 **Security enhancements** in API communication

### 🐛 **Fixed**
- 📱 **Mobile interface issues** on smaller screens
- 🔄 **Loading animation** synchronization
- 🎨 **CSS styling conflicts** between components

---

## 🌟 **Acknowledgments**

- **HudsonRock API** for threat intelligence data
- **Cybersecurity Community** for inspiration and feedback
- **Matrix/Cyberpunk Aesthetic** for UI design inspiration
- **Accessibility Guidelines** for inclusive design principles

---

<div align="center">

### 🔒 **Stay Secure • Stay Anonymous • Stay Elite** 🔒

**[⬆ Back to Top](#-info-stealer-detection-tool-v21)**

Made with ❤️ by **Threde Nolan** for the cybersecurity community

</div> 
