import React from 'react';
import { motion, AnimatePresence, type Easing } from 'framer-motion';
import { useGmailTransform } from '../Handlers/useGmailTransform';
import type { AnimationState } from '../Handlers/useGmailTransform';
import {
  GmailIconContainer,
  EmailThreadTransform,
  EmailContentPreview,
  gmailIconVariants,
  gmailLogoVariants,
  emailContentVariants,
  TransformContainer,
} from '../Styles/GmailIconStyles';

/**
 * Interface for GmailIcon component props
 */
interface GmailIconProps {
  /** Whether to start the transformation animation automatically */
  autoStart?: boolean;
  /** Delay before starting auto-start animation (in milliseconds) */
  autoStartDelay?: number;
  /** Callback when transformation completes */
  onTransformComplete?: () => void;
  /** Callback when disappearing animation completes */
  onDisappearComplete?: () => void;
  /** Callback when each animation phase completes */
  onPhaseComplete?: (phase: AnimationState) => void;
  /** Size of the Gmail icon in pixels */
  size?: number;
  /** Email content to display before transformation */
  emailContent?: string;
  /** Whether the component should be visible */
  isVisible?: boolean;
}

/**
 * GmailIcon component that transforms from email thread content to Gmail icon
 * @param autoStart - Whether to start the transformation automatically
 * @param autoStartDelay - Delay before starting auto-start animation
 * @param onTransformComplete - Callback when transformation completes
 * @param onDisappearComplete - Callback when disappearing animation completes
 * @param onPhaseComplete - Callback when each animation phase completes
 * @param size - Size of the Gmail icon in pixels
 * @param emailContent - Email content to display before transformation
 * @param isVisible - Whether the component should be visible
 */
const GmailIcon: React.FC<GmailIconProps> = ({
  autoStart = false,
  autoStartDelay = 0,
  onTransformComplete,
  onDisappearComplete,
  onPhaseComplete,
  size = 48,
  emailContent = 'Email thread content...',
  isVisible = true,
}) => {
  const {
    animationState,
    isAnimating,
    isIconVisible,
    isEmailContentVisible,
    startTransformation,
  } = useGmailTransform({
    onTransformComplete,
    onDisappearComplete,
    onPhaseComplete,
  });

  // Auto-start animation if requested
  React.useEffect(() => {
    if (autoStart && isVisible) {
      const timer = setTimeout(() => {
        startTransformation();
      }, autoStartDelay);

      return () => clearTimeout(timer);
    }
  }, [autoStart, autoStartDelay, isVisible, startTransformation]);

  // Get animation variant based on current state
  const getAnimationVariant = () => {
    switch (animationState) {
      case 'idle':
        return 'emailThread';
      case 'appearing':
        return 'emailThread';
      case 'shrinking':
        return 'shrinking';
      case 'transforming':
        return 'gmailIcon';
      case 'disappearing':
        return 'disappearing';
      default:
        return 'emailThread';
    }
  };

  // Get logo animation variant based on current state
  const getLogoVariant = () => {
    switch (animationState) {
      case 'idle':
      case 'appearing':
      case 'shrinking':
        return 'hidden';
      case 'transforming':
        return 'visible';
      case 'disappearing':
        return 'disappearing';
      default:
        return 'hidden';
    }
  };

  // Get email content animation variant based on current state
  const getEmailContentVariant = () => {
    switch (animationState) {
      case 'idle':
      case 'appearing':
        return 'visible';
      case 'shrinking':
        return 'fading';
      case 'transforming':
      case 'disappearing':
        return 'hidden';
      default:
        return 'visible';
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <TransformContainer $isActive={isAnimating}>
      <EmailThreadTransform
        as={motion.div}
        variants={gmailIconVariants}
        animate={getAnimationVariant()}
        initial="emailThread"
        $isTransforming={animationState === 'transforming' || animationState === 'disappearing'}
      >
        {/* Email content preview */}
        <AnimatePresence>
          {isEmailContentVisible && (
            <EmailContentPreview
              as={motion.div}
              variants={emailContentVariants}
              animate={getEmailContentVariant()}
              initial="visible"
              exit="hidden"
            >
              {emailContent}
            </EmailContentPreview>
          )}
        </AnimatePresence>

        {/* Gmail icon */}
        <AnimatePresence>
          {isIconVisible && (
            <GmailIconContainer
              as={motion.div}
              variants={gmailLogoVariants}
              animate={getLogoVariant()}
              initial="hidden"
              exit="disappearing"
              $size={size}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.img
                src="/gmai-icon.webp"
                alt="Gmail Icon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%'
                }}
                animate={{
                  opacity: animationState === 'disappearing' ? [1, 0.8, 0.6, 0.4, 0.2, 0] : 1,
                  scale: animationState === 'disappearing' ? [1, 0.9, 0.8, 0.6, 0.4, 0.2] : 1,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut" as Easing
                }}
              />
            </GmailIconContainer>
          )}
        </AnimatePresence>
      </EmailThreadTransform>
    </TransformContainer>
  );
};

export default GmailIcon;