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
    "status": [
        "SQLi = DISABLED",
        "CSRF = DISABLED"
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
        "SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database."
    ]
}