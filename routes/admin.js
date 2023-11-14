const express = require("express");

const adminRouter = express.Router();
const {
  login,
  signUp,
  getLevels,
  getSubjectCategories,
  getSingleSubjectCategory,
  getSubjects,
  getSingleSubject,
  getClasses,
  getSingleClass,
  getSingleLevel,
  getCurriculums,
  getSingleCurriculum,
  createSubjectCategory,
  createSubject,
  createLevel,
  createClass,
  createCurriculum,
  linkedCurriculumLevel,
  acceptStudent,
  rejectStudent,
  getParentStudentWaiting,
  getParentStudentAccOrRej,
  acceptTeacher,
  getAcceptedTeachers,
  rejectTeacher,
  getWaitingTeacher,
  getLanguageLevel,
  updateLevel,
  updateSubCategories,
  updateSubject,
  updateClass,
  updateCurriculum,
  payDues,
  getAllSessions,
  getAllWallets,
  getStudentWallets,
  getThawaniSession,
  getAllTeachers,
  getTeacherFinancial,
  getNumbers,
  getAllWalletsPdf,
  getAllStudentsPDF,
  getAllParentsPDF,
  getAllTeachersPDF,
  getSessionsForStudent,
  getSessionsForTeacher,
  editWhatsappPhone,
  createSocialMedia,
  editSocialMedia,
  getSocialMedia,
  getWatsappPhone,
  allReports,
  updateProfitRatio,
  deleteTeacher,
  deleteStudent,
  getProfitRatio,
} = require("../controllers/admin");
const checkUserAuth = require("../middlewares/checkUserAuth");
const logout = require("../middlewares/logout");
const verifyToken = require("../middlewares/verifyToken");
const errorCatcher = require("../middlewares/errorCatcher");
const { getCredit } = require("../controllers/teacher");

adminRouter.post("/signup", errorCatcher(signUp));
adminRouter.post("/login", errorCatcher(login));
adminRouter.post("/logout", logout);

adminRouter.post(
  "/subjectCategory",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createSubjectCategory)
);
adminRouter.post(
  "/subject",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createSubject)
);
adminRouter.post(
  "/level",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createLevel)
);
adminRouter.post(
  "/class",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createClass)
);
adminRouter.post(
  "/curriculum",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createCurriculum)
);
adminRouter.post(
  "/curriculumLevel",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(linkedCurriculumLevel)
);

adminRouter.post(
  "/studentParent/accept/:ParentStudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(acceptStudent)
);

adminRouter.post(
  "/studentParent/reject/:ParentStudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(rejectStudent)
);

adminRouter.post(
  "/reject/:teacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(rejectTeacher)
);

adminRouter.get("/subCategories", getSubjectCategories);
adminRouter.get(
  "/subCategory/:subjectCategoryId",
  errorCatcher(getSingleSubjectCategory)
);
adminRouter.get("/subjects", getSubjects);
adminRouter.get("/subject/:subjectId", errorCatcher(getSingleSubject));
adminRouter.get("/classes", getClasses);
adminRouter.get("/class/:classId", errorCatcher(getSingleClass));
adminRouter.get("/levels", getLevels);
adminRouter.get("/level/:levelId", errorCatcher(getSingleLevel));
adminRouter.get("/Curriculums", getCurriculums);
adminRouter.get("/Curriculum/:curriculumId", errorCatcher(getSingleCurriculum));
adminRouter.get("/languageLevel", errorCatcher(getLanguageLevel));

adminRouter.get(
  "/getStudentsWaiting",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getParentStudentWaiting)
);
adminRouter.get(
  "/getStudentsAccOrRej",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getParentStudentAccOrRej)
);

adminRouter.post(
  "/accept/:teacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(acceptTeacher)
);
adminRouter.get(
  "/acceptedTeachers",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAcceptedTeachers)
);
adminRouter.get(
  "/waitingTeachers",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getWaitingTeacher)
);

adminRouter.put(
  "/updateLevel/:LevelId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateLevel)
);

adminRouter.put(
  "/updateSubCategories/:SubjectCategoryId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateSubCategories)
);

adminRouter.put(
  "/updateSubject/:SubjectId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateSubject)
);

adminRouter.put(
  "/updateClass/:ClassId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateClass)
);

adminRouter.put(
  "/updateCurriculum/:CurriculumId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateCurriculum)
);

adminRouter.post(
  "/pay",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(payDues)
);

adminRouter.get(
  "/sessions",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllSessions)
);

adminRouter.get(
  "/wallets",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllWallets)
);

adminRouter.get(
  "/studentWallet/:StudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getStudentWallets)
);

adminRouter.get(
  "/thawaniSession/:StudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getThawaniSession)
);

adminRouter.get(
  "/teachers",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllTeachers)
);

adminRouter.get(
  "/financialTeacher/:TeacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getTeacherFinancial)
);

adminRouter.get(
  "/numbers",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getNumbers)
);

adminRouter.get(
  "/credit/:TeacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getCredit)
);

adminRouter.get(
  "/wallets/pdf",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllWalletsPdf)
);

adminRouter.get(
  "/allStudentsPDF",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllStudentsPDF)
);

adminRouter.get(
  "/allTeachersPDF",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllTeachersPDF)
);

adminRouter.get(
  "/allParentsPDF",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getAllParentsPDF)
);

adminRouter.get(
  "/allReportsPDF",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(allReports)
);

adminRouter.get(
  "/studentSessions/:StudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getSessionsForStudent)
);

adminRouter.get(
  "/teacherSessions/:TeacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getSessionsForTeacher)
);

adminRouter.get("/socialMedia/all", errorCatcher(getSocialMedia));

adminRouter.get("/whatsappPhone", errorCatcher(getWatsappPhone));

adminRouter.put(
  "/editWhatsappPhone",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(editWhatsappPhone)
);

adminRouter.post(
  "/createSocialMedia",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(createSocialMedia)
);

adminRouter.put(
  "/editSocialMedia/:SocialMediaId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(editSocialMedia)
);
adminRouter.put(
  "/updateProfitRatio",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(updateProfitRatio)
);

adminRouter.delete(
  "/deleteTeacher/:TeacherId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(deleteTeacher)
);

adminRouter.delete(
  "/deleteStudent/:StudentId",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(deleteStudent)
);

adminRouter.get(
  "/profitRatio",
  verifyToken,
  checkUserAuth("admin"),
  errorCatcher(getProfitRatio)
);

module.exports = adminRouter;
