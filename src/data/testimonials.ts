import type { Locale } from '@/i18n/config';

export interface Testimonial {
  quote: string;
  /** Who said it, as a role. Add the person's name once they approve it. */
  author: string;
  company: string;
  /** Slug from data/projects.ts, used to link the quote to its case study. */
  project?: string;
}

/**
 * Client quotes about working with the studio: how the engagement ran, not
 * what the product measured. The figures belong to each project's `results`
 * in data/projects.ts, so a quote should never restate them. Each one is
 * attributed by role and company and links to its case study. Replace
 * `author` with the person's name once they have signed off on the wording.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'The team asked harder questions about the money than our own accountant, and explained every decision in plain language before building it. It felt like having a technical co-founder, not a vendor.',
    author: 'Founder',
    company: 'Property members club',
    project: 'brickfold',
  },
  {
    quote:
      'They pushed back when a request would have cost us later, and were right every time. Weekly demos, no surprises on the invoice, and still reachable long after launch.',
    author: 'Product lead',
    company: 'SEO platform',
    project: 'rankloom',
  },
  {
    quote:
      'We had a hard launch date tied to the semester. They planned around it from day one, cut scope honestly instead of quietly, and shipped on the day. Launch week was boring, which was the point.',
    author: 'Co-founder',
    company: 'Student housing marketplace',
    project: 'bidnest',
  },
  {
    quote:
      'They sat with our support queue before writing a line of code, so what they built fixed the real problems, not the ones in the brief. Handover was thorough enough that our own team runs it now.',
    author: 'Head of operations',
    company: 'Ecommerce marketplace',
    project: 'curio-market',
  },
  {
    quote:
      'Clear scope, clear timeline, and risks flagged early instead of hidden until the end. When payroll turned out to be subtler than we thought, they explained it, fixed it and documented it in the same week.',
    author: 'Managing director',
    company: 'Bitsmiths Studio',
    project: 'bitsmiths-hrm',
  },
  {
    quote:
      'We were sceptical about AI in audit work. They showed their reasoning at every step, started with a small pilot and expanded only when our reviewers were satisfied. Careful, professional, easy to work with.',
    author: 'Head of quality',
    company: 'Audit firm',
    project: 'qa-compliance-agent',
  },
  {
    quote:
      'They understood that compliance is about being able to show your reasoning, and built the product that way from the first sprint. Clear updates, honest estimates, and nothing shipped that they could not explain to an auditor.',
    author: 'Head of compliance',
    company: 'BankIslami',
    project: 'bank-islami-pep',
  },
];

/** German copy, in the same order as `testimonials`. */
const testimonialsDe: Testimonial[] = [
  {
    quote:
      'Das Team stellte härtere Fragen zum Geld als unsere eigene Buchhaltung und erklärte jede Entscheidung in klarer Sprache, bevor sie gebaut wurde. Es fühlte sich an wie ein technischer Mitgründer, nicht wie ein Dienstleister.',
    author: 'Gründer',
    company: 'Immobilien-Mitgliederclub',
    project: 'brickfold',
  },
  {
    quote:
      'Sie haben widersprochen, wenn ein Wunsch uns später teuer geworden wäre, und lagen jedes Mal richtig. Wöchentliche Demos, keine Überraschungen auf der Rechnung, und auch lange nach dem Launch erreichbar.',
    author: 'Produktleitung',
    company: 'SEO-Plattform',
    project: 'rankloom',
  },
  {
    quote:
      'Wir hatten einen festen Starttermin zum Semesterbeginn. Sie haben von Tag eins darauf hin geplant, den Umfang ehrlich statt heimlich gekürzt und pünktlich geliefert. Die Launch-Woche war langweilig, und genau das war der Plan.',
    author: 'Mitgründerin',
    company: 'Marktplatz für Studierendenwohnungen',
    project: 'bidnest',
  },
  {
    quote:
      'Sie haben sich in unsere Support-Warteschlange gesetzt, bevor eine Zeile Code entstand. So löste das Ergebnis die echten Probleme, nicht die aus dem Briefing. Die Übergabe war so gründlich, dass unser Team die Plattform heute selbst betreibt.',
    author: 'Leitung Betrieb',
    company: 'E-Commerce-Marktplatz',
    project: 'curio-market',
  },
  {
    quote:
      'Klarer Umfang, klarer Zeitplan, und Risiken früh benannt statt bis zum Schluss versteckt. Als die Lohnabrechnung kniffliger wurde als gedacht, haben sie es erklärt, behoben und dokumentiert, in derselben Woche.',
    author: 'Geschäftsführung',
    company: 'Bitsmiths Studio',
    project: 'bitsmiths-hrm',
  },
  {
    quote:
      'Wir waren skeptisch gegenüber KI in der Prüfungsarbeit. Sie haben ihre Überlegungen bei jedem Schritt offengelegt, klein mit einem Pilot begonnen und erst erweitert, als unsere Prüfenden zufrieden waren. Sorgfältig, professionell, angenehm in der Zusammenarbeit.',
    author: 'Leitung Qualität',
    company: 'Wirtschaftsprüfung',
    project: 'qa-compliance-agent',
  },
  {
    quote:
      'Sie haben verstanden, dass Compliance bedeutet, die eigene Begründung zeigen zu können, und das Produkt vom ersten Sprint an so gebaut. Klare Updates, ehrliche Schätzungen, und nichts ausgeliefert, das sie einem Prüfer nicht erklären könnten.',
    author: 'Leitung Compliance',
    company: 'BankIslami',
    project: 'bank-islami-pep',
  },
];

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === 'de' ? testimonialsDe : testimonials;
}
