/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ChangeEvent, useState, useEffect } from "react";
import fileUploadStyles from "./file-upload-with-preview.module.scss";

interface FileUploadWithPreviewProps {
  name?: string;
  defaultImageUri?: string;
  onFileInputChange?: (fieldName: string, file: File) => void;
  allowedFormats?: Array<string>;
}

const FileUploadWithPreview: FC<FileUploadWithPreviewProps> = ({
  name = "",
  defaultImageUri = "",
  onFileInputChange,
  allowedFormats = [],
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const allowedFileFormats = ["image/jpg", "image/png", ...allowedFormats];
  const imageUrl = !!imageFile
    ? URL.createObjectURL(imageFile)
    : defaultImageUri;

  useEffect(() => {
    !!imageFile && onFileInputChange?.(name, imageFile);
  }, [imageFile]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target?.files?.[0] ?? null;
    if (imageFile) {
      setImageFile(imageFile);
    }
  };

  return (
    <div className={fileUploadStyles["file_upload"]}>
      <input
        className={fileUploadStyles["file_upload__input"]}
        type="file"
        name={name ?? ""}
        onChange={onChange}
        accept={allowedFileFormats.toString()}
      />
      <div className={fileUploadStyles["file_upload__preview"]}>
        {imageUrl && <img src={imageUrl} />}
        {!imageUrl && (
          <div
            className={fileUploadStyles["file_upload__preview--placeholder"]}
          >
            Image Preview
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadWithPreview;
