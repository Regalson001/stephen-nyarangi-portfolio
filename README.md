
# Stephen Oyugi — Engineering Portfolio

A personal portfolio showcasing front-end development, AI automation, and applied machine learning through selected projects, system architecture concepts, and an interactive engineering-focused design.

<p align="center">
  <strong>Front-End Engineering · AI Automation · Machine Learning</strong>
</p>

<p align="center">
  <a href="https://github.com/Regalson001">
    <img src="https://img.shields.io/badge/GitHub-Regalson001-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://linkedin.com/in/stephenoyugi001">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
  <a href="mailto:stephennyarangi03@gmail.com">
    <img src="https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
</p>

---

## Overview

This repository contains my personal engineering portfolio. It brings together my work and learning across three connected areas:

- **Front-End Development:** Responsive interfaces, semantic HTML, modern CSS, layout systems, and accessible user experiences.
- **AI & Workflow Automation:** API integrations, webhooks, LLM-powered workflows, structured data processing, and automation concepts.
- **Machine Learning:** Python-based data preparation, classification, regression, NLP, and model evaluation.

The portfolio is designed to communicate not only what I build, but also how I approach engineering problems: understanding requirements, structuring solutions, connecting systems, and improving the user experience.

## Live Portfolio

After deploying with GitHub Pages, add your live URL here:

`https://regalson001.github.io/stephen-nyarangi-portfolio/`

## Key Features

### 1. Editorial Hero & Availability Header
- High-contrast typography and a responsive editorial layout.
- Custom SVG SO monogram.
- CSS-pulsing availability indicator.
- Quick navigation to projects, engineering, stack, and contact sections.
- Clear calls to action.

### 2. CSS-Only Project Filtering
- Filter categories: All Work, Front-End UI, AI & Automation, and Machine Learning.
- Hidden radio inputs manage the selected category.
- CSS `:has()` selects the matching project cards.
- No JavaScript is required for the category filtering behavior.

### 3. Engineering Architecture Case Study
- A visual workflow from front-end interface to REST API.
- Webhook event routing and automation processing.
- Downstream actions such as structured data, notifications, and CRM updates.
- CSS Grid-based architecture layout.

### 4. Technology & Engineering Bento Grid
- Front-end development technologies.
- AI automation and API integration tools.
- Machine learning and data technologies.
- Delivery and integration practices.
- Responsive asymmetric card layout.

### 5. Contact Drawer
- Native HTML `<dialog>` element.
- Contact form with browser validation.
- Email preparation using a `mailto:` link.
- GitHub, LinkedIn, and direct email links.

### 6. Responsive & Accessible Interface
- Mobile navigation.
- Keyboard-visible focus styles.
- Semantic HTML landmarks.
- Skip-to-content link.
- Reduced-motion support.
- Responsive layouts for desktop, tablet, and mobile.
- Light and dark system color schemes.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Visual design and responsive layouts |
| Vanilla JavaScript | Navigation and dialog interactions |
| CSS Grid | Project, bento, and architecture layouts |
| Flexbox | Component alignment |
| CSS `:has()` | Project category filtering |
| CSS `clamp()` | Fluid responsive typography |
| CSS Subgrid | Nested layout alignment enhancement |
| Container Queries | Component-level responsive styling |
| HTML Dialog API | Contact drawer |
| Git & GitHub | Version control and hosting |

## CSS Engineering Techniques

### Zero-Dependency State Management

Project filters use hidden radio inputs and CSS selectors:

- `:checked` identifies the selected filter.
- `:has()` applies the selected filter to the project matrix.
- `display: none` removes non-matching cards from the layout.

The project filtering does not depend on JavaScript.

### Fluid Design System

The design uses custom properties in `:root` to define:

- Background and surface colors.
- Text and muted colors.
- Accent colors.
- Typography.
- Spacing and layout dimensions.
- Border radius and shadows.

Responsive headings use `clamp()` to scale smoothly across screen sizes.

### System Color Preference

The interface supports the visitor's operating-system color preference using:

`@media (prefers-color-scheme: dark)`

### CSS Grid and Subgrid

CSS Grid is used for:

- The project matrix.
- The engineering architecture flow.
- The asymmetric technology bento.
- Responsive content sections.

Subgrid is used as a progressive enhancement for nested project-card layout alignment where supported.

