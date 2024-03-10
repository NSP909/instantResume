from flask import Flask, request, send_file, make_response
from flask_restful import Api, Resource
import subprocess
import tempfile
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
api = Api(app)

class Convert(Resource):
    def post(self):
        latex_content = r"{}".format(request.json['latex'])

        # Set the output directory to C:\Users\sange\Downloads
        output_directory = r'C:\Users\sange\Downloads'

        # Ensure the output directory exists
        if not os.path.exists(output_directory):
            os.makedirs(output_directory)

        temp_latex_file = os.path.join(output_directory, 'created.tex')
        with open(temp_latex_file, 'w') as file:
            file.write(latex_content)

        # Use the full path to pdflatex.exe
        pdflatex_path = r'C:\texlive\2023\bin\windows\pdflatex.exe'
        output = subprocess.run([pdflatex_path, '-interaction=nonstopmode', '-output-directory', output_directory, temp_latex_file], capture_output=True)

        # Print the output and stderr for debugging
        print('output', output)
        print('stderr', output.stderr.decode())

        pdf_path = os.path.join(output_directory, 'created.pdf')

        # Check if the PDF file was generated successfully
        if os.path.exists(pdf_path):
            response = make_response(send_file(path_or_file=pdf_path, mimetype='application/pdf', as_attachment=False))
            response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
            response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
            response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
            return response
        else:
            return 'Error generating PDF file'

    def get(self):
        return 'The app is working'

api.add_resource(Convert, '/convert')

if __name__ == '__main__':
    app.run(debug=True)
