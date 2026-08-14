import type { CSSProperties } from 'react';
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components';

interface EnquiryNotificationEmailProps {
  fullName: string;
  companyName: string;
  jobTitle?: string;
  email: string;
  phone?: string;
  country: string;
  serviceOfInterest: string;
  projectLocation?: string;
  projectStage: string;
  subject?: string;
  message: string;
  submittedAt: string;
}

const accent = '#002037';
const secondary = '#0083ce';
const muted = '#43474e';

const Field = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null;

  return (
    <Section style={styles.field}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <Text style={styles.fieldValue}>{value}</Text>
    </Section>
  );
};

const EnquiryNotificationEmail = ({
  fullName,
  companyName,
  jobTitle,
  email,
  phone,
  country,
  serviceOfInterest,
  projectLocation,
  projectStage,
  subject,
  message,
  submittedAt,
}: EnquiryNotificationEmailProps) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        New project enquiry from {fullName} at {companyName}
      </Preview>

      <Body style={styles.body}>
        <Section style={styles.nav}>
          <Container style={styles.navInner}>
            <Text style={styles.navBrand}>Eunisell Production Solutions</Text>
          </Container>
        </Section>

        <Section style={styles.canvas}>
          <Container style={styles.card}>
            <Section style={styles.banner}>
              <Text style={styles.bannerText}>New Project Enquiry</Text>
            </Section>

            <Section style={styles.cardBody}>
              <Heading as="h1" style={styles.heading}>
                {fullName} — {companyName}
              </Heading>
              <Text style={styles.subtitle}>Submitted {submittedAt} via the website contact form.</Text>

              <Hr style={styles.divider} />

              <Field label="Full Name" value={fullName} />
              <Field label="Company Name" value={companyName} />
              <Field label="Job Title" value={jobTitle} />
              <Field label="Email Address" value={email} />
              <Field label="Phone Number" value={phone} />
              <Field label="Country" value={country} />
              <Field label="Service of Interest" value={serviceOfInterest} />
              <Field label="Project Location" value={projectLocation} />
              <Field label="Project Stage" value={projectStage} />
              <Field label="Subject" value={subject} />

              <Section style={styles.messageSection}>
                <Text style={styles.fieldLabel}>Message</Text>
                <div style={styles.messageBox}>
                  <Text style={styles.messageText}>{message}</Text>
                </div>
              </Section>
            </Section>
          </Container>
        </Section>

        <Section style={styles.footer}>
          <Container style={{ maxWidth: 600 }}>
            <Text style={styles.footerBrand}>EUNISELL PRODUCTION SOLUTIONS</Text>
            <Text style={styles.footerCopyright}>This enquiry was captured automatically from the public contact form.</Text>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

const styles = {
  body: {
    backgroundColor: '#f7fafc',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    margin: 0,
    padding: 0,
  } satisfies CSSProperties,

  nav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #c4c6d0',
    boxShadow: '0px 1px 1px rgba(0,0,0,0.05)',
  } satisfies CSSProperties,

  navInner: {
    maxWidth: 600,
    padding: '12px 24px',
  } satisfies CSSProperties,

  navBrand: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: accent,
    letterSpacing: '-0.3px',
  } satisfies CSSProperties,

  canvas: {
    backgroundColor: '#f7fafc',
    padding: '48px 24px',
  } satisfies CSSProperties,

  card: {
    maxWidth: 600,
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)',
  } satisfies CSSProperties,

  banner: {
    backgroundColor: accent,
    padding: '20px 33px',
  } satisfies CSSProperties,

  bannerText: {
    margin: 0,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    color: secondary,
  } satisfies CSSProperties,

  cardBody: {
    padding: '32px 33px',
  } satisfies CSSProperties,

  heading: {
    margin: '0 0 8px',
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '28px',
    color: accent,
  } satisfies CSSProperties,

  subtitle: {
    margin: 0,
    fontSize: 14,
    lineHeight: '20px',
    color: muted,
  } satisfies CSSProperties,

  divider: {
    borderColor: '#e5e7eb',
    margin: '24px 0',
  } satisfies CSSProperties,

  field: {
    marginBottom: 16,
  } satisfies CSSProperties,

  fieldLabel: {
    margin: '0 0 2px',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.7px',
    textTransform: 'uppercase' as const,
    color: secondary,
  } satisfies CSSProperties,

  fieldValue: {
    margin: 0,
    fontSize: 15,
    lineHeight: '22px',
    color: accent,
  } satisfies CSSProperties,

  messageSection: {
    marginTop: 8,
  } satisfies CSSProperties,

  messageBox: {
    backgroundColor: '#f1f4f6',
    border: '1px solid rgba(196,198,208,0.5)',
    borderRadius: 4,
    padding: '14px 16px',
  } satisfies CSSProperties,

  messageText: {
    margin: 0,
    fontSize: 14,
    lineHeight: '22px',
    color: accent,
    whiteSpace: 'pre-wrap' as const,
  } satisfies CSSProperties,

  footer: {
    backgroundColor: '#f7fafc',
    borderTop: '1px solid #c4c6d0',
    padding: '32px 24px',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  footerBrand: {
    margin: '0 0 8px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    color: muted,
  } satisfies CSSProperties,

  footerCopyright: {
    margin: 0,
    fontSize: 13,
    lineHeight: '18px',
    color: muted,
    opacity: 0.8,
  } satisfies CSSProperties,
};

export default EnquiryNotificationEmail;
