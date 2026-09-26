
type Field = {
  label: string;
  type: string;
  variable: string;
  selectOption?: string[];
};

export const grievanceFields: Field[] = [
  {
    label: "Application/Reference",
    type: "text",
    variable: "application",
  },
  {
    label: "Name",
    type: "text",
    variable: "name",
  },
  {
    label: "Mobile",
    type: "text",
    variable: "mobile",
  },
  {
    label: "Address",
    type: "text",
    variable: "address",
  },
  {
    label: "Type of Work",
    type: "text",
    variable: "type",
  },
  {
    label: "Description",
    type: "text",
    variable: "description",
  },
  {
    label: "Priority",
    type: "select",
    variable: "priority",
    selectOption: ["A", "B", "C"],
  },
  {
    label: "Special Instruction",
    type: "text",
    variable: "instruction",
  },
  {
    label: "Due Date",
    type: "date",
    variable: "date",
  },
  // {
  //   label: "Initiator",
  //   type: "select",
  //   variable: "Initiator",
  //   selectOption: ["A", "B", "C"],
  // },
  // {
  //   label: "Currently Pending with",
  //   type: "select",
  //   variable: "currentStatus",
  //   selectOption: ["A", "B", "C"],
  // },
  // {
  //   label: "Received from",
  //   type: "select",
  //   variable: "ReceivedFrom",
  //   selectOption: ["A", "B", "C"],
  // },
  // {
  //   label: "Forwarded to",
  //   type: "select",
  //   variable: "ForwardedTo",
  //   selectOption: ["A", "B", "C"],
  // },
  // {
  //   label: "Current Status",
  //   type: "select",
  //   variable: "current Status",
  //   selectOption: ["A", "B", "C"],
  // },
];
type card = { label: string; value: string; helper: string; color: string };
export const summaryCards: card[] = [
  {
    label: "Due today",
    value: "08",
    helper: "Inspections and site checks",
    color: "border-l-sla-due",
  },
  {
    label: "Overdue",
    value: "03",
    helper: "Needs immediate follow-up",
    color: "border-l-sla-overdue",
  },
  {
    label: "Upcoming",
    value: "16",
    helper: "Scheduled for this week",
    color: "border-l-sla-normal",
  },
];

export const nscProjects = [
  {
    name: "NSC Feeder Upgrade",
    owner: "Ravi Kumar",
    due: "Today",
    status: "Due today",
    statusClass: "bg-amber-50 text-sla-due",
  },
  {
    name: "NSC Meter Audit",
    owner: "Anita Sharma",
    due: "Yesterday",
    status: "Overdue",
    statusClass: "bg-red-50 text-sla-overdue",
  },
  {
    name: "NSC Pole Replacement",
    owner: "Karan Mehta",
    due: "Sep 18",
    status: "Upcoming",
    statusClass: "bg-emerald-50 text-sla-normal",
  },
  {
    name: "NSC Service Line Survey",
    owner: "Neha Patel",
    due: "Sep 20",
    status: "Upcoming",
    statusClass: "bg-emerald-50 text-sla-normal",
  },
];

