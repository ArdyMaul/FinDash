# FinDash - Premium Personal Finance & Money Management Dashboard

FinDash is a premium, modern, and highly interactive HTML template designed specifically for personal finance, budget tracking, and money management applications. It uses the latest design trends including glassmorphism, fluid typography, and dark mode.

## 🚀 Tech Stack

- **HTML5**: Semantic and accessible markup.
- **Tailwind CSS v3**: Utility-first CSS framework for rapid styling (configured for JIT).
- **Alpine.js**: Lightweight JavaScript framework for interactive UI (modals, dropdowns, dark mode toggles, tabs).
- **Chart.js**: Powerful library for rendering the income/expense charts and budget donut charts.
- **Phosphor Icons**: Premium, consistent icon family.

## 📂 File Structure

```text
/
├── assets/                 # (Optional) Store static assets like images or custom logos
├── dist/
│   └── css/
│       └── style.css       # The compiled Tailwind CSS file (Used in production)
├── src/
│   └── css/
│       └── tailwind.css    # Tailwind entry point with custom glassmorphism components
├── package.json            # Node.js dependencies & scripts
├── tailwind.config.js      # Tailwind configuration (colors, fonts, shadows)
├── login.html              # Authentication page
├── index.html              # Main Dashboard
├── transactions.html       # Transactions list with filters & pagination
├── budgets.html            # Budgets overview with donut chart
├── settings.html           # User settings (Profile, Security, Notifications, Preferences)
└── README.md               # This documentation
```

## 💻 How to Set Up & Run (For Buyers)

To modify the template or recompile the CSS, you will need Node.js installed on your system.

**1. Install Dependencies**
Open your terminal in the root folder of this project and run:
```bash
npm install
```

**2. Start Development Server & Watch CSS**
To start working on the HTML and have Tailwind CSS automatically recompile when you make changes, run:
```bash
npm run dev
```
This will compile the CSS and keep watching for changes. You can open `login.html` in your browser to view the template. 
*(Tip: Use an extension like Live Server in VS Code for automatic browser reloading).*

**3. Build for Production**
Before deploying or packaging the final app, minify the CSS by running:
```bash
npm run build
```

## 📖 User Flow & Features

1. **Login Page (`login.html`)**: 
   - A beautiful entry point. Use `admin@example.com` and `password123` to enter the dashboard.
2. **Dashboard (`index.html`)**: 
   - View summary metrics, an interactive Chart.js line chart for cash flow, recent transactions, and quick transfers.
3. **Transactions (`transactions.html`)**: 
   - Browse the full list of transactions. Click the "Filter" button to open an interactive filter panel. Includes a full modal for adding new transactions.
4. **Budgets (`budgets.html`)**: 
   - Visual breakdown of spending via a donut chart. Budget category cards show progress bars that indicate limits.
5. **Settings (`settings.html`)**: 
   - 4-tab layout (Profile, Security, Notifications, Preferences). Includes interactive toggles, 2FA setup simulated UI, and an account deletion danger zone.
6. **Dark Mode**:
   - The theme toggle (sun/moon icon) works across all pages. The preference is saved in `localStorage` so it persists as you navigate.

---

## 📦 Guide for the Seller (How to Package & Sell)

If you are preparing to upload this template to marketplaces (like ThemeForest, UI8, or Gumroad), follow these steps:

**1. Clean Up the Directory**
- Delete the `node_modules` folder. (Buyers will generate this themselves when they run `npm install`).
- Make sure to run `npm run build` one last time so `dist/css/style.css` is fully updated and minified.

**2. Prepare the ZIP Archive**
- Select all the files and folders (excluding `node_modules` and `.git` if you use it).
- Compress them into a `.zip` file. Name it something professional like `FinDash_Template_v1.0.zip`.

**3. Prepare Promotional Assets**
- **Screenshots**: Take high-quality screenshots of all 5 pages in both Light Mode and Dark Mode.
- **Thumbnail**: Create a catchy 1920x1080 (or standard aspect ratio for your marketplace) cover image showing the Dashboard on a laptop mockup.
- **Live Preview**: Host the HTML files on a free service like GitHub Pages, Vercel, or Netlify so potential buyers can test the UI before buying.

**4. Pricing & Licensing**
- Provide clear instructions on what is included.
- Consider offering a Standard license (for a single personal project) and an Extended license (for SaaS integration or multiple commercial projects).
