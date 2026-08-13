import type { CSSProperties } from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Section, Text } from '@react-email/components';

interface Props {
  firstName: string;
  loginTime: string;
  location: string;
  device: string;
  activityUrl: string;
  secureAccountUrl: string;
}

const colors = {
  accent: '#002037',
  secondary: '#0083ce',
  muted: '#43474e',
  teal: '#006970',
};

const styles = {
  body: {
    backgroundColor: '#f7fafc',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    margin: 0,
    padding: 0,
  } satisfies CSSProperties,

  wrapper: {
    maxWidth: 600,
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)',
  } satisfies CSSProperties,

  nav: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #c4c6d0',
    padding: '24px 24px 25px',
  } satisfies CSSProperties,

  navBrand: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    color: colors.accent,
    letterSpacing: '-0.3px',
  } satisfies CSSProperties,

  heroBanner: {
    background: `linear-gradient(to top, rgba(0,14,36,0.85) 0%, rgba(0,14,36,0.25) 100%), ${colors.accent}`,
    height: 192,
    padding: '0 24px',
    display: 'flex' as const,
    alignItems: 'flex-end' as const,
  } satisfies CSSProperties,

  heroHeading: {
    margin: '0 0 24px',
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '40px',
    color: '#ffffff',
  } satisfies CSSProperties,

  canvas: {
    padding: '0 24px 32px',
  } satisfies CSSProperties,

  summary: {
    margin: '32px 0 0',
    fontSize: 16,
    lineHeight: '24px',
    color: '#181c1e',
  } satisfies CSSProperties,

  detailsBlock: {
    backgroundColor: '#f1f4f6',
    border: '1px solid #c4c6d0',
    borderRadius: 2,
    padding: 25,
    marginTop: 32,
  } satisfies CSSProperties,

  detailRow: {
    borderBottom: '1px solid #c4c6d0',
    paddingBottom: 13,
    marginBottom: 16,
  } satisfies CSSProperties,

  detailRowLast: {
    paddingBottom: 0,
    marginBottom: 0,
  } satisfies CSSProperties,

  detailLabel: {
    margin: '0 0 4px',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.6px',
    color: colors.muted,
    textTransform: 'uppercase' as const,
  } satisfies CSSProperties,

  detailValue: {
    margin: 0,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '24px',
    color: colors.accent,
  } satisfies CSSProperties,

  securityChip: {
    backgroundColor: '#f0f9fa',
    border: '2px dashed rgba(0,105,112,0.35)',
    borderRadius: 4,
    padding: '26px',
    marginTop: 32,
  } satisfies CSSProperties,

  securityIcon: {
    display: 'inline-block',
    backgroundColor: colors.accent,
    color: '#ffffff',
    borderRadius: 4,
    width: 32,
    height: 32,
    lineHeight: '32px',
    textAlign: 'center' as const,
    fontSize: 16,
  } satisfies CSSProperties,

  securityTitle: {
    margin: '0 0 4px',
    fontSize: 14,
    fontWeight: 700,
    color: colors.teal,
    letterSpacing: '0.3px',
  } satisfies CSSProperties,

  securityBody: {
    margin: 0,
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
  } satisfies CSSProperties,

  actionSection: {
    padding: '24px 0 0',
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  ctaButton: {
    backgroundColor: colors.secondary,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 700,
    borderRadius: 2,
    padding: '16px 0',
    textDecoration: 'none',
    display: 'block',
    width: '100%',
    textAlign: 'center' as const,
    boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
  } satisfies CSSProperties,

  warningText: {
    margin: '24px 0 0',
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
    textAlign: 'center' as const,
  } satisfies CSSProperties,

  dangerLink: {
    color: '#ba1a1a',
    fontWeight: 700,
    textDecoration: 'underline',
  } satisfies CSSProperties,

  warningItalic: {
    margin: '8px 0 0',
    fontSize: 14,
    fontStyle: 'italic',
    lineHeight: '20px',
    color: colors.muted,
    textAlign: 'center' as const,
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
    letterSpacing: '0.6px',
    textTransform: 'uppercase' as const,
    color: colors.muted,
  } satisfies CSSProperties,

  footerNote: {
    margin: '0 0 12px',
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
  } satisfies CSSProperties,

  footerCopyright: {
    margin: 0,
    fontSize: 14,
    lineHeight: '20px',
    color: colors.muted,
  } satisfies CSSProperties,
};

