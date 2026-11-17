/**
 * Approved CampusConnect help guides (synthetic classroom data).
 * Never present these as real university policy.
 */
export type CampusGuide = {
  id: string;
  title: string;
  source: string;
  owner: string;
  reviewed: string;
  keywords: string[];
  answer: string;
};

export const CAMPUS_GUIDES: CampusGuide[] = [
  {
    id: "password",
    title: "Password reset",
    source: "campusconnect password help.txt",
    owner: "IT Service Desk (example)",
    reviewed: "2026-09-01",
    keywords: ["password", "reset", "forgot", "forgotten", "locked", "lockout", "passcode"],
    answer:
      'Visit https://campusconnect.example.edu/portal and select "Reset Password" from the main menu. You will then receive an email with instructions to set a new password.',
  },
  {
    id: "wifi",
    title: "Secure campus Wi-Fi",
    source: "campusconnect wifi help.txt",
    owner: "IT Service Desk (example)",
    reviewed: "2026-09-01",
    keywords: ["wifi", "wi-fi", "wireless", "network", "internet", "eduroam", "connect", "connection"],
    answer:
      'Connect to the secure network "CampusConnect-Secure" and sign in with your campus username and password. Use the secure network, not the guest network, for coursework and campus accounts.',
  },
  {
    id: "service-desk",
    title: "IT Service Desk",
    source: "campusconnect service desk help.txt",
    owner: "IT Service Desk (example)",
    reviewed: "2026-09-01",
    keywords: ["service", "desk", "helpdesk", "help desk", "ticket", "support", "contact", "hours", "staff"],
    answer:
      "Contact the IT Service Desk through https://campusconnect.example.edu/help to open a support ticket. A staff member will follow up on questions the approved guides do not cover.",
  },
];

export const HUMAN_HANDOFF_CONTACT =
  "IT Service Desk (example) — https://campusconnect.example.edu/help";
