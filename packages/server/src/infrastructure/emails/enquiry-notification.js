import { Body as h, Container as p, Head as x, Heading as T, Hr as B, Html as w, Preview as E, Section as a, Text as o } from '@react-email/components';
import { jsx as e, jsxs as r } from 'react/jsx-runtime';
var l = '#002037',
  c = '#0083ce',
  f = '#43474e',
  i = ({ label: s, value: n }) => {
    if (!n) return null;
    return r(a, { style: t.field, children: [e(o, { style: t.fieldLabel, children: s }), e(o, { style: t.fieldValue, children: n })] });
  },
  H = ({
    fullName: s,
    companyName: n,
    jobTitle: d,
    email: S,
    phone: g,
    country: b,
    serviceOfInterest: m,
    projectLocation: u,
    projectStage: y,
    subject: C,
    message: P,
    submittedAt: v,
  }) => {
    return r(w, {
      lang: 'en',
      children: [
        e(x, {}),
        r(E, { children: ['New project enquiry from ', s, ' at ', n] }),
        r(h, {
          style: t.body,
          children: [
            e(a, { style: t.nav, children: e(p, { style: t.navInner, children: e(o, { style: t.navBrand, children: 'Eunisell Production Solutions' }) }) }),
            e(a, {
              style: t.canvas,
              children: r(p, {
                style: t.card,
                children: [
                  e(a, { style: t.banner, children: e(o, { style: t.bannerText, children: 'New Project Enquiry' }) }),
                  r(a, {
                    style: t.cardBody,
                    children: [
                      r(T, { as: 'h1', style: t.heading, children: [s, ' — ', n] }),
                      r(o, { style: t.subtitle, children: ['Submitted ', v, ' via the website contact form.'] }),
                      e(B, { style: t.divider }),
                      e(i, { label: 'Full Name', value: s }),
                      e(i, { label: 'Company Name', value: n }),
                      e(i, { label: 'Job Title', value: d }),
                      e(i, { label: 'Email Address', value: S }),
                      e(i, { label: 'Phone Number', value: g }),
                      e(i, { label: 'Country', value: b }),
                      e(i, { label: 'Service of Interest', value: m }),
                      e(i, { label: 'Project Location', value: u }),
                      e(i, { label: 'Project Stage', value: y }),
                      e(i, { label: 'Subject', value: C }),
                      r(a, {
                        style: t.messageSection,
                        children: [e(o, { style: t.fieldLabel, children: 'Message' }), e('div', { style: t.messageBox, children: e(o, { style: t.messageText, children: P }) })],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e(a, {
              style: t.footer,
              children: r(p, {
                style: { maxWidth: 600 },
                children: [
                  e(o, { style: t.footerBrand, children: 'EUNISELL PRODUCTION SOLUTIONS' }),
                  e(o, { style: t.footerCopyright, children: 'This enquiry was captured automatically from the public contact form.' }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  t = {
    body: { backgroundColor: '#f7fafc', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', margin: 0, padding: 0 },
    nav: { backgroundColor: '#ffffff', borderBottom: '1px solid #c4c6d0', boxShadow: '0px 1px 1px rgba(0,0,0,0.05)' },
    navInner: { maxWidth: 600, padding: '12px 24px' },
    navBrand: { margin: 0, fontSize: 20, fontWeight: 700, color: l, letterSpacing: '-0.3px' },
    canvas: { backgroundColor: '#f7fafc', padding: '48px 24px' },
    card: { maxWidth: 600, backgroundColor: '#ffffff', border: '1px solid #d1d5db', borderRadius: 4, overflow: 'hidden', boxShadow: '0px 4px 6px -1px rgba(0,35,75,0.05)' },
    banner: { backgroundColor: l, padding: '20px 33px' },
    bannerText: { margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: c },
    cardBody: { padding: '32px 33px' },
    heading: { margin: '0 0 8px', fontSize: 22, fontWeight: 600, lineHeight: '28px', color: l },
    subtitle: { margin: 0, fontSize: 14, lineHeight: '20px', color: f },
    divider: { borderColor: '#e5e7eb', margin: '24px 0' },
    field: { marginBottom: 16 },
    fieldLabel: { margin: '0 0 2px', fontSize: 11, fontWeight: 700, letterSpacing: '0.7px', textTransform: 'uppercase', color: c },
    fieldValue: { margin: 0, fontSize: 15, lineHeight: '22px', color: l },
    messageSection: { marginTop: 8 },
    messageBox: { backgroundColor: '#f1f4f6', border: '1px solid rgba(196,198,208,0.5)', borderRadius: 4, padding: '14px 16px' },
    messageText: { margin: 0, fontSize: 14, lineHeight: '22px', color: l, whiteSpace: 'pre-wrap' },
    footer: { backgroundColor: '#f7fafc', borderTop: '1px solid #c4c6d0', padding: '32px 24px', textAlign: 'center' },
    footerBrand: { margin: '0 0 8px', fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: f },
    footerCopyright: { margin: 0, fontSize: 13, lineHeight: '18px', color: f, opacity: 0.8 },
  },
  k = H;
export { k as default };
