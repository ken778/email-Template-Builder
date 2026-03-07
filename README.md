# Everlytic Email Template Builder

A simplified **Email Template Builder** built with **Angular 17+**. This application allows users to assemble professional email templates from **pre-built, reusable content blocks** (Header, Text, Image, Button) without writing code.

Users can:
- Add content blocks
- Edit block content via a sidebar form
- View changes instantly in a **live preview**

---

## Tech Stack

- **Framework:** Angular 17+ (Standalone Components)  
- **Language:** TypeScript (**Strict Mode**)  
- **Styling:** SCSS + Bootstrap 5 *(Grid & Utilities only)*  
- **Component Documentation:** Storybook for Angular  
- **State Management:** Angular **Signals** with a **Service-based pattern**  
- **Testing:** Jasmine / Karma  
- **Build Tool:** Angular CLI  

---

## Prerequisites

Ensure the following are installed on your system:

- **Node.js** – v18 or later  
- **npm** – v9 or later  
- **Angular CLI** – v17 or later  

---

## Setup & Installation

### 1️ Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2️ Install Dependencies

```bash
npm install
```

### 3️ Run the Application

```bash
ng serve
```

Navigate to:

```
http://localhost:4200/
```

---

## Running Storybook

Storybook is used to document and preview the **design system components** in isolation.

```bash
npm run storybook
```

This launches the **component documentation environment** where you can view reusable UI blocks and their variations.

---

##  Running Tests

Execute the test suite using:

```bash
ng test
```

This runs unit tests using **Jasmine and Karma**.

---

#  Implementation Approach

## 1️ Architecture & State Management

### **Standalone Components**
The application uses **Angular Standalone Components** to reduce module boilerplate and align with modern Angular best practices.

### **Angular Signals**
State is managed using **Angular Signals** within the `TemplateService`.  
This enables **reactive updates** where edits made in the sidebar automatically update the preview panel.

### **OnPush Change Detection**
All design system components use:

```
ChangeDetectionStrategy.OnPush
```

This improves performance and encourages **immutable data patterns**.

---

## 2️ Design System

### **SCSS Tokens**
A base variables file:

```
_tokens.scss
```

defines:

- Primary & secondary colors
- Spacing system *(8px base unit)*
- Border radius values

This ensures **visual consistency across components**.

### **Bootstrap 5**
Bootstrap is used **only for layout and utilities**, including:

- Grid system
- Margin / padding utilities
- Flexbox helpers


### **Storybook**
Each block component includes a **Storybook story** with multiple variants.

Example:
- **Button – Primary**
- **Button – Secondary**

This demonstrates **component reusability** and ensures design consistency.

---

## 3️ Reactive Data Flow

The **TemplateService** controls the state of the template blocks.

### Workflow

1️ The service stores a **signal array of block objects**

2️ The **Sidebar Form** binds to the selected block’s data

3️ When the user edits a field:
- The service **updates the signal**

4️ The **Preview Panel** reacts to signal updates and renders the appropriate component using `@Input()` bindings.

This ensures **real-time updates without manual change detection.**

---

# Assumptions & Trade-offs

| **Decision** | **Reasoning** |
|--------------|--------------|
| **In-Memory State** | As per requirements, no backend or persistence layer was implemented. The application state resets on page refresh. |
| **Bootstrap Utilities** | Used to accelerate layout development and maintain consistency rather than writing custom grid systems. |
| **Service-based Signals** | Chose a lightweight service pattern instead of NgRx to avoid unnecessary complexity for this scope. |
| **Storybook Setup** | Configured for Angular 17 standalone components. If compatibility issues arise, a dedicated `/demo` route could be used as an alternative. |

---

# Future Improvements

With additional time, the following enhancements could be implemented:


### **Persistence**
Save templates to:

- **LocalStorage**
- A **backend API**

This prevents losing work on page refresh.

### **Advanced Blocks**
Introduce more complex components such as:

- Multi-column layouts
- Dividers
- Social media icon blocks
