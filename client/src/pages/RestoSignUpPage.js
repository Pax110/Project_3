import React from "react";
import FileUploader from "../components/file-uploader/FileUploader";
import RestoSignUpForm from "../components/forms/RestoSignUpForm";

const RestoSignUpPage = () => {
  return (
    <div>
      <RestoSignUpForm />
      <FileUploader />
    </div>
  );
};

export default RestoSignUpPage;
