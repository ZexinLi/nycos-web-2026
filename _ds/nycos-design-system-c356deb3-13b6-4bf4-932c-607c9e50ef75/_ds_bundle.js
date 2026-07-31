/* @ds-bundle: {"format":4,"namespace":"NYCOSDesignSystem_c356de","components":[{"name":"ArchiveCard","sourcePath":"components/cards/ArchiveCard.jsx"},{"name":"EventCard","sourcePath":"components/cards/EventCard.jsx"},{"name":"ProgramCard","sourcePath":"components/cards/ProgramCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"DonationCTA","sourcePath":"components/sections/DonationCTA.jsx"},{"name":"EditorialBlock","sourcePath":"components/sections/EditorialBlock.jsx"},{"name":"HeroBanner","sourcePath":"components/sections/HeroBanner.jsx"},{"name":"Newsletter","sourcePath":"components/sections/Newsletter.jsx"}],"sourceHashes":{"components/cards/ArchiveCard.jsx":"654763ec6a38","components/cards/EventCard.jsx":"8333a57f9554","components/cards/ProgramCard.jsx":"272ceadfe5ef","components/core/Button.jsx":"ddd4d8e84144","components/core/Input.jsx":"78de795c9da7","components/core/Tag.jsx":"20697663d68a","components/navigation/Footer.jsx":"a564c8b7a4da","components/navigation/NavBar.jsx":"755bd39749af","components/sections/DonationCTA.jsx":"758a95025bab","components/sections/EditorialBlock.jsx":"6f21edded9f4","components/sections/HeroBanner.jsx":"cfd664c0ed41","components/sections/Newsletter.jsx":"666de9515324","image-slot.js":"fff26d081c8d","ui_kits/website/About.jsx":"1ecf8dcca619","ui_kits/website/Contact.jsx":"0cc8f60ab0d8","ui_kits/website/Donate.jsx":"f5e747255621","ui_kits/website/Events.jsx":"20efa0ffeb30","ui_kits/website/Home.jsx":"d3270fa84653","ui_kits/website/Performances.jsx":"fa60adc93574","ui_kits/website/Placeholder.jsx":"03c92ac1dd76","ui_kits/website/Programs.jsx":"0a3abb64f5b0","ui_kits/website/content.js":"a7b7b47e205d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NYCOSDesignSystem_c356de = window.NYCOSDesignSystem_c356de || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ArchiveCard.jsx
try { (() => {
function ArchiveCard({
  image,
  year,
  caption
}) {
  return React.createElement('figure', {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      aspectRatio: '3/4',
      overflow: 'hidden',
      background: 'var(--surface-page-alt)',
      position: 'relative'
    }
  }, image ? React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'sepia(0.25) grayscale(0.35) contrast(1.02)'
    }
  }) : null, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      boxShadow: 'inset 0 0 40px rgba(33,28,23,0.18)'
    }
  })), React.createElement('figcaption', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      color: 'var(--color-gold)'
    }
  }, year), React.createElement('span', {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, caption)));
}
Object.assign(__ds_scope, { ArchiveCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ArchiveCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/EventCard.jsx
try { (() => {
function EventCard({
  image,
  month,
  day,
  title,
  venue,
  tag,
  onClick
}) {
  return React.createElement('article', {
    onClick,
    style: {
      cursor: onClick ? 'pointer' : 'default',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      aspectRatio: '4/3',
      overflow: 'hidden',
      background: 'var(--surface-page-alt)'
    }
  }, image ? React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'var(--color-opera-red)',
      color: 'var(--text-on-accent)',
      padding: '10px 14px',
      textAlign: 'center',
      lineHeight: 1.1
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase'
    }
  }, month), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px'
    }
  }, day))), React.createElement('div', {
    style: {
      padding: '18px 4px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, tag && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, tag), React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '21px',
      fontWeight: 400,
      color: 'var(--text-primary)',
      margin: 0,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), React.createElement('span', {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, venue)));
}
Object.assign(__ds_scope, { EventCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EventCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProgramCard.jsx
try { (() => {
function ProgramCard({
  image,
  title,
  description,
  meta
}) {
  return React.createElement('article', {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      alignItems: 'flex-start',
      padding: 'var(--space-6) 0',
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      width: '140px',
      aspectRatio: '1/1',
      flexShrink: 0,
      background: 'var(--surface-page-alt)',
      overflow: 'hidden'
    }
  }, image ? React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, React.createElement('h3', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 400,
      margin: 0,
      color: 'var(--text-primary)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: '14px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: '520px'
    }
  }, description), meta && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.16em',
      color: 'var(--text-tertiary)',
      textTransform: 'uppercase'
    }
  }, meta)));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  href,
  onClick,
  disabled,
  style
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: '12px 22px',
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: '16px 30px',
      fontSize: 'var(--text-base)'
    }
  };
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    letterSpacing: 'var(--tracking-wide)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
    textDecoration: 'none',
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--accent-primary)',
      color: 'var(--text-on-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-accent)',
      padding: sizes[size].padding.split(' ')[0] + ' 0'
    },
    inverse: {
      background: 'var(--color-ivory)',
      color: 'var(--color-ink)'
    }
  };
  const hoverBg = {
    primary: 'var(--accent-primary-hover)',
    secondary: 'var(--surface-page-alt)',
    ghost: 'transparent',
    inverse: 'var(--color-gold-pale)'
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...v,
      background: hover && !disabled ? hoverBg[variant] : v.background,
      textDecoration: hover && variant === 'ghost' ? 'underline' : 'none',
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  type = 'text',
  placeholder,
  as = 'input',
  value,
  onChange,
  name,
  required
}) {
  const Field = as;
  const [focus, setFocus] = React.useState(false);
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-tertiary)'
    }
  }, label, required ? ' *' : ''), React.createElement(Field, {
    type: as === 'input' ? type : undefined,
    name,
    placeholder,
    value,
    onChange,
    required,
    rows: as === 'textarea' ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card-raised)',
      border: '1px solid ' + (focus ? 'var(--color-opera-red)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)',
      resize: as === 'textarea' ? 'vertical' : undefined
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'neutral'
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-page-alt)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--color-opera-red)',
      color: 'var(--text-on-accent)',
      border: '1px solid var(--color-opera-red)'
    },
    gold: {
      background: 'var(--color-gold-pale)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-gold-soft)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-strong)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-sm)',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const CONTENT = {
  en: {
    tagline: 'New York Chinese Opera Society is a nonprofit dedicated to the preservation and performance of the classical Chinese opera repertoire.',
    cols: [{
      title: 'Visit',
      items: ['Performances', 'Programs', 'Events', 'Archive']
    }, {
      title: 'About',
      items: ['Our Story', 'Artists', 'Press', 'Careers']
    }, {
      title: 'Support',
      items: ['Donate', 'Membership', 'Volunteer']
    }],
    legal1: '© 2026 New York Chinese Opera Society',
    legal2: '501(c)(3) Nonprofit Organization'
  },
  zh: {
    tagline: '紐約中國戲曲社是一所非營利機構，致力於中國戲曲經典劇目的保存與演出。',
    cols: [{
      title: '參觀',
      items: ['演出', '教育課程', '活動', '檔案']
    }, {
      title: '關於',
      items: ['本社故事', '演員', '媒體', '招聘']
    }, {
      title: '支持',
      items: ['捐助', '會員', '義工']
    }],
    legal1: '© 2026 紐約中國戲曲社',
    legal2: '501(c)(3) 非營利組織'
  }
};
function Footer({
  logoSrc = '../assets/logo-mark.png',
  lang = 'en'
}) {
  const t = CONTENT[lang] || CONTENT.en;
  return React.createElement('footer', {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      fontFamily: 'var(--font-body)',
      padding: 'var(--space-16) var(--gutter) var(--space-8)'
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 'var(--space-8)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, React.createElement('div', null, React.createElement('img', {
    src: logoSrc,
    style: {
      height: '38px',
      filter: 'brightness(0) invert(1)',
      opacity: 0.92,
      marginBottom: '14px'
    }
  }), React.createElement('p', {
    style: {
      fontSize: '13px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(247,244,238,0.6)',
      maxWidth: '280px'
    }
  }, t.tagline)), ...t.cols.map(col => React.createElement('div', {
    key: col.title
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-gold-soft)',
      marginBottom: '14px'
    }
  }, col.title), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, col.items.map(i => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      fontSize: '14px',
      color: 'rgba(247,244,238,0.82)',
      textDecoration: 'none'
    }
  }, i)))))), React.createElement('div', {
    style: {
      maxWidth: 'var(--content-max)',
      margin: 'var(--space-16) auto 0',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--border-inverse)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.04em',
      color: 'rgba(247,244,238,0.45)'
    }
  }, React.createElement('span', null, t.legal1), React.createElement('span', null, t.legal2)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const LINKS = [{
  en: 'About',
  zh: '關於'
}, {
  en: 'Performances',
  zh: '演出'
}, {
  en: 'Programs',
  zh: '教育'
}, {
  en: 'Events',
  zh: '活動'
}, {
  en: 'Donate',
  zh: '支持'
}, {
  en: 'Contact',
  zh: '聯絡'
}];
function NavBar({
  active = 'Home',
  lang = 'en',
  logoSrc = '../assets/logo-mark.png',
  onNavigate,
  onToggleLang
}) {
  const wordmark = lang === 'zh' ? '紐約中國戲曲社' : 'NYCOS';
  const toggle = (code, label) => React.createElement('button', {
    onClick: () => onToggleLang && onToggleLang(code),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '2px 2px',
      color: lang === code ? 'var(--text-accent)' : 'var(--text-tertiary)',
      borderBottom: lang === code ? '1px solid var(--text-accent)' : '1px solid transparent'
    }
  }, label);
  return React.createElement('header', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px var(--gutter)',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)',
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer'
    },
    onClick: () => onNavigate && onNavigate('Home')
  }, React.createElement('img', {
    src: logoSrc,
    style: {
      height: '30px'
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, wordmark)), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: '28px',
      alignItems: 'center'
    }
  }, LINKS.map(l => React.createElement('a', {
    key: l.en,
    onClick: () => onNavigate && onNavigate(l.en),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: l.en === active ? 'var(--text-accent)' : 'var(--text-primary)',
      borderBottom: l.en === active ? '1px solid var(--text-accent)' : '1px solid transparent',
      paddingBottom: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, lang === 'zh' ? l.zh : l.en))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, toggle('en', 'EN'), React.createElement('span', {
    style: {
      color: 'var(--border-strong)',
      fontSize: '11px'
    }
  }, '/'), toggle('zh', '中')));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/sections/DonationCTA.jsx
try { (() => {
function DonationCTA({
  eyebrow = 'Support NYCOS',
  title,
  description,
  cta = 'Donate Now',
  ctaHref = '#'
}) {
  return React.createElement('section', {
    style: {
      background: 'var(--surface-accent)',
      color: 'var(--text-on-accent)',
      padding: 'var(--space-24) var(--gutter)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: '680px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)'
    }
  }, eyebrow), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px,4vw,48px)',
      margin: 0,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), description && React.createElement('p', {
    style: {
      fontSize: '16px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(255,255,255,0.85)',
      margin: 0
    }
  }, description), React.createElement('a', {
    href: ctaHref,
    style: {
      marginTop: 'var(--space-4)',
      display: 'inline-flex',
      padding: '15px 32px',
      background: 'var(--color-ivory)',
      color: 'var(--color-ink)',
      fontSize: '14px',
      letterSpacing: 'var(--tracking-wide)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)'
    }
  }, cta)));
}
Object.assign(__ds_scope, { DonationCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/DonationCTA.jsx", error: String((e && e.message) || e) }); }

// components/sections/EditorialBlock.jsx
try { (() => {
function EditorialBlock({
  image,
  eyebrow,
  title,
  body,
  reverse = false,
  children
}) {
  return React.createElement('section', {
    style: {
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      gap: 'var(--space-16)',
      alignItems: 'center',
      padding: 'var(--space-24) var(--gutter)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      flex: '1 1 46%',
      aspectRatio: '4/5',
      background: 'var(--surface-page-alt)',
      overflow: 'hidden'
    }
  }, image && React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), React.createElement('div', {
    style: {
      flex: '1 1 54%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, eyebrow && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(28px,3vw,40px)',
      color: 'var(--text-primary)',
      margin: 0,
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: '16px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      maxWidth: '460px',
      margin: 0
    }
  }, body), children));
}
Object.assign(__ds_scope, { EditorialBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/EditorialBlock.jsx", error: String((e && e.message) || e) }); }

// components/sections/HeroBanner.jsx
try { (() => {
function HeroBanner({
  image,
  eyebrow,
  title,
  description,
  cta,
  ctaHref,
  height = '86vh'
}) {
  const hasImage = !!image;
  const bg = hasImage ? `linear-gradient(180deg, rgba(1,1,32,0.15) 0%, rgba(1,1,32,0.72) 100%), url(${image})` : 'radial-gradient(120% 130% at 82% 8%, rgba(200,16,46,0.5) 0%, rgba(158,12,36,0) 46%), radial-gradient(100% 120% at 100% 100%, rgba(12,70,232,0.28) 0%, rgba(1,1,32,0) 52%)';
  return React.createElement('section', {
    style: {
      position: 'relative',
      height,
      minHeight: '480px',
      display: 'flex',
      alignItems: 'flex-end',
      backgroundImage: bg,
      backgroundColor: 'var(--color-ink-deep)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'var(--font-body)',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      padding: 'var(--space-16) var(--gutter)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, eyebrow && React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--color-gold-soft)'
    }
  }, eyebrow), React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px, 6vw, 84px)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--color-paper)',
      margin: 0,
      maxWidth: '900px'
    }
  }, title), description && React.createElement('p', {
    style: {
      fontSize: '17px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'rgba(247,244,238,0.82)',
      maxWidth: '560px',
      margin: 0
    }
  }, description), cta && React.createElement('div', {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, React.createElement('a', {
    href: ctaHref || '#',
    style: {
      display: 'inline-flex',
      padding: '14px 30px',
      background: 'var(--color-opera-red)',
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: '14px',
      letterSpacing: 'var(--tracking-wide)',
      textDecoration: 'none',
      borderRadius: 'var(--radius-sm)'
    }
  }, cta))));
}
Object.assign(__ds_scope, { HeroBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/HeroBanner.jsx", error: String((e && e.message) || e) }); }

// components/sections/Newsletter.jsx
try { (() => {
function Newsletter({
  eyebrow = 'Stay in touch',
  title = 'Join our mailing list',
  description,
  placeholder = 'Email address',
  cta = 'Subscribe',
  lang = 'en',
  onSubmit,
  successText = "You're subscribed. Thank you!",
  errorText = 'Something went wrong. Please try again.'
}) {
  const [email, setEmail] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const [status, setStatus] = React.useState('idle');
  const submit = e => {
    e.preventDefault();
    if (!onSubmit || status === 'loading') return;
    setStatus('loading');
    Promise.resolve(onSubmit(email)).then(() => {
      setStatus('success');
      setEmail('');
    }).catch(() => {
      setStatus('error');
    });
  };
  return React.createElement('section', {
    style: {
      background: 'var(--surface-page-alt)',
      padding: 'var(--space-20) var(--gutter)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--content-narrow)',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, React.createElement('span', {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow), React.createElement('h2', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(26px,3vw,38px)',
      fontWeight: 400,
      margin: 0,
      color: 'var(--text-primary)',
      lineHeight: 'var(--leading-snug)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title), description && React.createElement('p', {
    style: {
      fontSize: '15px',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-secondary)',
      margin: 0,
      maxWidth: '480px'
    }
  }, description), status === 'success' ? React.createElement('p', {
    style: {
      fontSize: 'var(--text-base)',
      color: 'var(--text-accent)',
      fontWeight: 500,
      margin: 'var(--space-4) 0 0'
    }
  }, successText) : React.createElement('form', {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: 'var(--space-4)',
      width: '100%',
      maxWidth: '440px'
    }
  }, React.createElement('div', {
    style: { display: 'flex', gap: '10px', width: '100%' }
  }, React.createElement('input', {
    type: 'email',
    required: true,
    placeholder,
    value: email,
    disabled: status === 'loading',
    onChange: e => setEmail(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      font: 'inherit',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card-raised)',
      border: '1px solid ' + (focus ? 'var(--color-opera-red)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-sm)',
      padding: '13px 15px',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }), React.createElement('button', {
    type: 'submit',
    disabled: status === 'loading',
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-wide)',
      background: 'var(--accent-primary)',
      color: 'var(--text-on-accent)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 26px',
      cursor: status === 'loading' ? 'default' : 'pointer',
      opacity: status === 'loading' ? 0.7 : 1,
      whiteSpace: 'nowrap'
    }
  }, status === 'loading' ? '…' : cta)), status === 'error' && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--accent-primary)',
      textAlign: 'left'
    }
  }, errorText))));
}
Object.assign(__ds_scope, { Newsletter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Newsletter.jsx", error: String((e && e.message) || e) }); }

// image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function AboutScreen({
  nav,
  lang
}) {
  const {
    EditorialBlock,
    DonationCTA
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const a = C.about;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-y) var(--gutter) var(--space-16)',
      maxWidth: 'var(--content-narrow)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eb
  }, a.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'clamp(36px,5vw,60px)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text-primary)'
      },
      margin: '14px 0 0'
    }
  }, a.title)), /*#__PURE__*/React.createElement(EditorialBlock, {
    eyebrow: a.b1e,
    title: a.b1t,
    body: a.b1b
  }), /*#__PURE__*/React.createElement(EditorialBlock, {
    reverse: true,
    eyebrow: a.b2e,
    title: a.b2t,
    body: a.b2b
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--gutter) var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '30px',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-8)'
    }
  }, a.boardTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, a.board.map(person => /*#__PURE__*/React.createElement("div", {
    key: person,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(window.Ph, {
    ratio: "1/1",
    label: "Portrait"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--text-secondary)'
    }
  }, person))))), /*#__PURE__*/React.createElement(DonationCTA, {
    title: a.donateTitle,
    description: a.donateDesc,
    cta: a.donateCta
  }));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
