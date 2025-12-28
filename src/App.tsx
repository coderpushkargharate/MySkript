import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* ================= IMAGE BOX ================= */
const ImageBox = ({ image, onUpload, label }) => {
  return (
    <div className="w-full sm:w-[230px] h-[310px] border-2 border-gray-300 bg-white flex items-center justify-center relative overflow-hidden rounded-lg shadow-sm">
      {image ? (
        <img src={image} className="w-full h-full object-contain p-1" alt="Uploaded" />
      ) : (
        <label className="text-xs text-gray-500 cursor-pointer text-center px-2 font-medium">
          {label || "Upload image"}
          {onUpload && <input type="file" className="hidden" onChange={onUpload} />}
        </label>
      )}
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const AssessmentReport = () => {
  const reportRef = useRef(null);

  // Patient info
  const [patientInfo, setPatientInfo] = useState({
    name: "Mr. Sudeep Dutta",
    age: "39",
    height: "180 cm",
    weight: "100 kg",
    occupation: "IT professional",
    place: "MP",
    medicalHistory: "No",
    surgicalHistory: "No",
    chiefComplaints:
      "He is an IT professional, majorly having no issues. Recently had a small neck strain which resolved itself. He has been assessed for posture and movement patterns.",
  });

  // Posture comments
  const [postureComments, setPostureComments] = useState(
    "Anterior and posterior view do not reveal anything challenging except,\nThere is a genu valgum in the knee visible in both the views\nThe lateral view shows –\nMild to moderate forward head posture\nAlso mild thoracic hump\nAnd a sway back posture"
  );

  // Movements
  const [movements, setMovements] = useState([
    {
      title: "Forward bending",
      key: "move1",
      idealImage: "/Screenshot_27-12-2025_9443_.jpeg",
      comments:
        "There is a deviation from the ideal image as the image shows-\nThe knees are unable to keep straight\nThe hands are not able to touch the ground\nLumbo pelvic rhythm has been altered and challenged",
      score: "35/100",
    },
    {
      title: "Back extension",
      key: "move2",
      idealImage: "/Screenshot_27-12-2025_94349_.jpeg",
      comments:
        "The knees are unable to keep straight\nThe hands are unable to touch to the toes\nBack is also not well arched showing difficulty to do the movements\nHamstrings tightness is the reason behind",
      score: "35/100",
    },
    {
      title: "Side bending",
      key: "move3",
      idealImage: "/Screenshot_27-12-2025_94414_.jpeg",
      comments:
        "Side bending is pretty good but still there is tightness in the latissimus dorsi\nThat is hindering with the complete movement",
      score: "50/100",
    },
    {
      title: "Squat",
      key: "move4",
      idealImage: "/Screenshot_27-12-2025_94349_.jpeg",
      comments:
        "The thighs are not parallel to the ground\nLack of strength might be the reason behind unable to complete the movement smoothly",
      score: "30/100",
    },
  ]);

  // Uploaded images for movements
  const [images, setImages] = useState({});

  // Extra dynamic sections (NEW)
  const [extraSections, setExtraSections] = useState([]);

  // Shared comment for all extra sections
  const [sharedExtraComment, setSharedExtraComment] = useState("Enter common comments for all additional assessments...");

  /* ================= HANDLE IMAGE UPLOADS ================= */
  const handleUpload = (key, e) => {
    const file = e.target.files[0];
    if (file) {
      setImages((prev) => ({ ...prev, [key]: URL.createObjectURL(file) }));
    }
  };

  const handleExtraSectionImageUpload = (index, side, e) => {
    const file = e.target.files[0];
    if (file) {
      const copy = [...extraSections];
      copy[index][side] = URL.createObjectURL(file);
      setExtraSections(copy);
    }
  };

  /* ================= ADD NEW SECTION (TWO IMAGE UPLOAD BOXES) ================= */
  const addNewSection = () => {
    setExtraSections([
      ...extraSections,
      {
        id: Date.now(),
        leftImg: "",
        rightImg: "",
        comments: "Enter comments here...",
        score: "0/100",
      },
    ]);
  };

  /* ================= REMOVE SECTION ================= */
  const removeSection = (id) => {
    setExtraSections(extraSections.filter(section => section.id !== id));
  };

  /* ================= CALCULATE TOTAL PROGRESS ================= */
  const calculateTotalProgress = () => {
    let totalScore = 0;
    let maxScore = 0;

    movements.forEach(move => {
      const scoreStr = move.score;
      const parts = scoreStr.split('/');
      if (parts.length === 2) {
        const score = parseFloat(parts[0]);
        const max = parseFloat(parts[1]);
        if (!isNaN(score) && !isNaN(max)) {
          totalScore += score;
          maxScore += max;
        }
      }
    });

    extraSections.forEach(section => {
      const scoreStr = section.score;
      const parts = scoreStr.split('/');
      if (parts.length === 2) {
        const score = parseFloat(parts[0]);
        const max = parseFloat(parts[1]);
        if (!isNaN(score) && !isNaN(max)) {
          totalScore += score;
          maxScore += max;
        }
      }
    });

    if (maxScore === 0) return { percentage: 0, total: 0, max: 0 };

    const percentage = (totalScore / maxScore) * 100;
    return {
      percentage: Math.round(percentage),
      total: Math.round(totalScore),
      max: Math.round(maxScore)
    };
  };

  const totalProgress = calculateTotalProgress();

  /* ================= PDF DOWNLOAD (MULTI-PAGE WITH HEADER/FOOTER) ================= */
  const downloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;

    element.classList.add('pdf-generating');

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = 210;
      const pageHeight = 297;
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;
      let pageNum = 1;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      addFooter(pdf, pageNum, pageWidth, pageHeight);

      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pageNum++;
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        addFooter(pdf, pageNum, pageWidth, pageHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Assessment_Report.pdf");
    } finally {
      element.classList.remove('pdf-generating');
    }
  };

  // Helper function to add footer
  const addFooter = (pdf, pageNum, pageWidth, pageHeight) => {
    pdf.setFontSize(8);
    pdf.setTextColor(150);
    const footerText = `Generated by Healing Monk | Page ${pageNum}`;
    const textWidth = pdf.getTextWidth(footerText);
    pdf.text(footerText, pageWidth - textWidth - 10, pageHeight - 10);
  };

  return (
    <>
      <div
        ref={reportRef}
        className="w-full max-w-[794px] mx-auto bg-white text-[13px] font-sans p-4 sm:p-8 space-y-8 sm:space-y-10 border border-gray-200"
      >
        {/* ================= COMPANY LOGO HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-300 gap-3">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-32 sm:w-40 h-auto">
              <img src="/WhatsApp Image 2025-12-27 at 21.35.56_c38523a6.jpg" alt="Healing Monk Logo" className="object-contain" />
            </div>
          </div>
          <div className="text-right text-xs text-gray-500">
            Report Generated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* ================= TITLE ================= */}
        <h1 className="text-center font-bold text-xl text-gray-800 border-b pb-2">
          Assessment Report of{" "}
          <span
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setPatientInfo({ ...patientInfo, name: e.target.innerText })
            }
            className="inline-block px-1 border-b border-dashed border-gray-400"
          >
            {patientInfo.name}
          </span>
        </h1>

        {/* ================= PATIENT INFO ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            ["Age", "age"],
            ["Height", "height"],
            ["Weight", "weight"],
            ["Occupation", "occupation"],
            ["Place", "place"],
            ["Medical History", "medicalHistory"],
            ["Surgical History", "surgicalHistory"],
          ].map(([label, key]) => (
            <div key={key} className="flex items-start">
              <b className="text-gray-700 w-32 sm:w-36 flex-shrink-0">{label}:</b>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  setPatientInfo({
                    ...patientInfo,
                    [key]: e.target.innerText,
                  })
                }
                className="flex-1 border-b border-dashed border-gray-400 min-h-[20px] px-1"
              >
                {patientInfo[key]}
              </span>
            </div>
          ))}
        </div>

        {/* ================= CHIEF COMPLAINTS ================= */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Chief Complaints:</h3>
          <div
            className="whitespace-pre-wrap border border-gray-300 p-3 rounded-md min-h-[80px] bg-gray-50"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setPatientInfo({
                ...patientInfo,
                chiefComplaints: e.target.innerText,
              })
            }
          >
            {patientInfo.chiefComplaints}
          </div>
        </div>

        {/* ================= POSTURE COMMENTS ================= */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Posture Assessment:</h3>
          <div
            className="whitespace-pre-wrap border border-gray-300 p-3 rounded-md min-h-[80px] bg-gray-50"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setPostureComments(e.target.innerText)}
          >
            {postureComments}
          </div>
        </div>

        {/* ================= TOTAL PROGRESS BAR ================= */}
        <div className="border-t pt-5 sm:pt-6 pb-4">
          <h3 className="font-semibold text-gray-800 mb-3">Overall Progress Summary</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:flex-1">
              <div className="bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full transition-all duration-300 ${
                    totalProgress.percentage >= 70
                      ? "bg-green-500"
                      : totalProgress.percentage >= 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${totalProgress.percentage}%` }}
                ></div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                {totalProgress.total} / {totalProgress.max} ({totalProgress.percentage}%)
              </div>
            </div>
            <div className="text-right sm:text-left w-full sm:w-auto">
              <span className="block text-xs text-gray-500">Performance Level</span>
              <span className={`font-bold ${
                totalProgress.percentage >= 70
                  ? "text-green-600"
                  : totalProgress.percentage >= 40
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}>
                {totalProgress.percentage >= 70 ? "Good" : totalProgress.percentage >= 40 ? "Fair" : "Needs Improvement"}
              </span>
            </div>
          </div>
        </div>

        {/* ================= MOVEMENTS ================= */}
        <h2 className="text-center font-bold text-xl text-gray-800 pt-4 pb-2 border-t border-gray-300">MOVEMENT ASSESSMENT</h2>
        {movements.map((move, index) => (
          <div key={move.key} className="border border-gray-200 rounded-lg p-3 sm:p-4 space-y-3 mb-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-semibold text-gray-800 mb-2">{move.title}</h4>
                <div className="mb-2">
                  <b>Score:</b>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const copy = [...movements];
                      copy[index].score = e.target.innerText;
                      setMovements(copy);
                    }}
                    className="ml-2 inline-block border-b border-dashed border-gray-400 px-1"
                  >
                    {move.score}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <ImageBox
                  label="Your Image"
                  image={images[move.key]}
                  onUpload={(e) => handleUpload(move.key, e)}
                />
                <ImageBox
                  label="Ideal Form"
                  image={move.idealImage}
                />
              </div>
            </div>

            <div>
              <b className="text-gray-700">Comments:</b>
              <div
                className="whitespace-pre-wrap border border-gray-300 p-2 rounded-md mt-1 bg-white min-h-[60px]"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const copy = [...movements];
                  copy[index].comments = e.target.innerText;
                  setMovements(copy);
                }}
              >
                {move.comments}
              </div>
            </div>
          </div>
        ))}

        {/* ================= EXTRA DYNAMIC SECTIONS (TWO IMAGE UPLOADS) ================= */}
        {extraSections.map((section, index) => (
          <div key={section.id} className="border-t pt-5 sm:pt-6 space-y-4 border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
                  <h4 className="font-semibold text-gray-800">Additional Assessment {index + 1}</h4>
                  <span className="no-print">
                    <button
                      onClick={() => removeSection(section.id)}
                      className="text-xs text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </span>
                </div>
                <div className="mb-2">
                  <b>Score:</b>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const copy = [...extraSections];
                      copy[index].score = e.target.innerText;
                      setExtraSections(copy);
                    }}
                    className="ml-2 inline-block border-b border-dashed border-gray-400 px-1"
                  >
                    {section.score}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <ImageBox
                  label="Left View"
                  image={section.leftImg}
                  onUpload={(e) => handleExtraSectionImageUpload(index, "leftImg", e)}
                />
                <ImageBox
                  label="Right View"
                  image={section.rightImg}
                  onUpload={(e) => handleExtraSectionImageUpload(index, "rightImg", e)}
                />
              </div>
            </div>

            <div>
              <b className="text-gray-700">Comments:</b>
              <div
                className="whitespace-pre-wrap border border-gray-300 p-2 rounded-md mt-1 bg-white min-h-[60px]"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  const copy = [...extraSections];
                  copy[index].comments = e.target.innerText;
                  setExtraSections(copy);
                }}
              >
                {section.comments}
              </div>
            </div>
          </div>
        ))}

        {/* Shared comment box for all extra sections */}
        {extraSections.length > 0 && (
          <div className="border-t pt-5 sm:pt-6 space-y-2">
            <h4 className="font-semibold text-gray-800">Common Notes for All Additional Assessments:</h4>
            <div
              className="whitespace-pre-wrap border border-gray-300 p-3 rounded-md min-h-[60px] bg-gray-50"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setSharedExtraComment(e.target.innerText)}
            >
              {sharedExtraComment}
            </div>
          </div>
        )}

        {/* ================= FOOTER ================= */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-300 text-center text-xs text-gray-500">
          <p>Healing Monk Clinic • 123 Wellness Street, Health City • Phone: +91 98765 43210</p>
          <p>www.healingmonk.com • info@healingmonk.com</p>
        </div>
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="text-center my-6 space-x-3 flex flex-wrap justify-center gap-3 px-4">
        <button
          onClick={addNewSection}
          className="px-5 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg transition-colors duration-200 font-medium w-full sm:w-auto"
        >
          + Add Section
        </button>

        <button
          onClick={downloadPDF}
          className="px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-200 font-medium w-full sm:w-auto"
        >
          Download Report
        </button>
      </div>

      <style>{`
        .pdf-generating .no-print {
          display: none !important;
        }
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default AssessmentReport;