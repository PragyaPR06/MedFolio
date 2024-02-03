import React,{ useState,useEffect} from "react";
import axios from 'axios';
import styles from './AIBot.module.scss'


 

const VoiceChatbot = () => {
  const [formData, setFormData] = useState({
    nurseName: '',
    orgName: '',
    patientName: '',
    diseaseName: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    if (event && event.target) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    
};

  useEffect((e)=>{
    handleInputChange(e);
  });

  const handleCallWithBland = async () => {
    console.log('Making Bland phone call...');

    const { nurseName, orgName, patientName, diseaseName, phoneNumber } = formData;

    console.log('Nurse Name:', nurseName);
    console.log('Organization Name:', orgName);
    console.log('Patient Name:', patientName);
    console.log('Disease Name:', diseaseName);
    console.log('Phone Number:', phoneNumber);

    const yourApiKey = 'sk-kn8epw80xwv9ojjsrqbzh281eyth9w0kt5op32e5hokdkfn7q6qtiw452r2gesud69';
    const phone_number_to_call = phoneNumber;

    const headers = {
      'Authorization': yourApiKey,
    };

    const data = {
      phone_number: phone_number_to_call,
      reduce_latency: true,
      task: `You are ${nurseName} calling from ${orgName} to a patient ${patientName} regarding her ${diseaseName}
      Initial Contact:
      Nurse: "Hello, is this ${patientName}?"
      Patient: "Yes, speaking."
      Nurse: "Hi ${patientName}, this is ${nurseName}, a nurse from ${orgName}. I hope this call finds you well. How have you been feeling lately?"

      Inquiry about Health and Medication Adherence:

      Nurse: "I'm calling to check on your health, specifically regarding your ${diseaseName} management. Are you consistently taking your prescribed medications as directed? Adhering to the prescribed treatment plan is crucial for effective management."

      Patient: "Yes, I've been taking my medications regularly."

      Identification of Symptoms:

      Nurse: "That's good to hear. Have you noticed any changes in your health recently? Any symptoms like [mention specific symptoms related to the disease], or anything else you'd like to bring to our attention?"

      Patient: "Well, I have been experiencing [mention symptoms or concerns]."

      Book for Further Appointments:

      Nurse: "Thank you for sharing that information. It's important for us to address these concerns promptly. I recommend scheduling a follow-up appointment with your doctor to discuss these symptoms in more detail. How does that sound to you?"

      Patient: "Yes, I think that would be a good idea."

      Nurse: "Great. I'll go ahead and arrange an appointment for you. Please let me know your preferred date and time, and we'll do our best to accommodate it."

      Closing:

      Nurse: "Before we conclude, is there anything else you'd like to discuss or any other health issues you've noticed recently?"

      Patient: "No, I think we've covered everything."

      Nurse: "Alright. Thank you for your time, ${patientName}. If you have any further questions or concerns, don't hesitate to reach out. Take care and have a good day."`, // Your formatted message here
    };

    if (yourApiKey === '') {
      window.alert('Please add your Bland API KEY');
      return;
    }

    if (phone_number_to_call === '') {
      window.alert('Please add the phone number to call');
      return;
    }

    try {
      const response = await axios.post('https://api.bland.ai/v1/calls', data, { headers });
      console.log('Call initiated:', response.data.call_id);
    } catch (error) {
      console.error('Error initiating call:', error);
    }

    console.log('done!');
  };

  return (
    <div className={styles.Main}>
      <h1>AI Voice Chatbot</h1>
      <h3>Prepared</h3>

      <form>
        <label htmlFor="nurseName">Nurse Name:</label>
        <input type="text" id="nurseName" name="nurseName" value={formData.nurseName} onChange={handleInputChange} required />

        <label htmlFor="orgName">Organization Name:</label>
        <input type="text" id="orgName" name="orgName" value={formData.orgName} onChange={handleInputChange} required />

        <label htmlFor="patientName">Patient Name:</label>
        <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} required />

        <label htmlFor="diseaseName">Disease Name:</label>
        <input type="text" id="diseaseName" name="diseaseName" value={formData.diseaseName} onChange={handleInputChange} required />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />

        <button className="button" type="button" onClick={handleCallWithBland}>
          Call with AirBland
        </button>
      </form>
    </div>
  );
};

export default VoiceChatbot;