### Container Queries

Container queries allow project-card content to respond to its available component width rather than relying only on viewport breakpoints.

### Accessibility

The interface includes:

- Semantic HTML.
- Descriptive link labels.
- Keyboard focus indicators.
- Accessible dialog labels.
- Form labels and native validation.
- Reduced-motion support.
- A skip navigation link.

## Project Showcase

The current portfolio includes these representative project areas:

| Project | Category | Technologies |
|---|---|---|
| Home Repair Booking Form | Front-End UI | HTML, CSS |
| Responsive Signup UI | Front-End UI | HTML, CSS |
| AI Document Processing Agent | AI & Automation | n8n, LLMs, REST APIs |
| Connected Workflow Systems | AI & Automation | Python, Webhooks, Docker |
| Customer Churn Prediction | Machine Learning | Python, pandas, scikit-learn |
| Sentiment Analysis Engine | Machine Learning | Python, NLP |

Some project cards currently link to my GitHub profile because their individual repository URLs have not yet been added. Update each card with its exact repository or live-demo URL as the corresponding project becomes available.

Visual charts, workflow previews, and example project illustrations are portfolio demonstrations. They are not live production dashboards or connected infrastructure.

## Getting Started

### Requirements

- A modern web browser.
- Visual Studio Code or another code editor.
- Git installed on your computer.
- A GitHub account if you want to publish the project.

### Installation

Clone the repository:

```bash
git clone https://github.com/Regalson001/stephen-nyarangi-portfolio.git
```

Open the project folder:

```bash
cd stephen-nyarangi-portfolio
```

Open the folder in Visual Studio Code:

```bash
code .
```

Run the portfolio:

1. Open `index.html` in your browser.
2. Alternatively, use the VS Code Live Server extension.
3. Edit the HTML, CSS, and JavaScript files as needed.

No package installation or build process is required.

## Project Structure

```text
stephen-nyarangi-portfolio/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── LICENSE
└── .gitignore
```

## Customization

Before publishing, review these details:

1. Replace any generic GitHub profile links on project cards with the exact project repository URLs.
2. Add new project cards using the existing `project-card` structure.
3. Set the correct project category using `data-category="frontend"`, `data-category="ai"`, or `data-category="ml"`.
4. Update the About section as your experience grows.
5. Keep your contact email and social links current.
6. Add a resume link when you have a public PDF URL.
7. Replace the monogram with a professional portrait if desired.

### Adding a Project

A project card uses this category attribute:

```html
<article class="project-card" data-category="frontend">
  <!-- Project preview -->
  <!-- Project information -->
  <!-- Repository link -->
</article>
```

Supported category values:

- `frontend`
- `ai`
- `ml`

The CSS filter controls use these categories.

## Deployment with GitHub Pages

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Navigate to **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main`.
7. Select folder `/ (root)`.
8. Click **Save**.

Your portfolio should become available at:

`https://regalson001.github.io/stephen-nyarangi-portfolio/`

GitHub Pages may take a few minutes to publish the first deployment.

## Current Limitations

This is a static front-end portfolio.

- The contact form opens the visitor's email application; it does not submit to a server.
- No database or authentication system is connected.
- The workflow architecture is an explanatory visual, not a live integration.
- Portfolio activity and project illustrations are not live GitHub analytics.
- No real machine learning models are hosted by this website.

These limitations can be addressed in future versions by adding a backend, a form service, live GitHub API data, and deployed project demonstrations.

## Future Improvements

- Add a downloadable PDF resume.
- Integrate live GitHub repository information.
- Add individual project case-study pages.
- Connect a secure contact form backend.
- Add project screenshots and recorded demonstrations.
- Include deployed machine learning applications.
- Add detailed technical write-ups for automation workflows.

## Author

**Stephen Oyugi**

Front-End Developer | AI Automation Practitioner | Machine Learning Practitioner

- **Location:** Nairobi, Kenya
- **GitHub:** [Regalson001](https://github.com/Regalson001)
- **LinkedIn:** [stephenoyugi001](https://linkedin.com/in/stephenoyugi001)
- **Email:** [stephennyarangi03@gmail.com](mailto:stephennyarangi03@gmail.com)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Building useful experiences. Connecting intelligent systems. Learning continuously.</strong>
</p>
