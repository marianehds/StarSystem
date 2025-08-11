import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonProps } from "./Button.type";
import { defaultSize, defaultStars, defaulVariant } from ".";
import "./Button.scss";

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  stars = defaultStars,
  variant = defaulVariant,
  size = defaultSize,
}: ButtonProps) => {
  const [isBursting, setIsBursting] = useState(false);
  const animationTimeoutRef = useRef<number | null>(null);

  const handleClick = useCallback<NonNullable<ButtonProps["onClick"]>>(
    (event) => {
      if (!disabled && stars) {
        // Reinicia a animação para cliques consecutivos
        setIsBursting(false);
        // Força um novo ciclo de animação no próximo frame
        requestAnimationFrame(() => setIsBursting(true));

        // Limpa a classe após o término da animação
        if (animationTimeoutRef.current) {
          window.clearTimeout(animationTimeoutRef.current);
        }
        // Duração deve estar sincronizada com o CSS (ver Button.scss)
        animationTimeoutRef.current = window.setTimeout(() => {
          setIsBursting(false);
        }, 700);
      }

      if (onClick) {
        onClick(event);
      }
    },
    [disabled, onClick, stars]
  );

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  return (
    <button
      data-component="button-starsystem"
      className={`${
        [
          className || "",
          "button",
          `button--${variant}`,
          `size--${size}`,
          isBursting && stars ? "is-bursting" : "",
        ]
          .filter(Boolean)
          .join(" ")
      }`}
      disabled={disabled}
      onClick={handleClick}
    >
      <span className="button__content">{children}</span>
      {stars && (
        <span className="stars" aria-hidden>
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
          <span className="star star-6" />
     
        </span>
      )}
    </button>
  );
};

