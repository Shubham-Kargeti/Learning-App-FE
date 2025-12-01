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
  // Local state for all fields
  const [jdFile, setJdFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [reqDoc, setReqDoc] = useState<File | null>(null);
  const [clientDoc, setClientDoc] = useState<File | null>(null);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [portfolio, setPortfolio] = useState("");

  const [availability, setAvailability] = useState(50);

  const [role, setRole] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Validate form
  useEffect(() => {
    const requiredOk =
      jdFile &&
      cvFile &&
      emailValid &&
      role.trim() !== "" &&
      skills.length > 0;

    setFormValid(Boolean(requiredOk));
  }, [jdFile, cvFile, emailValid, role, skills]);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Assessment initiated");
    }, 1200);
  };

  return (
    <div className="assessment-setup-wrapper">
      <div className="assessment-card">
        <h2>Admin Assessment Setup</h2>

        {/* File Uploads */}
        <FileUpload label="Upload JD Document" onFileSelect={setJdFile} />
        <FileUpload label="Upload Candidate CV" onFileSelect={setCvFile} />
        <FileUpload label="Upload Requirement Document" onFileSelect={setReqDoc} />
        <FileUpload label="Upload Client-Specific Document" onFileSelect={setClientDoc} />

        {/* Email */}
        <EmailField value={email} setValue={setEmail} setValid={setEmailValid} />

        {/* Portfolio */}
        <PortfolioField value={portfolio} setValue={setPortfolio} />

        {/* Availability */}
        <AvailabilitySelector value={availability} setValue={setAvailability} />

        {/* Role & Skills */}
        <RoleSkillPlaceholder
          role={role}
          setRole={setRole}
          skills={skills}
          setSkills={setSkills}
        />

        {/* Assessment Method */}
        <AssessmentMethodSelector />

        {/* Submit */}
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
