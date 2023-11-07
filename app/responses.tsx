export const csrfSecretToken = "jh45DJlHOPwhuc786b368rmsdfu8ujfsDJ"

export const responses = {
    "help": [
        "List of all the available commands:",
        "---------",
        "'enable sqli/csrf' - enables given vulnerability",
        "'disable sqli/csrf' - disables given vulnerability",
        "'start sqli/csrf' - starts the simulation",
        "---------",
        "'kill' - stops the current simulation",
        "'status' - shows status of both vulnerabilities",
        "'clear' - clears the terminal",
    ],
    "error": [
        "Wrong command, please seek 'help'."
    ],
    "sql_enable": [
        "Successfully ENABLED SQLi vulnerability. Happy hacking!"
    ],
    "sql_disable": [
        "SQLi vulnerability DISABLED."
    ],
    "csrf_enable": [
        "Successfully ENABLED CSRF vulnerability. Happy hacking!"
    ],
    "csrf_disable": [
        "CSRF vulnerability DISABLED."
    ],
    "sqli_info": [
        "SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database.",
        "One of the most common types of SQL injection is tautology in which SQL query consists of a condition that is always true, thus returning whatever we give it as a main query (eg. 47194’ OR 1=1).",
        "------------",
        "You are presented with an input which executes query: ",
        "SELECT * FROM Person WHERE ID = ",
        "'givenValue'",
        "and returns the result from our database."
    ],
    "csrf_info": [
        "Cross-Site Request Forgery (CSRF) is an attack that forces authenticated users to submit a request to a web application against which they are currently authenticated.",
        "One of the simplest, yet common actions that the attacker can do is force a user to log out of the current session.",
        "------------",
        "For demonstration purposes, please create a user for this simulation.",
        "Successfully logged in!",
        "------------",
        "Now here are some cute cat pictures:",
        "https://web2-cute-cats.vercel.app",
        " :D",
        "At any given moment, you can check your session status with:",
        "'check session'"
    ]
}

export const dbErrMsg: string = "Error while getting results; Please check your query."