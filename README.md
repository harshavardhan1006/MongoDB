## Low Level Architecture Diagram

```text
                          ┌────────────────────┐
                          │      Client        │
                          │   (Browser/User)   │
                          └─────────┬──────────┘
                                    │
                           HTTP Requests
                                    │
                                    ▼
                    ┌─────────────────────────┐
                    │      Express Server     │
                    │        index.js         │
                    └──────────┬──────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
┌───────────────┐    ┌────────────────┐    ┌────────────────┐
│   Routes      │    │   EJS Views    │    │ Static Files   │
│ CRUD Handling │    │  (views/)      │    │  (public/)     │
└──────┬────────┘    └────────────────┘    └────────────────┘
       │
       ▼
┌────────────────┐
│ Mongoose Model │
│   models/chat  │
└──────┬─────────┘
       │
       ▼
┌────────────────┐
│    MongoDB     │
│    Database    │
└────────────────┘
```
