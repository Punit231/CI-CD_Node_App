# 🚀 CI/CD Node.js Application

This is a simple Node.js application demonstrating a complete CI/CD pipeline using **GitHub Actions**. The pipeline installs dependencies, runs unit tests, and verifies the code on every push and pull request.

---

## 🛠️ Tech Stack

- **Node.js** (JavaScript runtime)
- **Jest** (Unit testing framework)
- **GitHub Actions** (CI/CD automation)
- **Express.js** (Minimalist web framework)

---

## 📁 Project Structure

```
CI-CD_Node_App/
├── app.js                  # Main application file
├── server.test.js          # Unit test for the app
├── package.json            # Project metadata and dependencies
├── .github/
│   └── workflows/
│       └── main.yml        # GitHub Actions CI/CD workflow
└── README.md               # Project documentation
```

---

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Punit231/CI-CD_Node_App.git
   cd CI-CD_Node_App
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the app**
   ```bash
   node app.js
   ```

4. **Run tests**
   ```bash
   npm test
   ```

---

## ✅ GitHub Actions Workflow

The CI pipeline performs the following steps:

- Checks out the code
- Installs Node.js environment
- Installs dependencies
- Runs tests using `npm test`

**Workflow file:** `.github/workflows/main.yml`

```yaml
name: Node.js CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm test
```

---

## 🧪 Sample Test

**File:** `server.test.js`

```js
const request = require('supertest');
const app = require('./app');

describe('App', () => {
  it('should return Hello World!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello World!');
  });
});
```

---

## 🙋‍♂️ Author

**Punit Parmar**  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/punitparmar231/)  
💻 [GitHub Profile](https://github.com/Punit231)

---

## 🌟 Show Your Support

If you found this project helpful, feel free to give it a ⭐ on GitHub!
