/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           EXAM VIEWER — CONFIGURATION FILE                   ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Edit the values below to customize your exam viewer.        ║
 * ║  After editing, save this file and re-upload to your host.   ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const EXAM_CONFIG = {

  // ── 🔑 ACCESS PASSWORD ────────────────────────────────────────────────────
  //  Students must type this to unlock the exam viewer.
  //  Change this before every exam session, then re-upload config.js.
  password: "exam2024",

  // ── 📄 PDF FILE ───────────────────────────────────────────────────────────
  //  Path to your PDF inside the project folder.
  //  Steps to change:
  //    1. Copy your new PDF into the  pdf/  folder.
  //    2. Update the filename below (keep the "pdf/" prefix).
  //  Example:  pdfFile: "pdf/midterm-2025.pdf",
  pdfFile: "pdf/exam.pdf",

  // ── 🏫 BRANDING ───────────────────────────────────────────────────────────
  //  Shown on the login screen and the viewer toolbar.
  examTitle:       "Practical Examination",
  institutionName: "Your School / Department",

  // ── 💧 WATERMARK ──────────────────────────────────────────────────────────
  //  Text stamped diagonally across every rendered page.
  //  Set to  ""  (empty string) to disable the watermark.
  watermarkText: "EXAM COPY — DO NOT DISTRIBUTE",

  // ── 🛡️ TAB-SWITCH DETECTION ───────────────────────────────────────────────
  //  When true, a warning overlay appears if the student leaves the tab.
  detectTabSwitch: true,

};
