let template4 = String.raw`\
\documentclass[letterpaper,11pt]{article}
\usepackage{fontawesome5}
\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

% Custom font
\usepackage[default]{lato}

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule\vspace{-5pt}]

% Ensure that generate pdf is machine-readable/ATS parsable
\pdfgentounicode=1

%-------------------------%
% Custom commands
\begin{document}
\include{custom-commands}

%-------------------------------------------%
%%%%%%  RESUME STARTS HERE  %%%%%

%----------HEADING----------%
\input{src/heading}

%-----------EDUCATION-----------%
\input{src/education.tex}

%-----------EXPERIENCE-----------%
\input{src/experience}

%-----------PROJECTS-----------%
\input{src/projects}

%-----------SKILLS-----------%
\input{src/skills.tex}

%-------------------------------------------%
\end{document}
`;
export default template4;
