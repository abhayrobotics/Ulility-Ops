=============================== CURRENT MVP (WEEKS 1–4) ===============================
All devices (Office PCs + Field Mobiles) communicate directly with the Cloud Server over HTTPS.

  [ Office PC (Browser) ]        [ Field Mobile (Browser) ]
             │                                │
             │ (Internet)                     │ (4G / 5G)
             ▼                                ▼
  ┌───────────────────────────────────────────────────────┐
  │                 CLOUD BACKEND (Express)               │
  │          Deployed on Render / Railway / Supabase      │
  │                                                       │
  │  - UUID Primary Keys                                  │
  │  - Atomic State Machine (Received ➔ Resolved ➔ Closed)│
  │  - Immutable GrievanceHistory Audit Log               │
  │  - SLA Engine (>3d, 1-3d, Due Today, Overdue)         │[cite: 1]
  └───────────────────────────┬───────────────────────────┘
                              │
                              ▼
                [ Central PostgreSQL Database ]


============================= FUTURE PHASE: LAN INTEGRATION ============================
A local node or browser-database (IndexedDB) is introduced to cache actions offline.

  [ Office PC ] ──► [ Local Storage / LAN DB ] ──(Sync Trigger via Phone/Hotspot)──► [ Cloud DB ]=============================== CURRENT MVP (WEEKS 1–4) ===============================
All devices (Office PCs + Field Mobiles) communicate directly with the Cloud Server over HTTPS.

  [ Office PC (Browser) ]        [ Field Mobile (Browser) ]
             │                                │
             │ (Internet)                     │ (4G / 5G)
             ▼                                ▼
  ┌───────────────────────────────────────────────────────┐
  │                 CLOUD BACKEND (Express)               │
  │          Deployed on Render / Railway / Supabase      │
  │                                                       │
  │  - UUID Primary Keys                                  │
  │  - Atomic State Machine (Received ➔ Resolved ➔ Closed)│
  │  - Immutable GrievanceHistory Audit Log               │
  │  - SLA Engine (>3d, 1-3d, Due Today, Overdue)         │[cite: 1]
  └───────────────────────────┬───────────────────────────┘
                              │
                              ▼
                [ Central PostgreSQL Database ]


============================= FUTURE PHASE: LAN INTEGRATION ============================
A local node or browser-database (IndexedDB) is introduced to cache actions offline.

  [ Office PC ] ──► [ Local Storage / LAN DB ] ──(Sync Trigger via Phone/Hotspot)──► [ Cloud DB ]