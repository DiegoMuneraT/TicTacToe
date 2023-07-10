// Componente Square separado de la app que podremos REUTILIZAR
export const Square = ({ children, isSelected, updateBoard, index }) => {
  // Renderizado condicional para saber a quien le toca
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};