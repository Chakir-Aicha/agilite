// Importez les modules et composants nécessaires
import React, { useState } from "react";
import Axios from "axios";
import Footer from "../components/footer";
import Header from "../components/navbar";

// Définissez le composant Registration
const Registration = () => {
  const [somme, setSomme] = useState("somme à payer en DH");
  const [type, setType] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [nom, setNom] = useState("");  
  const [prenom, setPrenom] = useState("");
  const [fonction, setFunction] = useState("");
  const [mail, setMail] = useState("");
  const backgroundImageUrl = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/ARTIFICIAL-INTELLIGENCE.jpg';

  // Fonction pour gérer le changement de la sélection du type
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "participant ordinaire") {
      setType(selectedValue);
      setSomme(500);
    } else if (selectedValue === "conference") {
      setType(selectedValue);
      setSomme(700);
    } else if (selectedValue === "postère") {
      setType(selectedValue);
      setSomme(900);
    } else {
      setType("");
      setSomme(0);
    }
  };

  // Fonction pour gérer le changement de fichier
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setPdfFile(selectedFile);
  };


  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {




        const data = {
           
         
            "nom": nom,
            "prenom": prenom, 
             "email": mail,
            "fonction": fonction,
          
           "somme": somme
          };






      const formData = new FormData();
     
      formData.append("email", mail);
      

      formData.append("type", type);
      if (pdfFile) {
        formData.append("file", pdfFile);
      }
    const response2 = await Axios.post("http://localhost:8080/participant/add",data

      );

      const response = await Axios.post("http://localhost:8080/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  

      console.log(response.data);
      console.log(response2.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // Retournez la structure JSX du composant
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ height: '580px' }}>
                    <div className="slider-area position-relative" style={{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        color: 'white',
                        backgroundSize: 'cover',
                        height: '100%', 
                        }}>
                        <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                            <div className="col-xl-8 col-lg-8 col-md-9 col-sm-10">
                                <div className="hero__caption2">
                                <h1 className='CONTACT'>Registration</h1>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
<br /><br /><br /><br /><br /><br /><br /><br />
      <form
        className="form-contact contact_form"
        action="contact_process.php"
        method="post"
        id="contactForm"
        noValidate="novalidate"
        onSubmit={handleSubmit}
      ><div className="row">
<div className="col-6">
            <div className="form-group">
              <input
                className="form-control"
                name="prenom"
                id="prenom"
                type="text"
                placeholder="Enter firstName"
                onChange={(e) => {
                  setPrenom(e.target.value);
                }}
              />
            </div>
          </div></div>


        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="name"
                id="name"
                type="text"
                placeholder="Enter your family name"
                onChange={(e) => {
                  setNom(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
          <div className="col-6">
            <div className="form-group">
              <input
                className="form-control valid"
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div></div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <input
                className="form-control"
                name="fonction"
                id="fonction"
                type="text"
                placeholder="Enter Function"
                onChange={(e) => {
                  setFunction(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
<div className="row">
        <div className="col-md-6">
          <select name="select" id="select" onChange={handleSelectChange} style={{ width: "100%", padding: "15px" }}>
            <option value=""></option>
            <option value="participant ordinaire">Participant ordinaire</option>
            <option value="conference">Conference</option>
            <option value="postère">Postère</option>
          </select>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <input
              className="form-control"
              name="subject"
              id="subject"
              type="text"
              placeholder=""
              disabled={true}
              value={somme}
            />
          </div>
        </div>
</div>
        {type !== "participant ordinaire" && type !== "" && (
          <div className="col-6">
            <input type="file" accept=".pdf" onChange={handleFileChange} className="form-control" />
          </div>
        )}

        <div></div>
        <div className="form-group mt-3">
     
          <button type="submit" className="button button-contactForm boxed-btn" style={{textAlign:"center"}}>
            Send
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Registration;
