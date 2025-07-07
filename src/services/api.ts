const API_BASE_URL = "http://localhost:3333";

export async function apiFetch(path: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE_URL}${path}`, options);

  if (!res.ok) {
    throw new Error(`Erro na requisição: ${res.statusText}`);
  }

  return res.json();
}
