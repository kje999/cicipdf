/**
 * EXAM VIEWER — CONFIGURATION FILE
 * Auto-updated via Admin Dashboard
 */

const EXAM_CONFIG = {
  isExamActive: true,
  closedMessage: "The practical exam is not yet available. Please wait for your instructor to open the exam.",
  password: "pracbibi",
  pdfFile: "pdf/exam.pdf",
  examTitle: "Web Systems Technology - Practical Exam",
  institutionName: "ISUFST",
  restrictions: {
    blockRightClick:    true,  // 🚫 Disable right-click context menu
    blockCopy:          true,  // 📋 Disable text copy, cut, and drag
    blockTextSelection: true,  // ✏️ Disable highlighting / text selection
    blockShortcuts:     true,  // ⌨️ Disable shortcuts (Ctrl+P, Ctrl+S, F12, etc.)
    detectTabSwitch:    true,  // ⚠️ Show blackout warning if tab is switched
    blurOnMouseLeave:   true,  // 👁️ Instantly blur PDF when mouse leaves browser window
    enableWatermark:    true,  // 💧 Stamp watermark across every page
  },
  watermarkText: "EXAM COPY — DO NOT DISTRIBUTE",
};
