<<<<<<< HEAD
# Setup

## Client

- install react+ typescript
- setup tailwind
- add theme , dark/light mode

## server

npm init -y
npm install express dotenv @prisma/client
npm install -D prisma nodemon

---

# Scope MVP

- Login Ui page
  - signup
  - via gmail
  - github
- Home
  - dashboard Grievance
  - dashboard new connection
  - Urgent attention required
  - pending with
  - top 10 list
- Add new grievance
  - table

  ```js
  {
    application/memo reference :
    consumer id :
    name: auto fetch from database (iif consumer id present)
    mob : autofetch / if not manual entry
    address: autofetch / if not manual entry
    type:
    description:
    priority:
    Special instruction:
    Due date:
    initiator:
    current assigned to : auto fetch
    received from : take from flow/ entry for first time
    forwarded to : next
    resolution status:{
        pending, forwarded, solved, inspection pending, resolved
    attachement: view mode/download mode
    }
  }
  ```

  - if inspection done, generate a pdf formatted
  - implement the CRUD api request
    - implement the express server
    - link with postgreSQL

## Future Scope

- login with animation , not generic login

# Work log

- create a client folder &install react+TS+tailwind
- folder structure
- src
  - api
  - components(resusable components)
  - hooks
  - pages
=======
j
>>>>>>> 6bdfd85efb66c957b0c0f01ee5637104d2277f06
