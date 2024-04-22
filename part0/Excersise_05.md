## SPA sequence diagram


```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
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

    Note right of browser: adds the new note within a json file and displays it and no further requests are needed

    broswer->>serve: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>browser:  [{ "content": "note created", "date": "date and hour of the note " }]
    deactivate server
   

   
