import React, { ChangeEvent, FC, useState } from "react";
import Input from "@/src/shared/component/input/input";
import productFormStyles from "./product-form.module.scss";
import { ColorGroup, Product } from "@/src/shared/types/product";
import ProductFormHeader from "./product-form-header";
import ProductSwatchForm from "./product-swatch-form";
import {
  SwatchFormFields,
  convertProductToSwatchFormArray,
  createEmptySwatchFormFieldsObject,
  updateProductFromSwatchFormFieldsArray,
  validateProductFields,
} from "@/src/shared/helpers/product";
import Button from "@/src/shared/component/button/button";
import { useStoreContext } from "@/src/context/product/StoreContext";
import { useRouter } from "next/router";

interface ProductFormProps {
  product: Product;
}

const ProductForm: FC<ProductFormProps> = ({ product }) => {
  const [formState, setFormState] = useState(product);
  const [swatchForms, setSwatchForms] = useState(
    convertProductToSwatchFormArray(product)
  );
  const { updateProduct } = useStoreContext();
  const router = useRouter();

  const updatedProduct = updateProductFromSwatchFormFieldsArray(
    swatchForms,
    formState
  );
  const isValidProduct = validateProductFields(updatedProduct);

  const onColorGroupChange = (colorGroups: Array<ColorGroup>) => {
    setFormState((prev) => ({
      ...prev,
      colorGroups,
    }));
  };

  const onProductFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value = "" } = event?.target ?? {};
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSwatchFormFieldsChange = (
    swatchFormFields: SwatchFormFields,
    formIndex: number
  ) => {
    setSwatchForms((prev) => {
      prev[formIndex] = swatchFormFields;
      return [...prev];
    });
  };

  const onCreateNewSwatchFormFields = () => {
    const colorImagesFieldLength = formState.colorGroups.length;
    const newSwatchFormFields = createEmptySwatchFormFieldsObject(
      colorImagesFieldLength
    );
    setSwatchForms((prev) => [...prev, newSwatchFormFields]);
  };

  const deleteSwatchFormFields = (swatchFormIndex: number) => {
    setSwatchForms((prev) => {
      const tempSwatchForm = [...prev];
      tempSwatchForm.splice(swatchFormIndex, 1);
      return [...tempSwatchForm];
    });
  };

  const renderSwatchForm = () => {
    return swatchForms.map((swatchForm, index) => {
      return (
        <ProductSwatchForm
          swatchFormFields={swatchForm}
          onSwatchFormFieldsChange={onSwatchFormFieldsChange}
          deleteSwatchFormFields={deleteSwatchFormFields}
          formIndex={index}
          key={`${swatchForm?.key ?? index}`}
        />
      );
    });
  };

  const onFormSave = () => {
    updateProduct(updatedProduct);
    router.push("/");
  };

  return (
    <div className={productFormStyles["product_form"]}>
      <Input
        name="name"
        type="text"
        value={formState.name}
        placeholder="Product Name"
        onChange={onProductFieldChange}
      />
      <ProductFormHeader
        colorGroups={formState.colorGroups}
        onColorGroupChange={onColorGroupChange}
      />

      {renderSwatchForm()}
      <Button title="Addition" onClick={onCreateNewSwatchFormFields} />
      <br />
      <br />
      <br />
      <br />
      <Button
        title="Save Form Values"
        onClick={onFormSave}
        disabled={!isValidProduct}
      />
    </div>
  );
};

export default ProductForm;