function ContactScreen({
  nav,
  lang
}) {
  const {
    Input,
    Button
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const c = C.contact;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: eb
  }, c.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px,4vw,48px)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '10px 0 var(--space-8)',
      color: 'var(--text-primary)'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      fontSize: '14px',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, c.studioLabel), /*#__PURE__*/React.createElement("br", null), c.address), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, c.emailLabel), /*#__PURE__*/React.createElement("br", null), "info@nycos.org"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, c.phoneLabel), /*#__PURE__*/React.createElement("br", null), "(212) 555-0142"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-card)',
      borderRadius: 'var(--radius-md)'
    }
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '20px',
      color: 'var(--text-primary)'
    }
  }, c.thanks) : /*#__PURE__*/React.createElement("form", {
    onSubmit: ev => {
      ev.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: c.fName,
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: c.fEmail,
    type: "email",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: c.fMsg,
    as: "textarea",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      justifyContent: 'center'
    }
  }, c.send))));
}
window.ContactScreen = ContactScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Donate.jsx
try { (() => {
function DonateScreen({
  nav,
  lang
}) {
  const {
    Button
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const d = C.donate;
  const [amount, setAmount] = React.useState(100);
  const tiers = [50, 100, 250, 500];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: 'var(--section-y) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-gold-soft)'
    }
  }, d.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,60px)',
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '14px 0 0'
    }
  }, d.title), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '540px',
      margin: '16px auto 0',
      color: 'rgba(247,244,238,0.75)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, d.desc)), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: '540px',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '10px'
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setAmount(t),
    style: {
      padding: '16px 0',
      fontFamily: 'var(--font-display)',
      fontSize: '18px',
      border: '1px solid ' + (amount === t ? 'var(--color-opera-red)' : 'var(--border-strong)'),
      background: amount === t ? 'var(--color-opera-red)' : 'transparent',
      color: amount === t ? '#fff' : 'var(--text-primary)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer'
    }
  }, "$", t))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    style: {
      justifyContent: 'center'
    }
  }, d.give, " $", amount), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.04em',
      color: 'var(--text-tertiary)',
      textAlign: 'center',
      lineHeight: 1.6
    }
  }, d.note)));
}
window.DonateScreen = DonateScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Donate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Events.jsx
try { (() => {
function EventsScreen({
  nav,
  lang
}) {
  const {
    Tag
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const e = C.events;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eb
  }, e.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'clamp(36px,5vw,60px)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text-primary)'
      },
      margin: '10px 0 var(--space-10)'
    }
  }, e.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 'var(--space-20)'
    }
  }, e.community.map(ev => /*#__PURE__*/React.createElement("div", {
    key: ev.title,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'var(--space-5) 0',
      borderTop: '1px solid var(--border-subtle)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '21px',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, ev.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)'
    }
  }, ev.venue)), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, ev.date)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '28px',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      marginBottom: 'var(--space-8)'
    }
  }, e.archiveTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, e.archive.map(ar => /*#__PURE__*/React.createElement("figure", {
    key: ar.year,
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(window.Ph, {
    ratio: "3/4",
    label: "Archival photo",
    tone: "var(--color-paper-soft)"
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '0.1em',
      color: 'var(--color-gold)'
    }
  }, ar.year), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--text-secondary)',
      lineHeight: 'var(--leading-snug)'
    }
  }, ar.caption))))));
}
window.EventsScreen = EventsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Events.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function HomeScreen({
  nav,
  lang
}) {
  const {
    HeroBanner,
    DonationCTA,
    EditorialBlock,
    EventCard,
    Newsletter
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const h = C.home;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBanner, {
    eyebrow: h.heroEyebrow,
    title: h.heroTitle,
    description: h.heroDesc,
    cta: h.heroCta,
    height: "640px"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '32px',
      margin: 0,
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)'
    }
  }, h.upcoming), /*#__PURE__*/React.createElement("a", {
    onClick: () => nav('Performances'),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      cursor: 'pointer'
    }
  }, h.viewAll)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, C.performances.shows.slice(0, 3).map(e => /*#__PURE__*/React.createElement(EventCard, {
    key: e.title,
    month: e.month,
    day: e.day,
    tag: e.tag,
    title: e.title,
    venue: e.venue,
    onClick: () => nav('Performances')
  })))), /*#__PURE__*/React.createElement(EditorialBlock, {
    eyebrow: h.missionEyebrow,
    title: h.missionTitle,
    body: h.missionBody
  }), /*#__PURE__*/React.createElement(DonationCTA, {
    title: h.donateTitle,
    description: h.donateDesc,
    cta: h.donateCta
  }), /*#__PURE__*/React.createElement(Newsletter, {
    eyebrow: h.nlEyebrow,
    title: h.nlTitle,
    description: h.nlDesc,
    cta: h.nlCta,
    placeholder: h.nlPlaceholder,
    lang: lang
  }));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Performances.jsx
