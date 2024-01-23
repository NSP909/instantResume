from flask import Flask, request, send_file, jsonify, make_response
from flask_restful import Api, Resource
import subprocess
import tempfile
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
api = Api(app)

class Convert(Resource):
    def post(self):
        latex_content = request.json['latex']

        with tempfile.TemporaryDirectory() as temp_dir:

            temp_latex_file = temp_dir + '/created.tex'
            with open(temp_latex_file,'w') as file:
                file.write(latex_content)

            output = subprocess.run(['pdflatex', '-interaction=nonstopmode','-output-directory',temp_dir, temp_latex_file])
            
            pdf_path = temp_dir+'/created.pdf'
            print('output',output)
            response = make_response(send_file(path_or_file=pdf_path,mimetype='application/pdf', as_attachment=False))
            response.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
            response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'
            response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
            return response


# class TestCors(Resource):
#     def post(self):
#         latex_content = {'received_latex': request.json['latex']}
#         return jsonify(latex_content)


    def get(self):
        return 'The app is working'
    


api.add_resource(Convert,'/convert')

if __name__ == '__main__':
    app.run(debug=True)