"use client";

import { useState, type FormEvent } from "react";
import {
  initialForm,
  type ContactData,
  type ContactStatus,
} from "./contact-data";

export function useContactForm() {
  const [form, setForm] = useState<ContactData>(initialForm);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState("");

  const updateField = (
    field: keyof Omit<ContactData, "services">,
    value: string,
  ) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleService = (service: string) => {
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    if (!form.services.length) {
      setError("Välj minst en tjänst.");
      return;
    }

    setError("");
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          services: form.services.join(", "),
          subject: form.subject,
          message: form.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Kunde inte skicka meddelandet.");
      }

      setStatus("success");
      setForm({ ...initialForm, services: [] });
    } catch {
      setStatus("error");
      setError("Något gick fel. Försök igen lite senare.");
    }
  };

  const reset = () => {
    setForm({ ...initialForm, services: [] });
    setError("");
    setStatus("idle");
  };

  return {
    form,
    status,
    error,
    updateField,
    toggleService,
    handleSubmit,
    reset,
  };
}

export type ContactFormState = ReturnType<typeof useContactForm>;
