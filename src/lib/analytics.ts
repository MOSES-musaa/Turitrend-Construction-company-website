/**
 * Thin analytics layer. No provider is connected yet — events are pushed to a
 * dataLayer-style queue so GA4, GTM or another tool can be wired in later
 * without touching component code.
 */

export type AnalyticsEvent =
  | "quote_started"
  | "quote_step_completed"
  | "quote_submitted"
  | "contact_submitted"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "service_view"
  | "cta_click";

type Payload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, payload: Payload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}
