"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { useForm } from "react-hook-form";
import { getUiCopy } from "@/app/_lib/copy";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getPublicEnv } from "@/lib/env";
import type { Locale } from "@/lib/i18n";

const formSchema = z.object({
  name: z.string().trim().min(2),
  email: z.email().trim(),
  company: z.string().trim().max(120),
  subject: z.string().trim().max(120),
  message: z.string().trim().min(20).max(5000),
});

type FormValues = z.infer<typeof formSchema>;

type SubmissionState =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

const publicEnv = getPublicEnv();

type ContactFormProps = {
  locale: Locale;
};

function ContactForm({ locale }: ContactFormProps) {
  const copy = getUiCopy(locale);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [submissionState, setSubmissionState] = useState<SubmissionState>({ kind: "idle" });
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setSubmissionState({ kind: "idle" });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        locale,
        turnstileToken,
        honeypot: "",
      }),
    });

    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean;
      message?: string;
      error?: string;
    } | null;

    if (response.ok && payload?.ok) {
      const isSoftAccepted = payload.message === "contact_email_not_configured";

      setSubmissionState({
        kind: "success",
        message: isSoftAccepted ? copy.formSoftAccepted : copy.formSuccess,
      });
      form.reset();
      setTurnstileToken("");
      return;
    }

    const message =
      payload?.error === "missing-token" ||
      payload?.error === "verification-failed" ||
      payload?.error === "verification-unreachable"
        ? copy.formTurnstileError
        : copy.formError;

    setSubmissionState({
      kind: "error",
      message,
    });
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <div className="grid gap-5 md:grid-cols-2">
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor="name">{copy.formName}</FieldLabel>
            <FieldContent>
              <Input id="name" aria-invalid={Boolean(errors.name)} {...register("name")} />
              <FieldError errors={[errors.name]} />
            </FieldContent>
          </Field>

          <Field data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor="email">{copy.formEmail}</FieldLabel>
            <FieldContent>
              <Input
                id="email"
                type="email"
                aria-invalid={Boolean(errors.email)}
                {...register("email")}
              />
              <FieldError errors={[errors.email]} />
            </FieldContent>
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field data-invalid={Boolean(errors.company)}>
            <FieldLabel htmlFor="company">{copy.formCompany}</FieldLabel>
            <FieldContent>
              <Input id="company" aria-invalid={Boolean(errors.company)} {...register("company")} />
              <FieldError errors={[errors.company]} />
            </FieldContent>
          </Field>

          <Field data-invalid={Boolean(errors.subject)}>
            <FieldLabel htmlFor="subject">{copy.formSubject}</FieldLabel>
            <FieldContent>
              <Input id="subject" aria-invalid={Boolean(errors.subject)} {...register("subject")} />
              <FieldError errors={[errors.subject]} />
            </FieldContent>
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="message">{copy.formMessage}</FieldLabel>
          <FieldContent>
            <Textarea
              id="message"
              rows={7}
              aria-invalid={Boolean(errors.message)}
              {...register("message")}
            />
            <FieldDescription>{copy.contactFormSummary}</FieldDescription>
            <FieldError errors={[errors.message]} />
          </FieldContent>
        </Field>

        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" />

        {publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? (
          <Turnstile
            siteKey={publicEnv.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken("")}
            onError={() => setTurnstileToken("")}
            options={{
              theme: "light",
            }}
          />
        ) : null}

        {submissionState.kind !== "idle" ? (
          <p
            className={
              submissionState.kind === "success"
                ? "text-foreground text-sm"
                : "text-destructive text-sm"
            }
          >
            {submissionState.message}
          </p>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? copy.formSubmitting : copy.formSubmit}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}

export { ContactForm };
