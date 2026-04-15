# Password Strength Checker

A simple and responsive **Password Strength Checker** built with **HTML**, **CSS**, and **JavaScript**.

This project allows users to type a password and instantly see its strength level through a visual progress bar and text indicator. It also includes a **Show/Hide password** toggle for better usability.

---

## ✨ Features

- Real-time password strength checking
- Strength levels:
  - Very Weak
  - Weak
  - Medium
  - Strong
  - Very Strong
- Password visibility toggle (**Show / Hide**)
- Clean and modern UI
- Responsive centered layout
- Visual strength meter with color feedback

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**

---

## 📁 Project Structure

```bash
Password-Strength-Checker/
├── Password Checker.html
├── style.css
└── script.js
```

- `Password Checker.html` - main structure of the web page
- `style.css` - styling and layout
- `script.js` - password strength logic and show/hide toggle

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Wolfsenpai123/Password-Strength-Checker.git
cd Password-Strength-Checker
```

### 2. Open the project

Simply open the HTML file in your browser:

```bash
Password Checker.html
```

> You can also rename it to `index.html` if you want a more standard file name.

---

## ⚙️ How It Works

The password strength is evaluated based on the following conditions:

- Contains at least one lowercase letter
- Contains at least one uppercase letter
- Contains at least one number
- Contains at least one special character (`@#$%^!&*`)
- Has a length of at least **8 characters**

Each satisfied condition increases the strength score.

### Strength Levels

- **1 point** → Very Weak
- **2 points** → Weak
- **3 points** → Medium
- **4 points** → Strong
- **5 points** → Very Strong

---

## 🎨 UI Overview

- Input field for entering password
- Show/Hide toggle button
- Animated password strength meter
- Text feedback under the meter

---

## 🧪 Example Test Cases

| Password        | Expected Strength |
|----------------|------------------|
| `abc`          | Very Weak        |
| `abc123`       | Weak             |
| `Abc123`       | Medium           |
| `Abc123@`      | Strong           |
| `Abc123@xyz`   | Very Strong      |

---

## 📸 Screenshot

Add your screenshot here:

```markdown
![Password Strength Checker Screenshot](screenshot.png)
```

---

## 🔮 Future Improvements

- Add password requirement checklist
- Add mobile-first enhancements
- Display suggestions for stronger passwords
- Add dark/light mode toggle
- Use icons instead of text for show/hide
- Add entropy-based scoring for more advanced checking

---

## 📌 Notes

- This project is intended for **learning and practice**
- It uses **basic rule-based checking**, not advanced security analysis
- A strong password checker on real production systems may use more advanced validation

---

## 📜 License

This project is for educational purposes.
