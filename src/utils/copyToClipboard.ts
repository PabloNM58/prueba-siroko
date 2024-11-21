export default function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text).catch((err) => {
    console.error("Error al copiar al portapapeles:", err);
    throw new Error("No se pudo copiar al portapapeles.");
  });
}
