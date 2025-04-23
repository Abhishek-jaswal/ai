from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
import fitz  # PyMuPDF for PDF parsing

class ResumeUploadView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        uploaded_file = request.FILES.get("file")
        if not uploaded_file:
            return Response({"error": "No file uploaded"}, status=400)

        # Read and extract text from PDF
        pdf_data = uploaded_file.read()
        text = ""
        with fitz.open(stream=pdf_data, filetype="pdf") as doc:
            for page in doc:
                text += page.get_text()

        # Dummy AI Response
        return Response({
            "message": "Resume uploaded successfully",
            "text_snippet": text[:500]  # just send first 500 chars
        })