const RecentLoginEmail = ({ firstName, loginTime, location, device, activityUrl, secureAccountUrl }: Props) => {
  return (
    <Html lang="en">
      <Head />
      <Preview>Security alert: a new login to your Eunisell Admin account was detected.</Preview>

      <Body style={styles.body}>
        <Container style={styles.wrapper}>
          <Section style={styles.nav}>
            <Text style={styles.navBrand}>Eunisell Admin</Text>
          </Section>

          <table width="100%" cellPadding={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td style={styles.heroBanner}>
                  <Heading as="h1" style={styles.heroHeading}>
                    Recent Login Alert
                  </Heading>
                </td>
              </tr>
            </tbody>
          </table>

          <Section style={styles.canvas}>
            <Text style={styles.summary}>
              Hi {firstName}, we noticed a new login to your <strong>Eunisell Admin</strong> account. For your security, please review the activity details below to ensure this was
              authorized by you.
            </Text>

            <div style={styles.detailsBlock}>
              <table width="100%" cellPadding={0} cellSpacing={0} style={styles.detailRow}>
                <tbody>
                  <tr>
                    <td>
                      <p style={styles.detailLabel}>DATE / TIME</p>
                      <p style={styles.detailValue}>{loginTime}</p>
                    </td>
                    <td width="24" style={{ textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }}>
                      ⏱
                    </td>
                  </tr>
                </tbody>
              </table>
              <table width="100%" cellPadding={0} cellSpacing={0} style={styles.detailRow}>
                <tbody>
                  <tr>
                    <td>
                      <p style={styles.detailLabel}>LOCATION</p>
                      <p style={styles.detailValue}>{location}</p>
                    </td>
                    <td width="24" style={{ textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }}>
                      📍
                    </td>
                  </tr>
                </tbody>
              </table>
              <table width="100%" cellPadding={0} cellSpacing={0} style={styles.detailRowLast}>
                <tbody>
                  <tr>
                    <td>
                      <p style={styles.detailLabel}>DEVICE &amp; BROWSER</p>
                      <p style={styles.detailValue}>{device}</p>
                    </td>
                    <td width="24" style={{ textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }}>
                      💻
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <table width="100%" cellPadding={0} cellSpacing={0} style={styles.securityChip}>
              <tbody>
                <tr>
                  <td width="32" style={{ verticalAlign: 'top', paddingRight: 16 }}>
                    <span style={styles.securityIcon}>ℹ</span>
                  </td>
                  <td>
                    <p style={styles.securityTitle}>SECURITY NOTICE</p>
                    <p style={styles.securityBody}>This login was recorded from an IP address not previously associated with your profile.</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <Section style={styles.actionSection}>
              <Button href={activityUrl} style={styles.ctaButton}>
                Review Account Activity
              </Button>
              <Text style={styles.warningText}>
                If this wasn't you, please{' '}
                <Link href={secureAccountUrl} style={styles.dangerLink}>
                  secure your account immediately
                </Link>
                .
              </Text>
              <Text style={styles.warningItalic}>Ignoring this notification could compromise your administrative access.</Text>
            </Section>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerBrand}>EUNISELL ADMINISTRATION</Text>
            <Text style={styles.footerNote}>This is an automated security notification from the Eunisell Admin Portal.</Text>
            <Text style={styles.footerCopyright}>© {new Date().getFullYear()} Eunisell. All rights reserved. 123 Victoria Island, Lagos, Nigeria.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default RecentLoginEmail;
