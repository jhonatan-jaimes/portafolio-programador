export async function getText() {
  const res = await fetch("/texts.json");

  if (!res.ok) {
    throw new Error("No se pudo cargar text.json");
  }

  return res.json();
}