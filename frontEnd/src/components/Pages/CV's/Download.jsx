import React, { useContext, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CVContext } from "../../Tools/Context/CVContext";
import Template from "./Template";

const fontOptions = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Courier New",
  "Bebas Neue",
  "monospace",
];

function Download() {
  const [loader, setLoader] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const { userCV } = useContext(CVContext);

  const downloadPDF = () => {
    const capture = document.querySelector("#create-cv");
    setLoader(true);

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  const [customization, setCustomization] = useState({
    colorHeader: "#3498db",
    colorBorder: "#2c3e50",
    colorText: "#ecf0f1",
    font: "Arial",
    bg: "#ecf0f1",
    bgLeft: "#3A7CA5",
  });

  const handleCustomization = (property, value) => {
    setCustomization((prev) => ({ ...prev, [property]: value }));
  };

  return (
    <>
      <button
        className="w-28 h-12 fixed z-50 right-10 bottom-10 text-white bg-dark-blue rounded-lg hover:bg-white hover:text-dark-blue transition-all ease-in-out"
        onClick={() => setNavOpen(!navOpen)}
      >
        Editor
      </button>
      <div className="flex relative z-40">
        {navOpen && (
          <div className="side-nav p-8 bg-gray-800 text-white pt-20 absolute min-h-full ">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <div className="mb-4">
              <label className="block mb-2">Header Color:</label>
              <input
                type="color"
                value={customization.colorHeader}
                onChange={(e) =>
                  handleCustomization("colorHeader", e.target.value)
                }
                className="border border-gray-600 rounded p-1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Text Color:</label>
              <input
                type="color"
                value={customization.colorText}
                onChange={(e) =>
                  handleCustomization("colorText", e.target.value)
                }
                className="border border-gray-600 rounded p-1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Background Color:</label>
              <input
                type="color"
                value={customization.bg}
                onChange={(e) => handleCustomization("bg", e.target.value)}
                className="border border-gray-600 rounded p-1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Background Color:</label>
              <input
                type="color"
                value={customization.bgLeft}
                onChange={(e) => handleCustomization("bgLeft", e.target.value)}
                className="border border-gray-600 rounded p-1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Border Color:</label>
              <input
                type="color"
                value={customization.colorBorder}
                onChange={(e) =>
                  handleCustomization("colorBorder", e.target.value)
                }
                className="border border-gray-600 rounded p-1"
              />
            </div>
            <div className="mb-4 text-black">
              <label className="block mb-2 text-white">Font:</label>
              <select
                value={customization.font}
                onChange={(e) => handleCustomization("font", e.target.value)}
                className="border border-gray-600 rounded p-1"
              >
                {fontOptions.map((font, index) => (
                  <option key={index} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="absolute left-12 bg-white text-dark-blue w-24 h-12 flex justify-center items-center rounded-lg hover:bg-dark-blue hover:text-white transition-all ease-in-out"
              onClick={downloadPDF}
              disabled={loader}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </button>
          </div>
        )}

        <div id="create-cv" className="flex-1">
          <Template customization={customization} />
        </div>
      </div>
    </>
  );
}

export default Download;
