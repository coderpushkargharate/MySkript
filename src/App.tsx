import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* ================= IMAGE BOX ================= */
const ImageBox = ({ image, onUpload, label }) => {
  return (
    <div className="w-[230px] h-[310px] border border-gray-400 bg-gray-50 flex items-center justify-center relative">
      {image ? (
        <img src={image} className="w-full h-full object-contain" alt="Uploaded" />
      ) : (
        <label className="text-xs text-gray-500 cursor-pointer text-center px-2">
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
    // {
    //   title: "Neck movement",
    //   key: "move5",
    //   idealImage: "/assets/ideal/move5.png",
    //   comments:
    //     "While doing side flexion of the neck towards right\nIt is pretty visible that the left shoulder is compensating the movements due to tightness in the neck side flexors",
    //   score: "50/100",
    // },
  ]);

  // Uploaded images for movements
  const [images, setImages] = useState({});

  // Extra dynamic sections (NEW)
  const [extraSections, setExtraSections] = useState([]);

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
        score: "0/100", // Optional: add score field
      },
    ]);
  };

  /* ================= PDF DOWNLOAD (MULTI-PAGE SUPPORT) ================= */
  const downloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;

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

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10; // Adjust to avoid cutoff
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Assessment_Report.pdf");
  };

  return (
    <>
      <div
        ref={reportRef}
        className="w-[794px] mx-auto bg-white text-[13px] font-sans p-8 space-y-10"
      >
        {/* ================= TITLE ================= */}
        <h1 className="text-center font-bold text-lg">
          Assessment report of{" "}
          <span
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              setPatientInfo({ ...patientInfo, name: e.target.innerText })
            }
          >
            {patientInfo.name}
          </span>
        </h1>

        {/* ================= PATIENT INFO ================= */}
        {[
          ["Age", "age"],
          ["Ht", "height"],
          ["Wt", "weight"],
          ["Occupation", "occupation"],
          ["Place", "place"],
          ["Previous medical history", "medicalHistory"],
          ["Previous surgical history", "surgicalHistory"],
        ].map(([label, key]) => (
          <p key={key}>
            <b>{label} – </b>
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                setPatientInfo({
                  ...patientInfo,
                  [key]: e.target.innerText,
                })
              }
            >
              {patientInfo[key]}
            </span>
          </p>
        ))}

        {/* ================= CHIEF COMPLAINTS ================= */}
        <p
          className="mt-3"
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
        </p>

        {/* ================= POSTURE COMMENTS ================= */}
        <div>
          <b>Comments –</b>
          <div
            className="whitespace-pre-wrap border p-2 min-h-[60px]"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setPostureComments(e.target.innerText)}
          >
            {postureComments}
          </div>
        </div>

        {/* ================= MOVEMENTS ================= */}
        <h2 className="text-center font-bold">MOVEMENTS</h2>
        {movements.map((move, index) => (
          <div key={move.key} className="space-y-3">
            <div className="flex justify-between">
              <ImageBox
                label={move.title}
                image={images[move.key]}
                onUpload={(e) => handleUpload(move.key, e)}
              />
              <ImageBox image={move.idealImage} />
            </div>

            <b>Comments –</b>
            <div
              className="whitespace-pre-wrap border p-2 min-h-[60px]"
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

            <b>Score –</b>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const copy = [...movements];
                copy[index].score = e.target.innerText;
                setMovements(copy);
              }}
            >
              {move.score}
            </div>
          </div>
        ))}

        {/* ================= EXTRA DYNAMIC SECTIONS (TWO IMAGE UPLOADS) ================= */}
        {extraSections.map((section, index) => (
          <div key={section.id} className="border-t pt-6 space-y-4">
            
            <div className="flex justify-between">
              <ImageBox
                label="Upload Left Image"
                image={section.leftImg}
                onUpload={(e) => handleExtraSectionImageUpload(index, "leftImg", e)}
              />
              <ImageBox
                label="Upload Right Image"
                image={section.rightImg}
                onUpload={(e) => handleExtraSectionImageUpload(index, "rightImg", e)}
              />
            </div>

            <b>Comments –</b>
            <div
              className="whitespace-pre-wrap border p-2 min-h-[60px]"
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

            <b>Score –</b>
            <div
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                const copy = [...extraSections];
                copy[index].score = e.target.innerText;
                setExtraSections(copy);
              }}
            >
              {section.score}
            </div>
          </div>
        ))}
      </div>

      {/* ================= BUTTONS ================= */}
      <div className="text-center my-6 space-x-4">
        <button
          onClick={addNewSection}
          className="px-6 py-2 bg-gray-800 text-white rounded"
        >
          + Add Section
        </button>

        <button
          onClick={downloadPDF}
          className="px-6 py-2 bg-black text-white rounded"
        >
          Download Report
        </button>
      </div>
    </>
  );
};

export default AssessmentReport;