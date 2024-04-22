
### Flow Chart - adding note 
## same code from guide however the first thing to do is sending the form with a POST request

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: We already have the page loaded but when we add a new note the browser sends the text on the form wity a POST request to the new_note location then the browser reloads

    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: HTML document
    deactivate server


    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: displaying notes

    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "notes", "date": "date and hour of the notes " }, ... ]
    deactivate server


    

    
