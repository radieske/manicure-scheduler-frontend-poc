import { apiFetch } from "./api";

export type CreateAppointmentPayload = {
  name: string;
  phone: string;
  service: string;
  scheduledAt: string;
};

export function createAppointment(payload: CreateAppointmentPayload) {
  return apiFetch("/appointments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}
