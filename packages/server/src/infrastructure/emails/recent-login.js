import { Body as g, Button as f, Container as S, Head as y, Heading as u, Html as m, Link as h, Preview as b, Section as a, Text as r } from '@react-email/components';
import { jsx as t, jsxs as i } from 'react/jsx-runtime';
var o = { accent: '#002037', secondary: '#0083ce', muted: '#43474e', teal: '#006970' },
  e = {
    body: { backgroundColor: '#f7fafc', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', margin: 0, padding: 0 },
    wrapper: { maxWidth: 600, backgroundColor: '#ffffff', boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)' },
    nav: { backgroundColor: '#ffffff', borderBottom: '1px solid #c4c6d0', padding: '24px 24px 25px' },
    navBrand: { margin: 0, fontSize: 24, fontWeight: 700, color: o.accent, letterSpacing: '-0.3px' },
    heroBanner: {
      background: `linear-gradient(to top, rgba(0,14,36,0.85) 0%, rgba(0,14,36,0.25) 100%), ${o.accent}`,
      height: 192,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'flex-end',
    },
    heroHeading: { margin: '0 0 24px', fontSize: 32, fontWeight: 600, lineHeight: '40px', color: '#ffffff' },
    canvas: { padding: '0 24px 32px' },
    summary: { margin: '32px 0 0', fontSize: 16, lineHeight: '24px', color: '#181c1e' },
    detailsBlock: { backgroundColor: '#f1f4f6', border: '1px solid #c4c6d0', borderRadius: 2, padding: 25, marginTop: 32 },
    detailRow: { borderBottom: '1px solid #c4c6d0', paddingBottom: 13, marginBottom: 16 },
    detailRowLast: { paddingBottom: 0, marginBottom: 0 },
    detailLabel: { margin: '0 0 4px', fontSize: 12, fontWeight: 700, letterSpacing: '0.6px', color: o.muted, textTransform: 'uppercase' },
    detailValue: { margin: 0, fontSize: 18, fontWeight: 600, lineHeight: '24px', color: o.accent },
    securityChip: { backgroundColor: '#f0f9fa', border: '2px dashed rgba(0,105,112,0.35)', borderRadius: 4, padding: '26px', marginTop: 32 },
    securityIcon: {
      display: 'inline-block',
      backgroundColor: o.accent,
      color: '#ffffff',
      borderRadius: 4,
      width: 32,
      height: 32,
      lineHeight: '32px',
      textAlign: 'center',
      fontSize: 16,
    },
    securityTitle: { margin: '0 0 4px', fontSize: 14, fontWeight: 700, color: o.teal, letterSpacing: '0.3px' },
    securityBody: { margin: 0, fontSize: 14, lineHeight: '20px', color: o.muted },
    actionSection: { padding: '24px 0 0', textAlign: 'center' },
    ctaButton: {
      backgroundColor: o.secondary,
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 700,
      borderRadius: 2,
      padding: '16px 0',
      textDecoration: 'none',
      display: 'block',
      width: '100%',
      textAlign: 'center',
      boxShadow: '0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)',
    },
    warningText: { margin: '24px 0 0', fontSize: 14, lineHeight: '20px', color: o.muted, textAlign: 'center' },
    dangerLink: { color: '#ba1a1a', fontWeight: 700, textDecoration: 'underline' },
    warningItalic: { margin: '8px 0 0', fontSize: 14, fontStyle: 'italic', lineHeight: '20px', color: o.muted, textAlign: 'center' },
    footer: { backgroundColor: '#f7fafc', borderTop: '1px solid #c4c6d0', padding: '48px 24px', textAlign: 'center' },
    footerBrand: { margin: '0 0 12px', fontSize: 12, fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: o.muted },
    footerNote: { margin: '0 0 12px', fontSize: 14, lineHeight: '20px', color: o.muted },
    footerCopyright: { margin: 0, fontSize: 14, lineHeight: '20px', color: o.muted },
  },
  C = ({ firstName: n, loginTime: l, location: d, device: s, activityUrl: c, secureAccountUrl: p }) => {
    return i(m, {
      lang: 'en',
      children: [
        t(y, {}),
        t(b, { children: 'Security alert: a new login to your Eunisell Admin account was detected.' }),
        t(g, {
          style: e.body,
          children: i(S, {
            style: e.wrapper,
            children: [
              t(a, { style: e.nav, children: t(r, { style: e.navBrand, children: 'Eunisell Admin' }) }),
              t('table', {
                width: '100%',
                cellPadding: 0,
                cellSpacing: 0,
                children: t('tbody', {
                  children: t('tr', { children: t('td', { style: e.heroBanner, children: t(u, { as: 'h1', style: e.heroHeading, children: 'Recent Login Alert' }) }) }),
                }),
              }),
              i(a, {
                style: e.canvas,
                children: [
                  i(r, {
                    style: e.summary,
                    children: [
                      'Hi ',
                      n,
                      ', we noticed a new login to your ',
                      t('strong', { children: 'Eunisell Admin' }),
                      ' account. For your security, please review the activity details below to ensure this was authorized by you.',
                    ],
                  }),
                  i('div', {
                    style: e.detailsBlock,
                    children: [
                      t('table', {
                        width: '100%',
                        cellPadding: 0,
                        cellSpacing: 0,
                        style: e.detailRow,
                        children: t('tbody', {
                          children: i('tr', {
                            children: [
                              i('td', { children: [t('p', { style: e.detailLabel, children: 'DATE / TIME' }), t('p', { style: e.detailValue, children: l })] }),
                              t('td', { width: '24', style: { textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }, children: '⏱' }),
                            ],
                          }),
                        }),
                      }),
                      t('table', {
                        width: '100%',
                        cellPadding: 0,
                        cellSpacing: 0,
                        style: e.detailRow,
                        children: t('tbody', {
                          children: i('tr', {
                            children: [
                              i('td', { children: [t('p', { style: e.detailLabel, children: 'LOCATION' }), t('p', { style: e.detailValue, children: d })] }),
                              t('td', { width: '24', style: { textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }, children: '\uD83D\uDCCD' }),
                            ],
                          }),
                        }),
                      }),
                      t('table', {
                        width: '100%',
                        cellPadding: 0,
                        cellSpacing: 0,
                        style: e.detailRowLast,
                        children: t('tbody', {
                          children: i('tr', {
                            children: [
                              i('td', { children: [t('p', { style: e.detailLabel, children: 'DEVICE & BROWSER' }), t('p', { style: e.detailValue, children: s })] }),
                              t('td', { width: '24', style: { textAlign: 'right', verticalAlign: 'middle', fontSize: 18 }, children: '\uD83D\uDCBB' }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  t('table', {
                    width: '100%',
                    cellPadding: 0,
                    cellSpacing: 0,
                    style: e.securityChip,
                    children: t('tbody', {
                      children: i('tr', {
                        children: [
                          t('td', { width: '32', style: { verticalAlign: 'top', paddingRight: 16 }, children: t('span', { style: e.securityIcon, children: 'ℹ' }) }),
                          i('td', {
                            children: [
                              t('p', { style: e.securityTitle, children: 'SECURITY NOTICE' }),
                              t('p', { style: e.securityBody, children: 'This login was recorded from an IP address not previously associated with your profile.' }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  i(a, {
                    style: e.actionSection,
                    children: [
                      t(f, { href: c, style: e.ctaButton, children: 'Review Account Activity' }),
                      i(r, {
                        style: e.warningText,
                        children: ["If this wasn't you, please", ' ', t(h, { href: p, style: e.dangerLink, children: 'secure your account immediately' }), '.'],
                      }),
                      t(r, { style: e.warningItalic, children: 'Ignoring this notification could compromise your administrative access.' }),
                    ],
                  }),
                ],
              }),
              i(a, {
                style: e.footer,
                children: [
                  t(r, { style: e.footerBrand, children: 'EUNISELL ADMINISTRATION' }),
                  t(r, { style: e.footerNote, children: 'This is an automated security notification from the Eunisell Admin Portal.' }),
                  i(r, { style: e.footerCopyright, children: ['© ', new Date().getFullYear(), ' Eunisell. All rights reserved. 123 Victoria Island, Lagos, Nigeria.'] }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  T = C;
export { T as default };
