let template5 = String.raw`
%% If you need to pass whatever options to xcolor
\PassOptionsToPackage{dvipsnames}{xcolor}

%% If you are using \orcid or academicons
%% icons, make sure you have the academicons
%% option here, and compile with XeLaTeX
%% or LuaLaTeX.
% \documentclass[10pt,a4paper,academicons]{altacv}

%% Use the "normalphoto" option if you want a normal photo instead of cropped to a circle
% \documentclass[10pt,a4paper,normalphoto]{altacv}

%% Fork (before v1.6.5a): CV dark mode toggle enabler to use a inverted color palette.
%% Use the "darkmode" option if you want a color palette used to 
% \documentclass[10pt,a4paper,ragged2e,withhyper,darkmode]{altacv}

\documentclass[10pt,a4paper,ragged2e,withhyper]{altacv}

%% AltaCV uses the fontawesome5 and academicons fonts
%% and packages.
%% See http://texdoc.net/pkg/fontawesome5 and http://texdoc.net/pkg/academicons for full list of symbols. You MUST compile with XeLaTeX or LuaLaTeX if you want to use academicons.

%% Fork v1.6.5c: Overwriting sloppy environment to ignore any spaces and be used to solve overlapping cvtags
\newenvironment{sloppypar*}{\sloppy\ignorespaces}{\par}

% Change the page layout if you need to
\geometry{left=1.2cm,right=1.2cm,top=1cm,bottom=1cm,columnsep=0.75cm}

% The paracol package lets you typeset columns of text in parallel
\usepackage{paracol}

% Change the font if you want to, depending on whether
% you're using pdflatex or xelatex/lualatex
\ifxetexorluatex
  % If using xelatex or lualatex:
  \setmainfont{Roboto Slab}
  \setsansfont{Lato}
  \renewcommand{\familydefault}{\sfdefault}
\else
  % If using pdflatex:
  \usepackage[rm]{roboto}
  \usepackage[defaultsans]{lato}
  % \usepackage{sourcesanspro}
  \renewcommand{\familydefault}{\sfdefault}
\fi

% Fork (before v1.6.5a): Change the color codes to test your personal variant on any mode
\ifdarkmode%
  \definecolor{PrimaryColor}{HTML}{C69749}
  \definecolor{SecondaryColor}{HTML}{D49B54}
  \definecolor{ThirdColor}{HTML}{1877E8}
  \definecolor{BodyColor}{HTML}{ABABAB}
  \definecolor{EmphasisColor}{HTML}{ABABAB}
  \definecolor{BackgroundColor}{HTML}{191919}
\else%
  \definecolor{PrimaryColor}{HTML}{001F5A}
  \definecolor{SecondaryColor}{HTML}{0039AC}
  \definecolor{ThirdColor}{HTML}{F3890B}
  \definecolor{BodyColor}{HTML}{666666}
  \definecolor{EmphasisColor}{HTML}{2E2E2E}
  \definecolor{BackgroundColor}{HTML}{E2E2E2}
\fi%

\colorlet{name}{PrimaryColor}
\colorlet{tagline}{SecondaryColor}
\colorlet{heading}{PrimaryColor}
\colorlet{headingrule}{ThirdColor}
\colorlet{subheading}{SecondaryColor}
\colorlet{accent}{SecondaryColor}
\colorlet{emphasis}{EmphasisColor}
\colorlet{body}{BodyColor}
\pagecolor{BackgroundColor}

% Change some fonts, if necessary
\renewcommand{\namefont}{\Huge\rmfamily\bfseries}
\renewcommand{\personalinfofont}{\small\bfseries}
\renewcommand{\cvsectionfont}{\LARGE\rmfamily\bfseries}
\renewcommand{\cvsubsectionfont}{\large\bfseries}

% Change the bullets for itemize and rating marker
% for \cvskill if you want to
\renewcommand{\itemmarker}{{\small\textbullet}}
\renewcommand{\ratingmarker}{\faCircle}

%% sample.bib contains your publications
%% \addbibresource{main.bib}

\begin{document}
    \name{John Doe}
    \tagline{Test Developer}
    %% You can add multiple photos on the left or right
    \photoL{4cm}{john-doe}

    \personalinfo{
        \email{john_doe@email.com}\smallskip
        \phone{+01-2345-678901}
        \location{City, Country}\\
        \linkedin{linkedinUser}
        \github{githubUser}
        \npm{npmUser}
        \dev{devtoUser}
        %\homepage{nicolasomar.me}
        %\medium{nicolasomar}
        %% You MUST add the academicons option to \documentclass, then compile with LuaLaTeX or XeLaTeX, if you want to use \orcid or other academicons commands.
        % \orcid{0000-0000-0000-0000}
        %% You can add your own arbtrary detail with
        %% \printinfo{symbol}{detail}[optional hyperlink prefix]
        % \printinfo{\faPaw}{Hey ho!}[https://example.com/]
        %% Or you can declare your own field with
        %% \NewInfoFiled{fieldname}{symbol}[optional hyperlink prefix] and use it:
        % \NewInfoField{gitlab}{\faGitlab}[https://gitlab.com/]
        % \gitlab{your_id}
    }
    
    \makecvheader
    %% Depending on your tastes, you may want to make fonts of itemize environments slightly smaller
    % \AtBeginEnvironment{itemize}{\small}
    
    %% Set the left/right column width ratio to 6:4.
    \columnratio{0.25}

    % Start a 2-column paracol. Both the left and right columns will automatically
    % break across pages if things get too long.
    \begin{paracol}{2}
        % ----- TECH STACK -----
        \cvsection{TECH STACK}
            %% Fork v1.6.5c: The sloppypar* environment is used to avoid tags overlapping with section width
            \begin{sloppypar*}
                %% Fork 1.7.1b: Now in case you want to highlight any tag, just add a '/true' property next to its text and it will change tag's text and border colors.
                \cvtags{One/true, Two, Three/true, Four, Five/true, Six, Seven/true, Eight, Nine/true, Ten}
                \medskip

                \cvtags{Red, Yellow/true, Blue, Green/true, Violet, Orange/true}
            \end{sloppypar*}
        % ----- TECH STACK -----
        
        % ----- LEARNING -----
        \cvsection{Learning}
            \begin{sloppypar*}
                \cvtags{Uno, Dos/true, Tres, Cuatro/true, Cinco, Seis/true, Siete, Ocho/true, Nueve, Diez/true}
                \medskip

                \cvtags{Rojo/true, Amarillo, Azul/true, Verde, Violeta/true, Naranja, Marron/true, Blanco, Gris/true, Negro}
            \end{sloppypar*}
        % ----- LEARNING -----
        
        % ----- LANGUAGES -----
        \cvsection{Languages}
            \cvlang{Lang 1}{Native}\\
            \divider

            \cvlang{Lang 2}{Basic / A2}
            \bigskip
            %% Yeah I didn't spend too much time making all the
            %% spacing consistent... sorry. Use \smallskip, \medskip,
            %% \bigskip, \vpsace etc to make ajustments.
        % ----- LANGUAGES -----
            
        % ----- REFERENCES -----
        \cvsection{References}
            \cvref{Prof.\ Alpha Beta}{Institute}{a.beta@university.edu}
            \divider

            \cvref{Boss\ Gamma Delta}{Business}{g.delta@business.com}
        % ----- REFERENCES -----
        
        % ----- MOST PROUD -----
        % \cvsection{Most Proud of}
        
        % \cvachievement{\faTrophy}{Fantastic Achievement}{and some details about it}\\
        % \divider
        % \cvachievement{\faHeartbeat}{Another achievement}{more details about it of course}\\
        % \divider
        % \cvachievement{\faHeartbeat}{Another achievement}{more details about it of course}
        % ----- MOST PROUD -----
        
        % \cvsection{A Day of My Life}
        
        % Adapted from @Jake's answer from http://tex.stackexchange.com/a/82729/226
        % \wheelchart{outer radius}{inner radius}{
        % comma-separated list of value/text width/color/detail}
        % \wheelchart{1.5cm}{0.5cm}{%
        %   6/8em/accent!30/{Sleep,\\beautiful sleep},
        %   3/8em/accent!40/Hopeful novelist by night,
        %   8/8em/accent!60/Daytime job,
        %   2/10em/accent/Sports and relaxation,
        %   5/6em/accent!20/Spending time with family
        % }
        
        % use ONLY \newpage if you want to force a page break for
        % ONLY the current column
        \newpage
        
        %% Switch to the right column. This will now automatically move to the second
        %% page if the content is too long.
        \switchcolumn
        
        % ----- ABOUT ME -----
        \cvsection{About Me}
            \begin{quote}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            \end{quote}
        % ----- ABOUT ME -----
        
        % ----- EXPERIENCE -----
        \cvsection{Experience}
            \cvevent{Charge}{Company}{Mm YYYY -- Mm YYYY}{City, Country}
            \begin{itemize}
                \item First achievement
                \item Second achievement
                \item Third achievement
            \end{itemize}
            \divider
            
            \cvevent{Charge}{Company}{Mm YYYY -- Mm YYYY}{City, Country}
            \begin{itemize}
                \item First achievement
                \item Second achievement
                \item Third achievement
            \end{itemize}
        % ----- EXPERIENCE -----
        
        % ----- EDUCATION -----
        \cvsection{Education}
            \cvevent{Title}{Institution}{Mm YYYY -- Mm YYYY}{City, Country}
            \begin{itemize}
                \item GPA: 1,23
            \end{itemize}
            \divider
            
            \cvevent{Title}{Institution}{Mm YYYY -- Mm YYYY}{City, Country}
            \begin{itemize}
                \item GPA: 1,23
            \end{itemize}
        % ----- EDUCATION -----
        
        % ----- PROJECTS -----
        \cvsection{Projects}
            \cvevent{Project 1 }{\cvreference{\faGithub}{https://github.com/user/repo}\cvreference{| \faGlobe}{https://project-demo.com/}}{Mm YYYY -- Mm YYYY}{}
            \begin{itemize}
                \item Item 1
                \item Item 2
            \end{itemize}
            \divider
            
            \cvevent{Project 2 }{\cvreference{\faGitlab}{https://gitlab.com/user/repo}\cvreference{| \faGlobe}{https://project-demo.com/}}{Mm YYYY -- Mm YYYY}{}
            \begin{itemize}
                \item Item 1
                \item Item 2
            \end{itemize}
        % ----- PROJECTS -----
    \end{paracol}
\end{document}
`;

export default template5;

//doesn't seem to work with gpt call.. Bad Request 400