import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { getRatio } from './utils';

interface ImageProps {
  alt?: string;
  afterLoad?: () => void;
  beforeLoad?: () => void;
  delayMethod?: string;
  delayTime?: number;
  disabledEffect?: boolean;
  effect?: string;
  overlay?: string;
  ratio?: '4/3' | '3/4' | '6/4' | '4/6' | '16/9' | '9/16' | '21/9' | '9/21' | '1/1';
  scrollPosition?: { x: number; y: number };
  src?: string;
  sx?: React.CSSProperties;
  threshold?: number;
  useIntersectionObserver?: boolean;
  visibleByDefault?: boolean;
  wrapperClassName?: string;
  wrapperProps?: React.HTMLProps<HTMLDivElement>;
  placeholder?: React.ReactElement;
}

const Image = forwardRef<HTMLSpanElement, ImageProps>(
  (
    {
      ratio,
      overlay,
      disabledEffect = false,
      alt,
      src,
      afterLoad,
      delayTime,
      threshold,
      beforeLoad,
      delayMethod,
      placeholder,
      wrapperProps,
      scrollPosition,
      effect = 'blur',
      visibleByDefault,
      wrapperClassName,
      useIntersectionObserver,
      sx,
      ...other
    },
    ref
  ) => {
    const theme = useTheme();

    const overlayStyles = !!overlay && {
      '&:before': {
        content: "''",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        zIndex: 1,
        position: 'absolute',
        background: overlay || alpha(theme.palette.grey[900], 0.48),
      },
    };

    const content = (
      <Box
        component={LazyLoadImage}
        alt={alt}
        src={src}
        afterLoad={afterLoad}
        delayTime={delayTime}
        threshold={threshold}
        beforeLoad={beforeLoad}
        delayMethod={delayMethod}
        placeholder={placeholder}
        wrapperProps={wrapperProps}
        scrollPosition={scrollPosition}
        visibleByDefault={visibleByDefault}
        effect={disabledEffect ? undefined : effect}
        useIntersectionObserver={useIntersectionObserver}
        wrapperClassName={wrapperClassName || 'component-image-wrapper'}
        placeholderSrc={disabledEffect ? '/assets/transparent.png' : '/assets/placeholder.svg'}
        sx={{
          width: 1,
          height: 1,
          objectFit: 'cover',
          verticalAlign: 'bottom',
          ...(!!ratio && {
            top: 0,
            left: 0,
            position: 'absolute',
          }),
        }}
      />
    );

    return (
      <Box
        ref={ref}
        component="span"
        className="component-image"
        sx={{
          overflow: 'hidden',
          position: 'relative',
          verticalAlign: 'bottom',
          display: 'inline-block',
          ...(!!ratio && {
            width: 1,
          }),
          '& span.component-image-wrapper': {
            width: 1,
            height: 1,
            verticalAlign: 'bottom',
            backgroundSize: 'cover !important',
            ...(!!ratio && {
              pt: getRatio(ratio),
            }),
          },
          ...overlayStyles,
          ...sx,
        }}
        {...other}
      >
        {content}
      </Box>
    );
  }
);



export default Image;
