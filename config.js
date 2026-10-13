/**
 * EXAM VIEWER — CONFIGURATION FILE
 * Auto-updated via Admin Dashboard
 */

const EXAM_CONFIG = {
  isExamActive: false,
  closedMessage: "The practical exam is not yet available. Please wait for your instructor to open the exam.",
  password: "cici2026",
  adminPassword: "tubol69",
  pdfFile: "pdf/exam_set_b.pdf",
  showSetBadge: false,
  examSets: [
    {
        "id": "set_b",
        "setName": "Set C",
        "filePath": "pdf/exam_set_b.pdf"
    }
],
  examTitle: "OOP - Practical Exam",
  institutionName: "ISUFST",
  restrictions: {
    blockRightClick:    true,
    blockCopy:          true,
    blockTextSelection: true,
    blockShortcuts:     true,
    detectTabSwitch:    true,
    blurOnMouseLeave:   true,
    enableWatermark:    true,
  },
  watermarkText: "EXAM COPY — DO NOT DISTRIBUTE",
};
