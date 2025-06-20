import { useState, useRef } from 'react';
//import ReactToPrint from 'react-to-print';
import Header from './components/Header';
import Education from './components/Education';
import About from './components/About';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



function App() {
  const [data, setData] = useState({
    about: {},
    experience: [],
    education: [],
  });

  const componentRef = useRef();

  const handleDataChange = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleDownloadPDF = async () => {
    const element = componentRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const pdf = new jsPDF('p', 'mm', 'a4');
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
    pdf.save('My_CV.pdf');
  };

  return (
    <>
      <Header />
      <div className="flex  flex-col md:flex-row justify-evenly">

        <div className="flex flex-wrap mb-2.5 flex-col ">
          <About onChange={(value) => handleDataChange('about', value)} />
          <Education onChange={(value) => handleDataChange('education', value)} />
          <Experience onChange={(value) => handleDataChange('experience', value)} />

        </div>

        <div className="flex flex-col">
          <CVPreview
            ref={componentRef}
            about={data.about}
            education={data.education}
            experience={data.experience} />
          <div className="text-center my-4">
            <button
              onClick={handleDownloadPDF}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Download PDF
            </button>
          </div>
        </div>

      </div>





    </>
  );
}

{/**The handleDownload does not work as its having some conflicts from tailwind. Pending fix */ }

export default App;
