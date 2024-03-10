let template = String.raw`\
\documentclass[letterpaper,11pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{lmodern}
\usepackage[left=1in, right=1in, top=1in, bottom=1in]{geometry}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage{tabularx}
\usepackage{graphicx}
\usepackage{fontawesome5}

% Define black and white colors
\definecolor{black}{RGB}{0,0,0}
\definecolor{white}{RGB}{255,255,255}

% Custom font
\renewcommand*\familydefault{\sfdefault}

% Adjust section formatting
\titleformat{\section}{\Large\color{black}\bfseries}{\thesection}{1em}{}[\color{black}\titlerule]
\titlespacing{\section}{0pt}{\parskip}{-\parskip}

% Adjust subsection formatting
\titleformat{\subsection}[hang]{\bfseries}{\thesubsection}{1em}{}[]
\titlespacing{\subsection}{0pt}{\parskip}{-\parskip}

% Adjust page header and footer
\pagestyle{fancy}
\fancyhf{}
\rhead{\textcolor{white}{Your Name}}
\lhead{\textcolor{white}{Curriculum Vitae}}
\rfoot{\textcolor{white}{Page \thepage}}

% Remove page number from the first page
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0.4pt}

% Custom command for section headers with lines
\newcommand{\sectionheader}[1]{%
    \section*{\color{black}\uppercase{#1}}
    \color{black}\hrule
}

% Custom command for subsection headers with lines
\newcommand{\subsectionheader}[1]{%
    \subsection*{\color{black}\uppercase{#1}}
    \color{black}\hrule
}

\begin{document}

% Title Section
\begin{center}
    \LARGE\textbf{\color{black}Your Name} \\
    \small\textcolor{white}{\faEnvelope\ your.email@example.com \quad \faPhone\ (123) 456-7890 \quad \faLinkedin\ linkedin.com/in/your-profile \quad \faGithub\ github.com/your-username}
\end{center}

% Education Section
\sectionheader{Education}
\begin{tabularx}{\textwidth}{Xr}
    \textbf{University of XYZ} & \textbf{Graduation Year} \\
    \textit{Master of Science in Computer Science} & \textit{GPA: 4.0/4.0} \\
\end{tabularx}

% Experience Section
\sectionheader{Experience}
\subsectionheader{Software Engineer at ABC Company}
\begin{tabularx}{\textwidth}{Xr}
    \textit{Month Year - Present} & \textit{City, State}
\end{tabularx}
\begin{itemize}
    \item Developed and maintained software applications for XYZ project.
    \item Collaborated with cross-functional teams to achieve project goals.
\end{itemize}

% Skills Section
\sectionheader{Skills}
\begin{itemize}[left=0pt, itemsep=4pt]
    \item \textbf{Programming Languages:} Java, Python, C++
    \item \textbf{Web Technologies:} HTML, CSS, JavaScript
    \item \textbf{Frameworks:} Spring, React
\end{itemize}

% Projects Section
\sectionheader{Projects}
\subsectionheader{E-commerce Website}
\begin{tabularx}{\textwidth}{Xr}
    \textit{Month Year - Month Year} & \textit{GitHub Link}
\end{tabularx}
\begin{itemize}
    \item Designed and implemented a fully functional e-commerce website using React and Node.js.
    \item Integrated payment gateway for secure online transactions.
\end{itemize}

% Additional Sections...
% Add more sections such as Certifications, Publications, Achievements, etc.

\end{document}

`;

export default template;


