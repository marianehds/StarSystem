import React, { useMemo } from "react";
import { RadioProps, RadioOption } from "./Radio.type";
import "./Radio.scss";

export const Radio = ({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  onChange,
  id,
  name,
  options,
  selectedValue,
  ...props
}: RadioProps) => {
  // ID base estável para o componente
  const baseId = useMemo(
    () => id || `radio-${Math.random().toString(36).substr(2, 9)}`,
    [id]
  );

  // Garante um "name" comum para todas as opções, mesmo sem prop name
  const groupName = useMemo(
    () => name || `radio-group-${baseId}`,
    [name, baseId]
  );

  // Renderiza um item (único ou a partir de options)
  const renderRadioItem = (option: RadioOption | null) => {
    const optionLabel = option ? option.label : children;
    const optionValue = option ? option.value : props.value?.toString();
    const optionDisabled = option ? option.disabled : props.disabled;

    // ID estável por opção
    const itemId = optionValue ? `${baseId}-${optionValue}` : baseId;
    const checked =
      selectedValue !== undefined && optionValue !== undefined
        ? selectedValue === optionValue
        : undefined; // deixa não-controlado se não for fornecido

    return (
      <div
        key={itemId}
        data-component="radio-starsystem"
        className={`radio size--${size} ${className}`}
      >
        <input
          type="radio"
          id={itemId}
          name={groupName}
          value={optionValue}
          className={`radio-input radio--${variant}`}
          onChange={onChange}
          disabled={optionDisabled}
          checked={checked}
          {...props}
        />
        <label htmlFor={itemId} className="radio-label">
          {optionLabel}
        </label>
      </div>
    );
  };

  if (options && options.length > 0) {
    return <div role="radiogroup">{options.map((opt) => renderRadioItem(opt))}</div>;
  }

  // Modo single
  return renderRadioItem(null);
};

Radio.displayName = "Radio";