from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
import cv2
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
model = tf.keras.models.load_model('C:/Users/N190658/Documents/e3sem2/miniproject/backend/model_23.h5')
def prepare_image(image_bytes):
    np_img = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(np_img, cv2.IMREAD_COLOR)
    image = cv2.resize(image, (224, 224))
    image = image / 255.0 
    return np.expand_dims(image, axis=0)

@app.route('/')
def home():
    return "Welcome to the Prediction API"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    try:
        image_bytes = file.read()
        image = prepare_image(image_bytes)
        
        prediction = model.predict(image)
        predicted_class = np.argmax(prediction, axis=1)[0]
        probability=float(f"{prediction[0][predicted_class]*100:.2f}")


        multiclass=[' anold-chiari-malformation', ' arachnoid-cyst',
       ' cerebellah-hypoplasia', ' colphocephaly', ' encephalocele',
       ' holoprosencephaly', ' hydracenphaly', ' intracranial-hemorrdge',
       ' intracranial-tumor', ' m-magna', ' mild-ventriculomegaly',
       ' moderate-ventriculomegaly', ' normal', ' polencephaly',
       ' severe-ventriculomegaly', ' vein-of-galen']
        print(multiclass[predicted_class])
      
        
        return jsonify({'predicted_classes': multiclass[predicted_class], 'probabilities': probability})
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
