import { useState } from "react";
import Modal from "../components/Modal";

const summaryCards = [
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

const nscProjects = [
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

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-canvas px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-subtle pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ops-primary">
              Utility Ops
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-slate-950">
              Utility Ops Dashboard
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Track NSC project work, SLA pressure, and upcoming operational
              tasks from one focused view.
            </p>
          </div>

          <button
            className="h-11 rounded bg-ops-primary px-5 text-sm font-semibold text-white transition hover:bg-ops-primary-hover focus:outline-none focus:ring-3 focus:ring-sky-100"
            onClick={() => setIsModalOpen(true)}
            type="button"
          >
            Add New
          </button>
        </header>

        <section className="mt-6 grid gap-4 md:grid-cols-3">
          {summaryCards.map((card) => (
            <article
              className={`rounded border border-subtle border-l-4 ${card.color} bg-surface p-5 shadow-sm`}
              key={card.label}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {card.label}
                  </p>
                  <p className="mt-3 font-mono text-4xl font-semibold text-slate-950">
                    {card.value}
                  </p>
                </div>
                <span className="rounded bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  Active
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-500">{card.helper}</p>
            </article>
          ))}
        </section>

        <section className="mt-6 rounded border border-subtle bg-surface shadow-sm">
          <div className="flex flex-col gap-4 border-b border-subtle px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-950">
                NSC Project Tab
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Priority project items grouped by current timeline status.
              </p>
            </div>

            <div className="flex rounded border border-subtle bg-slate-50 p-1 text-sm">
              <button
                className="rounded bg-white px-3 py-1.5 font-medium text-ops-primary shadow-sm"
                type="button"
              >
                All
              </button>
              <button className="px-3 py-1.5 text-slate-500" type="button">
                Due
              </button>
              <button className="px-3 py-1.5 text-slate-500" type="button">
                Overdue
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="border-b border-subtle bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-5 py-3 font-semibold">Project</th>
                  <th className="px-5 py-3 font-semibold">Owner</th>
                  <th className="px-5 py-3 font-semibold">Due</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-subtle">
                {nscProjects.map((project) => (
                  <tr className="hover:bg-slate-50" key={project.name}>
                    <td className="px-5 py-4 font-medium text-slate-950">
                      {project.name}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {project.owner}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {project.due}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded px-2.5 py-1 text-xs font-semibold ${project.statusClass}`}
                      >
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <Modal
        footer={
          <>
            <button
              className="h-10 rounded border border-subtle px-4 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950"
              onClick={() => setIsModalOpen(false)}
              type="button"
            >
              Cancel
            </button>
            <button
              className="h-10 rounded bg-ops-primary px-4 text-sm font-semibold text-white transition hover:bg-ops-primary-hover"
              type="button"
            >
              Save Project
            </button>
          </>
        }
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Project"
      >
        <form className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">
              Project name
            </span>
            <input
              className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-ops-primary focus:ring-3 focus:ring-sky-100"
              placeholder="Enter project name"
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Owner</span>
            <input
              className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-ops-primary focus:ring-3 focus:ring-sky-100"
              placeholder="Owner name"
              type="text"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">
              Due date
            </span>
            <input
              className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm outline-none transition focus:border-ops-primary focus:ring-3 focus:ring-sky-100"
              type="date"
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="text-sm font-medium text-slate-700">Status</span>
            <select className="mt-2 h-11 w-full rounded border border-subtle bg-white px-3 text-sm outline-none transition focus:border-ops-primary focus:ring-3 focus:ring-sky-100">
              <option>Due today</option>
              <option>Overdue</option>
              <option>Upcoming</option>
            </select>
          </label>
        </form>
      </Modal>
    </main>
  );
};
