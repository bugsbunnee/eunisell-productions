import type { CSSProperties } from 'react';
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';

interface WelcomeEmailProps {
  firstName: string;
  tempPassword: string;
  loginUrl: string;
}

const accent = '#002037';
const secondary = '#0083ce';
const muted = '#43474e';

const WelcomeEmail = ({ firstName, tempPassword, loginUrl }: WelcomeEmailProps) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>Welcome to Eunisell Admin Dashboard — your account is ready.</Preview>

      <Body style={styles.body}>
        <Section style={styles.nav}>
          <Container style={styles.navInner}>
            <Text style={styles.navBrand}>Eunisell Admin</Text>
          </Container>
        </Section>

        <Section style={styles.canvas}>
          <Container style={styles.card}>
            <table width="100%" cellPadding={0} cellSpacing={0} style={styles.banner}>
              <tbody>
                <tr>
                  <td style={styles.bannerInner}>
                    <svg width="36" height="40" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: 'middle' }}>
                      <path d="M18 0L0 8v12c0 11.1 7.68 21.48 18 24 10.32-2.52 18-12.9 18-24V8L18 0z" fill={secondary} opacity="0.9" />
                      <text x="18" y="27" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">
                        E
                      </text>
                    </svg>

                    <span style={styles.officialBadge}>OFFICIAL NOTIFICATION</span>
                  </td>
                </tr>
              </tbody>
            </table>

            <Section style={styles.cardBody}>
              <Section style={styles.welcomeSection}>
                <Heading as="h1" style={styles.heading}>
                  Welcome to Eunisell Admin
                  <br />
                  Dashboard
                </Heading>
                <Text style={styles.subtitle}>
                  Hi {firstName}, your administrative account has been successfully provisioned. You now have secure access to the industrial operations management suite.
                </Text>
              </Section>

              <Section style={styles.credentialSection}>
                <Text style={styles.credentialLabel}>🔒 Your Temporary Password</Text>

                <div style={styles.passwordBox}>
                  <Text style={styles.passwordText}>{tempPassword}</Text>
                </div>

                <div style={styles.infoBox}>
                  <Text style={styles.infoText}>
                    For institutional security, this password is valid for 24 hours. You will be required to create a permanent, high-entropy password during your first session.
                  </Text>
                </div>
              </Section>

              <Section style={styles.ctaSection}>
                <Button href={loginUrl} style={styles.ctaButton}>
                  Log In to Your Account
                </Button>
              </Section>

              <Section style={styles.imageSection}>
                <Img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop"
                  alt="Industrial operations"
                  width="534"
                  height="128"
                  style={styles.atmosphericImage}
                />
              </Section>
            </Section>
          </Container>
        </Section>

        <Section style={styles.footer}>
          <Container style={{ maxWidth: 600 }}>
            <Text style={styles.footerBrand}>EUNISELL INDUSTRIAL</Text>
            <Text style={styles.footerCopyright}>© {new Date().getFullYear()} Eunisell. All rights reserved. Industrial excellence and institutional trust.</Text>
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
    fontSize: 24,
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
    borderRadius: '4px 4px 0 0',
  } satisfies CSSProperties,

  bannerInner: {
    height: 160,
    textAlign: 'center' as const,
    verticalAlign: 'middle' as const,
  } satisfies CSSProperties,

  officialBadge: {
    display: 'inline-block',
    backgroundColor: 'rgba(0,14,36,0.65)',
    color: '#ffffff',
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    borderRadius: 12,
    padding: '4px 12px',
    marginLeft: 10,
    verticalAlign: 'middle',
  } satisfies CSSProperties,

  cardBody: {
    padding: '0 33px',
  } satisfies CSSProperties,

  welcomeSection: {
    paddingTop: 32,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  heading: {
    margin: '0 0 16px',
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '40px',
    color: accent,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  subtitle: {
    margin: 0,
    fontSize: 16,
    lineHeight: '24px',
    color: muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  credentialSection: {
    paddingTop: 24,
  } satisfies CSSProperties,

  credentialLabelRow: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    marginBottom: 12,
  } satisfies CSSProperties,

  credentialLabel: {
    margin: 0,
    fontSize: 16,
    fontWeight: 400,
    color: accent,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  passwordBox: {
    backgroundColor: '#f0f9fa',
    border: '1px dashed #74777f',
    borderRadius: 4,
    padding: 25,
    textAlign: 'center' as const,
    marginBottom: 12,
  } satisfies CSSProperties,

  passwordText: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: accent,
    letterSpacing: '2px',
    fontFamily: '"Courier New", Courier, monospace',
  } satisfies CSSProperties,

  infoBox: {
    backgroundColor: '#f1f4f6',
    border: '1px solid rgba(196,198,208,0.35)',
    borderRadius: 2,
    padding: '13px 13px 13px 16px',
  } satisfies CSSProperties,

  infoText: {
    margin: 0,
    fontSize: 14,
    lineHeight: '22px',
    color: muted,
  } satisfies CSSProperties,

  ctaSection: {
    paddingTop: 24,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  ctaButton: {
    backgroundColor: secondary,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 500,
    borderRadius: 2,
    padding: '16px 40px',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
  } satisfies CSSProperties,

  imageSection: {
    paddingTop: 24,
    paddingBottom: 33,
  } satisfies CSSProperties,

  atmosphericImage: {
    display: 'block',
    width: '100%',
    height: 128,
    objectFit: 'cover' as const,
    filter: 'grayscale(100%)',
    borderRadius: 4,
    border: '1px solid #c4c6d0',
  } satisfies CSSProperties,

  footer: {
    backgroundColor: '#f7fafc',
    borderTop: '1px solid #c4c6d0',
    padding: '48px 24px',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  footerBrand: {
    margin: '0 0 12px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase' as const,
    color: muted,
  } satisfies CSSProperties,

  footerCopyright: {
    margin: 0,
    fontSize: 14,
    lineHeight: '20px',
    color: muted,
    opacity: 0.8,
  } satisfies CSSProperties,
};

export default WelcomeEmail;
