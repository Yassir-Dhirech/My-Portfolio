# Personal Portfolio

A React single-page application built as an interactive portfolio, featuring smooth client-side navigation, a contact form with email delivery, and a full-screen video background.

---

## Preview

> _Add a screenshot or screen recording of your portfolio here_

---

## Features

- **About** — Avatar display with an interactive tabbed menu (Personal, Education, Career) pulling dynamic content from `SubheadingData`
- **Skills** — Technical skills organized by category (Frontend & Backend/Other)
- **Projects** — Project cards with title, image, description, GitHub link, and live demo link
- **Contact** — Email form powered by EmailJS with client-side validation and DOMPurify sanitization
- **UI** — Full-screen background video with overlay, icon-driven navbar with active section highlighting, and a PlayerStats footer

---

## Tech Stack

| Category  | Technology                   |
| --------- | ---------------------------- |
| Framework | React 19                     |
| Routing   | React Router DOM 7           |
| Tooling   | Create React App             |
| Email     | EmailJS (`emailjs-com`)    |
| Security  | DOMPurify                    |
| Utilities | Classnames                   |
| Testing   | Jest + React Testing Library |

---

## Project Structure

```
src/
├── about/          # About section — avatar, tabbed menu, SubheadingData
├── skills/         # Skills section — categorized skill display
├── projects/       # Projects section — cards from projectsData.js
├── contact/        # Contact form — EmailJS integration
├── nav/            # Navigation bar — icon-driven, active-route highlighting
├── background/     # Full-screen video background with overlay
└── playerStats/    # Footer-like section with name and title
```

---

## Routes

| Path          | Section  |
| ------------- | -------- |
| `/`         | About    |
| `/skills`   | Skills   |
| `/projects` | Projects |
| `/contact`  | Contact  |

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and add your EmailJS credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.
> Get your credentials from [EmailJS](https://www.emailjs.com/).

### Running Locally

```bash
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) in development mode with hot reload.

---

## Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `npm start`     | Start the development server               |
| `npm run build` | Build the production bundle to `/build`  |
| `npm test`      | Run the test suite                         |
| `npm run eject` | Eject from Create React App (irreversible) |

---

## Deployment

After building:

```bash
npm run build
```

The `/build` folder is ready to be deployed to any static host, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## Security Notes

- User input in the contact form is sanitized with **DOMPurify** before processing
- EmailJS credentials are stored in environment variables and never exposed in source code
- `.env` is excluded from version control via `.gitignore`

---

## Contributing

This is a personal portfolio, but feel free to fork it and use it as a template for your own!

---

## License

This project is open source and available under the [MIT License](LICENSE).
