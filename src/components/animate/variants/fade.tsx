import { varTranEnter, varTranExit } from './transition';

interface AnimationProps {
  distance?: number;
  durationIn?: number;
  durationOut?: number;
  easeIn?: string;
  easeOut?: string;
}

export const varFade = (props?: AnimationProps) => {
  const distance = props?.distance || 120;
  const durationIn = props?.durationIn||0.5;
  const durationOut = props?.durationOut;
  const easeIn = props?.easeIn|| [0.43, 0.13, 0.23, 0.5];; // Curva de easing "ease-in"  ;
  const easeOut = props?.easeOut;


  return {
    // IN
    in: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: varTranEnter },
      exit: { opacity: 1, transition: varTranExit },
    },
    inUp: {
      initial: { y: distance, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: 0,
        opacity: 0,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inUpWhileView: {
      initial: { y: distance, opacity: 1 },
      whileInView: {
        y: 0,
        opacity: 1,
        transition: { duration:0.5  , ease: [0.43, 0.13, 0.23, 0.5]},
      }
    },
    inDown: {
      initial: { y: -distance, opacity: 0 },
      animate: {
        y: 0,
        opacity: 1,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: -distance,
        opacity: 0,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inLeft: {
      initial: { x: -distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: -distance,
        opacity: 0,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inRight: {
      initial: { x: distance, opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: distance,
        opacity: 0,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },

    // OUT
    out: {
      initial: { opacity: 1 },
      animate: { opacity: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { opacity: 1, transition: varTranExit({ durationOut, easeOut }) },
    },
    outUp: {
      initial: { y: 0, opacity: 1 },
      animate: {
        y: -distance,
        opacity: 0,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: 0,
        opacity: 1,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    outDown: {
      initial: { y: 0, opacity: 1 },
      animate: {
        y: distance,
        opacity: 0,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: 0,
        opacity: 1,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    outLeft: {
      initial: { x: 0, opacity: 1 },
      animate: {
        x: -distance,
        opacity: 0,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: 0,
        opacity: 1,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    outRight: {
      initial: { x: 0, opacity: 1 },
      animate: {
        x: distance,
        opacity: 0,
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: 0,
        opacity: 1,
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
  };
};