try { (() => {
function PerformancesScreen({
  nav,
  lang
}) {
  const {
    EventCard,
    Tag
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const p = C.performances;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  const [filter, setFilter] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eb
  }, p.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'clamp(36px,5vw,60px)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text-primary)'
      },
      margin: '10px 0 var(--space-8)'
    }
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      marginBottom: 'var(--space-12)',
      flexWrap: 'wrap'
    }
  }, p.filters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f,
    onClick: () => setFilter(i),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: i === filter ? 'accent' : 'outline'
  }, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      columnGap: 'var(--space-8)',
      rowGap: 'var(--space-12)'
    }
  }, p.shows.map(s => /*#__PURE__*/React.createElement(EventCard, {
    key: s.title,
    month: s.month,
    day: s.day,
    tag: s.tag,
    title: s.title,
    venue: s.venue,
    onClick: () => {}
  }))));
}
window.PerformancesScreen = PerformancesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Performances.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Placeholder.jsx
try { (() => {
function Ph({
  ratio = '16/9',
  label,
  tone = 'var(--surface-page-alt)'
}) {
  return React.createElement('div', {
    style: {
      aspectRatio: ratio,
      background: tone,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)',
      fontFamily: 'var(--font-mono)',
      fontSize: '10px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      width: '100%',
      height: '100%'
    }
  }, label || 'Image');
}
window.Ph = Ph;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Placeholder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
function ProgramsScreen({
  nav,
  lang
}) {
  const {
    ProgramCard,
    DonationCTA
  } = window.NYCOSDesignSystem_c356de;
  const C = window.NYCOS_CONTENT[lang];
  const p = C.programs;
  const eb = {
    fontFamily: 'var(--font-mono)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: 'var(--text-accent)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eb
  }, p.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: 'clamp(36px,5vw,60px)',
        lineHeight: 'var(--leading-tight)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--text-primary)'
      },
      margin: '10px 0 var(--space-6)'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-md)',
      color: 'var(--text-secondary)',
      maxWidth: '600px',
      lineHeight: 'var(--leading-relaxed)',
      marginBottom: 'var(--space-10)'
    }
  }, p.intro), /*#__PURE__*/React.createElement("div", null, p.items.map(it => /*#__PURE__*/React.createElement(ProgramCard, {
    key: it.title,
    title: it.title,
    description: it.description,
    meta: it.meta
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--section-y)'
    }
  }, /*#__PURE__*/React.createElement(DonationCTA, {
    title: p.ctaTitle,
    description: p.ctaDesc,
    cta: p.ctaCta
  })));
}
window.ProgramsScreen = ProgramsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/content.js
try { (() => {
// Bilingual content for the NYCOS unified site. window.NYCOS_CONTENT[lang]
window.NYCOS_CONTENT = {
  en: {
    home: {
      heroEyebrow: '2026 Season',
      heroTitle: 'Voices Across Centuries',
      heroDesc: "A season of classical Kunqu and Cantonese opera performed by NYCOS's resident company.",
      heroCta: 'See Full Season',
      upcoming: 'Upcoming Performances',
      viewAll: 'View all →',
      missionEyebrow: 'Our Mission',
      missionTitle: 'Preserving a 600-Year-Old Art Form',
      missionBody: "Founded in 1979 in Manhattan's Chinatown, NYCOS trains performers, stages full productions, and maintains an archive of recordings, costumes, and scores documenting Chinese opera's living tradition in New York.",
      donateTitle: 'Help Preserve a Living Art Form',
      donateDesc: 'Your gift supports performances, training, and archival preservation.',
      donateCta: 'Donate Now',
      nlEyebrow: 'Stay in touch',
      nlTitle: 'Join our mailing list',
      nlDesc: 'Season announcements, ticket presales, and stories from the archive — a few times a year.',
      nlCta: 'Subscribe',
      nlPlaceholder: 'Email address'
    },
    performances: {
      eyebrow: '2026 Season',
      title: 'Performances',
      filters: ['All', 'Kunqu', 'Cantonese', 'Peking', 'Family'],
      shows: [{
        month: 'SEP',
        day: '14',
        tag: 'Kunqu Opera',
        title: 'The Peony Pavilion',
        venue: 'Lincoln Center, NYC'
      }, {
        month: 'OCT',
        day: '02',
        tag: 'Cantonese Opera',
        title: 'The Purple Hairpin',
        venue: 'Flushing Town Hall'
      }, {
        month: 'OCT',
        day: '18',
        tag: 'Peking Opera',
        title: 'Farewell My Concubine',
        venue: 'NYCOS Studio, Chinatown'
      }, {
        month: 'NOV',
        day: '08',
        tag: 'Kunqu Opera',
        title: 'The Peach Blossom Fan',
        venue: 'Symphony Space'
      }, {
        month: 'NOV',
        day: '21',
        tag: 'Family Program',
        title: 'Faces of Opera: A Family Matinee',
        venue: 'NYCOS Studio, Chinatown'
      }, {
        month: 'DEC',
        day: '05',
        tag: 'Cantonese Opera',
        title: 'Princess Changping',
        venue: 'Lincoln Center, NYC'
      }],
      tickets: 'Tickets'
    },
    programs: {
      eyebrow: 'Education',
      title: 'Programs',
      intro: 'NYCOS trains the next generation of performers and audiences through year-round classes, workshops, and school partnerships.',
      items: [{
        title: 'Youth Vocal Training',
        description: 'Weekly instruction in traditional Kunqu vocal technique for young performers.',
        meta: 'Ages 8–17 · Saturdays'
      }, {
        title: 'Adult Performance Workshop',
        description: 'A season-long workshop culminating in a public studio showing.',
        meta: 'Adults · Tuesday evenings'
      }, {
        title: 'Opera in the Schools',
        description: 'In-classroom lecture-demonstrations bringing opera history to NYC public schools.',
        meta: 'K–12 · By request'
      }, {
        title: 'Master Class Series',
        description: 'Visiting master performers lead intensive technique intensives for advanced students.',
        meta: 'Advanced · Quarterly'
      }],
      ctaTitle: "Sponsor a Student's Training",
      ctaDesc: 'Scholarship gifts open apprenticeship to students who could not otherwise afford it.',
      ctaCta: 'Give to Education'
    },
    about: {
      eyebrow: 'About NYCOS',
      title: 'A Living Archive of Chinese Opera in New York',
      b1e: 'Our History',
      b1t: 'Founded in Chinatown, 1979',
      b1b: 'NYCOS began as a small gathering of amateur performers rehearsing in a Mott Street community hall. Nearly five decades later, the Society trains a resident company, stages full productions across the city, and safeguards one of the largest Chinese opera archives outside Asia.',
      b2e: 'Our Artists',
      b2t: 'A Company Built on Apprenticeship',
      b2b: 'Performers train for years under master teachers in voice, movement, and the specific vocabularies of Kunqu, Cantonese, and Peking opera traditions before joining the resident stage company.',
      boardTitle: 'Board & Staff',
      board: ['Wei Chen, Artistic Director', 'Mei-Ling Zhou, Executive Director', 'David Park, Board Chair', 'Anna Liu, Education Director'],
      donateTitle: 'Support the Next Generation of Performers',
      donateDesc: 'Membership and gifts directly fund training and apprenticeships.',
      donateCta: 'Become a Member'
    },
    events: {
      eyebrow: 'Community',
      title: 'Events',
      community: [{
        title: 'Lunar New Year Gala',
        date: 'Feb 8, 2026',
        venue: 'Museum of Chinese in America'
      }, {
        title: 'Open Rehearsal Night',
        date: 'Mar 12, 2026',
        venue: 'NYCOS Studio, Chinatown'
      }, {
        title: 'Archive Reading Room Open House',
        date: 'Apr 25, 2026',
        venue: 'NYCOS Studio, Chinatown'
      }],
      archiveTitle: 'From the Archive',
      archive: [{
        year: '1987',
        caption: 'Founding gala, Chinatown Community Hall'
      }, {
        year: '1996',
        caption: 'First Lincoln Center co-production'
      }, {
        year: '2008',
        caption: 'Touring company, Beijing exchange'
      }]
    },
    donate: {
      eyebrow: 'Support NYCOS',
      title: 'Help Preserve a Living Art Form',
      desc: 'Your gift funds performances, apprenticeships, and the preservation of one of the largest Chinese opera archives outside Asia.',
      give: 'Give',
      note: 'NYCOS is a 501(c)(3) nonprofit organization. Gifts are tax-deductible.'
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Get in Touch',
      studioLabel: 'Studio',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      address: '88 Mott Street, New York, NY 10013',
      fName: 'Full Name',
      fEmail: 'Email',
      fMsg: 'Message',
      send: 'Send Message',
      thanks: "Thank you — we'll be in touch shortly."
    },
    footer: {
      tagline: 'New York Chinese Opera Society is a nonprofit dedicated to the preservation and performance of the classical Chinese opera repertoire.',
      cols: [{
        title: 'Visit',
        items: ['Performances', 'Programs', 'Events', 'Archive']
      }, {
        title: 'About',
        items: ['Our Story', 'Artists', 'Press', 'Careers']
      }, {
        title: 'Support',
        items: ['Donate', 'Membership', 'Volunteer']
      }],
      legal1: '© 2026 New York Chinese Opera Society',
      legal2: '501(c)(3) Nonprofit Organization'
    }
  },
  zh: {
    home: {
      heroEyebrow: '2026 演出季',
      heroTitle: '跨越世紀的聲腔',
      heroDesc: '紐約中國戲曲社常駐劇團帶來崑曲與粵劇經典的完整演出季。',
      heroCta: '瀏覽整季演出',
      upcoming: '近期演出',
      viewAll: '查看全部 →',
      missionEyebrow: '我們的使命',
      missionTitle: '守護六百年的藝術傳統',
      missionBody: '戲曲社於一九七九年創立於曼哈頓華埠，培訓演員、製作全本大戲，並保存錄音、戲服與曲譜的檔案，記錄中國戲曲在紐約的活態傳承。',
      donateTitle: '共同守護活態藝術',
      donateDesc: '您的捐助支持演出、培訓與檔案保存。',
      donateCta: '立即捐助',
      nlEyebrow: '保持聯繫',
      nlTitle: '訂閱電子通訊',
      nlDesc: '演出季公告、門票預售與檔案故事，每年數期。',
      nlCta: '訂閱',
      nlPlaceholder: '電子郵件地址'
    },
    performances: {
      eyebrow: '2026 演出季',
      title: '演出',
      filters: ['全部', '崑曲', '粵劇', '京劇', '家庭專場'],
      shows: [{
        month: '九月',
        day: '14',
        tag: '崑曲',
        title: '牡丹亭',
        venue: '林肯中心'
      }, {
        month: '十月',
        day: '02',
        tag: '粵劇',
        title: '紫釵記',
        venue: '法拉盛市政廳'
      }, {
        month: '十月',
        day: '18',
        tag: '京劇',
        title: '霸王別姬',
        venue: '華埠戲曲社工作室'
      }, {
        month: '十一月',
        day: '08',
        tag: '崑曲',
        title: '桃花扇',
        venue: '交響空間劇場'
      }, {
        month: '十一月',
        day: '21',
        tag: '家庭專場',
        title: '戲曲臉譜：家庭日場',
        venue: '華埠戲曲社工作室'
      }, {
        month: '十二月',
        day: '05',
        tag: '粵劇',
        title: '帝女花',
        venue: '林肯中心'
      }],
      tickets: '購票'
    },
    programs: {
      eyebrow: '教育',
      title: '教育課程',
      intro: '戲曲社透過全年課程、工作坊與學校合作，培養新一代的演員與觀眾。',
      items: [{
        title: '青少年唱腔培訓',
        description: '為年輕演員開設的崑曲傳統唱腔每週課程。',
        meta: '八至十七歲 · 週六'
      }, {
        title: '成人表演工作坊',
        description: '為期一季的工作坊，以公開的工作室演出作結。',
        meta: '成人 · 週二晚間'
      }, {
        title: '戲曲進校園',
        description: '走進課堂的講演示範，將戲曲歷史帶入紐約公立學校。',
        meta: 'K–12 · 預約制'
      }, {
        title: '大師班系列',
        description: '客座名家為進階學員主持密集技藝研習。',
        meta: '進階 · 每季一次'
      }],
      ctaTitle: '資助學員培訓',
      ctaDesc: '獎學金捐助讓無力負擔的學員得以入門學藝。',
      ctaCta: '捐助教育'
    },
    about: {
      eyebrow: '關於戲曲社',
      title: '紐約中國戲曲的活態檔案',
      b1e: '歷史沿革',
      b1t: '一九七九年創立於華埠',
      b1b: '戲曲社最初只是一群業餘演員在勿街社區禮堂排練的小聚會。近五十年後，戲曲社培訓常駐劇團、於全城製作全本大戲，並守護著亞洲以外規模最大的中國戲曲檔案之一。',
      b2e: '我們的演員',
      b2t: '以師徒傳承立團',
      b2b: '演員需在名師門下研習聲腔、身段，以及崑曲、粵劇、京劇各自的特定程式多年，方能加入常駐舞台劇團。',
      boardTitle: '理事會與團隊',
      board: ['陳威　藝術總監', '周美玲　執行總監', '朴大衛　理事會主席', '劉安娜　教育總監'],
      donateTitle: '支持新一代演員',
      donateDesc: '會員與捐助直接資助培訓與師徒傳承。',
      donateCta: '成為會員'
    },
    events: {
      eyebrow: '社區',
      title: '活動',
      community: [{
        title: '農曆新年晚會',
        date: '2026年2月8日',
        venue: '美國華人博物館'
      }, {
        title: '公開排練之夜',
        date: '2026年3月12日',
        venue: '華埠戲曲社工作室'
      }, {
        title: '檔案閱覽室開放日',
        date: '2026年4月25日',
        venue: '華埠戲曲社工作室'
      }],
      archiveTitle: '檔案掠影',
      archive: [{
        year: '1987',
        caption: '創社晚會，華埠社區禮堂'
      }, {
        year: '1996',
        caption: '首度與林肯中心合作製作'
      }, {
        year: '2008',
        caption: '巡演劇團，北京交流'
      }]
    },
    donate: {
      eyebrow: '支持戲曲社',
      title: '共同守護活態藝術',
      desc: '您的捐助支持演出、師徒傳承，以及亞洲以外規模最大的中國戲曲檔案之一的保存。',
      give: '捐助',
      note: '戲曲社為 501(c)(3) 非營利組織，捐款可抵稅。'
    },
    contact: {
      eyebrow: '聯絡',
      title: '與我們聯繫',
      studioLabel: '工作室',
      emailLabel: '電子郵件',
      phoneLabel: '電話',
      address: '紐約市勿街88號，郵編 10013',
      fName: '姓名',
      fEmail: '電子郵件',
      fMsg: '留言',
      send: '送出訊息',
      thanks: '感謝您 — 我們將盡快與您聯繫。'
    },
    footer: {
      tagline: '紐約中國戲曲社是一所非營利機構，致力於中國戲曲經典劇目的保存與演出。',
      cols: [{
        title: '參觀',
        items: ['演出', '教育課程', '活動', '檔案']
      }, {
        title: '關於',
        items: ['本社故事', '演員', '媒體', '招聘']
      }, {
        title: '支持',
        items: ['捐助', '會員', '義工']
      }],
      legal1: '© 2026 紐約中國戲曲社',
      legal2: '501(c)(3) 非營利組織'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/content.js", error: String((e && e.message) || e) }); }

__ds_ns.ArchiveCard = __ds_scope.ArchiveCard;

__ds_ns.EventCard = __ds_scope.EventCard;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.DonationCTA = __ds_scope.DonationCTA;

__ds_ns.EditorialBlock = __ds_scope.EditorialBlock;

__ds_ns.HeroBanner = __ds_scope.HeroBanner;

__ds_ns.Newsletter = __ds_scope.Newsletter;

})();
