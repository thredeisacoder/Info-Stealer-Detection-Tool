# Hướng dẫn Cài đặt Node.js cho Windows

## 🚨 Quan trọng: Cài đặt Node.js trước khi chạy ứng dụng

Ứng dụng cần **Node.js** để chạy backend server. Hãy làm theo các bước sau:

## 📥 Cài đặt Node.js

### Cách 1: Tải từ trang chủ (Khuyến nghị)
1. Truy cập: https://nodejs.org/
2. Tải phiên bản **LTS** (Long Term Support) - màu xanh
3. Chạy file `.msi` vừa tải
4. Làm theo hướng dẫn cài đặt (Next → Next → Install)
5. **Quan trọng**: Tick vào "Automatically install the necessary tools" nếu có

### Cách 2: Dùng Chocolatey (nếu đã có)
```powershell
# Mở PowerShell as Administrator
choco install nodejs
```

### Cách 3: Dùng Winget (Windows 10/11)
```powershell
# Mở PowerShell as Administrator  
winget install OpenJS.NodeJS
```

## ✅ Kiểm tra cài đặt

Sau khi cài đặt, **khởi động lại Terminal/PowerShell** và chạy:

```powershell
node --version
npm --version
```

Kết quả mong đợi:
```
v18.17.0  (hoặc version mới hơn)
9.6.7     (hoặc version mới hơn)
```

## 🚀 Chạy ứng dụng

Khi đã có Node.js, chạy các lệnh sau **trong thư mục project**:

```powershell
# Cài đặt dependencies
npm install

# Chạy server
npm start
```

Sau đó mở trình duyệt và truy cập: `http://localhost:3000`

## 🐛 Troubleshooting

### Lỗi "npm not recognized"
- **Nguyên nhân**: Node.js chưa được cài đặt hoặc PATH chưa được cập nhật
- **Giải pháp**: 
  1. Cài đặt Node.js theo hướng dẫn trên
  2. Khởi động lại Terminal/PowerShell
  3. Nếu vẫn lỗi, restart máy tính

### Lỗi "cannot be loaded because running scripts is disabled"
- **Nguyên nhân**: PowerShell execution policy chặn scripts
- **Giải pháp**: 
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```
Sau đó thử lại `npm --version`

### Lỗi Permission (EACCES)
```powershell
# Chạy với quyền admin hoặc thay đổi npm prefix
npm config set prefix C:\Users\%USERNAME%\AppData\Roaming\npm
```

### Lỗi ENOTFOUND khi npm install
- Kiểm tra kết nối internet
- Thử với VPN nếu npm bị chặn
- Hoặc dùng yarn thay npm:
```powershell
npm install -g yarn
yarn install
yarn start
```

## 📁 Cấu trúc sau khi cài đặt

```
Detect Info Stealed/
├── index.html
├── style.css  
├── script.js
├── server.js
├── package.json
├── package-lock.json    ← Được tạo sau npm install
├── node_modules/        ← Được tạo sau npm install
├── README.md
└── SETUP-GUIDE.md       ← File này
```

## ℹ️ Thông tin thêm

- **Node.js** là runtime JavaScript cho server
- **npm** là package manager đi kèm với Node.js
- Ứng dụng chạy trên **localhost:3000** 
- Có thể thay đổi port: `PORT=3001 npm start`

---

**Sau khi cài đặt xong Node.js, quay lại README.md để xem hướng dẫn chi tiết! 🎉** 