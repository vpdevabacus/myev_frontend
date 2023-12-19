import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../../assets/utils/myEV_borcher.pdf"

function PdfComp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const pageArray = Array.from(new Array(numPages), (el, index) => index + 1);

    return (
        <div>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                {pageArray.map((page) => (
                    <Page key={`page_${page}`} pageNumber={page} />
                ))}
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}

export default PdfComp;
