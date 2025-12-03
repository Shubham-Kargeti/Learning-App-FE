import React, { useState, useEffect } from "react";
import "./AssessmentSetupContainer.scss";

import FileUpload from "./components/FileUpload";
import EmailField from "./components/EmialField";
import PortfolioField from "./components/PortfolioField";
import AvailabilitySelector from "./components/AvailabilitySelector";
import RoleSkillPlaceholder from "./components/RoleSkillPlaceholder";
import AssessmentMethodSelector from "./components/AssessmentMethodSelector";
import AssessmentSetupSubmitButton from "./components/AssessmentSetupSubmitButton";

const AssessmentSetupContainer: React.FC = () => {
  // Uploads
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [reqDoc, setReqDoc] = useState<File | null>(null);
  const [clientDoc, setClientDoc] = useState<File | null>(null);

  // Email
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  // Portfolio
  const [portfolio, setPortfolio] = useState("");

  // Availability
  const [availability, setAvailability] = useState(50);

  // Role + Skills
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  // Submit states
  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Validation logic
  useEffect(() => {
    const isValid =
      jdFile &&
      cvFile &&
      emailValid &&
      role.trim() !== "" &&
      skills.length > 0;

    setFormValid(Boolean(isValid));
  }, [jdFile, cvFile, emailValid, role, skills]);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Assessment initiated");
    }, 1000);
  };

  return (
    <div className="assessment-container">
      <div className="admin-page-header">
        <h1>Assessment Creation</h1>
        <p className="page-subtitle">
          Upload required documents and configure the assessment for the candidate
        </p>
      </div>

      <div className="assessment-form-card">
        {/* SECTION: Document Upload */}
        <div className="section">
          <h3 className="section-title">Required Documents</h3>

          <FileUpload label="Upload JD Document *" onFileSelect={setJdFile} />
          <FileUpload label="Upload Candidate CV *" onFileSelect={setCvFile} />

          <FileUpload
            label="Upload Requirement Document"
            onFileSelect={setReqDoc}
          />

          <FileUpload
            label="Upload Client-Specific Document"
            onFileSelect={setClientDoc}
          />
        </div>

        {/* SECTION: Candidate Info */}
        <div className="section">
          <h3 className="section-title">Candidate Information</h3>

          <EmailField
            value={email}
            setValue={setEmail}
            setValid={setEmailValid}
          />

          <PortfolioField value={portfolio} setValue={setPortfolio} />

          <AvailabilitySelector
            value={availability}
            setValue={setAvailability}
          />
        </div>

        {/* SECTION: Role & Skills */}
        <div className="section">
          <h3 className="section-title">Role & Skills</h3>

          <RoleSkillPlaceholder
            role={role}
            setRole={setRole}
            skills={skills}
            setSkills={setSkills}
          />
        </div>

        {/* SECTION: Assessment Method */}
        <div className="section">
          <h3 className="section-title">Assessment Method</h3>
          <AssessmentMethodSelector />
        </div>

        {/* Final CTA */}
        <AssessmentSetupSubmitButton
          disabled={!formValid}
          loading={loading}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AssessmentSetupContainer;
