import { useContext, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { CVContext } from "../../Tools/Context/CVContext";
function Createor() {
  const [loader, setLoader] = useState(false);
  const {} = useContext(CVContext);
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

  return (
    <>
      <div className="p-40" id="create-cv"></div>
      <div className="receipt-actions-div">
        <div className="actions-right">
          <button
            className="receipt-modal-download-button"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </button>
        </div>
      </div>
    </>
  );
}
export default Createor;
