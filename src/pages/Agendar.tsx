import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createAppointment } from "../services/appointmentService";
import { Link } from "react-router-dom";

export default function Agendar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const mutation = useMutation({
    mutationFn: () => {
      const localDate = new Date(`${date}T${time}:00`);
      const scheduledAt = new Date(localDate.getTime() - localDate.getTimezoneOffset() * 60000);

      return createAppointment({
        name,
        phone,
        service,
        scheduledAt: scheduledAt.toISOString(),
      });
    },
    onSuccess: () => {
      setName("");
      setPhone("");
      setService("");
      setDate("");
      setTime("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Agende seu horário</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="text"
            placeholder="Serviço (ex: Manicure, Pedicure)"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400"
            required
          />
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            {mutation.isPending ? "Agendando..." : "Agendar"}
          </button>

          {mutation.isError && (
            <p className="text-red-600 text-sm mt-2">
              {(mutation.error as Error).message || "Erro ao agendar."}
            </p>
          )}
          {mutation.isSuccess && (
            <p className="text-green-600 text-sm mt-2">Agendamento realizado com sucesso!</p>
          )}
        </form>
        <div className="text-center mt-6">
          <Link to="/" className="text-pink-600 hover:underline">
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}
