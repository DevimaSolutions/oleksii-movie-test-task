import Script from 'next/script';
import { useMemo } from 'react';

import { fonts, theme } from '@/constants';
import { envUtil } from '@/utils';

import type { IHtmlHeadProps } from './types';

const defaultMeta: IHtmlHeadProps['meta'] = [
  { name: 'theme-color', content: theme.palette.primary.main },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { name: 'robots', content: 'index, follow' },
];
const defaultLinks: IHtmlHeadProps['link'] = [
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon shortcut', href: '/favicon.ico' },
  { rel: 'apple-touch-icon', href: '/favicon.ico' },
];
const { appName } = envUtil.getEnv();

const useHtmlHead = ({ title, rawTitle, base, style, link, meta, script }: IHtmlHeadProps) => {
  const renderTitle = useMemo(() => {
    if (rawTitle) {
      return rawTitle;
    }
    return title ? `${title} - ${appName}` : appName;
  }, [rawTitle, title]);

  const composedMeta = useMemo(() => {
    if (!meta) {
      return defaultMeta;
    }

    return [
      ...defaultMeta.filter(
        (defaultProps) => !meta.some((props) => props?.name === defaultProps?.name),
      ),
      ...meta,
    ];
  }, [meta]);

  const composedLinks = useMemo(() => {
    if (!link) {
      return defaultLinks;
    }

    return [
      ...defaultLinks.filter(
        (defaultProps) =>
          !link.some((props) => props.rel === defaultProps.rel && props.href === props.href),
      ),
      ...link,
    ];
  }, [link]);

  const headItems = useMemo(() => {
    const list = [<title key="title">{renderTitle}</title>];
    if (base) {
      list.push(<base {...base} />);
    }
    if (composedMeta) {
      list.push(...composedMeta.map((props) => <meta key={props?.name} {...props} />));
    }
    if (composedLinks) {
      list.push(
        ...composedLinks.map((props) => <link key={`${props.rel}-${props.href}`} {...props} />),
      );
    }
    if (style) {
      list.push(
        ...style.map(({ media, type, children }, index) => (
          <style key={index} media={media} type={type}>
            {children}
          </style>
        )),
      );
    }
    if (script) {
      list.push(...script.map(({ id, ...props }) => <Script key={id} id={id} {...props} />));
    }
    list.push(
      ...fonts.map((font, idx) => (
        <link
          key={idx}
          rel="preload"
          href={font.font}
          as="font"
          crossOrigin=""
          type={`font/${font.type}`}
        />
      )),
    );
    list.push(
      ...fonts.map((font, idx) => (
        <style key={idx}>
          {`@font-face {
              font-family: ${font.fontFamily};
              font-style: ${font.fontStyle};
              font-display: ${font.fontDisplay};
              font-weight: ${font.fontWeight};
               src: ${font.src};
             }`}
        </style>
      )),
    );
    return list;
  }, [renderTitle, base, composedMeta, composedLinks, style, script]);

  return headItems;
};

export default useHtmlHead;
