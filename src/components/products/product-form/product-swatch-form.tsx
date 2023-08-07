import React, { FC, ChangeEvent, useState, useEffect } from "react";
import Input from "@/src/shared/component/input/input";
import productFormStyles from "./product-form.module.scss";
import FileUploadWithPreview from "@/src/shared/component/file-upload-with-preview/file-upload-with-preview";
import { covertImageToDataUri } from "@/src/shared/helpers/common";
import { SwatchFormFields } from "@/src/shared/helpers/product";
import DeleteIcon from "@/src/shared/icons/delete-icon";

interface ProductSwatchFormProps {
  swatchFormFields: SwatchFormFields;
  formIndex: number;
  onSwatchFormFieldsChange?: (
    swatchFormFields: SwatchFormFields,
    formIndex: number
  ) => void;
  deleteSwatchFormFields: (formIndex: number) => void;
}

const ProductSwatchForm: FC<ProductSwatchFormProps> = ({
  swatchFormFields,
  formIndex,
  onSwatchFormFieldsChange,
  deleteSwatchFormFields,
}) => {
  const [swatchFormState, setSwatchFormState] =
    useState<SwatchFormFields>(swatchFormFields);

  useEffect(() => {
    onSwatchFormFieldsChange?.(swatchFormState, formIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swatchFormState]);

  const onSwatchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value = "" } = event?.target ?? {};
    setSwatchFormState((prev) => ({
      ...prev,
      swatchValue: Number(value),
    }));
  };

  const onFileSelect = async (fieldName: string, file: File) => {
    const fileAsBase64 = await covertImageToDataUri(file);
    setSwatchFormState((prev) => {
      const tempColorImages = [...prev.colorImages];
      tempColorImages[+fieldName] = fileAsBase64 as string;
      return {
        ...prev,
        colorImages: tempColorImages,
      };
    });
  };

  const renderFileFields = () => {
    const fileFields = swatchFormState.colorImages.map((_, index) => {
      return (
        <div className={productFormStyles["product_form__swatch"]} key={index}>
          <FileUploadWithPreview
            name={`${index}`}
            onFileInputChange={onFileSelect}
            defaultImageUri={swatchFormFields.colorImages[index]}
          />
        </div>
      );
    });
    return fileFields;
  };

  const onDeleteRow = () => {
    deleteSwatchFormFields(formIndex);
  };

  return (
    <div className={productFormStyles["product_form__swatchs"]}>
      <div className={productFormStyles["product_form__swatch"]}>
        <span
          className={productFormStyles["product_form__swatch--delete"]}
          onClick={onDeleteRow}
        >
          <DeleteIcon />
        </span>
        <Input
          name="swatch"
          type="number"
          value={swatchFormFields.swatchValue.toString()}
          placeholder="Swatch Value"
          onChange={onSwatchValueChange}
        />
      </div>
      {renderFileFields()}
    </div>
  );
};

export default ProductSwatchForm;
