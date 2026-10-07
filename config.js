/**
 * EXAM VIEWER — CONFIGURATION FILE
 * Auto-updated via Admin Dashboard
 */

const EXAM_CONFIG = {
  isExamActive: true,
  closedMessage: "The practical exam is not yet available. Please wait for your instructor to open the exam.",
  password: "prac2026",
  adminPassword: "tubol69",
  pdfFile: "pdf/exam_set_a.pdf",
  examSets: [
    {
        "id": "set_a",
        "setName": "Set A",
        "filePath": "pdf/exam_set_a.pdf"
    },
    {
        "id": "set_b",
        "setName": "Set B",
        "filePath": "pdf/exam_set_b.pdf"
    },
    {
        "id": "set_c",
        "setName": "Set C",
        "filePath": "pdf/exam_set_c.pdf"
    }
],
  examTitle: "Web Systems Technology - Practical Exam",
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
