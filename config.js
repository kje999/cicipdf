/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           EXAM VIEWER — CONFIGURATION FILE                   ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Edit the values below to customize your exam viewer.        ║
 * ║  You can also easily edit everything inside admin.html!      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const EXAM_CONFIG = {

  // ── 🟢 EXAM AVAILABILITY TOGGLE ───────────────────────────────────────────
  //  true  = Exam is OPEN and viewable by students (with password).
  //  false = Exam is CLOSED / hidden. Students see the closed notice.
  isExamActive: true,

  // Message shown when the exam is closed:
  closedMessage: "The practical exam is not yet available. Please wait for your instructor to open the exam.",

  // ── 🔑 ACCESS PASSWORD ────────────────────────────────────────────────────
  password: "pracbibi",

  // ── 📄 PDF FILE ───────────────────────────────────────────────────────────
  pdfFile: "pdf/exam.pdf",

  // ── 🏫 BRANDING ───────────────────────────────────────────────────────────
  examTitle:       "Web Systems Technology - Practical Exam",
  institutionName: "ISUFST",

  // ── 🛡️ INDIVIDUAL RESTRICTION TOGGLES ─────────────────────────────────────
  //  Turn any of these ON (true) or OFF (false) independently:
  restrictions: {
    blockRightClick:    true,  // 🚫 Disable right-click context menu
    blockCopy:          true,  // 📋 Disable text copy, cut, and drag
    blockTextSelection: true,  // ✏️ Disable highlighting / text selection
    blockShortcuts:     true,  // ⌨️ Disable shortcuts (Ctrl+P, Ctrl+S, F12, etc.)
    detectTabSwitch:    true,  // ⚠️ Show blackout warning if tab is switched
    enableWatermark:    true,  // 💧 Stamp watermark across every page
  },

  // ── 💧 WATERMARK TEXT ─────────────────────────────────────────────────────
  watermarkText: "EXAM COPY — DO NOT DISTRIBUTE",

};
