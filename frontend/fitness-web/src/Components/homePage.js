import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import Footer from './footer';
import Header from './header';
import './homePage.css';

const HomePage = () => {
  const [name] = useState('Nidarshana');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [file, setFile] = useState(null);
  // const [resultspage] = useState(Results); // You don't need this line

  const history = useHistory(); // Initialize useHistory

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleGendertChange = (e) => {
    setGender(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all required values are filled
    if (!height || !weight || !age || !gender || !description) {
      alert('Please fill in all the details');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('height', height);
      formData.append('weight', weight);
      formData.append('age', age);
      formData.append('gender', gender);
      formData.append('description', description);
      formData.append('file', file);

      // Make the API call using axios
      const response = await axios.post('YOUR_API_ENDPOINT', formData);

      // Handle the API response as needed
      console.log('API Response:', response.data);

      // Navigate to the Results page
      history.push('/results');
    } catch (error) {
      console.error('API Error:', error);
    }
  };
 

  return (
    <div>
      <Header />
      <div className="banner-container">
        <div className="container">
          <div className="centered-container">
            <div className="col">
              <h2>Hello {name} 👋 ...</h2>
            </div>
            <br></br>
            <div className="col1">
              <h4>Enter your details here</h4>
            </div>
            <br></br>
            <br></br>
            <div id="col2" className="col2">
              <form onSubmit={handleSubmit}>
                <table className="form-table">
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="height">Height (cm):</label>
                      </td>
                      <td>
                        <input type="number" id="height" value={height} onChange={handleHeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="weight">Weight (kg):</label>
                      </td>
                      <td>
                        <input type="number" id="weight" value={weight} onChange={handleWeightChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="Age">Age :</label>
                      </td>
                      <td>
                        <input type="number" id="age" value={age} onChange={handleAgeChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="gender">Gender :</label>
                      </td>
                      <td>
                        <input type="radio" name ="gender" id="gender" value={Male} onChange={handleGendertChange} />
                        <input type="radio" name ="gender" id="gender" value={Female} onChange={handleGenderChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="description">Description:</label>
                      </td>
                      <td>
                        <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
                      </td>
                    </tr>
                    <br></br>
                    <tr>
                      <td>
                        <label htmlFor="file">Upload Report (optional) :</label>
                      </td>
                      <td>
                        <input type="file" id="file" onChange={handleFileChange} />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <button type="submit" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
